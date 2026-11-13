---
title: "Faites analyser vos bounded contexts par une IA"
description: "Relations, changements, langage, maintenance : des sous-agents IA qui analysent vos bounded contexts peuvent révéler des problèmes profonds de design."
pubDate: 2026-10-28
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7521339946838691842/
draft: false
---

Si vous faites du DDD, vous avez très certainement découpé votre programme en [bounded contexts](/fr/blog/why-design-bounded-contexts/).

(Sinon, il faut peut-être réétudier le sujet haha)

Si oui, un exercice sympa à faire quand vous avez un moment.

## Faites analyser vos bounded contexts par une IA

Demandez à votre IA préférée d'analyser vos bounded contexts, si possible avec des sous-agents, chacun avec un focus clair :

- **Relations** : qui parle à qui, et à quelle fréquence
- **Changements** : qui change en même temps que qui, en observant l'historique git
- **Langage** : est-ce que chaque bounded context a un langage clair et non ambigu, avec des termes métier et pas du jargon technique (hors couches infra ou présentation) ? C'est l'ubiquitous language.
- **Maintenance**
- ...etc

Ça peut vous donner de très bonnes pistes sur de potentiels problèmes profonds de design (après vérification par vous-même et/ou des rounds d'adversarial review par d'autres agents IA).

## Des jours ou des semaines gagnés

Et fixer les choses à ce niveau... c'est potentiellement des jours ou des semaines gagnés plus tard.

Car en software engineering, un mauvais découpage crée (et créera) **beaucoup** de problèmes. C'est souvent bien pire que pas de découpage du tout.

Revoir un découpage à ce niveau, c'est [un chantier sur lequel je peux vous épauler](/fr/work-with-me/).

Bons designs !
