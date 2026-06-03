import { ProductAdminForm } from "../../product-form";

// Edit page will load product by id once connected to Supabase.
export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  return <ProductAdminForm mode="edit" id={(await params).id} />;
}
