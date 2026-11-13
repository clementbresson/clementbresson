---
title: "L'agrégat en DDD : une frontière de cohérence pour vos invariants"
description: "En DDD tactique, l'agrégat regroupe des objets liés derrière une racine unique, pour que vos invariants restent vrais, y compris au moment de la persistance."
pubDate: 2026-10-19
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7518014516199297025/
sources:
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: "Eric Evans"
    year: 2004
    url: https://www.domainlanguage.com/ddd/blue-book/
  - title: "Learning Domain-Driven Design"
    author: "Vlad Khononov"
    year: 2021
    url: https://vladikk.com/page/books/
  - title: "WealCome"
    author: "Michaël Azerhad"
    url: https://wealcomecompany.com/
draft: false
---

Pour faire du [DDD](/fr/blog/architecture-and-craftsmanship-in-the-ai-era/) tactique dans un software, il y a un élément clé : l'**agrégat** (aggregate en anglais).

Derrière ce nom compliqué se cache un concept simple.

La définition officielle ([Eric Evans](https://www.domainlanguage.com/ddd/blue-book/)) : un groupe d'objets liés, qu'on traite comme une seule unité pour toute modification de données. Avec une racine et une frontière.

Dit comme ça, c'est abstrait. Prenons un exemple.

## Un exemple : la facture et ses items

Vous avez deux entités dans votre programme :

- `Invoice`
- `InvoiceItem`

Avec deux [règles métier](/fr/blog/the-value-is-in-the-business-rules/) qui doivent **toujours** être vraies (on parle d'**invariants**) :

- une facture a toujours au moins un item
- un item de facture n'existe que dans le cadre d'une facture

Maintenant, une commande de votre application crée une facture.

Elle crée les items, puis la facture, puis sauvegarde le tout...

...et il y a une erreur quelque part.

Si la facture et ses items sont persistés dans des transactions séparées, quel que soit l'ordre, une erreur au milieu viole un de nos invariants (facture sans items, ou items orphelins...).

## La solution : l'agrégat

Ce pattern dit de regrouper tout ça dans un ensemble, derrière une entité racine (l'**aggregate root**, ici `Invoice`). C'est l'unique point d'entrée de l'ensemble : dès que vous touchez une partie, la root vérifie tout en mémoire, et le tout est persisté dans une seule transaction.

=> Vos invariants deviennent inviolables, y compris au moment de la persistance.

C'est pour ça qu'on dit souvent qu'un agrégat est une frontière de cohérence (consistency boundary).

## Pas d'agrégat gigantesque

Attention, n'allez pas faire un agrégat gigantissime non plus. Préférez de petits agrégats : ce qui peut être cohérent « un peu plus tard » reste dehors. Mais dès que des règles doivent être garanties ensemble, à chaque instant : hop, ça va dans le même agrégat.

Placer ces frontières, c'est [un travail de modélisation que je mène avec les équipes que j'accompagne](/fr/work-with-me/).

EDIT : merci à [Michaël Azerhad](https://wealcomecompany.com/) pour une objection 100 % juste en commentaire du post LinkedIn d'origine ! Une simple transaction suffirait en réalité comme solution au problème énoncé. L'agrégat trouve tout son intérêt pour répondre au souci de concurrence. Son commentaire explique ça parfaitement, à lire !

PS : je fais une petite série de vulgarisation de concepts au cœur du DDD (Eric Evans, [Vlad Khononov](https://vladikk.com/page/books/)... etc). C'est du survol pour vous donner envie de creuser. Foncez, c'est passionnant ;)
