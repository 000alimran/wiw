// Business breakdowns. Each entry is a page at /breakdowns/<slug> and usually pairs with a short video.
// Every number must come from a cited source.

export type Breakdown = {
  slug: string;
  title: string;
  company: string;
  date: string; // ISO publish date
  dek: string; // one-line summary (also the meta description)
  youtubeId?: string; // YouTube Shorts/video id
  keyNumbers: { label: string; value: string }[];
  sections: { heading: string; body: string[] }[];
  takeaway: string;
  sources: { title: string; url: string }[];
};

const anthropicSources = [
  { title: "Why Anthropic Stock Is Up (and Down) Today — Nasdaq / The Motley Fool", url: "https://www.nasdaq.com/articles/why-anthropic-stock-and-down-today" },
  { title: "Anthropic prices initial public offering — Anthropic", url: "https://www.anthropic.com/news/anthropic-prices-initial-public-offering" },
  { title: "Anthropic amended S-1: $17B Q3 revenue — Idlen", url: "https://www.idlen.io/news/anthropic-amended-s1-q3-2026-17-billion-revenue-compute-claude-developers/" },
  { title: "Anthropic S-1 breakdown — Kepler", url: "https://kepler.ai/research/financial/s1-anthropic/" },
  { title: "Anthropic's amended S-1 — Digital Applied", url: "https://www.digitalapplied.com/blog/anthropic-s1-amendment-api-customers" },
];

export const breakdowns: Breakdown[] = [
  {
    slug: "anthropic-104-billion-loss-explained",
    title: "Anthropic lost $104 billion. Here's the catch.",
    company: "Anthropic",
    date: "2026-11-23",
    dek: "Most of Anthropic's $104B nine-month net loss is a non-cash fair-value charge. Here is what the operating business actually did.",
    youtubeId: "i5OXD0OjBNE",
    keyNumbers: [
      { label: "Net loss, Jan–Sep 2026", value: "$104.0B" },
      { label: "Of which fair-value charge", value: "$94.3B" },
      { label: "Q2 2026 operating income", value: "+$974M" },
      { label: "Q3 2026 operating income", value: "–$567M" },
    ],
    sections: [
      {
        heading: "Where the $104 billion comes from",
        body: [
          "Anthropic's amended S-1 reports a $104.0 billion net loss for the first nine months of 2026. $94.3 billion of that is a change in the fair value of convertible notes and SAFEs — instruments early investors hold that later convert into shares.",
          "As the company's valuation rose, those instruments became worth more on paper. Accounting rules record that increase as a loss on the income statement. No cash leaves the company.",
        ],
      },
      {
        heading: "The operating picture",
        body: [
          "Stripping out the fair-value charge, Anthropic posted its first-ever operating profit in Q2 2026 (+$974 million), then a small operating loss in Q3 (–$567 million) as compute costs rose from 48% to 58% of revenue.",
        ],
      },
    ],
    takeaway: "The business is roughly break-even on operations while growing extremely fast. The headline loss is mostly accounting, not cash burn.",
    sources: anthropicSources,
  },
  {
    slug: "anthropic-revenue-one-day-vs-2023",
    title: "Anthropic now makes more in one day than in all of 2023",
    company: "Anthropic",
    date: "2026-11-23",
    dek: "From $41M in 2023 to about $17B in a single quarter — and why the filing itself expects growth to slow.",
    youtubeId: "V52LXIuSn8Q",
    keyNumbers: [
      { label: "2023 revenue", value: "$41M" },
      { label: "Q3 2026 revenue", value: "$16.96B" },
      { label: "Per day in Q3 (our math)", value: "≈ $184M" },
      { label: "QoQ growth Q2→Q3", value: "+47%" },
    ],
    sections: [
      {
        heading: "The growth curve",
        body: [
          "Anthropic reported $41 million of revenue in 2023, $386 million in 2024 and $4.6 billion in 2025. In Q3 2026 alone it reported $16.96 billion — roughly $184 million per day across the quarter's 92 days (our calculation).",
        ],
      },
      {
        heading: "The part nobody is posting",
        body: [
          "Quarter-over-quarter growth slowed from about +144% (Q1 to Q2, calculated from filed figures) to +47% (Q2 to Q3). The S-1 states that growth is expected to decline over time.",
          "At an IPO valuation of roughly $1.5 trillion, the stock prices in a lot of future growth, which leaves little room for a slowdown.",
        ],
      },
    ],
    takeaway: "Extraordinary growth and a demanding valuation can both be true at once.",
    sources: anthropicSources,
  },
  {
    slug: "why-ai-agents-make-anthropic-20x-more",
    title: "Same customer, about 20× the bill: how AI agents change Anthropic's math",
    company: "Anthropic",
    date: "2026-11-23",
    dek: "Anthropic charges per token. Customers using agents like Claude Code spend about 20 times more — and cost more to serve.",
    keyNumbers: [
      { label: "Usage-based share of revenue", value: "79%" },
      { label: "Enterprise users without Claude Code", value: "< $75/mo" },
      { label: "Top 5% with Claude Code", value: "≈ 20×" },
      { label: "Compute as % of revenue, Q2 → Q3", value: "48% → 58%" },
    ],
    sections: [
      {
        heading: "Pay per token",
        body: [
          "About 79% of Anthropic's revenue in the first nine months of 2026 was consumption-based: customers pay for the tokens Claude reads and writes. The rest came from subscriptions.",
          "In Q3 2026, Claude Enterprise users who did not use Claude Code spent under $75 a month on average; the top 5% who did spent about twenty times that.",
        ],
      },
      {
        heading: "The catch",
        body: [
          "Agents run whole tasks step by step, and every step uses tokens — and compute. Compute and infrastructure rose from 48% of revenue in Q2 to 58% in Q3.",
        ],
      },
    ],
    takeaway: "Bigger revenue, bigger bill. Whether revenue outruns compute costs is the central question for AI companies.",
    sources: anthropicSources,
  },
];

export const getBreakdown = (slug: string) => breakdowns.find((b) => b.slug === slug);
