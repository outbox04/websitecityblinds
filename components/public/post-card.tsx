import Link from "next/link";
import type { Post } from "@/types/post";

// Post card previews SEO content for public knowledge pages.
export function PostCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
      <img src={post.featuredImage} alt={post.imageAlt} className="h-48 w-full object-cover" />
      <div className="p-5">
        <div className="mb-2 text-xs font-bold uppercase text-city-700">{post.categorySlug}</div>
        <h3 className="text-xl font-bold text-city-900">{post.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
        <Link href={`/tin-tuc/${post.slug}`} className="mt-4 inline-flex font-bold text-cta">
          Doc bai viet
        </Link>
      </div>
    </article>
  );
}
