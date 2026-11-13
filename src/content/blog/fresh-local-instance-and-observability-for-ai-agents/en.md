---
title: "AI harnesses: a fresh, observable local instance"
description: "AGENTS.md and skills are not enough: to verify its work at runtime, an agent must run the complete program locally and observe all of it."
pubDate: 2026-09-20
tags: ["ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7507326248327659520/
sources:
  - title: "Is your codebase ready for a good AI harness?"
    author: "Clément Bresson"
    year: 2026
    url: https://harnessers.dev/en/blog/is-your-codebase-ready-for-an-ai-harness/
  - title: "AGENTS.md"
    url: https://agents.md/
  - title: "Docker Compose"
    author: "Docker"
    url: https://docs.docker.com/compose/
  - title: "OpenTelemetry"
    url: https://opentelemetry.io/
draft: false
---

For much better results, a coding agent must be able to:

1. launch a fresh instance of the complete program locally;
2. have maximal observability on that instance.

Your codebase may not be ready at all for a good [AI harness](/blog/ai-harness-guides-and-sensors/).

When people talk about AI harnesses, everyone immediately thinks of [AGENTS.md](https://agents.md/) files, skills, lint rules, type checks...

But once you get into serious agentic development, there are **two** other points that are absolutely necessary for the AI to verify its work in good conditions.

## 1. Start the whole program locally

The AI must be able to start everything that makes up the program locally, easily. For example with an `init.sh` that takes care of everything.

Note that if you work with [parallel agents through worktrees](/blog/slow-down-to-go-10x/) on the same machine... you will have to isolate everything per instance (dynamic ports, databases, volumes, [Docker Compose](https://docs.docker.com/compose/) project names...) to be able to run the complete program several times in parallel. And [plan for RAM](/blog/the-next-bottleneck-is-ram/)...

It is also important that the program starts in a clean state every time. Goodbye to the local database that lives on for months and months. Every startup must get its own fresh database with seeds (and potentially different sets depending on the tests).

## 2. An instance as observable as possible

Every complete instance of the program must be as observable as possible (logs, network, [OpenTelemetry](https://opentelemetry.io/), metrics...) and every agent must have full access to the observability of its own instance.

With this development environment, agents can verify their work at runtime. And the difference in results is striking!

New instructions also become possible: "no errors in the logs", "action under XXX ms", and so on.

It is [what I build first when a team hands me its repo](/work-with-me/).

Keep it in mind on your projects ;)

This article was first published on the [Harnessers blog](https://harnessers.dev/en/blog/is-your-codebase-ready-for-an-ai-harness/).
