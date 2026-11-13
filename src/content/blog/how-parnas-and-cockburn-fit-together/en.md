---
title: "Parnas and Cockburn: how their two visions fit together"
description: "Cockburn's Ports & Adapters is one tactical application of Parnas's strategy: each Port/Adapter pair is a module that hides a technology choice."
pubDate: 2026-08-23
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7497231530801467392/
sources:
  - title: "On the Criteria To Be Used in Decomposing Systems into Modules"
    author: "David L. Parnas"
    year: 1972
    url: https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf
  - title: "The Secret History of Information Hiding"
    author: "David L. Parnas"
    year: 2002
    url: https://experts.mcmaster.ca/scholarly-works/1973746
  - title: "Hexagonal (Ports & Adapters) Architecture"
    author: "Alistair Cockburn"
    year: 2005
    url: https://alistair.cockburn.us/hexagonal-architecture/
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: "Eric Evans"
    year: 2004
    url: https://www.domainlanguage.com/ddd/blue-book/
draft: false
---

Software architecture: here is how Parnas's and Cockburn's visions fit together.

I recommend reading my previous articles on [Parnas's vision](/blog/parnas-criteria-for-decomposing-into-modules/) and [Cockburn's](/blog/hexagonal-architecture-ports-and-adapters/), but to sum up:

## The two visions in brief

1. **David Parnas** ([1972](https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf), then [2002](https://experts.mcmaster.ca/scholarly-works/1973746)): in a program, good modules hide the arbitrary decisions likely to change (e.g. PostgreSQL vs Mongo) **and/or** whatever, if visible, reduces the number of possible implementations of the module (e.g. `userId` = `string` rather than a `UserId` type, which can be an integer, a string, something else...).
2. **Alistair Cockburn** ([2005](https://alistair.cockburn.us/hexagonal-architecture/)): the Port/Adapter pattern, or Hexagonal Architecture => to be easier to test and/or drivable by several actors (user, CLI, script, other), a good program protects its inner business code from outer technology choices, through a system of Ports that define conversation contracts (for example a `UserRepository` interface) and Adapters, which are the technology implementations compatible with those Ports (e.g. `PostgresUserRepository`, `InMemoryUserRepository`).

## How these visions fit together

Now, the heart of the matter:

1. Cockburn's Port/Adapter is only **one tactical** application of Parnas's **strategic** vision (in the everyday sense, nothing to do with [Evans](https://www.domainlanguage.com/ddd/blue-book/)'s strategic/tactical DDD), to meet **one** decomposition goal: separating the outer technologies from the inner business code, to make the latter easier to test and reuse.
2. Each Cockburn Port/Adapter pair is a module in Parnas's sense. It hides an arbitrary technology choice (criterion number 1) from the business code while allowing as many implementations as possible (criterion number 2), if the Port is well thought out.

## Final notes

- The Port/Adapter pattern is only one tactic (however widespread and effective) for applying Parnas's strategy to the business/technology split. There are others.
- Parnas's strategy is much, much more general than the P/A pattern. You can apply it at every level, recursively, and across many fields (for example, inside the business code, you can have a complex hierarchy of modules applying Parnas's strategy for various needs).

Picking the right tactic for each decomposition is [the kind of design question I work through with teams](/work-with-me/).

Happy designing!
