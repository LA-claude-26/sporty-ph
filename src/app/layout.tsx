import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/Header"
import { Ticker } from "@/components/Ticker"
import { Footer } from "@/components/Footer"
import { BottomNav } from "@/components/BottomNav"
import { LeaderboardAd } from "@/components/Ads"

export const metadata: Metadata = {
  title: { default: "SPORTY PH — Sports Trending Short Stories", template: "%s — SPORTY PH" },
  description:
    "Fast Philippine sports news: NBA, PBA, Gilas, UAAP, NCAA, PVL and live decimal odds from PAGCOR-licensed sportsbooks. 90-second short stories for your commute.",
  metadataBase: new URL("https://sportyph.vercel.app"),
  openGraph: {
    siteName: "SPORTY PH",
    locale: "en_PH",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LeaderboardAd />
        <Header />
        <Ticker />
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
