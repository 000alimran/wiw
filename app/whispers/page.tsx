import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { whispers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Whispers",
  description: "Short notes on money, behaviour, business, risk and investing.",
};

export default function WhispersPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell">
        <p className="eyebrow">WIW / Whispers</p>
        <h1>Short notes. Long consequences.</h1>
        <p className="page-intro">
          Ideas about money that are useful enough to keep and quiet enough to
          think about slowly.
        </p>
      </section>

      <section className="shell whisper-index">
        {whispers.map((item) => (
          <article className="whisper-row" key={item.slug}>
            <div className="whisper-no">{item.number}</div>
            <div>
              <p className="kicker">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </div>
            <div className="whisper-meta">
              <span>{item.readTime}</span>
              <Link href={`/whispers/${item.slug}`}>Read ↗</Link>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
