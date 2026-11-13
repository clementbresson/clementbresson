---
title: "Subdomains et bounded contexts : le problème et la solution"
description: "En DDD, on confond souvent subdomains et bounded contexts. Les premiers existent dans le business, les seconds sont designés pour organiser le software."
pubDate: 2026-10-25
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7520201521322532864/
draft: false
---

Quand on commence le DDD, il y a deux notions qu'on confond souvent (et que j'ai moi-même confondues) : les subdomains et les bounded contexts...

## Les subdomains : le monde du problème

Les **subdomains** vivent dans le monde du **problème** à résoudre. Ils découlent de la réalité du business domain, qu'on **analyse** pour les identifier.

Ce sont toutes les composantes business du métier.

Par exemple, pour une plateforme de vente de billets électroniques par téléphone :

- le système de paiement
- l'infra téléphonique
- le suivi des ventes
- le catalogue des billets
- la gestion des emplois du temps
- l'analyse financière
- la comptabilité
- la publicité en ligne
- ...etc etc

Vous remarquerez même que certains subdomains peuvent n'avoir rien à voir avec votre software. Par exemple, la comptabilité peut très bien être confiée à un cabinet externe.

## Les bounded contexts : le monde de la solution

Les **bounded contexts**, en revanche, vivent dans le monde de la **solution**. Ils sont **designés** pour aider à modéliser et organiser la solution.

Leur but est de tracer des frontières pour :

- protéger le langage d'un modèle (l'ubiquitous language)
- et/ou faciliter la gestion et la maintenance (équipes séparées, besoins de scalabilité différents, besoins de déploiement différents)

Un bounded context peut englober **plusieurs** subdomains.

Si je reprends mes subdomains plus haut, on pourrait par exemple les séparer en 3 bounded contexts :

- Marketing (publicité)
- Vente (emplois du temps, catalogue, paiement, infra téléphonique)
- Après-vente (suivi des ventes, analyse financière, comptabilité)

Mais on peut aussi faire un bounded context **par** subdomain. C'est courant... et c'est sûrement la raison de la confusion fréquente.

En gros :

- Les subdomains **existent** dans le business, on les trouve par l'analyse.
- Les bounded contexts sont **créés** pour répondre au mieux aux besoins du software.

## Pourquoi bien les distinguer ?

Parce que leur but est différent.

Les subdomains servent surtout à savoir quoi ne pas reconstruire en interne, où mettre son effort principal, et potentiellement à réévaluer la viabilité d'un projet. [J'en parle plus en détail ici](/fr/blog/core-supporting-generic-subdomains/) si cela vous intéresse.

[Les bounded contexts servent à organiser la solution](/fr/blog/why-design-bounded-contexts/) pour qu'elle reste maintenable sur la durée. Tracer ces frontières, c'est [un travail que je fais main dans la main avec une équipe](/fr/work-with-me/).

Si vous retenez subdomain = problème qui existe, et bounded context = solution qu'on design, c'est bon :)
