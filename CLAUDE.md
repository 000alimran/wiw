# wealthinwhisper.com — instructions for Claude

Next.js 15 site; Hostinger auto-deploys `main` on every push (that is going live). Work on a branch, show Imran, merge only when he approves.

Content is plain data — edit these, not pages:
- `lib/breakdowns.ts` — one entry per business breakdown (pairs with a WIW short; add `youtubeId` once the Short is live). Every number needs a source in `sources`; mark our own calculations "our math".
- `lib/glossary.ts` — /learn terms: one-sentence definition first (`short`), then body, example, related slugs.
- `lib/content.ts` — Whispers essays. `lib/tool-catalog.ts` + `app/tools/[slug]/ToolCalculator.tsx` — calculators (currency via `useCurrencySymbol()`).
Sitemap, robots and /llms.txt update themselves from these files. Run `npm run build` before pushing.
