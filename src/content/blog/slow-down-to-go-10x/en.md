---
title: "Reaching 10x in the agentic era starts by going 0.3x"
description: "To ship 10x faster with AI agents, you first have to slow down: a solid harness, clean parallelisation and mastered CI/CD before you accelerate."
pubDate: 2026-10-21
tags: ["ai-harnesses", "ai-era"]
draft: false
---

Go 0.3x at first.

You read that right: slow down.

Why?

Because reaching 10x leaves you no choice: you need agents working with real autonomy.

And for that not to end up in a wall, those agents need to run inside a solid [harness](/blog/ai-harness-guides-and-sensors/).

## What a good harness takes

A good harness means:

- a well-thought-out architecture
- business code that is very, very well designed, [documented](/blog/architecture-decision-records/) and tested (spoiler: that part is hard)
- a [custom-built linter](/blog/dependency-cruiser-as-a-sensor-for-ai-agents/)
- maximal local observability
- real AI code review from the start of the project
- iterating on all of it every time a gap shows up
- ... and dozens of other time-consuming things early on

## Parallelising without agents stepping on each other

But the harness is not enough. 10x does not come from a single agent.

And to parallelise the work across several agents without them stepping on each other, you need:

- [worktrees](/blog/orca-ade-at-a-glance/)
- dependency management specific to each worktree
- the ability to run several complete instances of the program, isolated from one another

And to ship all of that as you go: well-tuned, well-mastered CI/CD.

... and all of that takes time!

Hence a slower start on visible, shippable features, while many projects churn them out at full speed from day one.

But afterwards... you can really floor the accelerator.

## The wall waiting for the competitors in a hurry

Meanwhile, the competitors who seemed to be ahead in the first few weeks will start doing [ALL-CAPS Driven Development](/blog/all-caps-driven-development/). The goal: get their agents to straighten out a codebase riddled with problems (business code scattered so widely agents can no longer hold it in context, no conventions, files no human can pick back up...).

In the end, doing it slowly and well is the foundation for later doing it fast and well. And after only a few months, it is far, far faster and cheaper.

That was already true.

It is even more true today.

Act before you are buried under technical debt and bugs.
