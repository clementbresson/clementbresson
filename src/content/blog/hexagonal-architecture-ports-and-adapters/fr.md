---
title: "Architecture Hexagonale : le pattern Ports & Adapters de Cockburn"
description: "Alistair Cockburn, 2005 : penser un programme comme un intérieur métier et un extérieur branché via des ports et des adapters, plutôt qu'en couches."
pubDate: 2026-08-22
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7496864962611662848/
sources:
  - title: "Hexagonal (Ports & Adapters) Architecture"
    author: "Alistair Cockburn"
    year: 2005
    url: https://alistair.cockburn.us/hexagonal-architecture/
  - title: "Interview with Alistair Cockburn"
    author: "Juan Manuel Garrido de Paz"
    year: 2020
    url: https://jmgarridopaz.github.io/content/interviewalistair.html
draft: false
---

Comment rendre un programme testable sans interface graphique et sans base de données ?

Alistair Cockburn publie en 2005 sa pensée sur le sujet, [qui date des années 90](https://jmgarridopaz.github.io/content/interviewalistair.html) : le [pattern Port/Adapter](https://alistair.cockburn.us/hexagonal-architecture/).

## Qu'est-ce que c'est ?

Plutôt que de penser un programme [en couches](/fr/blog/what-is-a-layer-in-software-architecture/) (dont il critique l'inéluctable porosité, qui entraîne la pollution et la fuite de ce qu'elles sont censées protéger, en premier lieu le code métier), il propose de le penser comme :

- un **intérieur** (le code métier) ;
- un **extérieur** (le monde réel : technos de persistance, interface utilisateur, etc.).

Il schématise le tout sous forme d'un hexagone, d'où le deuxième nom de ce pattern : Architecture Hexagonale (mais il préfère Port/Adapter pattern).

## Comment l'intérieur et l'extérieur communiquent ?

Via les **ports**, qu'il définit comme une « intention de conversation avec un acteur extérieur ».

Deux exemples courants du monde TS :

- la conversation « persistance des User », exprimée en TS par une interface `UserRepository` ;
- la conversation « gestion des User », exprimée en TS par les use cases que l'extérieur peut appeler (`CreateUser`, `DeleteUser`…).

Dans ces ports viennent se brancher les **adapters**, qui sont des implémentations de l'extérieur respectant leur contrat de conversation.

Si on reprend nos exemples précédents, voici deux adapters courants pour chacun :

- `PostgresUserRepository`
- `InMemoryUserRepository`
- un controller Express utilisant `CreateUser`
- une commande CLI utilisant `CreateUser`

## Driving et driven adapters

Ces exemples illustrent d'ailleurs une distinction qu'il fait entre :

- les **driving** adapters (ou primaires), qui appellent l'intérieur (Express/CLI => appellent `CreateUser`) ;
- les **driven** adapters (ou secondaires), qui sont appelés par l'intérieur (PostgreSQL/InMemory => `CreateUser` appelle sûrement des méthodes comme `findUserByX`, `saveUser`…).

Ces deux types d'adapters sont pour lui symétriques... et sensiblement la même chose.

C'est d'ailleurs la source d'une seconde critique qu'il fait aux couches : leur impossibilité de représenter cette symétrie (exemple : l'interface utilisateur en haut, l'infrastructure en bas ? Cela n'a pas de sens selon lui).

## Ce que ça permet

Au final, il explique que le pattern Port/Adapter représente plus fidèlement la réalité que des couches, et qu'une fois (bien) implémenté, il permet de :

- tester le code métier sans UI ou sans DB ;
- changer de techno au fil des années ;
- réutiliser plus facilement son code métier pour différents usages ;
- avoir des adapters de secours en cas de défaillance d'un adapter.

## Ce que Cockburn laisse ouvert

À noter : dans son article d'origine, Cockburn reste conceptuel.

- Des exemples concrets de ports ?
- La granularité préférable des ports ?
- L'organisation de l'intérieur ?

=> Libre à l'architecte, tant que les ports sont faciles à trouver et expriment une intention claire.

Où tracer cette frontière entre l'intérieur et l'extérieur, c'est précisément [le genre d'arbitrage que j'aide les équipes à faire](/fr/work-with-me/).
