---
title: "My agentic workflow: worktrees, TDD, reviews and a master"
description: "5-6 parallel sessions, one worktree per task, an advanced harness, enforced TDD, 8 review agents and a master session: my current agentic workflow."
pubDate: 2026-10-24
tags: ["ai-harnesses", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7519770396221624320/
sources:
  - title: "Orca — The agent development environment"
    author: "Stably"
    year: 2026
    url: https://www.onorca.dev/
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
  - title: "ESLint"
    url: https://eslint.org/
  - title: "TypeScript"
    url: https://www.typescriptlang.org/
  - title: "What is the Max plan?"
    author: "Anthropic"
    url: https://support.claude.com/en/articles/11049741-what-is-the-max-plan
  - title: "Introducing Claude Opus 5.5"
    author: "Anthropic"
    year: 2026
    url: https://www.anthropic.com/claude-opus-5-5
  - title: "Continue local sessions from any device with Remote Control"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/remote-control
draft: false
---

You hear a lot about AI... but rarely anything concrete. So here goes: this is my current agentic workflow.

## First, the setup

- Monorepo codebases, with the ability to spin up [a complete instance](/blog/fresh-local-instance-and-observability-for-ai-agents/) (e.g. API + DB + user client + admin client + app + containers for every external service, often faked locally) isolated **per** worktree.
- [Orca](https://www.onorca.dev/), with 5-6 sessions in parallel on average.
- 1 [worktree](/blog/slow-down-to-go-10x/) = 1 complete task, from A to Z.
- An [advanced harness](/blog/ai-harness-guides-and-sensors/) (and I don't just mean [Claude Code](https://claude.com/product/claude-code)):
  - lots and lots of custom [ESLint](https://eslint.org/) rules;
  - `tsc` ([TypeScript](https://www.typescriptlang.org/));
  - batteries of tests;
  - a mandatory loop that forces every agent to do **everything** [in TDD](/blog/strict-tdd-with-ai-agents/). Red, Green, Refactor => careful, **not** test first. Real mini-iterations;
  - all of it triggered at the right moment with hooks, for a good balance between performance and guardrails.
- A [review system with 8 agents](/blog/ai-review-loop-specialised-agents/), each specialised in one topic (security, performance, following conventions, DDD... etc). **Each** one runs 5x with a fresh context, to stay unbiased on every round, with a cross-check system for false positives. And at the end of the review: a very thorough artifact presenting the work done, with diagrams and a change-by-change explanation, the way a colleague would.

This is the kind of setup [I help teams build on their own codebases](/work-with-me/).

## Then, my day

- I scope 4-5 topics.
- I start a worktree with its own session for each.
- I start a "master" session, whose job is to check every ~1 min whether one of the others is stuck.
- As soon as an agent thinks it's done => the master kicks off the review.
- Review done: if things were still found in the last rounds => run it again.

And the master tells me when something is 100% done: implementation + review round(s) + artifact.

That's when I step in for the final check... often 95% perfect.

And while the ~5 agents run, I think and scope the next topics, or I learn things.

Day-to-day work in this job has **nothing** in common with what it was just 9 months ago...

Happy building!

PS: I'm on [Claude Max](https://support.claude.com/en/articles/11049741-what-is-the-max-plan) at $200... and I still hit the weekly limits. That's not a goal in itself (token maxing is silly, I think), but TDD cycles + reviews are hungry. I'd rather go a bit slower with (over-)checked work than have to put up with nonsense all day long.

PPS: [Opus 5.5](https://www.anthropic.com/claude-opus-5-5) on High effort almost all the time.

PPPS: oh! And the upside of the master is that with a quick [`/remote-control`](https://code.claude.com/docs/en/remote-control) I can check on all of this from my phone. Handy, especially during the sometimes long waiting phases.
