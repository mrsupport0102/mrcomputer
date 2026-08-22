export type ProductCategory = "pakker" | "ydelser" | "tilbehor";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  salePrice?: number;
  category: ProductCategory;
  badge?: string;
  featured?: boolean;
  specs: string[];
  included: string[];
  supportMonths: number;
  image: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  specifications: string;
  retailer: "Proshop" | "Elgiganten" | "Fcomputer" | "CS Megastore";
  sourcePrice: number;
  sourceUrl: string;
  checkedAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
