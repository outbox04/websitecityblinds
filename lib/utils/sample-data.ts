import type { Category } from "@/types/category";
import type { Post } from "@/types/post";
import type { Product } from "@/types/product";

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

// Seed content lets public pages render before Supabase data is connected.
export const categories: Category[] = [
  { id: "cat-rainbow", name: "Rem cau vong", slug: "rem-cau-vong", description: "Dong rem hien dai cho showroom va can ho.", isActive: true },
  { id: "cat-roller", name: "Rem cuon", slug: "rem-cuon", description: "Catalogue rem cuon van phong, nha pho, du an.", isActive: true },
  { id: "cat-honeycomb", name: "Rem to ong", slug: "rem-to-ong", description: "Giai phap cach nhiet va tham my cao.", isActive: true },
  { id: "cat-pvc", name: "Rem nhua PVC", slug: "rem-nhua-pvc", description: "Rem ben, de ve sinh cho khu vuc dac thu.", isActive: true },
  { id: "cat-awning", name: "Bat che nang", slug: "bat-che-nang", description: "He bat che nang cho cong trinh va mat tien.", isActive: true },
  { id: "cat-motor", name: "Dong co rem tu dong", slug: "dong-co-rem-tu-dong", description: "Dong co va phu kien dieu khien rem thong minh.", isActive: true }
];

export const products: Product[] = [
  {
    id: "prod-01",
    name: "City Rainbow Premium",
    slug: "city-rainbow-premium",
    code: "CB-RB-001",
    categorySlug: "rem-cau-vong",
    shortDescription: "Rem cau vong hai lop vai, phu hop dai ly trung va cao cap.",
    description: "Mau rem cau vong chu luc cho he thong dai ly City Blinds, tap trung vao chat vai on dinh, mau sac de ban va quy cach dong goi ro rang.",
    coverImage: image("photo-1618221118493-9cfa1a1c00da"),
    gallery: [image("photo-1616046229478-9901c5536a45"), image("photo-1616486338812-3dadae4b4ace")],
    specs: { "Kho vai": "2.8m", "Chat lieu": "Polyester", "Bao hanh": "24 thang", "Lap dat": "Tran hoac tuong" },
    applications: ["Can ho mau", "Showroom noi that", "Phong khach", "Phong ngu"],
    fabricColors: [
      { id: "f-01", name: "Trang sua", hex: "#f4efe6" },
      { id: "f-02", name: "Xam bac", hex: "#b9c0c4" },
      { id: "f-03", name: "Nau cafe", hex: "#7a5c45" }
    ],
    boxColors: [
      { id: "b-01", name: "Trang", hex: "#ffffff" },
      { id: "b-02", name: "Ghi", hex: "#9ca3af" }
    ],
    isFeatured: true,
    isActive: true
  },
  {
    id: "prod-02",
    name: "City Roller Office",
    slug: "city-roller-office",
    code: "CB-RC-010",
    categorySlug: "rem-cuon",
    shortDescription: "Rem cuon chong nang cho van phong, thi cong nhanh theo du an.",
    description: "Dong rem cuon de tu van cho nha thau va don vi noi that, toi uu gia tri su dung va tien do giao hang.",
    coverImage: image("photo-1600607687939-ce8a6c25118c"),
    gallery: [image("photo-1600566753190-17f0baa2a6c3"), image("photo-1600210492486-724fe5c67fb0")],
    specs: { "Kho vai": "3.0m", "Do can sang": "5%", "Chat lieu": "Polyester phu PVC", "Bao hanh": "18 thang" },
    applications: ["Van phong", "Phong hop", "Truong hoc", "Nha pho"],
    fabricColors: [
      { id: "f-04", name: "Kem", hex: "#e8dcc8" },
      { id: "f-05", name: "Xam dam", hex: "#4b5563" }
    ],
    isFeatured: true,
    isActive: true
  },
  {
    id: "prod-03",
    name: "City Honeycomb Energy",
    slug: "city-honeycomb-energy",
    code: "CB-TO-021",
    categorySlug: "rem-to-ong",
    shortDescription: "Rem to ong cach nhiet, phu hop phan khuc can ho va biet thu.",
    description: "Thiet ke cau truc to ong giup can bang anh sang, rieng tu va kha nang cach nhiet trong khong gian cao cap.",
    coverImage: image("photo-1600585154363-67eb9e2e2099"),
    gallery: [image("photo-1600607687644-aac4c3eac7f4"), image("photo-1600566752355-35792bedcfea")],
    specs: { "Do day": "25mm", "Kieu van hanh": "Day keo hoac dong co", "Bao hanh": "24 thang" },
    applications: ["Can ho cao cap", "Biet thu", "Phong ngu", "Phong doc sach"],
    fabricColors: [
      { id: "f-06", name: "Trang ngoc", hex: "#eef4f2" },
      { id: "f-07", name: "Xanh khoi", hex: "#8aa9ad" }
    ],
    boxColors: [{ id: "b-03", name: "Nhom trang", hex: "#f8fafc" }],
    isFeatured: true,
    isActive: true
  }
];

export const posts: Post[] = [
  {
    id: "post-01",
    title: "Cach chon dong rem phu hop cho dai ly noi that",
    slug: "cach-chon-dong-rem-phu-hop-cho-dai-ly-noi-that",
    categorySlug: "kien-thuc-rem",
    excerpt: "Khung danh muc giup dai ly xay dung catalogue rem de tu van va de ban hon.",
    contentHtml: "<h2>Bat dau tu nhu cau khach hang</h2><p>Dai ly nen chia san pham theo ung dung, ngan sach va phong cach noi that de rut ngan thoi gian tu van.</p><h3>Uu tien mau ban chay</h3><p>City Blinds khuyen nghi duy tri bo mau trung tinh truoc, sau do mo rong theo du an.</p>",
    featuredImage: image("photo-1600566753151-384129cf4e3e"),
    imageAlt: "Khong gian showroom rem hien dai",
    ogImage: image("photo-1600566753151-384129cf4e3e"),
    seoTitle: "Cach chon rem cho dai ly noi that | City Blinds",
    metaDescription: "Huong dan xay dung catalogue rem B2B cho dai ly, showroom va nha thau.",
    focusKeyword: "catalogue rem B2B",
    schemaType: "Article",
    faq: [{ question: "Dai ly nen bat dau voi san pham nao?", answer: "Nen bat dau voi rem cau vong, rem cuon va rem to ong vi de tu van va co nhu cau on dinh." }],
    author: "City Blinds",
    publishedAt: "2026-01-15",
    status: "published",
    relatedProductSlugs: ["city-rainbow-premium", "city-roller-office"],
    relatedCategorySlugs: ["rem-cau-vong", "rem-cuon"]
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug && product.isActive);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug && post.status === "published");
}
