import type { PartnerRegistrationInput } from "@/lib/validation/partner";

// Builds the required Vietnamese Telegram message for new partner leads.
export function formatPartnerTelegramMessage(input: PartnerRegistrationInput) {
  return [
    "Dang ky doi tac moi - City Blinds",
    `Ho ten: ${input.fullName}`,
    `SDT: ${input.phone}`,
    `Cong ty: ${input.companyName}`,
    `Khu vuc: ${input.province}`,
    `Mo hinh: ${input.businessModel}`,
    `San pham quan tam: ${input.interestedProducts.join(", ")}`,
    `Trang gui form: ${input.sourcePage || input.currentUrl || "Khong ro"}`,
    `Nguon: ${input.utmSource || input.referrerUrl || "Direct"}`,
    `Thiet bi: ${input.deviceType || "Khong ro"}`,
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
