import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { sanitizeHtml } from "@/lib/security/sanitize";
import { getPostBySlug, getPosts } from "@/lib/supabase/queries";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  return {
    title: post?.seoTitle || post?.title || "Tin tức",
    description: post?.metaDescription,
    alternates: post?.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
    openGraph: post ? { title: post.seoTitle, description: post.metaDescription, images: [post.ogImage] } : undefined
  };
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <article className="section-pad bg-white">
      <JsonLd data={{ "@context": "https://schema.org", "@type": post.schemaType, headline: post.title, author: post.author, datePublished: post.publishedAt }} />
      <div className="container-page max-w-3xl">
        <div className="mb-3 text-sm font-bold uppercase text-city-700">{post.categoryName || post.categorySlug}</div>
        <h1 className="text-4xl font-bold leading-tight text-city-900">{post.title}</h1>
        <p className="mt-4 text-slate-600">{post.excerpt}</p>
        <img src={post.featuredImage} alt={post.imageAlt} className="my-8 aspect-video w-full rounded-md object-cover" />
        <div className="prose max-w-none prose-headings:text-city-900 prose-a:text-cta" dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.contentHtml) }} />
        {post.faq.length ? (
          <section className="mt-10 rounded-md bg-city-50 p-5">
            <h2 className="mb-4 text-2xl font-bold text-city-900">FAQ</h2>
            {post.faq.map((item) => (
              <div key={item.question} className="border-b border-city-100 py-3 last:border-b-0">
                <h3 className="font-bold text-city-900">{item.question}</h3>
                <p className="mt-1 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </section>
        ) : null}
      </div>
    </article>
  );
}
