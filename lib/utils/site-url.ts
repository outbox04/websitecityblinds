export function getSiteUrl() {
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const siteUrl = vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000";

  return siteUrl.replace(/\/$/, "");
}
