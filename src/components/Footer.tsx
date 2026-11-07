import Link from "next/link"

export function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div>
          <strong>SPORTY PH</strong> — Short-story sports media for the Philippines. NBA · PBA · Gilas · UAAP · NCAA · PVL · Betting.
        </div>
        <div className="foot-links">
          <Link href="/">Home</Link>
          <Link href="/article/ai-predictions">NBA</Link>
          <Link href="/league/pba">PBA</Link>
          <Link href="/odds">Odds</Link>
          <Link href="/newsletter">Newsletter</Link>
          <a href="#">About</a>
          <a href="#">Editorial Policy</a>
          <a href="#">Odds Disclosure</a>
          <a href="#">Viber Community</a>
          <a href="#">Privacy</a>
        </div>
        <div>Lines by PAGCOR-licensed partners. 21+ only. Bet responsibly.</div>
      </div>
    </footer>
  )
}
