import { createClient } from "@supabase/supabase-js";
import type { Category } from "@/types/category";
import type { Post } from "@/types/post";
import type { Product, ProductColor } from "@/types/product";
import { categories as fallbackCategories, posts as fallbackPosts, products as fallbackProducts } from "@/lib/utils/sample-data";

function createPublicDataClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

function mapCategory(row: any): Category {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description || "",
    isActive: Boolean(row.is_active)
  };
}

function mapColor(row: any): ProductColor {
  return {
    id: row.id,
    name: row.name,
    hex: row.hex,
    imageUrl: row.image_url || undefined
  };
}

function mapProduct(row: any, fabricColors: ProductColor[] = [], boxColors: ProductColor[] = []): Product {
  const category = Array.isArray(row.categories) ? row.categories[0] : row.categories;

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    code: row.code,
    categorySlug: category?.slug || row.category_slug || "",
    categoryName: category?.name,
    shortDescription: row.short_description || "",
    description: row.description || "",
    coverImage: row.cover_image || "/images/city-blinds-logo.png",
    gallery: row.gallery || [],
    specs: row.specs || {},
    applications: row.applications || [],
    fabricColors,
    boxColors,
    isFeatured: Boolean(row.is_featured),
    isActive: Boolean(row.is_active)
  };
}

function mapPost(row: any): Post {
  const category = Array.isArray(row.post_categories) ? row.post_categories[0] : row.post_categories;

  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    categorySlug: category?.slug || row.category_slug || "",
    categoryName: category?.name,
    excerpt: row.excerpt || "",
    contentHtml: row.content_html || "",
    featuredImage: row.featured_image || "/images/city-blinds-logo.png",
    imageAlt: row.image_alt || row.title,
    ogImage: row.og_image || row.featured_image || "/images/city-blinds-logo.png",
    seoTitle: row.seo_title || row.title,
    metaDescription: row.meta_description || row.excerpt || "",
    focusKeyword: row.focus_keyword || "",
    canonicalUrl: row.canonical_url || undefined,
    schemaType: row.schema_type || "Article",
    faq: row.faq || [],
    author: row.author || "City Blinds",
    publishedAt: row.published_at || row.created_at,
    status: row.status,
    relatedProductSlugs: [],
    relatedCategorySlugs: []
  };
}

async function getProductColors(productIds: string[]) {
  const supabase = createPublicDataClient();
  if (!supabase || productIds.length === 0) return { fabric: new Map<string, ProductColor[]>(), box: new Map<string, ProductColor[]>() };

  const [fabricResult, boxResult] = await Promise.all([
    supabase.from("product_fabric_colors").select("*").in("product_id", productIds).order("sort_order"),
    supabase.from("product_box_colors").select("*").in("product_id", productIds).order("sort_order")
  ]);

  const fabric = new Map<string, ProductColor[]>();
  const box = new Map<string, ProductColor[]>();

  for (const row of fabricResult.data || []) {
    fabric.set(row.product_id, [...(fabric.get(row.product_id) || []), mapColor(row)]);
  }

  for (const row of boxResult.data || []) {
    box.set(row.product_id, [...(box.get(row.product_id) || []), mapColor(row)]);
  }

  return { fabric, box };
}

export async function getCategories() {
  const supabase = createPublicDataClient();
  if (!supabase) return fallbackCategories;

  const { data, error } = await supabase.from("categories").select("*").eq("is_active", true).order("sort_order");
  if (error || !data) return fallbackCategories;
  return data.map(mapCategory);
}

export async function getProducts(options: { categorySlug?: string; featuredOnly?: boolean } = {}) {
  const supabase = createPublicDataClient();
  if (!supabase) {
    return fallbackProducts.filter((product) => {
      if (options.featuredOnly && !product.isFeatured) return false;
      if (options.categorySlug && product.categorySlug !== options.categorySlug) return false;
      return product.isActive;
    });
  }

  let query = supabase
    .from("products")
    .select("*, categories!inner(name, slug)")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (options.featuredOnly) query = query.eq("is_featured", true);
  if (options.categorySlug) query = query.eq("categories.slug", options.categorySlug);

  const { data, error } = await query;
  if (error || !data) return getProductsFromFallback(options);

  const colors = await getProductColors(data.map((row) => row.id));
  return data.map((row) => mapProduct(row, colors.fabric.get(row.id) || [], colors.box.get(row.id) || []));
}

function getProductsFromFallback(options: { categorySlug?: string; featuredOnly?: boolean }) {
  return fallbackProducts.filter((product) => {
    if (options.featuredOnly && !product.isFeatured) return false;
    if (options.categorySlug && product.categorySlug !== options.categorySlug) return false;
    return product.isActive;
  });
}

export async function getProductBySlug(slug: string) {
  const supabase = createPublicDataClient();
  if (!supabase) return fallbackProducts.find((product) => product.slug === slug && product.isActive) || null;

  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name, slug)")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error || !data) return fallbackProducts.find((product) => product.slug === slug && product.isActive) || null;

  const colors = await getProductColors([data.id]);
  return mapProduct(data, colors.fabric.get(data.id) || [], colors.box.get(data.id) || []);
}

export async function getPosts() {
  const supabase = createPublicDataClient();
  if (!supabase) return fallbackPosts.filter((post) => post.status === "published");

  const { data, error } = await supabase
    .from("posts")
    .select("*, post_categories(name, slug)")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) return fallbackPosts.filter((post) => post.status === "published");
  return data.map(mapPost);
}

export async function getPostBySlug(slug: string) {
  const supabase = createPublicDataClient();
  if (!supabase) return fallbackPosts.find((post) => post.slug === slug && post.status === "published") || null;

  const { data, error } = await supabase
    .from("posts")
    .select("*, post_categories(name, slug)")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error || !data) return fallbackPosts.find((post) => post.slug === slug && post.status === "published") || null;
  return mapPost(data);
}

export async function getDashboardStats() {
  const supabase = createPublicDataClient();
  if (!supabase) {
    return {
      products: fallbackProducts.length,
      categories: fallbackCategories.length,
      posts: fallbackPosts.length,
      partners: 0
    };
  }

  const [products, categories, posts, partners] = await Promise.all([
    supabase.from("products").select("id", { count: "exact", head: true }).eq("is_active", true),
    supabase.from("categories").select("id", { count: "exact", head: true }).eq("is_active", true),
    supabase.from("posts").select("id", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("partner_registrations").select("id", { count: "exact", head: true })
  ]);

  return {
    products: products.count || 0,
    categories: categories.count || 0,
    posts: posts.count || 0,
    partners: partners.count || 0
  };
}

export async function getPartnerRegistrations() {
  const supabase = createPublicDataClient();
  if (!supabase) return [];

  const { data } = await supabase.from("partner_registrations").select("*").order("created_at", { ascending: false }).limit(100);
  return data || [];
}
