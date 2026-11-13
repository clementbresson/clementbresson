---
title: "Mon workflow de review IA : des agents spécialisés en boucle"
description: "Des agents de review spécialisés, un skill qui les relance en sessions fraîches sur plusieurs rounds, puis un artifact final qui présente le travail fait."
pubDate: 2026-10-22
tags: ["code-review", "ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7519103688796278784/
draft: false
---

Mon workflow de review IA (du moment).

## Le workflow

1. Vous créez quelques agents spécialisés (sécurité, conventions, overengineering, architecture... etc).
2. Vous créez un skill `review-wrap-up`, dans lequel vous demandez à un orchestrateur de review de :
   - faire jusqu'à X rounds de review (5 en général pour moi)
   - lancer à chaque round une [session fraîche, non biaisée](/fr/blog/ai-code-less-secure-more-confident/), pour chaque agent, de review sur son angle
   - trier les retours, vérifier les faux positifs, et fixer au fur et à mesure
3. En bonus, vous demandez qu'à la fin des reviews, un joli artifact soit généré pour présenter le travail fait, comme vous l'aimez :
   - le problème / la feature
   - le contexte
   - la solution choisie
   - comment ça a été fait
   - avec des schémas, des blocs interactifs... etc

Ça mange un peu de tokens. Mais une fois le travail « fini », c'est une seule commande à lancer (souvent un peu longue) => plein de petits soucis oubliés attrapés + une présentation finale clean du travail effectué.

## Là où sont les gains

Combiné ensuite à [la technique que je présentais hier](/fr/blog/github-pr-review-logical-reading-order/) (skill + extension Chrome pour trier le diff GitHub par ordre et par blocs logiques, avec descriptions)... ça aide énormément.

Car on le sait tous : la review est devenue [**le** goulot d'étranglement](/fr/blog/the-next-bottleneck-is-ram/)... et donc c'est là que se trouvent tous les gains, si on arrive à améliorer la situation.

PS : attention, cette boucle de review ne remplace en **rien** un scoping propre en amont, une architecture clean, de vrais fondamentaux, une dette technique archi limitée, un [harness poussé](/fr/blog/ai-harness-guides-and-sensors/)... etc. C'est juste **un** outil de plus en fin de pipeline. Tout ce qui vient avant, c'est [le travail de fond que je mène en amont avec une équipe](/fr/work-with-me/).
