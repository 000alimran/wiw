// Plain-English definitions. Each term is a page at /learn/<slug>, written to be quotable by search and AI answers:
// a one-sentence definition first, then an example and why it matters.

export type Term = {
  slug: string;
  term: string;
  short: string; // one-sentence definition
  body: string[];
  example?: string;
  related?: string[];
};

export const glossary: Term[] = [
  {
    slug: "safe",
    term: "SAFE (Simple Agreement for Future Equity)",
    short: "A SAFE is an investment contract where an investor pays money now in exchange for the right to receive shares later, usually when the company raises a priced round or goes public.",
    body: [
      "SAFEs were created by Y Combinator as a simpler alternative to convertible notes. They have no interest rate and no maturity date.",
      "Most SAFEs include a valuation cap and/or a discount, which decide how many shares the investor receives when the SAFE converts.",
    ],
    example: "An investor puts $100,000 into a startup on a SAFE with a $10M cap. If the company later raises at a $20M valuation, the SAFE converts as if the price were based on $10M, so the investor gets roughly twice as many shares as a new investor paying the same amount.",
    related: ["convertible-note", "fair-value-change"],
  },
  {
    slug: "convertible-note",
    term: "Convertible note",
    short: "A convertible note is a short-term loan to a company that converts into shares instead of being repaid in cash, usually at a future funding round.",
    body: [
      "Unlike a SAFE, a convertible note is debt: it typically carries an interest rate and a maturity date.",
      "Like a SAFE, it often has a valuation cap or discount that rewards early investors when it converts.",
    ],
    related: ["safe", "fair-value-change"],
  },
  {
    slug: "fair-value-change",
    term: "Fair-value change (non-cash loss)",
    short: "A fair-value change is a gain or loss a company records when an asset or liability it holds is re-measured at its current market value, even though no cash changes hands.",
    body: [
      "When a fast-growing company has convertible notes or SAFEs outstanding, a higher company valuation makes those instruments more valuable. Accounting rules require the company to record that increase as a loss.",
      "That is why a company can report a very large net loss while its operating business is close to break-even.",
    ],
    example: "Anthropic's amended S-1 reported a $104.0B net loss for January–September 2026, of which $94.3B was a fair-value change on convertible notes and SAFEs.",
    related: ["operating-income-vs-net-income", "safe"],
  },
  {
    slug: "operating-income-vs-net-income",
    term: "Operating income vs. net income",
    short: "Operating income is the profit from a company's core business (revenue minus operating costs); net income is what remains after everything else, including interest, taxes and non-operating items like fair-value changes.",
    body: [
      "Operating income shows whether the business itself makes money. Net income can swing widely because of one-off or non-cash items.",
      "When the two diverge sharply, read the notes to the financial statements to see what sits in between.",
    ],
    related: ["fair-value-change"],
  },
  {
    slug: "ipo-lock-up-period",
    term: "IPO lock-up period",
    short: "A lock-up period is a fixed time after an IPO — commonly 90 to 180 days — during which insiders such as employees and early investors agree not to sell their shares.",
    body: [
      "Lock-ups prevent a flood of insider selling right after a company lists. When a lock-up expires, the number of shares that can be sold rises, which can add selling pressure.",
      "Lock-up terms are disclosed in the company's IPO prospectus (S-1).",
    ],
    example: "Anthropic's IPO disclosures describe a 180-day lock-up for employees and 365 days for co-founders.",
    related: ["s-1-filing"],
  },
  {
    slug: "s-1-filing",
    term: "S-1 filing",
    short: "An S-1 is the registration statement a company files with the U.S. Securities and Exchange Commission (SEC) before an IPO, describing its business, financials and risks.",
    body: [
      "The S-1 (and its amendments, labelled S-1/A) is the most detailed public view of a company before it lists. It includes audited financial statements, risk factors and how the IPO money will be used.",
      "S-1 filings are free to read on the SEC's EDGAR database.",
    ],
    related: ["ipo-lock-up-period"],
  },
  {
    slug: "consumption-based-revenue",
    term: "Consumption-based (usage-based) revenue",
    short: "Consumption-based revenue is money a company earns in proportion to how much customers use its product — for example per API call, per gigabyte or per token — instead of a flat subscription fee.",
    body: [
      "Usage pricing lets revenue grow automatically as customers use more, but it also makes revenue less predictable than fixed subscriptions.",
      "Cloud and AI companies commonly use it. In AI, the unit is often the token: a small piece of text the model reads or writes.",
    ],
    example: "About 79% of Anthropic's revenue in the first nine months of 2026 was consumption-based.",
    related: ["fair-value-change"],
  },
  {
    slug: "compound-interest",
    term: "Compound interest",
    short: "Compound interest is growth earned on both your original money and on the growth it has already earned, so the total accelerates over time.",
    body: [
      "The longer money compounds, the larger the share of the final value that comes from growth rather than contributions.",
      "Time in the market and consistent contributions usually matter more than finding the perfect starting point.",
    ],
    example: "Investing $500 a month for 20 years at an illustrative 8% annual return grows to roughly $295,000, of which only $120,000 is your own contributions.",
    related: [],
  },
];

export const getTerm = (slug: string) => glossary.find((t) => t.slug === slug);
