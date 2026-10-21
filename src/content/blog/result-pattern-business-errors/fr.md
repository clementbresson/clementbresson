---
title: "Le Result Pattern : distinguer bug et erreur métier"
description: "cancelOrder() peut échouer de plein de façons prévisibles. Le Result Pattern distingue l'erreur métier qu'on renvoie du bug qui part dans Sentry."
pubDate: 2026-10-21
tags: ["architecture"]
sources:
  - title: "Result (std::result)"
    author: "The Rust Project"
    url: https://doc.rust-lang.org/std/result/enum.Result.html
  - title: "Error handling and Go"
    author: "Andrew Gerrand"
    year: 2011
    url: https://go.dev/blog/error-handling-and-go
  - title: "TypeScript"
    url: https://www.typescriptlang.org/
  - title: "neverthrow"
    url: https://github.com/supermacro/neverthrow
  - title: "Effect"
    url: https://effect.website/
  - title: "Sentry"
    url: https://sentry.io/
draft: false
---

Votre fonction `cancelOrder()` vous ment.

Elle dit qu'elle annule la commande. Mais la commande est peut-être déjà expédiée, déjà annulée, ou son délai est déjà dépassé...

Et si vous ne faites rien, rien ne vous oblige à gérer ces cas.

C'est exactement le problème que règle le **Result Pattern**.

## Deux types d'erreurs

L'idée, c'est qu'il existe deux types d'erreurs.

D'un côté, les « vraies » erreurs : bug, crash, base de données down, etc. Elles throw, remontent tout en haut et partent dans [Sentry](https://sentry.io/), et quelqu'un regarde en urgence.

De l'autre, les erreurs « normales » et attendues : une commande déjà expédiée, un élément supprimé, des permissions insuffisantes... Ce n'est pas un crash. C'est le métier qui dit non, cette [valeur centrale du projet](/fr/blog/the-value-is-in-the-business-rules/) qu'on oublie trop souvent. Celles-là, on ne les throw pas. On les **renvoie**.

## Ce que ça change

Concrètement, la fonction renvoie soit un succès, soit une erreur connue, nommée et visible dans sa signature.

Et ça change tout :

- le client de la fonction sait ce qui peut rater ;
- il est obligé de gérer chaque cas : « déjà expédiée » → on propose un retour, « délai dépassé » → on affiche le SAV ;
- vous ajoutez « paiement en cours de remboursement » demain → tous les endroits qui l'oublient cassent au typage.

## Le test pour trancher

Le test que j'utilise :

« Est-ce que l'appelant peut faire quelque chose de différent selon l'erreur ? »

- Oui → Result.
- Non → throw, et direction Sentry.

## Peu importe l'implémentation

[Rust](https://doc.rust-lang.org/std/result/enum.Result.html) l'a dans le langage. [Go](https://go.dev/blog/error-handling-and-go) le fait à sa façon. En [TypeScript](https://www.typescriptlang.org/), ça se fait en trois lignes, ou avec des librairies comme [neverthrow](https://github.com/supermacro/neverthrow) ou [Effect](https://effect.website/).

Peu importe l'implémentation, l'idée reste la même : séparer ce qui throw de ce qui se renvoie comme une valeur. Un peu comme le [Functional Core isole ses décisions de ses actions](/fr/blog/functional-core-imperative-shell/) : la décision métier sort sous forme de donnée, pas de comportement.

Si vous tenez à votre couche métier... essayez :)

**PS** : n'en mettez pas partout. Une base de données down n'est **pas** une erreur métier ! Faire du Result partout n'est pas non plus mieux que laisser throw partout.
