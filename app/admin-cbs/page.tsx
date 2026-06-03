import { redirect } from "next/navigation";

// Base admin URL moves authenticated users to dashboard after middleware approval.
export default function AdminIndexPage() {
  redirect("/admin-cbs/dashboard");
}
