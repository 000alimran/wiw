import { SITE_URL } from "@/components/JsonLd";
import { breakdowns } from "@/lib/breakdowns";
import { whispers } from "@/lib/content";
import { glossary } from "@/lib/glossary";
import { toolCatalog } from "@/lib/tool-catalog";

export const dynamic = "force-static";

// llms.txt: a plain map of the site for AI assistants (https://llmstxt.org).
export function GET() {
  const L = (items: { t: string; u: string; d?: string }[]) => items.map((i) => `- [${i.t}](${SITE_URL}${i.u})${i.d ? `: ${i.d}` : ""}`).join("\n");
  const body = `# Wealth in Whispers

> Business breakdowns and plain-English money explainers for quiet wealth builders. Independent, sourced, no hype. For education only, not financial advice.

## Breakdowns
${L(breakdowns.map((b) => ({ t: b.title, u: `/breakdowns/${b.slug}`, d: b.dek })))}

## Learn (definitions)
${L(glossary.map((g) => ({ t: g.term, u: `/learn/${g.slug}`, d: g.short })))}

## Money tools (free calculators, multi-currency)
${L(toolCatalog.map((t) => ({ t: t.title, u: `/tools/${t.slug}`, d: t.description })))}

## Whispers (short essays)
${L(whispers.map((w) => ({ t: w.title, u: `/whispers/${w.slug}` })))}

## Optional
- [Manifesto](${SITE_URL}/about)
- [Newsletter](https://wealthinwhispers.substack.com/)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
