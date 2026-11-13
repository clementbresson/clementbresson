---
title: '"Co-Authored-By: Claude": the three camps of the debate'
description: 'Keep or remove "Co-Authored-By: Claude" from your commits? Honesty, a metric, visual noise, free advertising: the arguments of the debate, summed up.'
pubDate: 2026-10-30
tags: ["ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7522017627859226624/
sources:
  - title: "Creating a commit with multiple authors"
    author: "GitHub"
    url: https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors
  - title: "Claude"
    author: "Anthropic"
    url: https://claude.com/product/overview
  - title: "Anthropic"
    author: "Anthropic"
    url: https://www.anthropic.com/
draft: false
---

[I asked yesterday](/blog/co-authored-by-claude-in-commits/) whether you own the `Co-Authored-By: Claude` lines in your commits.

And I did not expect it to turn into such a debate hahaha!

So it brought out lots of more or less good reasons, which I've compiled here to sum them up.

## Camp 1: those who keep the line

- Intellectual honesty.
- Why bother?
- They keep the responsibility.
- It becomes a metric (that's an interesting one): the share of AI-generated code, correlation when analysing an incident, help when reviewing PRs.
- A proposal to go further: flag the model, the provider, etc. to make that data even better for analysis.

## Camp 2: those who remove it (for good reasons)

- Visual noise: the [Claude](https://claude.com/product/overview) icon all over [GitHub](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors), hiding the real authors (true!).
- We never signed our commits with our IDE or our compiler.
- [Anthropic](https://www.anthropic.com/) takes no responsibility for the commit... so why co-sign?
- No wish to give free advertising to your provider.

## Camp 3: those who remove it because they don't own it

(A cheap little jab haha)

## Where I stand

For now, I'm still on team own-it, including on [the client projects I back](/work-with-me/), keeping in mind that potentially going further with the model, for analysis later on, is really interesting!

Thanks to everyone who took part in the debate :)

Happy coding!
