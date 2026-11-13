---
title: "Parnas et Cockburn : comment s'imbriquent leurs deux visions"
description: "Le Port/Adapter de Cockburn n'est qu'une application tactique de la stratégie de Parnas : chaque duo Port/Adapter est un module qui cache un choix techno."
pubDate: 2026-08-23
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7497231530801467392/
sources:
  - title: "On the Criteria To Be Used in Decomposing Systems into Modules"
    author: "David L. Parnas"
    year: 1972
    url: https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf
  - title: "The Secret History of Information Hiding"
    author: "David L. Parnas"
    year: 2002
    url: https://experts.mcmaster.ca/scholarly-works/1973746
  - title: "Hexagonal (Ports & Adapters) Architecture"
    author: "Alistair Cockburn"
    year: 2005
    url: https://alistair.cockburn.us/hexagonal-architecture/
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: "Eric Evans"
    year: 2004
    url: https://www.domainlanguage.com/ddd/blue-book/
draft: false
---

Architecture logicielle : voici comment s'imbriquent les visions de Parnas et Cockburn.

Je recommande de lire mes articles précédents sur [la vision de Parnas](/fr/blog/parnas-criteria-for-decomposing-into-modules/) et [celle de Cockburn](/fr/blog/hexagonal-architecture-ports-and-adapters/), mais si je résume :

## Les deux visions en bref

1. **David Parnas** ([1972](https://www.cse.sc.edu/~mgv/csce590f20/ParnasCriteria.pdf), puis [2002](https://experts.mcmaster.ca/scholarly-works/1973746)) : dans un programme, de bons modules cachent les décisions arbitraires susceptibles de changer (ex : PostgreSQL vs Mongo) **et/ou** ce qui, si visible, réduit le nombre d'implémentations possibles du module (ex : `userId` = `string` plutôt qu'un type `UserId`, qui peut être un integer, une string, autre...).
2. **Alistair Cockburn** ([2005](https://alistair.cockburn.us/hexagonal-architecture/)) : le Port/Adapter pattern, ou Architecture Hexagonale => pour être plus facile à tester et/ou être pilotable par plusieurs acteurs (utilisateur, CLI, script, autre), un bon programme protège son code métier intérieur des choix technologiques extérieurs, le tout via un système de Ports qui définissent des contrats de conversation (par exemple une interface `UserRepository`) et d'Adapters, qui sont les implémentations technologiques compatibles avec ces Ports (ex : `PostgresUserRepository`, `InMemoryUserRepository`).

## Comment ces visions s'imbriquent

Maintenant, le cœur du sujet :

1. Le Port/Adapter de Cockburn n'est qu'**une** application **tactique** de la vision **stratégique** de Parnas (au sens courant, rien à voir avec le strategic/tactical DDD d'[Evans](https://www.domainlanguage.com/ddd/blue-book/)), pour répondre à **un** objectif de décomposition : séparer les technologies extérieures et le code métier intérieur, pour rendre ce dernier plus facilement testable et réutilisable.
2. Chaque duo Port/Adapter de Cockburn est un module au sens de Parnas. Il permet de cacher un choix technologique arbitraire (critère numéro 1) au code métier tout en permettant un maximum d'implémentations (critère numéro 2) si le Port est bien pensé.

## À noter pour finir

- Le Port/Adapter pattern n'est qu'une tactique (aussi répandue et efficace soit-elle) pour appliquer la stratégie de Parnas à la séparation métier/technologies. Il en existe d'autres.
- La stratégie de Parnas est beaucoup, beaucoup plus généraliste que le P/A pattern. On peut l'appliquer à tous les niveaux, de façon récursive, et sur de nombreux champs d'application (par exemple, à l'intérieur du code métier, on peut avoir une hiérarchie complexe de modules appliquant la stratégie de Parnas pour des besoins variés).

Choisir la bonne tactique pour chaque décomposition, c'est [le genre de question de design que je travaille avec les équipes](/fr/work-with-me/).

Bon designs !
