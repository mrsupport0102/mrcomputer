"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { Product, CartItem } from "@/lib/types";

interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "mrcomputer-cart";
const CART_EVENT = "mrcomputer-cart-update";
const EMPTY_CART: CartItem[] = [];

let cachedRaw: string | null = null;
let cachedItems: CartItem[] = EMPTY_CART;

function readCart(): CartItem[] {
  if (typeof window === "undefined") return EMPTY_CART;

  try {
    const stored = localStorage.getItem(STORAGE_KEY) ?? "";
    if (stored === cachedRaw) return cachedItems;

    cachedRaw = stored;
    cachedItems = stored ? (JSON.parse(stored) as CartItem[]) : EMPTY_CART;
    return cachedItems;
  } catch {
    cachedRaw = "";
    cachedItems = EMPTY_CART;
    return EMPTY_CART;
  }
}

function writeCart(items: CartItem[]) {
  const serialized = JSON.stringify(items);
  cachedRaw = serialized;
  cachedItems = items;
  localStorage.setItem(STORAGE_KEY, serialized);
  window.dispatchEvent(new Event(CART_EVENT));
}

function subscribe(callback: () => void) {
  const handler = () => {
    readCart();
    callback();
  };
  window.addEventListener(CART_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(CART_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price;
}

function updateCart(updater: (items: CartItem[]) => CartItem[]) {
  writeCart(updater(readCart()));
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, readCart, () => EMPTY_CART);

  const addItem = useCallback((product: Product, quantity = 1) => {
    updateCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    updateCart((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    updateCart((prev) => {
      if (quantity <= 0) {
        return prev.filter((i) => i.product.id !== productId);
      }
      return prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      );
    });
  }, []);

  const clearCart = useCallback(() => writeCart([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce(
        (sum, i) => sum + getEffectivePrice(i.product) * i.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
