---
title: "Harness ou software factory : la différence, et l'ordre à suivre"
description: "Le harness, c'est tout ce qui pilote la qualité de vos agents ; la software factory, l'orchestration par-dessus. Sans bon harness, on automatise de la dette."
pubDate: 2026-11-18
tags: ["ai-harnesses", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7528900077390565376/
sources:
  - title: "Claude Code"
    author: "Anthropic"
    url: https://claude.com/product/claude-code
  - title: "How Claude remembers your project (CLAUDE.md)"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/claude-md
  - title: "Linear"
    url: https://linear.app/
draft: false
---

Pour la plupart des devs, harness = [Claude Code](https://claude.com/product/claude-code), ce qui est autour du modèle.

Pour moi, Claude Code fait bien entendu partie du harness... mais ce n'est que le niveau zéro.

## Le harness, c'est tout ce qui entoure vos agents

Il faut y inclure tout ce qui fait que vos agents produisent de la qualité dans **votre** codebase :

- [l'état de la codebase existante](/fr/blog/rigorous-codebase-best-ai-harness/) (les agents l'utilisent... elle fait donc partie du prompt) ;
- les fichiers [CLAUDE / AGENTS](https://code.claude.com/docs/en/claude-md) ;
- les [ADR](/fr/blog/architecture-decision-records/), la documentation d'architecture ;
- vos [scripts](/fr/blog/deterministic-scripts-in-ai-harnesses/) (lint, tests, typecheck, seed...) ;
- la CI et les garde-fous ;
- les skills, les MCP, les hooks ;
- la qualité des tickets ;
- la qualité du prompt ;
- la gestion du contexte ;
- etc.

En gros, le harness, c'est **tout** ce qui permet de driver la qualité produite par vos agents de code. C'est le genre de harness que [je mets en place quand je rejoins une équipe](/fr/work-with-me/).

## Et la software factory ?

C'est quand vous rajoutez la couche orchestration (ce qui déclenche, arrête, reprend, finit les tâches) par-dessus vos agents (harness + modèle).

Exemple : un ticket arrive sur [Linear](https://linear.app/), des [agents travaillent en parallèle](/fr/blog/my-agentic-workflow-parallel-worktrees/), des vérifications tournent, une PR ressort, un humain relit (ou pas : dans ce cas, on parle de dark factory).

Le harness, c'est l'atelier bien équipé.
La software factory, c'est la ligne de production qui tourne dedans.

## Le piège : automatiser de la dette en série

Et d'ailleurs, le piège est là : si le harness est mauvais, vouloir passer à l'étape factory, c'est juste automatiser de la dette technique en série. Dette qui, si vous avez suivi, affaiblit au fur et à mesure le harness : cercle vicieux.

Donc, les étapes si vous voulez vraiment tirer parti de la puissance de l'ère agentique :

1. Assainissez et standardisez la codebase (à l'extrême).
2. Travaillez le harness (c'est lui la clé) tant que vos agents font encore des erreurs dans tous les sens.
3. Ensuite seulement, pensez à automatiser l'orchestration des agents.

C'est comme tout : des bases solides permettent d'accélérer de plus en plus vite. Tandis que si c'est bancal et fragile de tous les côtés : bon courage.
