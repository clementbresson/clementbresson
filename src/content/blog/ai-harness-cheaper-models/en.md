---
title: "A good AI harness lets you use much cheaper models"
description: "On a codebase with broken import rules, Opus fixes it alone, Haiku falls for it, until an ESLint rule corrects it for 4 to 5 times less money."
pubDate: 2026-10-21
tags: ["ai-harnesses", "architecture"]
sources:
  - title: "Claude Opus"
    author: "Anthropic"
    url: https://www.anthropic.com/news/models
  - title: "Claude Haiku"
    author: "Anthropic"
    url: https://www.anthropic.com/news/models
  - title: "no-restricted-imports (ESLint rule)"
    url: https://eslint.org/docs/latest/rules/no-restricted-imports
  - title: "How Claude remembers your project (CLAUDE.md)"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/memory
draft: false
---

A good AI harness is a great way to… save money.

We often talk about the quality gain in generated code thanks to a good harness. But we talk a lot less about the other side of it: at equal quality, a harness also lets you use much cheaper models.

## The test

I ran a very simple test:

1. I set up a codebase following a [layered architecture](/blog/what-is-a-layer-in-software-architecture/).
2. I deliberately broke the import rules in a few files.
3. I stated the rules in a [CLAUDE.md](https://code.claude.com/docs/en/memory) (level-0 harness).

## Without a sensor, Haiku falls for it

Result on a feature request:

- [Opus](https://www.anthropic.com/news/models) saw that the existing code violated the rules, and managed to produce correct code.
- [Haiku](https://www.anthropic.com/news/models) fell straight into the trap: it reused the bad code and introduced new errors.

## With a sensor, Haiku fixes it on its own

I then reinforced the [harness](/blog/ai-harness-guides-and-sensors/) with [ESLint import rules](https://eslint.org/docs/latest/rules/no-restricted-imports) (with exceptions to keep the existing errors in place).

Result: Haiku makes the mistake, sees the (prompt-like) message from my custom rule… and fixes it directly, perfectly.

## The economics: a model 4 to 5 times cheaper becomes viable

We are talking about a model that becomes viable on certain well-scoped tasks, at a cost 4 to 5 times lower. What CLAUDE.md could only describe as an intention, [an ESLint rule turns into a constraint](/blog/architecture-rules-that-break-the-build/): the cheaper model no longer even needs to fully understand the rule, just to know how to fix it once the sensor flags it.

Today, we are still fed on cheap tokens, paying only a fraction of their real cost… but within a few years, the party will probably be over. And those who got ahead on their harness will be rubbing their hands.

So, you… where is your harness at?
