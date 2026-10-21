---
title: "Un bon harnais IA permet d'utiliser des modèles moins chers"
description: "Sur une codebase aux règles d'import enfreintes, Opus corrige seul, Haiku s'y fait piéger, jusqu'à ce qu'une règle ESLint le corrige pour 4 à 5 fois moins cher."
pubDate: 2026-10-21
tags: ["ai-harnesses", "architecture"]
sources:
  - title: "Claude Opus"
    author: "Anthropic"
    url: https://www.anthropic.com/news/models
  - title: "Claude Haiku"
    author: "Anthropic"
    url: https://www.anthropic.com/news/models
  - title: "no-restricted-imports (ESLint rule)"
    url: https://eslint.org/docs/latest/rules/no-restricted-imports
  - title: "How Claude remembers your project (CLAUDE.md)"
    author: "Anthropic"
    url: https://code.claude.com/docs/en/memory
draft: false
---

Un bon harnais IA est une excellente façon de… faire des économies.

On parle souvent du gain de qualité du code généré grâce à un bon harnais. Mais on parle beaucoup moins de l'autre facette : à qualité égale, le harnais permet aussi d'utiliser des modèles bien moins coûteux.

## Le test

J'ai fait un test tout bête :

1. J'ai mis en place une codebase qui suit une [architecture en couches](/fr/blog/what-is-a-layer-in-software-architecture/).
2. J'ai volontairement enfreint les règles d'imports dans quelques fichiers.
3. J'ai indiqué les règles dans un [CLAUDE.md](https://code.claude.com/docs/en/memory) (harnais niveau 0).

## Sans capteur, Haiku tombe dans le panneau

Résultat sur une demande de feature :

- [Opus](https://www.anthropic.com/news/models) a vu que le code existant enfreignait les règles, et a su produire du code correct.
- [Haiku](https://www.anthropic.com/news/models) est tombé tout droit dans le panneau : il a réutilisé le mauvais code et introduit de nouvelles erreurs.

## Avec un capteur, Haiku corrige tout seul

J'ai ensuite renforcé le [harnais](/fr/blog/ai-harness-guides-and-sensors/) avec des [règles d'import ESLint](https://eslint.org/docs/latest/rules/no-restricted-imports) (avec des exceptions pour conserver les erreurs existantes).

Résultat : Haiku fait l'erreur, voit le message (prompt-like) de ma règle custom… et corrige directement, parfaitement.

## L'économie : un modèle 4 à 5 fois moins cher devient viable

On parle d'un modèle qui devient viable sur certaines tâches bien cadrées, pour un coût 4 à 5 fois inférieur. Ce que CLAUDE.md ne faisait que décrire comme une intention, [une règle ESLint le transforme en contrainte](/fr/blog/architecture-rules-that-break-the-build/) : le modèle le moins cher n'a même plus besoin de bien comprendre la règle, juste de savoir la corriger quand le capteur la lui signale.

Aujourd'hui, on est encore biberonnés aux tokens pas chers, qu'on paie une fraction de leur coût réel… mais d'ici quelques années, la fête sera probablement finie. Et ceux qui auront pris une longueur d'avance sur le harnais se frotteront les mains.

Et vous… il en est où, votre harnais ?
