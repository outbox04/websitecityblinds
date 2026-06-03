import { ProductAdminForm } from "../product-form";

// Create page exposes all product fields including fabric and box color model.
export default function CreateProductPage() {
  return <ProductAdminForm mode="create" />;
}
