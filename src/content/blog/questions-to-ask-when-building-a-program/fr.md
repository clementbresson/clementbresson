---
title: "Développer un programme : les questions que l'IA ne tranche pas"
description: "Sous-domaines, bounded contexts, archi, data, scale, sécurité, prod : les questions à se poser quand on développe un programme et que l'IA seule ne tranche pas."
pubDate: 2026-11-01
tags: ["architecture", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7522603407271112704/
draft: false
---

Quand vous développez un programme, voici (une partie) des questions à se poser :

## Métier

- Quels [sous-domaines](/fr/blog/core-supporting-generic-subdomains/) méritent votre énergie ? (Core)
- Lesquels sous-traiter, voire vibecoder ? (Supporting)
- Lesquels externaliser pour X €/mois ? (Generic)
- Avez-vous vraiment un avantage compétitif ? Et y mettez-vous vraiment votre énergie ?

## Découpage

- Quels composants ? Quels [bounded contexts](/fr/blog/subdomains-vs-bounded-contexts/) ?
- Lesquels protéger des autres ? ([Anti-Corruption Layer, Open Host Service](/fr/blog/why-design-bounded-contexts/))
- Qui est responsable de quoi ? Avec quelles contraintes d'organisation ?

## Architecture

- [Clean Architecture](/fr/blog/what-is-clean-architecture/) ? Vertical Slice ? Où ?
- Quelles parties découpler de l'infra ? ([Ports & Adapters](/fr/blog/hexagonal-architecture-ports-and-adapters/))
- [Transaction Script](/fr/blog/architecture-and-craftsmanship-in-the-ai-era/) ? Data Mapper ? Active Record ?
- Event Sourcing ? CQRS ? Où ?
- Quelle [stratégie de tests](/fr/blog/choosing-the-right-test-double/) ?

## Data

- Relationnelle ? Documents ? Vectorielle ? Un mix ?
- Qu'est-ce qui doit être [cohérent immédiatement](/fr/blog/ddd-aggregate-consistency-boundary/) ? À terme ?
- Comment [séparer les données entre clients](/fr/blog/multi-tenant-data-isolation-four-levels/) ?

## Scale

- Comment communiquent les services ?
- Quelles parties doivent scaler en autonomie ? À quel coût ?

## Front

- Une app ? Du SSR, de l'ISR pour le SEO/GEO ?
- De l'i18n dès maintenant ?

## Sécurité & conformité

- Scopes ? Permissions ? [Secrets](/fr/blog/secret-api-keys-in-page-source/) ?
- RGPD : supprimez-vous / anonymisez-vous bien les données ?
- Consentement au tracking : pouvez-vous le prouver ? Même s'il change dans le temps ? (Coucou l'Event Sourcing)

## Prod

- Quel niveau d'observabilité ? De tracking ?
- Que faire en cas d'urgence ? Peut-on rollback vite ?

## Ce qu'une IA seule ne peut pas trancher

Autant de questions qu'une IA seule ne **peut pas** trancher correctement dans un projet vibecodé, si vous n'avez pas les connaissances nécessaires. Car :

- elle n'a pas tout le contexte
- les réponses ne sont pas blanches ou noires : ce ne sont que des tradeoffs
- sur un gros contexte, ses soucis d'attention donnent de mauvaises réponses, archi coûteuses
- [si on ne lui demande pas (bien)](/fr/blog/ai-does-only-what-you-ask/), elle ne le fera pas

Et un mauvais départ ne se voit pas les premiers mois... mais coûte énormément plus tard. [Changer des fondations](/fr/blog/sound-architecture-over-correct-features/), c'est très compliqué.

Vibecoder, c'est très bien... sur un projet où les décisions critiques sont cadrées ! ([Faites-vous accompagner](/fr/work-with-me/))

Et amis devs : si vous ne mettez pas votre [énergie d'apprentissage](/fr/blog/learning-to-learn-efficiently/) sur ces sujets en 2026... mettez-vous-y à toute vitesse. C'est là que réside déjà le métier.

Quoi faire. Comment faire. Pourquoi le faire.

« Faire » ne vaut presque plus rien.

Bon apprentissage !
