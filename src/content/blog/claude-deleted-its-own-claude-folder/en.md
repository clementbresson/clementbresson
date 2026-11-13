---
title: "The developer isn't dead: Claude deleted its own .claude folder"
description: "Mid-feature, Claude deleted the .claude folder: skills and agents gone. Reading the git diff before pushing saved me. A warning for fully automated pipelines."
pubDate: 2026-05-19
tags: ["ai-harnesses", "code-review"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7462562348080300032/
sources:
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
draft: false
---

[The developer isn't dead yet](/work-with-me/).

Today, in the middle of a feature, [Claude](https://claude.com/product/claude-code) simply deleted the `.claude` folder from the codebase.

No more skills, no more agents, nothing left. It literally sabotaged itself.

Luckily, I saw the `git diff` before pushing and reverted it.

But spare a thought for those who trust a [100% automated pipeline](/blog/dream-ai-pipeline-single-vendor/), however well designed it is.

PS: I promise, this really happened :)
