---
title: "La boy-scout rule : moderniser une codebase sans big bang"
description: "Mettre à jour les conventions d'une codebase sans big bang refacto : à chaque fichier touché, on applique les dernières règles décidées par l'équipe."
pubDate: 2026-10-21
tags: ["architecture", "code-review"]
sources:
  - title: "Clean Code: A Handbook of Agile Software Craftsmanship"
    author: "Robert C. Martin"
    year: 2008
    url: https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884
draft: false
---

Les bonnes pratiques et les conventions évoluent toujours sur la durée, sur une codebase. Et même quand tout semble stable, il y a souvent des mises à jour à gérer.

Une règle sympa pour réussir à petit à petit tout remettre d'équerre sans big bang refacto : la [boy-scout rule](https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884).

## Le concept

Laisser l'endroit plus propre en partant que lorsqu'on est arrivé.

Concrètement, quand vous touchez d'anciens fichiers pour une fonctionnalité, vous en profitez pour mettre en place les dernières conventions qui ont été décidées.

## Petit à petit, tout redevient bon

Entre ces fichiers retouchés, les nouveaux fichiers créés d'emblée aux bonnes conventions, et les anciens fichiers supprimés au fil du temps... petit à petit, tout finit par être bon partout.

C'est super efficace : je l'ai mis en pratique, avec des résultats constatés sur plusieurs grosses codebases.

C'est le même réflexe qu'applique un [Harness Engineer](/fr/blog/harness-engineer-the-next-developer-role/) face à la [dette technique](/fr/blog/daily-rates-after-ai/) : la traiter au fil de l'eau, pas lors d'un chantier dédié.

Bon dev !
