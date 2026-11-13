---
title: "Le dev n'est pas mort : Claude a supprimé son dossier .claude"
description: "Au détour d'une feature, Claude a supprimé le dossier .claude : skills et agents envolés. Le git diff relu avant de pousser m'a sauvé. Gare au 100 % automatisé."
pubDate: 2026-05-19
tags: ["ai-harnesses", "code-review"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7462562348080300032/
sources:
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
draft: false
---

[Le dev n'est pas encore mort](/fr/work-with-me/).

Aujourd'hui, au détour d'une feature, [Claude](https://claude.com/product/claude-code) a tout simplement supprimé le dossier `.claude` de la codebase.

Plus de skills, plus d'agents, plus rien. Il s'est littéralement auto-saboté.

Heureusement, j'ai vu le `git diff` avant de pousser et j'ai revert.

Mais petite pensée à ceux qui font confiance à une [pipeline 100 % automatisée](/fr/blog/dream-ai-pipeline-single-vendor/), aussi bien pensée soit-elle.

PS : promis, c'est véridique :)
