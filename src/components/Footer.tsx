import Link from "next/link"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-col-h">SPORTY PH</div>
          <p style={{ color: "var(--ink-muted)", fontSize: 13, lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
            Sports trending short stories for the Philippines. NBA, PBA, Gilas, UAAP, NCAA, PVL and live decimal odds from PAGCOR-licensed sportsbooks. 90-second reads for your commute.
          </p>
          <div style={{ marginTop: 10, fontSize: 11, color: "var(--ink-faint)" }}>© 2026 Sporty. All rights reserved.</div>
        </div>
        <div className="footer-col">
          <div className="footer-col-h">Coverage</div>
          <Link href="/article/ai-predictions">NBA</Link>
          <Link href="/league/pba">PBA</Link>
          <Link href="/league/pba">Gilas Pilipinas</Link>
          <Link href="/odds">Live Odds</Link>
          <Link href="/newsletter">SPORTY DAILY</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-h">Formats</div>
          <Link href="/article/ai-predictions">Covers-style AI picks</Link>
          <Link href="/article/suns-vs-magic">Game betting preview</Link>
          <Link href="/league/pba">PBA league hub</Link>
          <Link href="/odds">Odds board</Link>
          <Link href="/newsletter">Newsletter funnel</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-h">Company</div>
          <a href="#">About</a>
          <a href="#">Editorial policy</a>
          <a href="#">Odds disclosure</a>
          <a href="#">Viber community</a>
          <a href="#">Privacy</a>
        </div>
      </div>
      <div className="footer-btm">
        <span>Decimal odds from PAGCOR-licensed partners. 21+ only. Bet responsibly — only what you can afford to lose.</span>
        <span>Advertise: <a href="mailto:ads@sporty.ph" style={{ color: "var(--mint-text)" }}>ads@sporty.ph</a></span>
      </div>
    </footer>
  )
}
