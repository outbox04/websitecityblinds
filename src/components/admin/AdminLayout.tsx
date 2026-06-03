import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <AdminSidebar />
      <main className="lg:pl-64">
        <AdminHeader />
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
