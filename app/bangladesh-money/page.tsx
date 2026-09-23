import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Bangladesh Money",
  description: "A growing library for understanding personal and business finance in Bangladesh.",
};

const topics = [
  ["01", "Cash & Safety", "Emergency funds, liquidity, savings products and the cost of being financially fragile."],
  ["02", "Salary & Lifestyle", "Income, budgeting, lifestyle inflation and building room between what comes in and what goes out."],
  ["03", "Business Money", "Cash flow, working capital, runway, receivables and the economics behind small businesses."],
  ["04", "Investing Basics", "Risk, diversification, compounding and a framework for learning before making decisions."],
  ["05", "Inflation & Purchasing Power", "Why nominal numbers can rise while real buying power quietly falls."],
  ["06", "Tax & Financial Systems", "Plain-language educational explainers with source links as the library grows."],
];

export default function BangladeshMoneyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell">
        <p className="eyebrow">WIW / Bangladesh Money</p>
        <h1>Money, in the context we actually live in.</h1>
        <p className="page-intro">
          Global principles, local reality. A growing educational library for
          Bangladeshi earners, founders and financially curious people.
        </p>
      </section>

      <section className="shell topic-grid">
        {topics.map(([n, title, copy]) => (
          <article className="topic-card" key={title}>
            <span>{n}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
            <small>Library expanding</small>
          </article>
        ))}
      </section>

      <section className="quiet-callout">
        <div className="shell">
          <p className="mini-label">A rule for this section</p>
          <h2>Explain first. Source carefully. Never manufacture certainty.</h2>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
