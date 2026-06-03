import type { Metadata } from "next";
import { PostCard } from "@/components/public/post-card";
import { SectionHeading } from "@/components/public/section-heading";
import { posts } from "@/lib/utils/sample-data";

export const metadata: Metadata = { title: "Tin tuc" };

// News listing only exposes published posts.
export default function NewsPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading eyebrow="Tin tuc / kien thuc" title="Kien thuc rem va ban hang B2B" description="Noi dung SEO ho tro dai ly, showroom va nha thau tu van san pham tot hon." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  );
}
