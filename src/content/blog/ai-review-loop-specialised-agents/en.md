---
title: "My AI review workflow: specialised agents in a loop"
description: "Specialised review agents, a skill that reruns them in fresh sessions over several rounds, then a final artifact that presents the work that was done."
pubDate: 2026-10-22
tags: ["code-review", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7519103688796278784/
draft: false
---

My AI review workflow (for now).

## The workflow

1. You create a few specialised agents (security, conventions, overengineering, architecture... etc).
2. You create a `review-wrap-up` skill, in which you ask a review orchestrator to:
   - run up to X review rounds (usually 5 for me)
   - at each round, launch a [fresh, unbiased session](/blog/ai-code-less-secure-more-confident/) for each agent, reviewing from its own angle
   - sort the feedback, [check for false positives](/blog/ai-code-review-you-are-the-referee/), and fix as it goes
3. As a bonus, you ask that at the end of the reviews, a nice artifact be generated to present the work done, the way you like it:
   - the problem / the feature
   - the context
   - the chosen solution
   - how it was done
   - with diagrams, interactive blocks... etc

It eats up a few tokens. But once the work is "done", it's a single command to run (often a bit long) => plenty of small forgotten issues caught + a clean final presentation of the work done.

## Where the gains are

Then combined with [the technique I presented yesterday](/blog/github-pr-review-logical-reading-order/) (a skill + a Chrome extension to sort the GitHub diff in a logical order and into logical blocks, with descriptions)... it helps enormously.

Because we all know it: review has become [**the** bottleneck](/blog/the-next-bottleneck-is-ram/)... and so that's where all the gains are, if we manage to improve the situation.

PS: careful, this review loop in **no way** replaces proper scoping upfront, a clean architecture, real fundamentals, very limited technical debt, an [advanced harness](/blog/ai-harness-guides-and-sensors/)... etc. It's just **one** more tool at the end of the pipeline. Everything that comes before it is [the groundwork I do upstream with a team](/work-with-me/).
