import { AdminNav } from "@/components/admin/AdminNav";

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">{children}</div>
    </div>
  );
}
