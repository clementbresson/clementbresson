---
title: "Les ADR racontent à l'IA l'histoire que le code ne raconte pas"
description: "README, CLAUDE.md et AGENTS.md ne racontent que l'état actuel du code. Les ADR ajoutent l'histoire : pourquoi cette décision, quelles alternatives écartées."
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

Utilisez-vous déjà les [ADR](/fr/blog/architecture-decision-records/) (Architecture Decision Records) ?

Si la réponse est non, vous passez à côté d'un gros gain de qualité pour vos agents IA.

Pourquoi ? Parce que pour bien travailler, un agent IA a besoin de savoir comment vous voulez faire les choses.

## Ce que l'existant raconte déjà

Si tout va bien, une bonne partie de cette connaissance est déjà dans le repo : c'est l'existant.

On le retrouve dans :

- le README
- le [CLAUDE.md](https://code.claude.com/docs/en/claude-md) / [AGENTS.md](https://agents.md/)
- le code lui-même (si pas trop horrible...)
- etc.

Mais tout ça ne raconte que l'état actuel des choses. C'est déjà très bien, mais il manque : pourquoi c'est comme ça, pourquoi ce n'est pas autrement, les tradeoffs assumés (il y en a toujours).

En définitive, il manque l'histoire qui a mené à cet état.

## Le rôle des ADR

C'est exactement le rôle des ADR.

Le concept est tout simple : dès qu'une décision est prise et qu'il faut garder une trace de son pourquoi, ça part dans un fichier `docs/adr/001-best-decision-ever.md`, avec la date, le contexte, le choix, les alternatives écartées... etc.

## Utile pour les humains, surtout pour les agents

Pour une IA, lire ces fichiers est instantané. Et ça lui permet de comprendre le pourquoi du comment, au lieu de revenir sur une décision prise trois mois plus tôt, comme un poisson rouge dans son bocal.

Et ça, parmi plein d'autres choses, contribue à un [harnais IA](/fr/blog/ai-harness-guides-and-sensors/) solide.

## Ne les enterrez pas dans un wiki

PS : surtout, n'allez pas enterrer ces fichiers dans un [Notion](https://www.notion.com/) dont plus personne ne veut, sauf les CEOs qui ont entendu en 2019 que c'était le must.

Les ADR doivent vivre au plus près du code qu'ils documentent : dans le repo !

Bon designs !
