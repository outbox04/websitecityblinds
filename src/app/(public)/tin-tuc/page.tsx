import type { Metadata } from "next";
import { PostCard } from "@/components/public/post-card";
import { SectionHeading } from "@/components/public/section-heading";
import { getPosts } from "@/lib/supabase/queries";

export const metadata: Metadata = { title: "Tin tức" };

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tin tức / kiến thức"
          title="Kiến thức rèm và bán hàng B2B"
          description="Nội dung SEO hỗ trợ đại lý, showroom và nhà thầu tư vấn sản phẩm tốt hơn."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  );
}
