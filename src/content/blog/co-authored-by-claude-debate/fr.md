---
title: "« Co-Authored-By: Claude » : les trois camps du débat"
description: "Garder ou enlever le « Co-Authored-By: Claude » des commits ? Honnêteté, métrique, bruit visuel, pub gratuite : les arguments du débat, résumés."
pubDate: 2026-10-30
tags: ["ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7522017627859226624/
sources:
  - title: "Creating a commit with multiple authors"
    author: "GitHub"
    url: https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors
  - title: "Claude"
    author: "Anthropic"
    url: https://claude.com/product/overview
  - title: "Anthropic"
    author: "Anthropic"
    url: https://www.anthropic.com/
draft: false
---

[J'ai demandé hier](/fr/blog/co-authored-by-claude-in-commits/) si vous assumiez les `Co-Authored-By: Claude` dans vos commits.

Et je ne m'attendais pas à ce que ça parte autant en débat hahaha !

Du coup, ça a fait ressortir plein de plus ou moins bonnes raisons, que je compile ici pour les résumer.

## Camp 1 : ceux qui gardent la ligne

- L'honnêteté intellectuelle.
- Pourquoi s'embêter ?
- Ils gardent la responsabilité.
- Ça devient une métrique (intéressant, ça) : part de code générée par l'IA, corrélation quand on analyse un incident, aide à la relecture de PR.
- Une proposition pour aller plus loin : flaguer le modèle, le provider, etc. pour améliorer encore cette donnée en vue de l'analyse.

## Camp 2 : ceux qui l'enlèvent (pour de bonnes raisons)

- Le bruit visuel : l'icône [Claude](https://claude.com/product/overview) partout sur [GitHub](https://docs.github.com/en/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors), qui masque les vrais auteurs (vrai !).
- On ne signait pas ses commits avec son IDE ou son compilateur.
- [Anthropic](https://www.anthropic.com/) ne prend aucune responsabilité sur le commit... alors pourquoi co-signer ?
- Pas envie de faire de la pub gratuite à son provider.

## Camp 3 : ceux qui l'enlèvent parce qu'ils n'assument pas

(Petit taquet gratuit haha)

## Ma position

Pour l'instant, je reste quand même dans la team assumé, y compris sur [les projets clients que j'accompagne](/fr/work-with-me/), avec en tête qu'aller potentiellement plus loin avec le modèle, pour l'analyse plus tard, est vraiment intéressant !

Merci aux participants du débat :)

Bon code !
