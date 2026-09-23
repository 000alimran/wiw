export type Whisper = {
  slug: string;
  number: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const whispers: Whisper[] = [
  {
    slug: "wealth-is-what-you-dont-see",
    number: "001",
    category: "Money Psychology",
    title: "Wealth is often what you do not see.",
    excerpt:
      "The car, watch and holiday are visible. The cash buffer, ownership, patience and optionality usually are not.",
    readTime: "3 min",
  },
  {
    slug: "revenue-is-loud",
    number: "002",
    category: "Business",
    title: "Revenue is loud. Cash flow tells the truth.",
    excerpt:
      "A business can look busy and still be fragile. What matters is what remains after the excitement, expenses and timing gaps.",
    readTime: "4 min",
  },
  {
    slug: "cost-of-always-needing-action",
    number: "003",
    category: "Investing",
    title: "The cost of always needing action.",
    excerpt:
      "More activity can feel like more control. In money, the ability to wait is often an underrated advantage.",
    readTime: "3 min",
  },
  {
    slug: "first-100k-is-a-behaviour-problem",
    number: "004",
    category: "0 → 100K",
    title: "The first 100K is partly a behaviour problem.",
    excerpt:
      "Before compounding becomes impressive, consistency has to survive boredom, interruptions and lifestyle inflation.",
    readTime: "5 min",
  },
  {
    slug: "protect-the-downside",
    number: "005",
    category: "Risk",
    title: "Protect the downside before chasing the upside.",
    excerpt:
      "Emergency liquidity, manageable debt and margin of safety are not glamorous. They are what keep one bad season from becoming permanent.",
    readTime: "4 min",
  },
  {
    slug: "income-is-not-wealth",
    number: "006",
    category: "Foundations",
    title: "Income is not wealth.",
    excerpt:
      "Income is a flow. Wealth is accumulated ownership, resilience and the freedom to make choices without immediate financial pressure.",
    readTime: "3 min",
  },
];

export const principles = [
  "Spend less than your ego wants.",
  "Own productive assets.",
  "Protect your downside.",
  "Avoid permanent mistakes.",
  "Let time do heavy work.",
  "Keep learning when nobody is watching.",
];
