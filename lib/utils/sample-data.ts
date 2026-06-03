import type { Category } from "@/types/category";
import type { Post } from "@/types/post";
import type { Product } from "@/types/product";

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

// Seed content lets public pages render before Supabase data is connected.
export const categories: Category[] = [
  { id: "cat-rainbow", name: "Rèm cầu vồng", slug: "rem-cau-vong", description: "Dòng rèm hiện đại cho showroom và căn hộ.", isActive: true },
  { id: "cat-roller", name: "Rèm cuốn", slug: "rem-cuon", description: "Catalogue rèm cuốn văn phòng, nhà phố, dự án.", isActive: true },
  { id: "cat-honeycomb", name: "Rèm tổ ong", slug: "rem-to-ong", description: "Giải pháp cách nhiệt và thẩm mỹ cao.", isActive: true },
  { id: "cat-pvc", name: "Rèm nhựa PVC", slug: "rem-nhua-pvc", description: "Rèm bền, dễ vệ sinh cho khu vực đặc thù.", isActive: true },
  { id: "cat-awning", name: "Bạt che nắng", slug: "bat-che-nang", description: "Hệ bạt che nắng cho công trình và mặt tiền.", isActive: true },
  { id: "cat-motor", name: "Động cơ rèm tự động", slug: "dong-co-rem-tu-dong", description: "Động cơ và phụ kiện điều khiển rèm thông minh.", isActive: true }
];

export const products: Product[] = [
  {
    id: "prod-01",
    name: "City Rainbow Premium",
    slug: "city-rainbow-premium",
    code: "CB-RB-001",
    categorySlug: "rem-cau-vong",
    shortDescription: "Rèm cầu vồng hai lớp vải, phù hợp đại lý trung và cao cấp.",
    description: "Mẫu rèm cầu vồng chủ lực cho hệ thống đại lý City Blinds, tập trung vào chất vải ổn định, màu sắc dễ bán và quy cách đóng gói rõ ràng.",
    coverImage: image("photo-1618221118493-9cfa1a1c00da"),
    gallery: [image("photo-1616046229478-9901c5536a45"), image("photo-1616486338812-3dadae4b4ace")],
    specs: { "Khổ vải": "2.8m", "Chất liệu": "Polyester", "Bảo hành": "24 tháng", "Lắp đặt": "Trần hoặc tường" },
    applications: ["Căn hộ mẫu", "Showroom nội thất", "Phòng khách", "Phòng ngủ"],
    fabricColors: [
      { id: "f-01", name: "Trắng sữa", hex: "#f4efe6" },
      { id: "f-02", name: "Xám bạc", hex: "#b9c0c4" },
      { id: "f-03", name: "Nâu cafe", hex: "#7a5c45" }
    ],
    boxColors: [
      { id: "b-01", name: "Trắng", hex: "#ffffff" },
      { id: "b-02", name: "Ghi sáng", hex: "#9ca3af" }
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
    shortDescription: "Rèm cuốn chống nắng cho văn phòng, thi công nhanh theo dự án.",
    description: "Dòng rèm cuốn dễ tư vấn cho nhà thầu và đơn vị nội thất, tối ưu giá trị sử dụng và tiến độ giao hàng.",
    coverImage: image("photo-1600607687939-ce8a6c25118c"),
    gallery: [image("photo-1600566753190-17f0baa2a6c3"), image("photo-1600210492486-724fe5c67fb0")],
    specs: { "Khổ vải": "3.0m", "Độ cản sáng": "5%", "Chất liệu": "Polyester phủ PVC", "Bảo hành": "18 tháng" },
    applications: ["Văn phòng", "Phòng họp", "Trường học", "Nhà phố"],
    fabricColors: [
      { id: "f-04", name: "Kem", hex: "#e8dcc8" },
      { id: "f-05", name: "Xám đậm", hex: "#4b5563" }
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
    shortDescription: "Rèm tổ ong cách nhiệt, phù hợp phân khúc căn hộ và biệt thự.",
    description: "Thiết kế cấu trúc tổ ong giúp cân bằng ánh sáng, riêng tư và khả năng cách nhiệt trong không gian cao cấp.",
    coverImage: image("photo-1600585154363-67eb9e2e2099"),
    gallery: [image("photo-1600607687644-aac4c3eac7f4"), image("photo-1600566752355-35792bedcfea")],
    specs: { "Độ dày": "25mm", "Kiểu vận hành": "Dây kéo hoặc động cơ", "Bảo hành": "24 tháng" },
    applications: ["Căn hộ cao cấp", "Biệt thự", "Phòng ngủ", "Phòng đọc sách"],
    fabricColors: [
      { id: "f-06", name: "Trắng ngọc", hex: "#eef4f2" },
      { id: "f-07", name: "Xanh khói", hex: "#8aa9ad" }
    ],
    boxColors: [{ id: "b-03", name: "Nhôm trắng", hex: "#f8fafc" }],
    isFeatured: true,
    isActive: true
  }
];

export const posts: Post[] = [
  {
    id: "post-01",
    title: "Cách chọn dòng rèm phù hợp cho đại lý nội thất",
    slug: "cach-chon-dong-rem-phu-hop-cho-dai-ly-noi-that",
    categorySlug: "kien-thuc-rem",
    excerpt: "Khung danh mục giúp đại lý xây dựng catalogue rèm dễ tư vấn và dễ bán hơn.",
    contentHtml: "<h2>Bắt đầu từ nhu cầu khách hàng</h2><p>Đại lý nên chia sản phẩm theo ứng dụng, ngân sách và phong cách nội thất để rút ngắn thời gian tư vấn.</p><h3>Ưu tiên mẫu bán chạy</h3><p>City Blinds khuyến nghị duy trì bộ màu trung tính trước, sau đó mở rộng theo dự án.</p>",
    featuredImage: image("photo-1600566753151-384129cf4e3e"),
    imageAlt: "Không gian showroom rèm hiện đại",
    ogImage: image("photo-1600566753151-384129cf4e3e"),
    seoTitle: "Cách chọn rèm cho đại lý nội thất | City Blinds",
    metaDescription: "Hướng dẫn xây dựng catalogue rèm B2B cho đại lý, showroom và nhà thầu.",
    focusKeyword: "catalogue rem B2B",
    schemaType: "Article",
    faq: [{ question: "Đại lý nên bắt đầu với sản phẩm nào?", answer: "Nên bắt đầu với rèm cầu vồng, rèm cuốn và rèm tổ ong vì dễ tư vấn và có nhu cầu ổn định." }],
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
