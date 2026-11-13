---
title: "Review GitHub PRs in a logical reading order, not alphabetical"
description: "GitHub sorts PR files alphabetically. A skill that orders the diff into logical blocks and a Chrome extension that reorders the review: 15 minutes to vibe-code."
pubDate: 2026-10-21
tags: ["code-review", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7518738966284771329/
sources:
  - title: "Reviewing proposed changes in a pull request"
    author: "GitHub"
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request
  - title: "Extend Claude with skills"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/skills
  - title: "Chrome Extensions: Get started"
    author: "Google"
    url: https://developer.chrome.com/docs/extensions/get-started
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
  - title: "GitLab"
    author: "GitLab"
    url: https://about.gitlab.com/
draft: false
---

How do you **drastically** improve your PR review experience on [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)?

In under 15 minutes?

Super simple!

## The problem: alphabetical order

Personally, one thing I have always hated about PR review... is that the files are sorted alphabetically.

We spend a huge share of our mental energy reading pieces that make no sense on their own, to (try to) understand the overall logic little by little.

Hell.

Or else, we ask the author directly to give us a guided tour.

Nicer, and a chance to have a laugh, but not always the most efficient.

I think every developer has gone through this pain for hundreds (thousands?) of hours in their life.

Well, from tomorrow, I promise, it's over!

## Two things to vibe-code

Ask your AI to vibe-code 2 things for you (yes, I said the dirty word...):

1. A [skill](https://code.claude.com/docs/en/skills) that takes a PR, reads the `git diff`, and outputs the list of files in a **logical** reading order, grouped into blocks with a description for each. For example:
   - first the types, in these 4 files
   - then the domain rules, in these 3 files
   - then the orchestration of all that, in **this** central file where everything comes to life
   - and finally, 3 unrelated changes, just improvements made along the way (we usually avoid it... but we all do it at some point)

   The skill then posts this list at the end of the PR description.

2. A [Chrome extension](https://developer.chrome.com/docs/extensions/get-started) that, when you open the "Files changed" tab of a PR containing this list... reorders the files in the logical reading order **and** inserts the description of each block. All of it from the PR description.

TA-DA!

You now do your review in an order that makes sense, grouped and described... all in your usual place, where you mark files as viewed and comment.

I promise, it takes 15 minutes to vibe-code, and it **changes** your life (for us mere mortals who still read a few PRs now and then).

## The concept before the tool

And the idea can surely be adapted to any agent (I did it for [Claude Code](https://claude.com/product/claude-code)), to [GitLab](https://about.gitlab.com/), to another browser, with your favourite reading order... or even as a home-made IDE extension for those who review in there.

What matters is just the concept and the strategy. Small home-made tools like these are also [part of what I bring to a dev team](/work-with-me/).

Give it a try, and let me know how it goes :)

PS: when GitHub changes its interface, there will probably be some micro-maintenance... but it's quick to fix and trivial compared to the time and energy it saves.
