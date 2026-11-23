export const toolCatalog = [
  {
    slug: "compound-growth",
    title: "Compound Growth Visualizer",
    description: "Interactive compound interest calculator: see, year by year, how much of your balance is your money and how much is growth.",
    category: "Build wealth",
    status: "New",
  },
  {
    slug: "ipo-lockup",
    title: "IPO Lock-up Calculator",
    description: "Find the date insiders can start selling after an IPO, and how much of the lock-up has passed.",
    category: "Investing",
    status: "New",
  },
  {
    slug: "emergency-fund",
    title: "Emergency Fund",
    description: "Estimate a cash buffer from essential spending, income stability and dependents.",
    category: "Protect wealth",
    status: "New",
  },
  {
    slug: "inflation-calculator",
    title: "Inflation Reality Check",
    description: "See how inflation can reduce the future purchasing power of today's money.",
    category: "Build wealth",
    status: "New",
  },
  {
    slug: "net-worth",
    title: "Net Worth Snapshot",
    description: "Add what you own, subtract what you owe and see your financial position clearly.",
    category: "Protect wealth",
    status: "New",
  },
  {
    slug: "savings-goal",
    title: "Savings Goal Planner",
    description: "Work backwards from a future target to an estimated monthly contribution.",
    category: "Build wealth",
    status: "New",
  },
  {
    slug: "cost-of-waiting",
    title: "Cost of Waiting",
    description: "Compare starting now with delaying your investing plan for a few years.",
    category: "Build wealth",
    status: "New",
  },
  {
    slug: "lifestyle-inflation",
    title: "Lifestyle Inflation Detector",
    description: "Check whether expenses are growing faster than income and squeezing wealth-building capacity.",
    category: "Life decisions",
    status: "New",
  },
] as const;

export type ToolSlug = (typeof toolCatalog)[number]["slug"];

export function getTool(slug: string) {
  return toolCatalog.find((tool) => tool.slug === slug);
}
