export function LeaderboardAd({
  text = "Bet PBA & NBA with OKBet — PAGCOR licensed · GCash accepted · New user bonus up to ₱5,000",
}: { text?: string }) {
  return (
    <div className="shell" style={{ margin: "6px auto 0" }}>
      <div className="ad-leader" role="region" aria-label="Advertisement">
        <span>DEMO AD · LEADERBOARD 970×90 — {text} — BOOK: ads@sporty.ph</span>
      </div>
    </div>
  )
}

export function SidebarAd() {
  return (
    <div className="ad-sidebar" role="region" aria-label="Advertisement">
      <div style={{ textAlign: "center", padding: 12 }}>
        <div style={{ fontWeight: 800, fontSize: 10, letterSpacing: "0.1em", marginBottom: 6 }}>DEMO AD · 300×250</div>
        <div style={{ fontWeight: 800, fontSize: 13, color: "var(--ink)", marginBottom: 4 }}>₱5,000 Welcome Bonus at OKBet</div>
        <div style={{ fontSize: 11, color: "var(--ink-faint)" }}>Bet PBA &amp; NBA with GCash · PAGCOR licensed</div>
        <div style={{ fontSize: 10, color: "var(--ink-faint)", marginTop: 6 }}>Book this slot: ads@sporty.ph</div>
      </div>
    </div>
  )
}
