"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/utils/sample-data";

// Client form collects partner leads; the API route performs final validation and persistence.
export function PartnerRegistrationForm({ formLocation = "public" }: { formLocation?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(formData: FormData) {
    setStatus("submitting");
    setMessage("");

    const selectedProducts = formData.getAll("interestedProducts").map(String);
    const payload = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      companyName: formData.get("companyName"),
      province: formData.get("province"),
      businessModel: formData.get("businessModel"),
      interestedProducts: selectedProducts,
      note: formData.get("note"),
      sourcePage: window.location.pathname,
      formLocation,
      utmSource: new URLSearchParams(window.location.search).get("utm_source") || undefined,
      utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
      utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
      referrerUrl: document.referrer || undefined,
      currentUrl: window.location.href,
      deviceType: window.innerWidth < 768 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop"
    };

    const response = await fetch("/api/partner-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setStatus("success");
      setMessage("Cảm ơn bạn. Đội ngũ City Blinds sẽ liên hệ để trao đổi hợp tác.");
    } else {
      setStatus("error");
      setMessage("Thông tin chưa hợp lệ hoặc hệ thống đang bận. Vui lòng thử lại.");
    }
  }

  return (
    <form action={submit} className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <Field name="fullName" label="Họ và tên" required />
        <Field name="phone" label="Số điện thoại" required />
        <Field name="email" label="Email" type="email" />
        <Field name="companyName" label="Tên cửa hàng / công ty" required />
        <Field name="province" label="Tỉnh thành" required />
        <Field name="businessModel" label="Mô hình kinh doanh" required />
      </div>
      <fieldset className="grid gap-3">
        <legend className="text-sm font-bold text-city-900">Sản phẩm quan tâm</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {categories.map((category) => (
            <label key={category.slug} className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm">
              <input type="checkbox" name="interestedProducts" value={category.name} />
              {category.name}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-1 text-sm font-semibold text-slate-700">
        Ghi chú
        <textarea name="note" rows={4} className="rounded-md border border-slate-300 px-3 py-2 outline-city-600" />
      </label>
      <Button type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Đang gửi..." : "Trở thành đối tác City Blinds"}</Button>
      {message ? <p className={status === "success" ? "text-sm font-semibold text-city-700" : "text-sm font-semibold text-red-600"}>{message}</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-1 text-sm font-semibold text-slate-700">
      {label}
      <input name={name} type={type} required={required} className="min-h-11 rounded-md border border-slate-300 px-3 py-2 outline-city-600" />
    </label>
  );
}
