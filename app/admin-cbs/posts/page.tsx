import Link from "next/link";
import { AdminCard } from "@/components/admin/admin-card";
import { AdminShell } from "@/components/admin/admin-shell";
import { ButtonLink } from "@/components/ui/button";
import { posts } from "@/lib/utils/sample-data";

// SEO CMS listing manages posts with metadata, schema, FAQ and relations.
export default function PostsAdminPage() {
  return (
    <AdminShell>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-city-900">Quản lý bài viết SEO</h1>
        <ButtonLink href="/admin-cbs/posts/create">Thêm bài viết</ButtonLink>
      </div>
      <AdminCard title="Bài viết">
        {posts.map((post) => (
          <div key={post.id} className="flex justify-between border-b py-3">
            <span className="font-semibold">{post.title}</span>
            <Link className="font-bold text-cta" href={`/admin-cbs/posts/edit/${post.id}`}>
              Sửa
            </Link>
          </div>
        ))}
      </AdminCard>
    </AdminShell>
  );
}
