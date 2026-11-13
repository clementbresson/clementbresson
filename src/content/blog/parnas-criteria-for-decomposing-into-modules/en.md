---
title: "Parnas, 1972: what criterion for splitting code into modules?"
description: "In 1972, David Parnas proposed decomposing a program not by flowchart steps but so that each module hides something difficult or likely to change."
pubDate: 2026-08-21
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7496510524621254657/
sources:
  - title: "On the Criteria To Be Used in Decomposing Systems into Modules"
    author: "David L. Parnas"
    year: 1972
    url: https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf
  - title: "The Secret History of Information Hiding"
    author: "David L. Parnas"
    year: 2002
    url: https://experts.mcmaster.ca/scholarly-works/1973746
draft: false
---

Every developer agrees that a program should be decomposed into modules... but according to which criterion?

David Parnas asked himself that question and tried to answer it [in 1972](https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf).

## 1972: hide what is difficult or likely to change

His view is that rather than splitting a program into steps taken from a flowchart (a widespread method), it is better to list what is difficult or likely to change in that program, then build each module to hide one of those things from the others.

This strategy brings three clear benefits:

1. the program is easier to understand (you can approach it one module at a time);
2. the program is easier to maintain (one change = few modules to change);
3. the program can evolve faster (people can easily work on modules in parallel).

He adds that a good module design makes the largest possible number of implementations possible, and that to get there, a module's interface must impose as little as possible on the implementation.

He also warns against a classic trap: thinking that because you have a good module hierarchy, your modules are well designed. Hierarchy and good design are two different things.

## 2002: thirty years later

He came back to it [30 years later, in 2002](https://experts.mcmaster.ca/scholarly-works/1973746), with new insights:

1. Unfortunately, decomposing by flowchart steps dies hard (still true in 2026!).
2. Unfortunately, economic reasons often mean the extra effort to design your modules well is not made (despite the future payoff! Short term vs long term...).
3. Last and most important, he goes further: it is often worth hiding information that will never change too, simply because hiding it allows better implementations.

## Parnas's problem

And in the end... most of the software architecture literature since then (DDD, [Clean Architecture](/blog/what-is-clean-architecture/), Hexagonal Architecture / Ports & Adapters, [Onion Architecture](/blog/what-is-onion-architecture/)...) tries to answer Parnas's problem: which strategies and tactics to use for [designing a clean decomposition of a complex program](/work-with-me/)...
