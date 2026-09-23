import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { whispers } from "@/lib/content";

const moneyTopics = [
  ["01", "Earn", "Income, skills and business economics."],
  ["02", "Keep", "Cash flow, spending and financial resilience."],
  ["03", "Own", "Assets, investing and productive ownership."],
  ["04", "Wait", "Compounding, patience and long-term thinking."],
];

export default function Home() {
  const featured = whispers.slice(0, 3);

  return (
    <main>
      <div className="home-frame">
        <SiteHeader />

        <section className="home-hero shell">
          <div className="hero-kicker">
            <span>INVESTING</span>
            <span>MINDSET</span>
            <span>STRATEGY</span>
          </div>

          <h1>
            WHERE FORTUNES
            <br />
            GROW IN SILENCE.
          </h1>

          <div className="hero-lower">
            <p>
              Clear thinking on money, business, risk and behaviour for people
              who would rather build quietly than perform wealth publicly.
            </p>
            <div className="hero-actions">
              <Link className="button button-acid" href="/whispers">
                Read the whispers
              </Link>
              <Link className="button button-ghost" href="/tools">
                Use money tools
              </Link>
            </div>
          </div>

          <div className="hero-stamp">
            <span>PRIVATE</span>
            <i>•</i>
            <span>QUIET</span>
            <i>•</i>
            <span>INSIGHTFUL</span>
          </div>
        </section>
      </div>

      <section className="signal-strip">
        <div className="shell signal-grid">
          <p>THE THESIS</p>
          <h2>
            The goal is not to look rich. The goal is to become financially
            difficult to break.
          </h2>
        </div>
      </section>

      <section className="home-section shell">
        <div className="section-title-row">
          <div>
            <p className="mini-label">Latest thinking</p>
            <h2>Whispers worth keeping.</h2>
          </div>
          <Link className="under-link" href="/whispers">
            View all whispers ↗
          </Link>
        </div>

        <div className="featured-grid">
          {featured.map((item, index) => (
            <Link
              className={`featured-card featured-card-${index + 1}`}
              href={`/whispers/${item.slug}`}
              key={item.slug}
            >
              <div className="card-top">
                <span>WHISPER {item.number}</span>
                <span>{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <div className="card-bottom">
                <span>{item.readTime}</span>
                <span>Read ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="dark-section">
        <div className="shell">
          <div className="section-title-row section-title-light">
            <div>
              <p className="mini-label">A simple operating system</p>
              <h2>Four verbs for quieter wealth.</h2>
            </div>
          </div>

          <div className="money-topics">
            {moneyTopics.map(([number, title, copy]) => (
              <article className="money-topic" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tools-preview shell">
        <div className="tools-copy">
          <p className="mini-label">Money Tools</p>
          <h2>Make the numbers visible.</h2>
          <p>
            Test compounding, estimate a freedom number, or see how long a
            business can breathe before cash runs out.
          </p>
          <Link className="button button-dark" href="/tools">
            Open the tools
          </Link>
        </div>

        <div className="mini-dashboard" aria-label="Illustrative wealth projection">
          <div className="dash-head">
            <span>COMPOUNDING / ILLUSTRATION</span>
            <span>20 YEARS</span>
          </div>
          <div className="dash-number">1,284,000</div>
          <div className="growth-bars" aria-hidden="true">
            {[18, 22, 27, 31, 38, 44, 51, 59, 68, 78, 89, 100].map(
              (height, index) => (
                <i key={height} style={{ height: `${height}%` }}>
                  <span>{index + 1}</span>
                </i>
              )
            )}
          </div>
          <div className="dash-foot">
            <span>TIME</span>
            <span>PATIENCE</span>
            <span>CONSISTENCY</span>
          </div>
        </div>
      </section>

      <section className="bangladesh-preview">
        <div className="shell bangladesh-grid">
          <div>
            <p className="mini-label">Bangladesh Money</p>
            <h2>Global principles. Local reality.</h2>
          </div>
          <div>
            <p>
              A growing library about cash, salary, business money, inflation,
              investing basics and financial systems in the context people here
              actually live in.
            </p>
            <Link className="under-link light-link" href="/bangladesh-money">
              Explore the library ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="letter-section shell">
        <div>
          <p className="mini-label">The Whisper Letter</p>
          <h2>One useful note. No shouting.</h2>
        </div>
        <div className="letter-copy">
          <p>
            Essays, frameworks and money ideas delivered through the existing
            WIW Substack.
          </p>
          <a
            className="button button-acid"
            href="https://wealthinwhispers.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            Join on Substack ↗
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
