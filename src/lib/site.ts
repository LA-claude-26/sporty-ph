/**
 * Canonical site URL, resolved at build time.
 *
 * Priority:
 *   1. NEXT_PUBLIC_SITE_URL  — set this once a custom domain (e.g. sporty.ph) is live
 *   2. VERCEL_PROJECT_PRODUCTION_URL — injected by Vercel for every build (production domain)
 *   3. localhost fallback for `npm run dev`
 */
const raw =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

export const SITE_URL = raw.replace(/\/+$/, "")
