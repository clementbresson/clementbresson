---
title: "TDD strict avec des agents IA : plus lent, plus cher, et meilleur"
description: "Forcer des agents IA à faire du TDD strict donne un meilleur design et des tests plus solides, au prix de lenteur et de coûts. Et au-delà du prompt, des hooks ?"
pubDate: 2026-10-06
tags: ["testing", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7513305270262034432/
sources:
  - title: "Superpowers"
    author: "Jesse Vincent"
    url: https://github.com/obra/superpowers
  - title: "Skills for Real Engineers"
    author: "Matt Pocock"
    url: https://github.com/mattpocock/skills
draft: false
---

Avez-vous trouvé un bon setup pour que vos agents fassent du TDD ?

Je fais plein d'expérimentations en ce moment.

L'une d'elles : forcer les agents à travailler en TDD strict (du vrai, hein, on ne parle pas de test-before).

## Le résultat

Jusqu'ici, je trouve que le résultat final est quasiment toujours meilleur :

- un meilleur design
- des problèmes identifiés tôt
- des tests de non-régression bien plus solides

Les contreparties (parce qu'il y en a) : des agents plus lents, et des coûts plus élevés.

Ce qui me va très bien, car [je travaille avec ~5-6 agents](/fr/work-with-me/) en parallèle... et je préfère qu'ils prennent leur temps et fassent mieux, plutôt que de sauter de bêtise en bêtise.

## Aller plus loin que le prompt

Bref, je veux creuser la direction TDD + agents.

J'ai déjà utilisé les skills TDD de [Superpowers](https://github.com/obra/superpowers) et de [Matt Pocock](https://github.com/mattpocock/skills).

C'est top, mais ça reste... [du prompt](/fr/blog/architecture-rules-that-break-the-build/).

Je me demandais donc s'il existe de meilleurs setups pour aller plus loin. Par exemple via des hooks ?

Certains d'entre vous ont essayé ? Des retours d'expérience ? Au cas où ça parle à quelqu'un, je suis très preneur !
