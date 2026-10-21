---
title: "ADRs give AI agents the history your code can't tell"
description: "README, CLAUDE.md and AGENTS.md only describe the current state of the code. ADRs add the missing history: why that decision, which alternatives were ruled out."
pubDate: 2026-10-21
tags: ["architecture", "ai-harnesses"]
sources:
  - title: "AGENTS.md"
    url: https://agents.md/
  - title: "How Claude remembers your project (CLAUDE.md)"
    url: https://code.claude.com/docs/en/claude-md
  - title: "Notion"
    url: https://www.notion.com/
draft: false
---

Are you already using [ADRs](/blog/architecture-decision-records/) (Architecture Decision Records)?

If not, you're missing out on a big quality boost for your AI agents.

Why? Because to work well, an AI agent needs to know how you want things done.

## What the existing docs already tell

If things are going well, a good chunk of that knowledge is already in the repo: that's the existing state.

You find it in:

- the README
- the [CLAUDE.md](https://code.claude.com/docs/en/claude-md) / [AGENTS.md](https://agents.md/)
- the code itself (if it's not too horrible...)
- etc.

But all of that only tells the current state of things. That's already great, but it's missing: why it's like this, why it isn't some other way, the tradeoffs accepted along the way (there are always some).

In the end, what's missing is the history that led to this state.

## The role of ADRs

That's exactly what ADRs are for.

The concept is dead simple: as soon as a decision is made and its "why" needs to be kept on record, it goes into a file at `docs/adr/001-best-decision-ever.md`, with the date, the context, the choice, the alternatives ruled out... and so on.

## Useful for humans, essential for agents

For an AI, reading these files is instant. And it lets it understand the why behind the how, instead of revisiting a decision made three months earlier, like a goldfish in its bowl.

And that, among plenty of other things, contributes to a solid [AI harness](/blog/ai-harness-guides-and-sensors/).

## Don't bury them in a wiki

PS: whatever you do, don't go bury these files in a [Notion](https://www.notion.com/) nobody wants anymore, except the CEOs who heard back in 2019 that it was a must-have.

ADRs have to live as close as possible to the code they document: in the repo!

Happy designing!
