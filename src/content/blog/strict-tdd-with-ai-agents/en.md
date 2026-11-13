---
title: "Strict TDD with AI agents: slower, pricier, and better"
description: "Forcing AI agents into strict TDD gives a better design and sturdier tests, at the cost of speed and money. And beyond the prompt, what about hooks?"
pubDate: 2026-10-06
tags: ["testing", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7513305270262034432/
sources:
  - title: "Superpowers"
    author: "Jesse Vincent"
    url: https://github.com/obra/superpowers
  - title: "Skills for Real Engineers"
    author: "Matt Pocock"
    url: https://github.com/mattpocock/skills
draft: false
---

Have you found a good setup to make your agents do TDD?

I am running lots of experiments at the moment.

One of them: forcing agents to work in strict TDD (the real thing, mind you, not test-before).

## The result

So far, I find the end result is almost always better:

- a better design
- problems spotted early
- much sturdier regression tests

The trade-offs (because there are some): slower agents, and higher costs.

Which suits me just fine, because [I work with ~5-6 agents](/work-with-me/) in parallel... and I would rather they take their time and do better than jump from one blunder to the next.

## Going further than the prompt

In short, I want to dig into the TDD + agents direction.

I have already used the TDD skills from [Superpowers](https://github.com/obra/superpowers) and from [Matt Pocock](https://github.com/mattpocock/skills).

They are great, but they are still... [just a prompt](/blog/architecture-rules-that-break-the-build/).

So I was wondering whether better setups exist to go further. Through hooks, for example?

Have any of you tried? Any lessons learned? If this rings a bell for anyone, I would love to hear about it!
