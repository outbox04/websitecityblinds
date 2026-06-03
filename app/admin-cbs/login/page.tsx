import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Dang nhap Admin",
  robots: { index: false, follow: false }
};

// WordPress-style login screen: single admin entry point with no self-registration.
export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 px-4">
      <section className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-md bg-city-700 text-xl font-bold text-white">CB</div>
          <h1 className="text-2xl font-bold text-city-900">City Blinds Admin</h1>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}
