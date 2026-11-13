---
title: "Les cinq formes de couplage, de la plus acceptable à la pire"
description: "External, common, control, stamp, content : cinq formes de couplage classées de la plus acceptable à la pire, et comment limiter chacune dans une codebase."
pubDate: 2026-02-16
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7429229724092149760/
sources:
  - title: "The Hexagonal (Ports & Adapters) Architecture"
    author: "Alistair Cockburn"
    year: 2005
    url: https://alistair.cockburn.us/hexagonal-architecture/
  - title: "Passing Data Deeply with Context"
    author: "React"
    url: https://react.dev/learn/passing-data-deeply-with-context
draft: false
---

Allez, histoire de vous changer un peu des posts IA, un peu de technique de software architecture.

Quelles sont pour vous les pires formes de couplage dans une codebase ([l'ennemi numéro 1 à mon sens](/fr/blog/coupling-is-the-worst-thing-in-a-codebase/)), du plus acceptable au moins acceptable ? Selon moi :

## 1. External coupling

Plusieurs modules dépendent du même système externe (DB, API…). On ne peut pas y couper totalement. Avec un système de port/adapter ([architecture hexagonale](https://alistair.cockburn.us/hexagonal-architecture/)), on peut se sauver la vie le jour où on veut migrer le système externe.

## 2. Common coupling

État global partagé et mutable (grosse config, gros [contexte React](https://react.dev/learn/passing-data-deeply-with-context) fourre-tout…). Effets de bord, ordre d'exécution implicite, debugging pénible. À éviter et réduire au strict minimum (choses réellement globales et qui ne changent jamais ou quasiment jamais).

## 3. Control coupling

On passe des flags pour piloter le comportement interne d'un autre module. Les `if` s'accumulent. Préférer le polymorphisme, ou un système de composition si possible.

## 4. Stamp coupling

On passe un objet complet alors qu'on n'en utilise qu'une partie. Dépendance inutile à la structure. Il faut souvent préférer passer uniquement les données nécessaires.

## 5. Content coupling

Un module accède aux internals d'un autre. Le pire. À fuir. Quand ça arrive, c'est souvent par contrainte de temps pour faire mieux.

Vous en voyez d'autres ?

Le but n'étant pas de retirer 100 % du couplage (impossible), mais de le cantonner et de le maîtriser.
