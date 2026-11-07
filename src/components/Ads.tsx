export function LeaderboardAd({
  text = "Bet PBA & NBA with OKBet — PAGCOR licensed · GCash accepted · New user bonus up to ₱5,000",
}: { text?: string }) {
  return (
    <div className="ad-slot ad-leaderboard" role="region" aria-label="Advertisement">
      <span className="lbl">DEMO AD · LEADERBOARD 728×90</span>
      <span className="txt">{text}</span>
      <span className="cta">Book this slot: ads@clutchph.com</span>
    </div>
  )
}

export function SidebarAd() {
  return (
    <div className="ad-slot ad-rect" role="region" aria-label="Advertisement">
      <span className="lbl">DEMO AD · 300×250</span>
      <span className="txt">₱5,000 Welcome Bonus at OKBet</span>
      <span className="cta">
        Bet PBA &amp; NBA with GCash · PAGCOR licensed
        <br />
        Book this sidewinder slot: ads@clutchph.com
      </span>
    </div>
  )
}
