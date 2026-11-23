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
  chart?: { title: string; note?: string; bars: { label: string; value: number; display: string; tone?: "good" | "bad" | "mut" }[] };
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
    slug: "nvidia-jensen-huang-11-days",
    youtubeId: "VK0V-YNAHgA",
    title: "Nvidia lost its CEO. 11 days later, his return added about $1 trillion.",
    company: "Nvidia",
    date: "2026-11-24",
    dek: "Jensen Huang resigned, the board said he would not return, then it reinstated him unanimously. The stock's record one-day jump shows what investors call key-person risk.",
    keyNumbers: [
      { label: "Market value added in one day", value: "$888B–$1T" },
      { label: "Previous one-day record", value: "≈ $450B" },
      { label: "NVDA drop, Oct 29 → Nov 20 close", value: "–41%" },
      { label: "Days between resignation and return", value: "11" },
    ],
    sections: [
      {
        heading: "The trillion-dollar day",
        body: [
          "On November 23, 2026, Nvidia's board announced that Jensen Huang had been reinstated as president, CEO and board member, effective immediately. The board said it voted unanimously after a series of discussions and meetings with Huang, and that it had received input from senior levels of the US government, on which basis it is confident his return poses no national security risk.",
          "The stock rose more than 30% in a single session. Depending on the timestamp, reports put the market value added at between about $888 billion and $1 trillion, roughly double the previous one-day record of about $450 billion.",
        ],
      },
      {
        heading: "Eleven days, step by step",
        body: [
          "In early November, reports said Huang had been the target of a foreign intelligence effort involving a personal relationship with a woman alleged to have ties to Chinese intelligence; China's foreign ministry called the claim groundless. On November 8, Nvidia's board opened an independent investigation.",
          "On November 11 the board accepted Huang's resignation, and on November 12 Nvidia announced it publicly. CFO Colette Kress became interim CEO and Harvey C. Jones was named the board's first-ever chair. On the November 17 earnings call, Jones said the board did not intend to reinstate Huang. Six days later, it did.",
          "Between October 29 and the November 20 close, Nvidia's stock fell about 41%. Part of that reflected a wider sell-off in AI stocks; the CEO's exit added to it.",
        ],
      },
      {
        heading: "Why one person mattered this much",
        body: [
          "Huang co-founded Nvidia in 1993 and ran it for 33 years, steering it from graphics chips for games to the hardware behind much of today's AI. In the quarter just reported, Nvidia made $115.8 billion in revenue, about 93% of it from data centers (our math).",
          "That business depends on relationships with cloud providers, AI labs and governments that control who can buy advanced chips. When those relationships run through one person, losing that person can look like losing the strategy.",
        ],
      },
      {
        heading: "Key-person risk, and the new guardrails",
        body: [
          "Key-person risk is the risk that a company's value depends so heavily on one individual that losing them changes what the business is worth. Apple pushed out Steve Jobs in 1985 and he returned in 1997; OpenAI's board fired Sam Altman in November 2023 and he was back within days.",
          "Nvidia's board paired Huang's return with new checks: the independent investigation will run to its conclusion, a National Security and Export Control Committee of independent directors has been formed, the company is searching for its first Chief Compliance Officer, and Harvey Jones remains board chair.",
        ],
      },
      {
        heading: "Three questions to ask about any company",
        body: [
          "1. If the founder disappeared tomorrow, who would the biggest customers call? 2. Is there a real succession plan, or just a name on a slide? 3. Who can say no to the CEO? A strong board isn't a threat to a great founder; it's insurance.",
          "What to watch next: the investigation's findings, lawmakers' requests for a briefing, and China. Nvidia's $130 billion guidance for next quarter already assumes no data center compute sales to China.",
        ],
      },
    ],
    takeaway: "A trillion dollars came back in one day. It can leave just as fast if the facts change. That is what key-person risk looks like on a chart.",
    chart: { title: "Biggest one-day market value gains", note: "Nvidia figure varies by timestamp ($888B–$1T); low end shown.", bars: [{ label: "Previous record", value: 450, display: "≈ $450B", tone: "mut" }, { label: "Nvidia · Nov 23, 2026", value: 888, display: "$888B+", tone: "good" }] },
    sources: [
      { title: "NVIDIA Board Reinstates Jensen Huang as President, CEO and Board Director (Form 8-K)", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000090/nov23pressrelease.htm" },
      { title: "NVIDIA Announces CEO Transition (Form 8-K, Nov 12, 2026)", url: "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000082/nvidiaannouncesceotransiti.htm" },
      { title: "Nvidia reinstates Jensen Huang as CEO amid pressure from President Trump, investors — Reuters via Yahoo Finance", url: "https://finance.yahoo.com/news/nvidia-reinstates-jensen-huang-ceo-135916841.html" },
      { title: "Nvidia reinstates Jensen Huang as CEO — CBS News", url: "https://www.cbsnews.com/news/nvidia-reinstates-jensen-huang-ceo/" },
      { title: "Nvidia Adds Record $888 Billion as Jensen Huang Returns — Benzinga", url: "https://www.benzinga.com/markets/large-cap/26/11/63536753/nvidia-stock-record-market-value-gain-jensen-huang-returns" },
      { title: "Timeline of the stunning fall and comeback of Nvidia CEO Jensen Huang — AP", url: "https://www.wdbo.com/news/business/timeline-stunning-fall-comeback-nvidia-ceo-jensen-huang/UTBYF7CT2I54ZPMLVS6O46ILWA/" },
    ],
  },
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
    chart: { title: "Operating income by quarter, 2026", bars: [{ label: "Q2 2026", value: 974, display: "+$974M", tone: "good" }, { label: "Q3 2026", value: -567, display: "–$567M", tone: "bad" }] },
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
    chart: { title: "Anthropic revenue", note: "2023–2025 full years; last bar is a single quarter.", bars: [{ label: "2023", value: 0.041, display: "$41M", tone: "mut" }, { label: "2024", value: 0.386, display: "$386M", tone: "mut" }, { label: "2025", value: 4.6, display: "$4.6B", tone: "mut" }, { label: "Q3 2026 alone", value: 16.96, display: "$16.96B" }] },
    sources: anthropicSources,
  },
  {
    slug: "why-ai-agents-make-anthropic-20x-more",
    youtubeId: "5ZN96NMZHRw",
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
    chart: { title: "Compute & infrastructure as % of revenue", bars: [{ label: "Q2 2026", value: 48, display: "48%", tone: "mut" }, { label: "Q3 2026", value: 58, display: "58%", tone: "bad" }] },
    sources: anthropicSources,
  },

  {
    slug: "nvidia-115-billion-quarter",
    title: "Nvidia made $115.8 billion in three months. 93% came from one business.",
    company: "Nvidia",
    date: "2026-11-23",
    dek: "Nvidia's Q3 fiscal 2027: revenue more than doubled, data centers are almost the whole company, and next quarter's guidance assumes no China data center sales.",
    keyNumbers: [
      { label: "Q3 FY2027 revenue", value: "$115.8B" },
      { label: "Data center revenue", value: "$107.6B" },
      { label: "GAAP gross margin", value: "74.8%" },
      { label: "Q4 guidance", value: "$130B ±3%" },
    ],
    sections: [
      {
        heading: "One business is almost the whole company",
        body: [
          "For the quarter ended October 25, 2026, Nvidia reported revenue of $115.8 billion, up 103% from a year earlier. Data Center revenue was $107.6 billion, up 110% — roughly 93% of the total (our math).",
          "Edge computing — Nvidia's newer segment covering PCs, gaming, automotive and robotics — brought in $8.2 billion.",
        ],
      },
      {
        heading: "Margins and the outlook",
        body: [
          "GAAP gross margin was 74.8% and GAAP net income was $65.3 billion. For Q4 fiscal 2027, which includes an extra week, Nvidia guided revenue to $130 billion plus or minus 3%, with gross margins of 71–72%, and said it is not assuming any data center compute revenue from China.",
        ],
      },
    ],
    takeaway: "Nvidia is now, in practice, an AI data-center company with a small consumer business attached.",
    chart: { title: "Nvidia quarterly revenue", note: "Q4 FY27 is company guidance, not a result.", bars: [{ label: "Q3 FY26", value: 57.0, display: "$57.0B", tone: "mut" }, { label: "Q2 FY27", value: 96.2, display: "$96.2B", tone: "mut" }, { label: "Q3 FY27", value: 115.8, display: "$115.8B" }, { label: "Q4 FY27 (guide)", value: 130, display: "$130B" }] },
    sources: [
      { title: "NVIDIA Announces Financial Results for Third Quarter Fiscal 2027 — NVIDIA", url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/" },
      { title: "NVIDIA Q3 Fiscal 2027 revenue hits $115.8 billion — Credence Research", url: "https://www.credenceresearch.com/news/nvidia-q3-fiscal-2027-revenue-115-8-billion-vera-rubin-interim-ceo-kress" },
    ],
  },
  {
    slug: "why-kfc-restaurants-are-closing",
    title: "Why KFC restaurants are closing (it's not what you think)",
    company: "KFC / Yum! Brands",
    date: "2026-11-23",
    dek: "KFC isn't bankrupt — franchisees are. And while it closes US stores, KFC is opening thousands abroad.",
    keyNumbers: [
      { label: "Restaurants in Tasty Chick'n bankruptcy", value: "84" },
      { label: "Unpaid franchise obligations", value: "≈ $15.7M" },
      { label: "US KFCs closed in 2025", value: "161" },
      { label: "KFCs added abroad in 2025", value: "2,971" },
    ],
    sections: [
      {
        heading: "A franchisee, not KFC",
        body: [
          "Tasty Chick'n LLC, a Plano, Texas franchisee operating 75 KFC restaurants and nine KFC/Taco Bell co-branded locations across 10 states, filed for Chapter 11 on November 16, 2026. It largely stopped royalty and advertising payments to Yum! Brands in November 2025, accumulating about $15.7 million in unpaid obligations.",
          "Earlier in November, all KFC and Taco Bell restaurants in Puerto Rico closed temporarily after Yum ended its relationship with operator Encanto Restaurants, which later filed for Chapter 11.",
        ],
      },
      {
        heading: "Shrinking at home, growing abroad",
        body: [
          "KFC closed 161 US restaurants in 2025 while adding 2,971 internationally, and US sales fell about 3% while its other reported markets grew.",
        ],
      },
    ],
    takeaway: "The closures are a franchise-economics story in the US, not a collapse of the brand — KFC's growth has moved overseas.",
    chart: { title: "KFC restaurant count change, 2025", bars: [{ label: "US (closed)", value: -161, display: "–161", tone: "bad" }, { label: "International (added)", value: 2971, display: "+2,971", tone: "good" }] },
    sources: [
      { title: "See list of KFC stores closing after franchisee files for bankruptcy — ABC7", url: "https://abc7chicago.com/post/kfc-store-closures-list-franchisee-files-bankruptcy/20055466/" },
      { title: "Bankrupt Texas KFC and Taco Bell operator plans to close 10 locations — FOX 5 DC", url: "https://www.fox5dc.com/news/bankrupt-texas-kfc-taco-bell-operator-plans-close-10-locations-christmas-eve" },
      { title: "Taco Bell, KFC restaurants shutter across Puerto Rico — Nation's Restaurant News", url: "https://www.nrn.com/quick-service/taco-bell-kfc-restaurants-shutter-across-puerto-rico" },
      { title: "KFC is shrinking in America while booming overseas — Complex", url: "https://www.complex.com/life/a/bernadette-giacomazzo/kfc-shuttered-200-restaurants" },
    ],
  },
  {
    slug: "spacex-starlink-pays-the-bills",
    title: "SpaceX doesn't make its money from rockets",
    company: "SpaceX",
    date: "2026-11-23",
    dek: "Starlink brought in about 61% of SpaceX's 2025 revenue and was its only profitable segment. It is funding the rockets and the AI bet.",
    keyNumbers: [
      { label: "Starlink share of 2025 revenue", value: "61%" },
      { label: "Starlink 2025 revenue", value: "$11.4B" },
      { label: "Starlink operating margin", value: "≈ 39%" },
      { label: "Starlink subscribers, 2025", value: "8.9M" },
    ],
    sections: [
      {
        heading: "Three businesses, one that pays",
        body: [
          "SpaceX's S-1 splits the company into three segments. In 2025, Starlink (connectivity) generated about $11.4 billion — roughly 61% of revenue — at around a 39% operating margin. The launch business brought in about $4.1 billion at a loss, and the AI segment about $3.2 billion at a much larger loss.",
          "In Q1 2026 the pattern held: Starlink made $3.26 billion of revenue and $1.19 billion of operating income, while the AI segment lost $2.47 billion.",
        ],
      },
      {
        heading: "The subscriber engine",
        body: [
          "Starlink subscribers grew from 2.3 million in 2023 to 4.4 million in 2024 and 8.9 million in 2025.",
        ],
      },
    ],
    takeaway: "SpaceX is valued like a rocket company, but it is paid like a subscription internet provider.",
    chart: { title: "SpaceX 2025 revenue by segment", bars: [{ label: "Starlink", value: 11.4, display: "$11.4B", tone: "good" }, { label: "Space (launch)", value: 4.1, display: "$4.1B", tone: "mut" }, { label: "AI", value: 3.2, display: "$3.2B", tone: "mut" }] },
    sources: [
      { title: "SpaceX's Limitless Ambition: an AI conglomerate (S-1 analysis) — Tomasz Tunguz", url: "https://tomtunguz.com/spacex-s1-analysis" },
      { title: "SpaceX is going public, but without Starlink there is no story — Outlook Business", url: "https://www.outlookbusiness.com/corporate/spacex-is-going-public-but-without-starlink-there-is-no-story" },
      { title: "6 charts on SpaceX's pre-IPO financials — Morningstar", url: "https://www.morningstar.com/stocks/6-charts-spacexs-s-1-financials" },
    ],
  },
];

export const getBreakdown = (slug: string) => breakdowns.find((b) => b.slug === slug);
