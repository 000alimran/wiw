const essays = [
  {
    kicker: "Money Psychology",
    title: "The richest decisions are often the quietest ones.",
    excerpt:
      "Wealth rarely arrives with a soundtrack. It compounds through boring habits, patient choices, and the ability to ignore noise.",
    meta: "6 min read",
  },
  {
    kicker: "Business",
    title: "Revenue is loud. Cash flow tells the truth.",
    excerpt:
      "A growing business can still be fragile. Learn to read what actually keeps a company alive when the excitement fades.",
    meta: "8 min read",
  },
  {
    kicker: "Investing",
    title: "The cost of always needing action.",
    excerpt:
      "Sometimes the most profitable move is not another trade, purchase, or pivot. It is the discipline to wait.",
    meta: "5 min read",
  },
];

const principles = [
  "Spend less than your ego wants.",
  "Own productive assets.",
  "Protect your downside.",
  "Let time do heavy work.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#" aria-label="Wealth in Whisper home">
          <span className="brand-mark">W</span>
          <span>WEALTH IN WHISPER</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#essays">Essays</a>
          <a href="#principles">Principles</a>
          <a href="#letter">The Letter</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">A quiet publication about money</div>
        <h1>
          Wealth does not
          <br />
          need to be loud.
        </h1>
        <div className="hero-bottom">
          <p>
            Essays, ideas, and practical frameworks for earning better,
            spending consciously, building durable businesses, and thinking
            long term.
          </p>
          <a className="text-link" href="#essays">
            Start reading <span>↘</span>
          </a>
        </div>
      </section>

      <section className="manifesto">
        <div className="shell manifesto-grid">
          <p className="section-label">01 / Our belief</p>
          <blockquote>
            “The point is not to look rich. The point is to become financially
            hard to break.”
          </blockquote>
        </div>
      </section>

      <section id="essays" className="shell section">
        <div className="section-head">
          <p className="section-label">02 / Latest thinking</p>
          <h2>Notes worth keeping.</h2>
        </div>
        <div className="essay-grid">
          {essays.map((essay, index) => (
            <article className="essay-card" key={essay.title}>
              <div className="essay-number">0{index + 1}</div>
              <div>
                <p className="kicker">{essay.kicker}</p>
                <h3>{essay.title}</h3>
                <p className="excerpt">{essay.excerpt}</p>
              </div>
              <div className="card-meta">
                <span>{essay.meta}</span>
                <span>Read ↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="principles" className="principles">
        <div className="shell">
          <div className="section-head light">
            <p className="section-label">03 / Quiet wealth principles</p>
            <h2>Simple rules. Difficult practice.</h2>
          </div>
          <div className="principle-list">
            {principles.map((item, index) => (
              <div className="principle" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="letter" className="shell letter">
        <div>
          <p className="section-label">04 / Wealth in Whisper Letter</p>
          <h2>One thoughtful note about money. Occasionally.</h2>
        </div>
        <form className="subscribe" action="#">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input id="email" type="email" placeholder="you@example.com" />
          <button type="submit">Join the letter</button>
        </form>
      </section>

      <footer className="shell footer">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">W</span>
            <span>WEALTH IN WHISPER</span>
          </div>
          <p>Quiet money. Clear thinking.</p>
        </div>
        <div className="footer-note">
          <p>For education and reflection, not personal financial advice.</p>
          <p>© {new Date().getFullYear()} Wealth in Whisper</p>
        </div>
      </footer>
    </main>
  );
}
