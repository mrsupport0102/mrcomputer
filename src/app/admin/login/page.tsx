import { Suspense } from "react";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata = {
  title: "Admin login",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green">MR Computer</p>
          <h1 className="mt-2 text-3xl font-bold text-navy">Admin login</h1>
          <p className="mt-2 text-sm text-muted">
            Log ind for at oprette og redigere computerpakker.
          </p>
        </div>
        <Suspense fallback={<p className="text-center text-muted">Indlæser…</p>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
