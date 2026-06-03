// Profile role controls access to admin CRUD features through RLS and route guards.
export type UserRole = "admin" | "editor" | "viewer";

export type Profile = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  isActive: boolean;
};
