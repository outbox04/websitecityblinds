"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

// Login form authenticates existing Supabase Auth users only; no registration UI exists.
export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(formData: FormData) {
    setLoading(true);
    setError("");

    try {
      const supabase = createSupabaseBrowserClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: String(formData.get("email")),
        password: String(formData.get("password"))
      });

      if (authError) {
        setError("Email hoac mat khau khong dung.");
        setLoading(false);
        return;
      }

      router.replace(searchParams.get("next") || "/admin-cbs/dashboard");
      router.refresh();
    } catch {
      setError("Chua cau hinh Supabase ENV cho dang nhap admin.");
      setLoading(false);
    }
  }

  return (
    <form action={submit} className="grid gap-4 rounded-md border border-slate-200 bg-white p-6 shadow-soft">
      <label className="grid gap-1 text-sm font-semibold">
        Email
        <input name="email" type="email" required className="min-h-11 rounded-md border border-slate-300 px-3 outline-city-600" />
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        Mat khau
        <input name="password" type="password" required className="min-h-11 rounded-md border border-slate-300 px-3 outline-city-600" />
      </label>
      <Button type="submit" variant="secondary" disabled={loading}>{loading ? "Dang dang nhap..." : "Dang nhap"}</Button>
      {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
      <p className="text-xs leading-5 text-slate-500">Tai khoan admin duoc quan ly trong Supabase Auth. Website khong cho dang ky admin tu do.</p>
    </form>
  );
}
