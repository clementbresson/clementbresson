---
title: "Building a program: the questions AI can't settle for you"
description: "Subdomains, bounded contexts, architecture, data, scale, security, prod: the questions to ask when you build a program, which AI alone cannot settle."
pubDate: 2026-11-01
tags: ["architecture", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7522603407271112704/
draft: false
---

When you develop a program, here are (some of) the questions to ask yourself:

## Business

- Which [subdomains](/blog/core-supporting-generic-subdomains/) deserve your energy? (Core)
- Which ones to outsource, or even vibe-code? (Supporting)
- Which ones to hand off for X €/month? (Generic)
- Do you really have a competitive advantage? And are you really putting your energy into it?

## Decomposition

- Which components? Which [bounded contexts](/blog/subdomains-vs-bounded-contexts/)?
- Which ones to protect from the others? ([Anti-Corruption Layer, Open Host Service](/blog/why-design-bounded-contexts/))
- Who is responsible for what? Under which organisational constraints?

## Architecture

- [Clean Architecture](/blog/what-is-clean-architecture/)? Vertical Slice? Where?
- Which parts to decouple from the infra? ([Ports & Adapters](/blog/hexagonal-architecture-ports-and-adapters/))
- [Transaction Script](/blog/architecture-and-craftsmanship-in-the-ai-era/)? Data Mapper? Active Record?
- Event Sourcing? CQRS? Where?
- Which [testing strategy](/blog/choosing-the-right-test-double/)?

## Data

- Relational? Documents? Vector? A mix?
- What must be [consistent immediately](/blog/ddd-aggregate-consistency-boundary/)? Eventually?
- How do you [separate data between customers](/blog/multi-tenant-data-isolation-four-levels/)?

## Scale

- How do the services communicate?
- Which parts must scale on their own? At what cost?

## Front

- An app? SSR, ISR for SEO/GEO?
- i18n right now?

## Security & compliance

- Scopes? Permissions? [Secrets](/blog/secret-api-keys-in-page-source/)?
- GDPR: are you really deleting / anonymising the data?
- Tracking consent: can you prove it? Even when it changes over time? (Hello, Event Sourcing)

## Prod

- What level of observability? Of tracking?
- What to do in an emergency? Can you roll back fast?

## What AI alone cannot settle

That's a lot of questions an AI alone **cannot** settle correctly in a vibe-coded project, if you don't have the necessary knowledge. Because:

- it doesn't have the full context
- the answers are not black or white: they are only tradeoffs
- on a large context, its attention issues lead to bad, very costly answers
- [if you don't ask it (properly)](/blog/ai-does-only-what-you-ask/), it won't do it

And a bad start doesn't show in the first months... but costs enormously later. [Changing the foundations](/blog/sound-architecture-over-correct-features/) is very hard.

Vibe coding is great... on a project where the critical decisions are framed! ([Get someone to guide you](/work-with-me/))

And fellow devs: if you are not putting your [learning energy](/blog/learning-to-learn-efficiently/) into these topics in 2026... get on it at full speed. That is already where the job lies.

What to do. How to do it. Why to do it.

"Doing" is worth almost nothing anymore.

Happy learning!
