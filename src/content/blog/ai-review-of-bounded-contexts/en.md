---
title: "Have an AI analyse your bounded contexts"
description: "Relationships, changes, language, maintenance: AI sub-agents analysing your bounded contexts can surface deep design problems before they cost you weeks."
pubDate: 2026-10-28
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7521339946838691842/
draft: false
---

If you do DDD, you have most likely split your program into [bounded contexts](/blog/why-design-bounded-contexts/).

(If not, maybe it is time to study the topic again haha)

If so, here is a fun exercise to try when you have a moment.

## Have an AI analyse your bounded contexts

Ask your favourite AI to analyse your bounded contexts, ideally with sub-agents, each with a clear focus:

- **Relationships**: who talks to whom, and how often
- **Changes**: who changes at the same time as whom, by looking at the git history
- **Language**: does each bounded context have a clear, unambiguous language, with business terms rather than technical jargon (outside the infra or presentation layers)? That is the ubiquitous language.
- **Maintenance**
- ...and so on

It can give you very good leads on potential deep design problems (once you have checked them yourself and/or run rounds of adversarial review by other AI agents).

## Days or weeks saved

And fixing things at that level... potentially means days or weeks saved later on.

Because in software engineering, a bad split creates (and will keep creating) **a lot** of problems. It is often much worse than no split at all.

Reworking a split at that level is [a job I can help you with](/work-with-me/).

Happy designing!
