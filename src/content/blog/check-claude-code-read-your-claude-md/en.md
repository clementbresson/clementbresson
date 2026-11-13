---
title: "Claude Code: check that it really read your CLAUDE.md"
description: "A Claude Code trick to check it has read both your personal and project CLAUDE.md: have it greet you by your first name at the start of every conversation."
pubDate: 2025-11-29
tags: ["ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7400670019564765184/
sources:
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
  - title: "How Claude remembers your project (CLAUDE.md)"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/memory
draft: false
---

To make sure [Claude Code](https://claude.com/product/claude-code) has read at least your personal [CLAUDE.md](https://code.claude.com/docs/en/memory) and the project's CLAUDE.md (because sometimes it seems to [skip them](/blog/all-caps-driven-development/)):

1. In the first one, ask it to always greet you by your first name at the start of a conversation.
2. In the second one, say what your name is.

=> If it says hello to you by name, you're good!

This little safeguard ends up in [every Claude Code setup I configure](/work-with-me/).

PS: the same technique can be used in plenty of creative ways, but the concept stays the same :)
