import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="logo footer-logo" href="/">
            <span className="logo-symbol" aria-hidden="true">
              <span className="logo-w">W</span>
              <span className="logo-arrow">↑</span>
            </span>
            <span className="logo-words">WEALTH IN<br />WHISPERS</span>
          </Link>
          <p className="footer-thesis">Where fortunes grow in silence.</p>
        </div>

        <div className="footer-links">
          <div>
            <p className="footer-label">Explore</p>
            <Link href="/whispers">Whispers</Link>
            <Link href="/tools">Money Tools</Link>
            <Link href="/bangladesh-money">Bangladesh Money</Link>
            <Link href="/about">Manifesto</Link>
          </div>
          <div>
            <p className="footer-label">Elsewhere</p>
            <a href="https://wealthinwhispers.substack.com/" target="_blank" rel="noreferrer">Substack</a>
            <a href="https://www.facebook.com/wealthinwhisper" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@wealthinwhisper" target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>Independent financial education. No hype. No signals. No financial theatre.</p>
        <p>For education only, not personal financial advice.</p>
      </div>
    </footer>
  );
}
