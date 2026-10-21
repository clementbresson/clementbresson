---
title: "Where the value of a tech project really lives"
description: "Business rules, not technology, hold 80% of a tech project's value. Yet most projects start with code choices or the first screens instead."
pubDate: 2026-10-21
tags: ["architecture"]
draft: false
---

The value of the vast majority of tech projects lies in the business rules:

- modeling the different entities
- the relationships that govern them
- what is possible and what isn't
- what must stay in sync
- who is allowed to do what... and so on

And yet... how many projects start head-first with the choice of technologies, the visual identity, or the first screens?

## A fundamental mistake

It means focusing on what is the most volatile, and brings the least value.

And there's a good chance those choices won't be the right ones... and that the technology will very soon get in the way of a fine-grained modeling of the business.

Hacks will pile up, poorly thought-out entities will become rigid and incomprehensible.

I'd guess every developer or tech project lead has lived through this at least once!

## The fix: set the keyboard aside

[Set the keyboard aside](/blog/the-first-week-without-code/), forget your code and your frameworks... and think **only** about the business.

- what is a User, an Admin, a Client?
- can these roles be combined?
- what does "an Event is past" mean?
- ... and so on, depending on your project.

In fact, it's possible to build the entire core of a program before a single line even exists in the database, or before the first button is designed.

## The Domain, the core that decides everything

In software architecture, that business core is called the [Domain](/blog/model-orm-vs-domain-model/). And please, cherish it: that's where 80% of a project's success or failure is decided.

10 days spent purely thinking about the business upfront can potentially save 9 months of debt and bugs two years later...

And once that business is modeled, the code still has to tell apart [a business rule from a bug](/blog/result-pattern-business-errors/): the two don't get handled the same way.
