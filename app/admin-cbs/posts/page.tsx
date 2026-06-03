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
        <h1 className="text-2xl font-bold text-city-900">Quan ly bai viet SEO</h1>
        <ButtonLink href="/admin-cbs/posts/create">Them bai viet</ButtonLink>
      </div>
      <AdminCard title="Bai viet">
        {posts.map((post) => <div key={post.id} className="flex justify-between border-b py-3"><span className="font-semibold">{post.title}</span><Link className="font-bold text-cta" href={`/admin-cbs/posts/edit/${post.id}`}>Sua</Link></div>)}
      </AdminCard>
    </AdminShell>
  );
}
