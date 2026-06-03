import Link from "next/link";
import { AdminCard } from "@/components/admin/Card";
import { AdminShell } from "@/components/admin/AdminLayout";
import { DataTable } from "@/components/admin/DataTable";
import { ButtonLink } from "@/components/ui/Button";
import { getPosts } from "@/lib/supabase/queries";

export default async function PostsAdminPage() {
  const posts = await getPosts();

  return (
    <AdminShell>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-city-900">Quản lý bài viết SEO</h1>
        <ButtonLink href="/admin-cbs/posts/create">Thêm bài viết</ButtonLink>
      </div>
      <AdminCard title="Bài viết">
        <DataTable
          rows={posts}
          columns={[
            { key: "title", header: "Tiêu đề", cell: (post) => <span className="font-semibold">{post.title}</span> },
            { key: "category", header: "Danh mục", cell: (post) => post.categoryName || post.categorySlug },
            { key: "status", header: "Trạng thái", cell: (post) => post.status },
            { key: "actions", header: "", cell: (post) => <Link className="font-bold text-cta" href={`/admin-cbs/posts/edit/${post.id}`}>Sửa</Link> }
          ]}
        />
      </AdminCard>
    </AdminShell>
  );
}
