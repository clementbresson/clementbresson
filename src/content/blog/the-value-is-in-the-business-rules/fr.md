---
title: "La valeur d'un projet tech est dans les règles métier"
description: "Les règles métier, pas la technologie, concentrent 80 % de la valeur d'un projet tech. Pourtant la plupart des projets commencent par le code ou les interfaces."
pubDate: 2026-10-21
tags: ["architecture"]
draft: false
---

La valeur d'une immense majorité des projets tech réside dans les règles métier :

- la modélisation des différentes entités
- les relations qui les régissent
- ce qui est possible ou non
- ce qui doit rester synchronisé
- qui a le droit de faire telle ou telle action... etc

Et pourtant... combien de projets commencent tête baissée par le choix des technologies, la charte graphique ou les premières interfaces ?

## Une erreur fondamentale

C'est se concentrer sur ce qui est le plus volatil, et qui apporte le moins de valeur.

Et il y a fort à parier que ces choix ne seront pas les bons... et que très vite, la technique viendra gêner une modélisation fine du métier.

Les hacks vont s'accumuler, les entités mal pensées deviendront rigides et incompréhensibles.

J'imagine que tout développeur ou chef de projet tech l'a vécu au moins une fois !

## La solution : oublier le clavier

[Mettre le clavier de côté](/fr/blog/the-first-week-without-code/), oublier son code et les frameworks... et penser **uniquement** au métier.

- c'est quoi un User, un Admin, un Client ?
- peut-on cumuler ces rôles ?
- que veut dire « un Événement est passé » ?
- ... etc, selon votre projet.

D'ailleurs, il est possible de créer l'intégralité du cœur d'un programme avant même que la première ligne n'existe en base de données, ou que le premier bouton soit designé.

## Le Domain, ce cœur qui fait tout basculer

En architecture logicielle, ce cœur métier s'appelle le [Domain](/fr/blog/model-orm-vs-domain-model/). Et promis, chérissez-le : c'est là que se joue 80 % du succès ou de l'échec d'un projet.

10 jours passés uniquement à penser au métier en amont, c'est potentiellement 9 mois de dette et de bugs évités 2 ans plus tard...

Et une fois ce métier modélisé, encore faut-il distinguer, dans le code, [ce qui est une règle métier de ce qui est un bug](/fr/blog/result-pattern-business-errors/) : les deux ne se traitent pas de la même façon.
