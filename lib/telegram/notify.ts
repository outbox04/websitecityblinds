import type { PartnerRegistrationInput } from "@/lib/validation/partner";

// Builds the required Vietnamese Telegram message for new partner leads.
export function formatPartnerTelegramMessage(input: PartnerRegistrationInput) {
  return [
    "Đăng ký đối tác mới - City Blinds",
    `Họ tên: ${input.fullName}`,
    `SDT: ${input.phone}`,
    `Cong ty: ${input.companyName}`,
    `Khu vuc: ${input.province}`,
    `Mô hình: ${input.businessModel}`,
    `Sản phẩm quan tâm: ${input.interestedProducts.join(", ")}`,
    `Trang gửi form: ${input.sourcePage || input.currentUrl || "Không rõ"}`,
    `Nguon: ${input.utmSource || input.referrerUrl || "Direct"}`,
    `Thiết bị: ${input.deviceType || "Không rõ"}`,
    `Thoi gian: ${new Date().toISOString()}`
  ].join("\n");
}

// Sends Telegram notification from server routes only.
export async function sendTelegramMessage(message: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, skipped: true, reason: "Telegram ENV is not configured." };
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message })
  });

  return { ok: response.ok, skipped: false };
}
