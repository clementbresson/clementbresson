---
title: "Maintenance effort = Integration strength × Distance × Volatility"
description: "Vlad Khononov's formula from DDD Europe: maintenance effort is strength times distance times volatility, and zeroing just one dimension collapses it."
pubDate: 2026-10-21
tags: ["architecture", "ai-era"]
sources:
  - title: "Balancing Coupling in Software Design (talk)"
    author: "Vlad Khononov"
    year: 2023
    url: https://2023.dddeurope.com/program/balancing-coupling-in-software-design/
  - title: "Balancing Coupling in Software Design"
    author: "Vlad Khononov"
    year: 2024
    url: https://vladikk.com/page/books/
draft: false
---

How do you shrink an application's maintenance effort to the bare minimum?

In a world where producing code at scale has never been this easy, the question of maintenance becomes critical.

To answer it, [Vlad Khononov](https://vladikk.com) presented at [DDD Europe](https://2023.dddeurope.com/program/balancing-coupling-in-software-design/) a brilliant formula, since turned into the core of his book [_Balancing Coupling in Software Design_](https://vladikk.com/page/books/):

**Maintenance effort = Integration strength × Distance × Volatility**

## The three dimensions

**Integration strength** ranges from intrusive [coupling](/blog/what-does-a-depends-on-b-mean/) (the worst) to contract-based coupling (the best).

**Distance** ranges from methods within the same class (low) to components of distinct systems, owned by different teams (high).

**Volatility** is how often things change: from things that never change (none) to things that change several times a day.

Obviously, when all three stack up, the effort explodes (picture components of different systems, owned by different teams, that have to evolve in perfect sync several times a day...).

## The real genius of the formula

Even if two dimensions are very high, bringing **just one** dimension close to zero is enough to make the effort collapse.

- Strong integration and high distance? Not a problem if it never changes.
- High distance and high volatility? Not a problem if the integration goes through a contract.
- Strong integration and high volatility? Not a problem if it all happens inside the same class.

This is the kind of conceptualization that very concretely helps you make the day-to-day decisions that keep a program maintainable.

It is also exactly the kind of topic AI is not good at at all, and where [a developer's value](/blog/harness-engineer-the-next-developer-role/) lies (and increasingly so).

I can only recommend watching the full talk. And I am going straight ahead to buy the book :)

Happy designing!
