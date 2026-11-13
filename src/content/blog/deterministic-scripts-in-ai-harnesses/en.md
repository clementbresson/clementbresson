---
title: "AI harnesses: scripts, the underused deterministic tool"
description: "A skill tells the AI how to create files; a script does it for the AI, deterministically. Cheaper and more robust: a concrete example with a git-based CMS."
pubDate: 2026-09-19
tags: ["ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7507013824546365440/
sources:
  - title: "Harness engineering for coding agent users"
    author: "Birgitta Böckeler"
    year: 2026
    url: https://martinfowler.com/articles/harness-engineering.html
draft: false
---

A good [AI harness](/blog/ai-harness-guides-and-sensors/) is, above all, a harness that is as deterministic as possible.

And I think scripts are currently underused in this area.

Here is a recent example.

## The need

Client need: handle post creation in a git-based CMS (for the less technical: articles stored directly in the codebase, so no external CMS and no DB).

The goal being that the human writes the article, and the AI takes care of adding it to the CMS and publishing it.

## Basic AI harness: a skill

Creating a skill for an AI agent that explains how to do things right from a text: fixing typos, translating into a 2nd language, fetching existing articles to add internal links, creating the files.

Read that last point again: creating the files.

Of course, an LLM will do it right most of the time. Because there are 300 posts next to it in the same format, and it is dull, mechanical work.

But it is still an intention dictated in a skill prompt... [not an unbreakable rule](/blog/architecture-rules-that-break-the-build/). Nothing prevents a bad surprise one day when the model got out of bed on the wrong side.

## More advanced AI harness: a script

Write a script that handles 100% of file creation on disk. The LLM sends its texts to the script... which validates the data and creates the files deterministically and almost instantly.

It is both cheaper and more robust.

The LLM only takes care of its own part: translating, correcting text, spotting good links between articles... and then delegates the rest to the script.

This strategy works really, really well as soon as you hit something the AI does repetitively, and that must be strictly identical every time.

In [Böckeler](https://martinfowler.com/articles/harness-engineering.html)'s definitions, this is a feedforward sensor of a good AI harness.

As always, it starts from an identified need, and has to be [tailored to each project](/work-with-me/).
