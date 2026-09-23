import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ToolKit from "./ToolKit";

export const metadata: Metadata = {
  title: "Money Tools",
  description: "Simple calculators for compounding, financial freedom and business runway.",
};

export default function ToolsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero shell">
        <p className="eyebrow">WIW / Money Tools</p>
        <h1>Numbers without the noise.</h1>
        <p className="page-intro">
          Small calculators for thinking clearly about time, cash and trade-offs.
          Use them to explore scenarios, not to outsource judgment.
        </p>
      </section>
      <div className="shell">
        <ToolKit />
      </div>
      <SiteFooter />
    </main>
  );
}
