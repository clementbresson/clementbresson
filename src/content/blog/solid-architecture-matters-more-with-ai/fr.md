---
title: "Avec l'IA, une architecture solide n'a jamais autant compté"
description: "Logique métier éparpillée, couplage partout : avec une IA au contexte limité, le projet tangue. Domain, applicatif, infra : là où le temps investi rapporte."
pubDate: 2026-11-16
tags: ["architecture", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7528171980412596224/
draft: false
---

Une architecture solide, ça n'a jamais autant compté qu'en 2026.

Et pourtant, c'est souvent ce qu'on remet à plus tard (j'ai aussi été coupable par le passé).

## Un projet qui tourne... mais fragile

On peut avoir des features complexes.
Une UI/UX ultra réfléchie.
Des implémentations poussées.
Une infrastructure prête à scaler à l'infini.

Mais si la logique métier est éparpillée aux quatre vents du projet...

...si toucher la moindre chose demande d'être dans la tête de 5 collaborateurs (en espérant qu'ils soient toujours dans le coin)...

...et si tout est tellement [couplé](/fr/blog/coupling-is-the-worst-thing-in-a-codebase/) que le moindre changement peut avoir des side effects impossibles à prédire sans passer 3 jours à scruter, décortiquer, espérer bien comprendre chaque fonction...

...alors le projet est (très) fragile, même s'il tourne très bien aujourd'hui.

## Avec l'IA, ça tangue encore plus

Et avec l'IA par-dessus, ça risque de tanguer encore plus.

Pourquoi ? Parce qu'une IA n'a, par définition, qu'un contexte limité. Elle ne voit qu'un bout du projet à la fois.

Donc :

- plus les responsabilités sont claires,
- plus les frontières sont nettes,
- plus les choses sont standardisées (sans réinventer la roue),

...plus elle sera performante. Tout devient prévisible, et cantonné à une seule partie.

## Où le temps investi rapporte le plus

Concrètement, voilà où le temps investi rapporte le plus :

- l'analyse de vos [contextes](/fr/blog/why-design-bounded-contexts/) ;
- la séparation des responsabilités ;
- une vraie couche domain pour vos [règles métier](/fr/blog/the-value-is-in-the-business-rules/) ;
- une vraie couche applicative pour l'orchestration ;
- une vraie [couche d'infrastructure](/fr/blog/hexagonal-architecture-ports-and-adapters/), pour que la technologie ne vienne pas s'imposer dans **votre** valeur ajoutée (domain + applicatif).

Sans ça, on construit un château de cartes joliment décoré.

Dans le meilleur des cas, il devient très pénible à faire évoluer. Dans le pire, il finit par casser dans tous les sens.

## Il n'est jamais trop tard

La bonne nouvelle : il n'a jamais été aussi simple de s'y mettre. Livres, conférences, formations... les ressources sont partout, et accessibles. Et si vous préférez être accompagné, [c'est précisément ce que je fais](/fr/work-with-me/).

Et il n'est jamais trop tard ! Votre vous de dans quelques mois vous remerciera (et vos projets encore plus).
