---
title: "The boy scout rule: clean up a codebase without a big rewrite"
description: "Updating a codebase's conventions without a big bang rewrite: every time you touch a file, you apply the latest rules the team agreed on."
pubDate: 2026-10-21
tags: ["architecture", "code-review"]
sources:
  - title: "Clean Code: A Handbook of Agile Software Craftsmanship"
    author: "Robert C. Martin"
    year: 2008
    url: https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884
draft: false
---

Good practices and conventions on a codebase always evolve over time. And even when things look stable, there are often updates to deal with.

A nice rule to gradually get everything back in line, without a big bang rewrite: the [boy scout rule](https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884).

## The idea

Leave the place cleaner than you found it.

Concretely, when you touch an old file for some feature, you also take the chance to put in place the latest conventions the team has decided on.

## Little by little, everything gets back in shape

Between these touched-up files, the new files created the right way from the start, and the old files that get deleted over time... little by little, everything ends up in good shape everywhere.

It's remarkably effective: I've put it into practice, with results I've seen on several large codebases.

It's the same reflex a [Harness Engineer](/blog/harness-engineer-the-next-developer-role/) applies to [technical debt](/blog/daily-rates-after-ai/): deal with it as you go, rather than in a dedicated cleanup project.

Happy coding!
