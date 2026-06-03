import type { Post } from "@/types/post";
import { PostCard } from "@/components/public/post-card";
import { SectionHeading } from "@/components/public/section-heading";

export function BlogSection({ posts }: { posts: Post[] }) {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Tin tức / kiến thức"
          title="Nội dung hỗ trợ đại lý tư vấn"
          description="Khu vực SEO được đặt cuối trang để tiếp tục giữ chân người đọc và xây dựng chuyên môn."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  );
}
