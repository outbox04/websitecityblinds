import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Đăng nhập Admin",
  robots: { index: false, follow: false }
};

// WordPress-style login screen: single admin entry point with no self-registration.
export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-city-900 px-4">
      <section className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <img src="/images/city-blinds-logo.png" alt="City Blinds Admin" className="mx-auto mb-4 h-16 w-auto" />
          <h1 className="text-2xl font-bold text-city-900">City Blinds Admin</h1>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}
