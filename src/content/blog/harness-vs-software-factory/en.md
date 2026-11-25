---
title: "Harness vs software factory: what each is, and which comes first"
description: "The harness is everything that drives your agents' quality; the software factory is the orchestration on top. Without a good harness, you automate debt."
pubDate: 2026-11-18
tags: ["ai-harnesses", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7528900077390565376/
sources:
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
  - title: "How Claude remembers your project (CLAUDE.md)"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/claude-md
  - title: "Linear"
    url: https://linear.app/
draft: false
---

For most developers, harness = [Claude Code](https://claude.com/product/claude-code), the thing around the model.

For me, Claude Code is of course part of the harness... but it is only level zero.

## The harness is everything around your agents

You have to include everything that makes your agents produce quality in **your** codebase:

- [the state of the existing codebase](/blog/rigorous-codebase-best-ai-harness/) (agents use it... so it is part of the prompt);
- the [CLAUDE / AGENTS](https://code.claude.com/docs/en/claude-md) files;
- [ADRs](/blog/architecture-decision-records/), the architecture documentation;
- your [scripts](/blog/deterministic-scripts-in-ai-harnesses/) (lint, tests, typecheck, seed...);
- CI and guardrails;
- skills, MCP servers, hooks;
- the quality of the tickets;
- the quality of the prompt;
- context management;
- and so on.

In short, the harness is **everything** that drives the quality your coding agents produce. It is the kind of harness [I set up when I join a team](/work-with-me/).

## And the software factory?

That is when you add the orchestration layer (what starts, stops, resumes and finishes tasks) on top of your agents (harness + model).

Example: a ticket lands in [Linear](https://linear.app/), [agents work in parallel](/blog/my-agentic-workflow-parallel-worktrees/), checks run, a PR comes out, a human reviews it (or not: then it is called a dark factory).

The harness is the well-equipped workshop.
The software factory is the production line running inside it.

## The trap: mass-producing debt

And that is exactly where the trap is: if the harness is bad, moving on to the factory stage just mass-produces technical debt. Debt which, if you have been following, gradually weakens the harness: a vicious circle.

So, the steps if you really want to make the most of the agentic era:

1. Clean up and standardise the codebase (to the extreme).
2. Work on the harness (it is the key) as long as your agents still make mistakes all over the place.
3. Only then, think about automating agent orchestration.

Like everything else: solid foundations let you accelerate faster and faster. Whereas if everything is shaky and fragile: good luck.
