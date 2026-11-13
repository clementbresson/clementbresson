# SEO / GEO strategy — clementbresson.com

Written 2026-11-13. Goal: inbound project leads (LinkedIn, email) from people who want to work with Clément specifically.

Search volumes below are **estimates** (Google autocomplete density, SERP composition, one public figure). No paid volume API was used yet; validating them is step 1 of the plan.

## 1. Diagnosis

| Area               | State                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Technical SEO      | Good: static, sitemap with hreflang, JSON-LD, robots open to every AI crawler, RSS, llms.txt.                                                                                                                |
| Indexing           | **Unknown / likely poor.** Domain live since 2026-09-16. The Brave-like index behind Claude search has zero pages of the site; a Bing `site:` query returns nothing. No Search Console or Bing WMT data yet. |
| Measurement        | **None.** No analytics, no way to know which page produces a contact.                                                                                                                                        |
| Conversion         | **Weakest point.** One 242-word home page. No service page, no offer, no case study, no price, no booking. Articles end with tags and "Read next": no path to contact.                                       |
| Entity consistency | Malt says "senior front-end/full-stack developer, €700/day"; the site says "Fractional Tech Lead". Search engines and LLMs see two different people.                                                         |
| Content            | Strong and distinctive: 38 bilingual articles, first-hand experiments, named concepts. Covers the right niche before anyone else in French.                                                                  |

The bottleneck is not content. It is **being indexed, being measurable, and turning a reader into a contact**.

## 2. Positioning and niche

**Sell:** _Fractional Tech Lead for teams adopting AI coding agents_ (FR: _Tech lead à temps partagé pour les équipes qui adoptent les agents IA_).

**Own (authority niche):** **harness engineering for coding agents** — guides and sensors, architecture rules that break the build, ADRs, CLAUDE.md/AGENTS.md, mutation testing as a sensor.

Why this niche:

- The term is new (Hashimoto, Feb 2026; Böckeler on martinfowler.com, Apr 2026) and rising; autocomplete is dense in EN and FR ("harness engineering for claude code", "vs context engineering", "harnais ia def").
- SERPs are vendor blogs, dev.to and Substacks in EN; **machine-translated vendor pages in FR**. No individual consultant owns it.
- It is literally what the blog already writes about, with first-hand experiments (the thing Google and LLMs reward and competitors can't copy).
- It converts: whoever searches "how to enforce architecture rules for AI agents" is a tech lead/CTO with a team and a budget.

**Do not chase:** "fractional CTO" (agencies and marketplaces, ~4K/mo, many searchers want the job), "CTO freelance" (Malt), "formation Claude Code" (Qualiopi training bodies), "TJM développeur freelance" (devs, not buyers). Use those words on service pages, don't build content to rank on them.

Pitfalls: always write "harness engineering **for coding agents**" (collision with Harness.io and with "agent harness" builders). In FR, never write "CTO" alone (it means _compte-titres ordinaire_).

## 3. Keyword targets

Opportunity 1–5 combines demand, difficulty for a new domain, and buyer intent.

### Commercial (service pages)

| Keyword                                              | Lang | Opp. | Where                                   |
| ---------------------------------------------------- | ---- | ---- | --------------------------------------- |
| consultant / expert Claude Code (+ "freelance")      | FR   | 5    | AI-harness offer page                   |
| fractional tech lead (+ vs fractional CTO, rates)    | EN   | 4    | Work-with-me page + FAQ                 |
| CTO à temps partagé / CTO temps partiel              | FR   | 4    | Work-with-me page (FR)                  |
| claude code consultant / claude code setup for teams | EN   | 4    | AI-harness offer page                   |
| audit app vibe codée / reprise projet IA             | FR   | 4    | Audit offer + article                   |
| agent readiness assessment / AI codebase audit       | EN   | 3    | Audit offer page                        |
| tech lead à temps partagé                            | FR   | 2    | H2 on FR page (nearly zero competition) |

### Informational (pillars and articles)

| Keyword                                                               | Lang  | Opp. | Status                                                  |
| --------------------------------------------------------------------- | ----- | ---- | ------------------------------------------------------- |
| harness engineering (définition, for claude code / coding agents)     | EN+FR | 5    | **Pillar to write**, hub for existing harness articles  |
| harness engineering vs context / prompt / spec-driven engineering     | EN+FR | 5    | New article                                             |
| enforce architecture rules for AI agents (dependency-cruiser, ESLint) | EN    | 5    | Existing articles to merge into one guide               |
| AGENTS.md vs CLAUDE.md / CLAUDE.md exemple / best practices           | EN+FR | 4    | New article, with real files from your repos            |
| mutation testing for AI coding agents                                 | EN    | 4    | Existing article, refresh with numbers                  |
| architecture hexagonale (vs clean vs onion)                           | FR    | 4    | **Missing**: the only big architecture term not covered |
| vertical slice architecture / functional core imperative shell (FR)   | FR    | 4    | Existing; FR SERP has no French result                  |
| ADR / architecture decision record (+ for AI agents)                  | EN+FR | 4    | Existing (2 articles), merge or link as a hub           |
| trouver un CTO : associé, salarié ou temps partagé ?                  | FR    | 4    | New article (founder intent, bridge to the offer)       |
| dette technique IA                                                    | FR    | 3    | New article                                             |
| how to review AI-generated code                                       | EN    | 3    | New article                                             |

## 4. Plan

### Phase 0 — Foundations (this week, ~half a day, all free)

1. **Google Search Console**: verify domain (DNS on Cloudflare), submit `sitemap-index.xml`, request indexing of home, blog and the 5 best articles. Its _Generative AI performance_ report (since June 2026) shows AI Overviews / AI Mode impressions.
2. **Bing Webmaster Tools**: import from GSC, submit sitemap, enable IndexNow. Bing feeds ChatGPT search and Copilot; its _AI Performance_ report shows citations.
3. **Analytics: Umami Cloud (free, 100K events/mo)**, with events on every outbound contact link (email, LinkedIn, Malt, booking). Cloudflare Web Analytics has no custom events, so it can't measure contacts.
4. **Cloudflare AI Crawl Control**: check that search crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot) aren't blocked at the edge, whatever robots.txt says.
5. **Entity consistency**: same headline everywhere — site, LinkedIn headline, Malt title, GitHub bio: "Fractional Tech Lead · AI coding agents & software architecture". Add the site URL on LinkedIn and Malt.
6. **Ask every lead "how did you find me?"**. With low volume, this is the most reliable attribution there is.

