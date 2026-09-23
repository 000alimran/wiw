import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { principles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Manifesto",
  description: "The thinking behind Wealth in Whispers.",
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell manifesto-hero">
        <p className="eyebrow">WIW / Manifesto</p>
        <h1>Private. Quiet. Insightful.</h1>
        <p className="page-intro">
          Wealth in Whispers exists for people who want to understand money
          without turning money into a personality.
        </p>
      </section>

      <section className="manifesto-copy shell">
        <p className="manifesto-lead">
          We are not interested in looking rich, chasing every market story or
          pretending a difficult subject can be reduced to one viral rule.
        </p>
        <div className="manifesto-columns">
          <p>
            We care about resilient finances, productive ownership, patient
            compounding, better businesses, risk awareness and the psychology
            behind financial decisions.
          </p>
          <p>
            WIW is built as an independent educational publication. The goal is
            clearer thinking, not financial signals, flexing or false certainty.
          </p>
        </div>
      </section>

      <section className="principles-block">
        <div className="shell">
          <p className="mini-label">Quiet wealth principles</p>
          {principles.map((principle, index) => (
            <div className="principle-line" key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
