---
title: "Do your AI reviews converge? A health test for your codebase"
description: "Run 3 to 5 neutral AI review passes and compare the reports: if findings don't shrink each round, the problem is often your codebase, not the agents."
pubDate: 2026-11-17
tags: ["code-review", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7528539385680711682/
draft: false
---

Do your review agents never agree with each other?

The problem might be your codebase.

A good test to know whether it is [healthy enough](/blog/rigorous-codebase-best-ai-harness/) to really benefit from agentic development: watch your reviews **converge**.

## How to do it

1. If you don't have any... start by setting up [review agents](/blog/ai-review-loop-specialised-agents/) (it's not early 2026 anymore!).
2. Each agent must be completely unbiased on every pass: fresh context, a neutral review brief that never changes.
3. Run a pass: review + fix + save the report (what was found, what was fixed).
4. Repeat 3 to 5 times.
5. ...and compare the reports!

## Read the trend

There will always be minor remarks. What matters is the trend.

If findings shrink in number and severity with each round: good sign.

If each round finds new things, or even contradicts the previous one: there is work to do. Often:

- unclear review instructions;
- unclear code;
- patterns and conventions applied inconsistently in the existing code;
- a lack of standardisation;
- and so on.

## Work on the causes

Analyse these reports closely, and work on the causes. You will most likely:

- find real latent problems in your codebase;
- **and** gain a huge amount of efficiency from your coding agents.

Because what is unclear to your review agents... is probably unclear to your agents, full stop.

That is exactly the kind of diagnosis [I run when I join a team](/work-with-me/). And when two reviews contradict each other, [the referee has to be you](/blog/ai-code-review-you-are-the-referee/).
