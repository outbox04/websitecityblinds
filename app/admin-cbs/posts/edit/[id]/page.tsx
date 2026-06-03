import { PostAdminForm } from "../../post-form";

// Edit SEO post by id when connected to database.
export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  return <PostAdminForm mode="edit" id={(await params).id} />;
}
