---
title: "ALL-CAPS Driven Development: shouting at AI does not work"
description: "Shouting in capital letters at an AI to enforce an architecture rule does not work: a deterministic tool can check it for you instead."
pubDate: 2026-10-21
tags: ["architecture", "ai-harnesses"]
sources:
  - title: "eslint-plugin-boundaries"
    author: "Javier Brea"
    year: 2020
    url: https://github.com/javierbrea/eslint-plugin-boundaries
  - title: "The 'Godfather of AI' says it's not 'unreasonable' to believe there's a 10% chance the technology will end humanity"
    author: "Brent D. Griffiths, Business Insider"
    year: 2026
    url: https://www.businessinsider.com/geoffrey-hinton-godfather-of-ai-human-extinction-odds-2026-9
draft: false
---

Here is an example of ALL-CAPS Driven Development:

> DAMN IT CLAUDE, DO NOT IMPORT ANYTHING FROM THIS LAYER INTO THAT ONE !!!

Beyond the risk of being rude and blunt with it (at a time when [Geoffrey Hinton](https://www.businessinsider.com/geoffrey-hinton-godfather-of-ai-human-extinction-odds-2026-9) himself judges a 10% probability that AI wipes out humanity to be "not unreasonable"...), it is not very effective.

Why?

Because an import rule between layers can be checked in a deterministic, computational way.

For example with [dependency-cruiser](/blog/dependency-cruiser-as-a-sensor-for-ai-agents/) or [eslint-plugin-boundaries](https://github.com/javierbrea/eslint-plugin-boundaries) in the TypeScript world.

## Everything that can be checked without AI should be checked without AI

And there is one simple rule, far too often forgotten today: EVERYTHING that can be checked without AI should be checked without AI.

It is faster, cheaper, and it might add a few years to your life expectancy.

A rule set in a tool like dependency-cruiser or eslint-plugin-boundaries cannot be forgotten, bypassed out of fatigue, or misread. That is exactly [the difference between an intention and a constraint](/blog/architecture-rules-that-break-the-build/): written out in a prompt, the rule stays a pious wish; set in CI, it becomes impossible to cross.

ALL-CAPS Driven Development is also often a symptom of a project that tried to go fast from day one, without building its harness. [Slowing down at the start](/blog/slow-down-to-go-10x/) to build up that tooling is what keeps you from ending up there.
