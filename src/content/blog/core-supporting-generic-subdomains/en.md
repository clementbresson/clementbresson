---
title: "Core, supporting, generic: the three kinds of subdomains"
description: "Analysing the business domain reveals three kinds of subdomains: core, supporting and generic. Mapping them tells you where to spend your time and effort."
pubDate: 2026-10-18
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7517542999543791616/
sources:
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: "Eric Evans"
    year: 2004
    url: https://www.domainlanguage.com/ddd/blue-book/
  - title: "Learning Domain-Driven Design"
    author: "Vlad Khononov"
    year: 2021
    url: https://vladikk.com/page/books/
  - title: "Stripe"
    url: https://stripe.com/
  - title: "Brevo"
    url: https://www.brevo.com/
  - title: "Postmark"
    url: https://postmarkapp.com/
draft: false
---

A piece of software exists to serve all or part of a **business domain**.

Analysing that business domain is crucial: it is what lets you identify the **subdomains**.

They fall into three categories.

## Core subdomains

This is where [the company's added value](/blog/the-value-is-in-the-business-rules/) over its competitors lives. The complex part (if it were simple, competitors would copy it fast), to be built in-house by the best people, and that will evolve a lot over time.

A few examples: routing for taxi software, the algorithms for recommendation software...

## Generic subdomains

The parts that are complex but common, for which ready-made solutions already exist. Don't reinvent the wheel, and don't waste time on them.

A few examples: payments ([Stripe](https://stripe.com/) or an equivalent), mailing ([Brevo](https://www.brevo.com/), [Postmark](https://postmarkapp.com/)), authentication (well-known patterns or an off-the-shelf library)... and so on.

## Supporting subdomains

Everything else! The parts specific to the program (so not generic), but that are not **the** heart of the value. Often less complex, less volatile, and a good starting point for upskilling or outsourcing.

A word of caution, though: they remain essential for the program to work properly.

A few examples: managing the product catalogue, connectors to third-party data...

## Why bother mapping all this?

Quite simply, to prioritise your time and effort.

- **Generic**: rebuilding = a waste of time and money. Paying for a third-party tool is often 20x more cost-effective.
- **Supporting**: a more junior profile can take care of it, with a clear frame. And you spend no more time on it than necessary.
- **Core**: the best engineers, maximum effort, iterations.

And in the worst case, you may even realise during the exercise that you have no real complex core domain. Then it is the viability of the whole project that needs rethinking.

This mapping is [one of the first exercises I run with a team](/work-with-me/).

Subdomains are often confused with bounded contexts: [here is how to tell them apart](/blog/subdomains-vs-bounded-contexts/).

PS: I'm not inventing anything here. This is a plain-language take on concepts at the heart of DDD ([Eric Evans](https://www.domainlanguage.com/ddd/blue-book/), [Vlad Khononov](https://vladikk.com/page/books/)... and others).

PPS: I keep these terms in English on purpose: translating them is counterproductive, I think. Better to speak the same language ;)