### Phase 1 — Conversion layer (weeks 1–3, code in this repo)

1. **Work-with-me page** (`/work-with-me/`, `/fr/work-with-me/`, same slug per the site's locale convention): who it's for / not for, the format (1–2 days/week, minimum duration), the four areas, how the first two weeks go, a price anchor, availability ("one slot from January"), FAQ (vs fractional CTO, vs agency, vs full-time hire), CTA.
2. **Entry step: the reset.** Every engagement starts with one or two weeks of understanding and foundations, ending with a full written report within two weeks; it can also be bought alone as an audit. Not marketed as a separate product, no price shown (see Decisions).
3. **A contextual CTA in every article**, chosen from the tags: a harness article ends with "I set this up for teams → audit", an architecture article with "I review architectures → work with me", etc. In-text and contextual beats a generic banner.
4. **Author box** under each article: photo, one line of positioning, LinkedIn + email + booking. It also strengthens the author entity for LLMs.
5. **Two or three case studies** with before/after numbers (anonymised if needed): founding-engineer stints, the current mission, the zero-hand-written-code experiment as an internal case.
6. **Booking link** (Cal.com, free, 30 min "fit call") next to email and LinkedIn; measure which one people use instead of guessing.
7. Home page: add one line naming the AI-agent angle and a link to the work-with-me page; keep it short.

### Phase 2 — Content (ongoing, ~1 cornerstone piece every 2 weeks, plus the LinkedIn-driven posts)

Order:

1. **Pillar: "Harness engineering for coding agents"** (EN+FR) — definition, guides vs sensors, the four boxes, a real TypeScript repo, links to every harness article. Comparison table vs context/prompt/spec-driven engineering.
2. **"Enforcing architecture rules for AI agents: dependency-cruiser, ESLint, architecture tests"** — consolidates the existing posts into the definitive guide; the existing posts link to it.
3. **"AGENTS.md vs CLAUDE.md"**, with your real files.
4. **"Architecture hexagonale vs clean vs onion"** (FR first), linking to existing clean/onion/layers articles.
5. **"Trouver un CTO : associé, salarié ou temps partagé ?"** (FR first) → work-with-me.
6. **"Audit d'une app vibe codée avant la mise en prod"** → audit offer.

Rules for every new article (GEO evidence: the Princeton GEO paper measured +28–43% visibility from citations, statistics and quotations, with the largest gains for low-ranked sites):

- One primary keyword, in title, H1, description and the first paragraph. Never rename a published slug.
- Lead with a 2–3 sentence direct answer or definition (what an LLM will lift).
- Your own numbers and experiments (cost per model, time saved, violation counts) — "non-commodity" content is what Google and LLMs say they reward, and what makes readers want _you_.
- Sourced claims, a comparison table when comparing, an FAQ section when the query is a question.
- A contextual CTA (Phase 1.3) and 2–3 internal links to the pillar.
- Refresh pillars every quarter (LLM-cited pages skew fresh; the git-derived `updatedDate` already handles the date).

### Phase 3 — Off-site authority (ongoing, the biggest GEO lever)

Off-site brand mentions correlate far more with AI Overview visibility than backlinks (Ahrefs, 75K brands: 0.66 vs 0.22). For a new domain, this is where most of the GEO gains come from.

1. **Open-source a harness starter repo** (dependency-cruiser config, ESLint boundaries, CLAUDE.md/AGENTS.md templates, ADR template) linked to the pillar. Developers link to repos, not to service pages; it is also proof of skill.
2. **Talks and podcasts**: meetups, in person or online (JS/TS, software craftsmanship, AI), FR dev podcasts. One talk on "harness engineering" can be recycled as an article and a video.
3. **Guest posts / bylines** where tech leads read (e.g. LeadDev in EN, JDN / Le Monde Informatique tribunes in FR on "dette technique IA").
4. **Lists and directories**: get into the "fractional CTO / tech lead France" listicles (contact their authors), keep Malt sharp and consistent.
5. **LinkedIn stays the distribution engine**: every post that becomes an article links back to it (already the case via `linkedin`), and every article is reposted with a link in the first comment.

## 5. Measurement

Monthly review (30 minutes):

| KPI                                                     | Source                                                                   | 6-month target (to be revisited with real data) |
| ------------------------------------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------- |
| Qualified leads per month, and where they came from     | Inbox + "how did you find me?"                                           | 2+ / month from site, LinkedIn excluded         |
| Clicks on contact links (email, LinkedIn, booking)      | Umami events                                                             | Trend up                                        |
| Impressions + clicks on the harness cluster (EN and FR) | GSC, filtered by page                                                    | Top 10 on 3+ harness queries                    |
| AI citations                                            | Bing AI Performance, GSC Gen-AI report                                   | First citations                                 |
| Prompt panel (below), by hand                           | ChatGPT, Perplexity, Claude, Gemini                                      | Mentioned on 3+ of 12 prompts                   |
| AI referrals                                            | Umami referrers (chatgpt.com, perplexity.ai, claude.ai, gemini, copilot) | Trend up                                        |

Prompt panel (ask monthly, same wording, note whether the site or name appears):

1. What is harness engineering for coding agents?
2. How do I enforce architecture rules when using Claude Code?
3. AGENTS.md vs CLAUDE.md: what should I put in each?
4. How do I make my codebase work well with AI coding agents?
5. Who can help my team adopt Claude Code? (+ FR: Qui peut accompagner mon équipe sur Claude Code ?)
6. Fractional tech lead in France / tech lead à temps partagé
7. Trouver un CTO à temps partagé pour une startup
8. C'est quoi le harness engineering ?
9. Architecture hexagonale vs clean architecture
10. Mutation testing for AI-generated tests
11. How to review AI-generated code in a team
12. Clément Bresson (does the answer match the positioning?)

Paid AI-visibility trackers (Otterly Lite, €29/mo) only once the manual panel starts showing citations.

## 6. Tools

| Tool                          | Cost                           | Use                                                                  |
| ----------------------------- | ------------------------------ | -------------------------------------------------------------------- |
| Google Search Console         | Free                           | Indexing, queries, AI Overviews impressions                          |
| Bing Webmaster Tools          | Free                           | Indexing (feeds ChatGPT / Copilot), AI citations, IndexNow           |
| Ahrefs free (webmaster tools) | Free                           | Site audit, backlinks once verified                                  |
| Umami Cloud Hobby             | Free                           | Analytics + contact-click events                                     |
| **DataForSEO**                | **$50 deposit, never expires** | Real FR/EN search volumes and difficulty, pulled by an agent via API |

Skip for now: Ahrefs Lite (€119/mo) and Semrush (€134/mo) — not enough data on a two-month-old domain to justify them.

## 7. Decisions

Taken (2026-11-13):

- **No published rates**, anywhere: not on the site, not for the audit. Pricing questions get "tell me about your project".
- **The audit is not sold as a product.** It is the first step of every engagement (the reset) and can be bought alone, mentioned in one line on the work-with-me page. Internal floor: from €2,500, full written report within two weeks.
- **Two buyer personas**, from the clients described in the blog: semi-technical founders and SME owners who vibe-coded a product and hit the wall; small dev teams adopting AI coding agents.

Open:

1. Which past missions can become case studies, and can clients be named or quoted?
2. Booking link (Cal.com) or email and LinkedIn only?

## Sources

- Google, AI features and your website: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, Generative AI performance report: https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- Bing, AI Performance in Webmaster Tools: https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- OpenAI, publishers and ChatGPT search: https://help.openai.com/en/articles/12627856-publishers-and-developers
- GEO: Generative Engine Optimization (Princeton/KDD 2024): https://arxiv.org/html/2311.09735v3
- Ahrefs, brand mentions vs AI Overviews: https://ahrefs.com/blog/ai-overview-brand-correlation/
- Ahrefs, freshness of AI-cited content: https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/
- Ahrefs, schema and AI citations: https://ahrefs.com/blog/schema-ai-citations/
- Exploding Topics, "fractional cto": https://explodingtopics.com/topic/fractional-cto
- DataForSEO pricing: https://dataforseo.com/pricing
- Umami pricing: https://umami.is/pricing
- FR competitors: https://fabricepayet.fr/services/cto-part-time, https://www.alvado.fr/, https://kairos.ing/fractional-cto, https://yassirjabbari.eu/offres/fractional-cto, https://kolapsis.com/services/cto-freelance-startup/
- EN reference consultants: https://www.amazingcto.com/, https://jhall.io/, https://rohitraj.tech/services/claude-code-consultant
