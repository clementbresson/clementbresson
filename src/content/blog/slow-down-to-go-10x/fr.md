---
title: "Le 10x à l'ère agentique commence par du 0,3x"
description: "Pour livrer 10x plus vite avec des agents IA, il faut d'abord ralentir : harnais solide, parallélisation propre et CI/CD maîtrisée avant d'accélérer."
pubDate: 2026-10-21
tags: ["ai-harnesses", "ai-era"]
draft: false
---

Faire du 0,3x au début.

Vous avez bien lu : ralentir.

Pourquoi ?

Parce que pour faire du 10x, pas le choix : il faut des agents en relative autonomie.

Et pour que ça ne finisse pas dans le mur, il faut que ces agents tournent dans un [harnais](/fr/blog/ai-harness-guides-and-sensors/) solide.

## Ce que demande un bon harnais

Or, un bon harnais, c'est :

- une architecture réfléchie
- un code métier très très bien pensé, [documenté](/fr/blog/architecture-decision-records/) et testé (spoiler : c'est compliqué)
- un [linter sur mesure](/fr/blog/dependency-cruiser-as-a-sensor-for-ai-agents/)
- une observabilité locale maximale
- de la vraie revue de code IA en début de projet
- des itérations sur tout ça à chaque écart repéré
- ... et des dizaines d'autres choses chronophages au début

## Paralléliser sans se marcher dessus

Mais le harnais ne suffit pas. Le 10x ne passe pas par un agent unique.

Et pour paralléliser le travail entre plusieurs agents sans qu'ils se marchent dessus, il faut :

- des [worktrees](/fr/blog/orca-ade-at-a-glance/)
- une gestion des dépendances propre à chaque worktree
- pouvoir lancer plusieurs instances complètes du programme, isolées les unes des autres

Et pour déployer tout ça au fur et à mesure : une CI/CD bien réglée et maîtrisée.

... et tout ça, ça prend du temps !

D'où une livraison de features visibles ralentie au départ, là où beaucoup de projets les enchaînent à toute vitesse.

Par contre derrière... on peut appuyer sérieusement sur l'accélérateur.

## Le mur des concurrents pressés

Pendant ce temps, les concurrents qui semblaient avoir pris de l'avance les premières semaines commenceront à faire du [MAJUSCULES-Driven-Development](/fr/blog/all-caps-driven-development/). Objectif : redresser avec leurs agents une codebase truffée de problèmes (code métier éparpillé que les agents ne peuvent plus avoir en contexte, aucune convention, fichiers impossibles à reprendre par un humain...).

Au final, faire lentement et bien, c'est la base pour faire ensuite vite et bien. Et au bout de quelques mois seulement, c'est beaucoup beaucoup plus rapide et économique.

C'était déjà vrai.

Ça l'est encore plus aujourd'hui.

Agissez avant de crouler sous la dette technique et les bugs.
