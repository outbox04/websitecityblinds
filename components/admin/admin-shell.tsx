import Link from "next/link";
import { LayoutDashboard, Package, Tags, Newspaper, Image, Users, Settings, ClipboardList } from "lucide-react";

const items = [
  { href: "/admin-cbs/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin-cbs/products", label: "Sản phẩm", icon: Package },
  { href: "/admin-cbs/categories", label: "Danh mục", icon: Tags },
  { href: "/admin-cbs/posts", label: "Bài viết SEO", icon: Newspaper },
  { href: "/admin-cbs/media", label: "Media", icon: Image },
  { href: "/admin-cbs/partners", label: "CRM đối tác", icon: Users },
  { href: "/admin-cbs/users", label: "User", icon: Users },
  { href: "/admin-cbs/settings", label: "Cài đặt", icon: Settings },
  { href: "/admin-cbs/activity-logs", label: "Nhật ký", icon: ClipboardList }
];

// Admin shell is reachable only behind middleware and is not linked from public pages.
export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-city-900 bg-city-900 p-4 text-white lg:block">
        <img src="/images/city-blinds-logo.png" alt="City Blinds Admin" className="mb-6 h-14 w-auto" />
        <nav className="grid gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold text-city-100 hover:bg-city-700 hover:text-white">
                <Icon size={18} /> {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="lg:pl-64">
        <div className="border-b border-slate-200 bg-white px-5 py-4">
          <div className="font-bold text-city-900">Quản trị nội dung và CRM</div>
        </div>
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
