---
title: "Effort de maintenance = Force × Distance × Volatilité"
description: "Vlad Khononov présente à DDD Europe une formule simple : il suffit de ramener une seule dimension à zéro pour que l'effort de maintenance s'effondre."
pubDate: 2026-10-21
tags: ["architecture", "ai-era"]
sources:
  - title: "Balancing Coupling in Software Design (talk)"
    author: "Vlad Khononov"
    year: 2023
    url: https://2023.dddeurope.com/program/balancing-coupling-in-software-design/
  - title: "Balancing Coupling in Software Design"
    author: "Vlad Khononov"
    year: 2024
    url: https://vladikk.com/page/books/
draft: false
---

Comment réduire l'effort de maintenance d'une application au minimum ?

Dans un monde où produire du code en masse n'a jamais été aussi simple, la question de la maintenance devient critique.

Pour y répondre, [Vlad Khononov](https://vladikk.com) présente à [DDD Europe](https://2023.dddeurope.com/program/balancing-coupling-in-software-design/) une super formule, devenue depuis le cœur de son livre [_Balancing Coupling in Software Design_](https://vladikk.com/page/books/) :

**Effort de maintenance = Force d'intégration × Distance × Volatilité**

## Les trois dimensions

La **force d'intégration** va du [couplage](/fr/blog/what-does-a-depends-on-b-mean/) intrusif (le pire) au couplage par contrat (le mieux).

La **distance** va des méthodes d'une même classe (faible) aux composants de systèmes distincts, gérés par des équipes différentes (forte).

La **volatilité**, c'est la fréquence des changements : des choses qui ne changent jamais (nulle) aux choses qui changent plusieurs fois par jour.

Évidemment, quand les trois se cumulent, l'effort explose (imaginez des composants de systèmes différents, gérés par des équipes différentes, qui doivent évoluer de façon parfaitement synchronisée plusieurs fois par jour...).

## Le vrai génie de la formule

Même si deux dimensions sont très fortes, il suffit de ramener **une seule** dimension proche de zéro pour que l'effort s'effondre.

- Intégration forte et forte distance ? Pas un problème si ça ne change jamais.
- Forte distance et haute volatilité ? Pas un problème si l'intégration passe par un contrat.
- Intégration forte et haute volatilité ? Pas un problème si tout se passe dans une même classe.

C'est le genre de conceptualisation qui aide très très concrètement à prendre, au quotidien, les décisions qui gardent un programme maintenable.

C'est aussi exactement le genre de sujet où l'IA n'excelle pas du tout, et où réside [la valeur d'un développeur](/fr/blog/harness-engineer-the-next-developer-role/) (et de plus en plus).

Je ne peux que vous recommander de voir la conférence en entier. Et je vais de ce pas acheter le livre :)

Bon designs !
