---
title: "Parnas, 1972 : selon quel critère découper en modules ?"
description: "En 1972, David Parnas propose de découper un programme non pas selon un flowchart, mais pour cacher dans chaque module ce qui est difficile ou va changer."
pubDate: 2026-08-21
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7496510524621254657/
sources:
  - title: "On the Criteria To Be Used in Decomposing Systems into Modules"
    author: "David L. Parnas"
    year: 1972
    url: https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf
  - title: "The Secret History of Information Hiding"
    author: "David L. Parnas"
    year: 2002
    url: https://experts.mcmaster.ca/scholarly-works/1973746
draft: false
---

Tous les développeurs s'accordent à dire qu'il faut décomposer un programme en modules... mais selon quel critère ?

Cette question, David Parnas se la pose et tente d'y apporter une réponse [en 1972](https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf).

## 1972 : cacher ce qui est difficile ou susceptible de changer

Il expose que selon lui, plutôt que de découper un programme par étapes à partir d'un flowchart (méthode répandue), il est préférable de lister ce qui est difficile ou susceptible de changer dans ce programme, puis de construire chaque module pour cacher une de ces choses aux autres.

Cette stratégie amène trois bénéfices clairs :

1. le programme est plus facile à comprendre (il peut s'aborder module par module) ;
2. le programme est plus facile à maintenir (un changement = peu de modules à changer) ;
3. le programme peut évoluer plus rapidement (des acteurs peuvent facilement travailler sur des modules en parallèle).

Il ajoute qu'un bon design de modules rend possible un maximum d'implémentations et que, pour ce faire, l'interface des modules doit imposer le moins de choses possible à l'implémentation.

Il met également en garde contre un piège classique : penser que, parce qu'on a une bonne hiérarchie de modules, ceux-ci sont bien designés. Hiérarchie et bon design sont deux choses différentes.

## 2002 : trente ans plus tard

Il revient dessus [30 ans plus tard, en 2002](https://experts.mcmaster.ca/scholarly-works/1973746), en apportant de nouveaux éclairages :

1. Malheureusement, la décomposition par étapes de flowchart a la vie dure (encore vrai en 2026 !).
2. Malheureusement, les raisons économiques font que souvent l'effort supplémentaire pour bien designer ses modules n'est pas fourni (malgré une rentabilité future ! Court terme vs long terme...).
3. Enfin et surtout, il va plus loin : il vaut souvent le coup de cacher aussi une information qui ne changera jamais, simplement parce que la cacher autorise de meilleures implémentations.

## Le problème de Parnas

Et finalement... la majorité de la littérature sur l'architecture logicielle depuis (DDD, [Clean Architecture](/fr/blog/what-is-clean-architecture/), Architecture Hexagonale / Ports & Adapters, [Onion Architecture](/fr/blog/what-is-onion-architecture/)...) cherche à répondre au problème de Parnas : quelles stratégies et tactiques utiliser pour [designer une décomposition propre d'un programme complexe](/fr/work-with-me/)...
