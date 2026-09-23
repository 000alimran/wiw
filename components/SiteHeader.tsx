import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="logo" href="/" aria-label="Wealth in Whispers home">
        <span className="logo-symbol" aria-hidden="true">
          <span className="logo-w">W</span>
          <span className="logo-arrow">↑</span>
        </span>
        <span className="logo-words">WEALTH IN<br />WHISPERS</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/whispers">Whispers</Link>
        <Link href="/tools">Money Tools</Link>
        <Link href="/bangladesh-money">Bangladesh Money</Link>
        <Link href="/about">Manifesto</Link>
      </nav>

      <a
        className="header-cta"
        href="https://wealthinwhispers.substack.com/"
        target="_blank"
        rel="noreferrer"
      >
        Join the letter
      </a>
    </header>
  );
}
