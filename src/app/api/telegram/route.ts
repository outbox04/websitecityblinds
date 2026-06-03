import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram/notify";

// Utility route for server-side Telegram tests; keep it protected in production if exposed further.
export async function POST(request: Request) {
  const secret = process.env.TELEGRAM_API_SECRET;
  const providedSecret = request.headers.get("x-telegram-secret");

  if (!secret || providedSecret !== secret) {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  const { message } = await request.json().catch(() => ({ message: "" }));

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const result = await sendTelegramMessage(message.slice(0, 3500));
  return NextResponse.json(result);
}
