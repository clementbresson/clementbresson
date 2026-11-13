---
title: "Avec l'IA, j'ai codé un moteur de clips musicaux"
description: "Ma femme est chanteuse et ses clips sont un casse-tête. Plutôt qu'un shooting ou une vidéo générée par IA, j'ai codé un moteur de rendu de clips sur mesure."
pubDate: 2026-11-09
tags: ["ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7525637300769193984/
sources:
  - title: "Claude"
    author: "Anthropic"
    url: https://claude.com/product/overview
  - title: "Python"
    author: "Python Software Foundation"
    url: https://www.python.org/
  - title: "Blender Manual"
    author: "Blender Foundation"
    url: https://docs.blender.org/manual/en/latest/
draft: false
---

[Hier, je disais qu'on pouvait utiliser l'IA pour faire des choses nouvelles](/fr/blog/ai-to-build-something-new/), et pas uniquement pour faire plus vite.

Je ne pensais pas le mettre en application si vite !

## Le contexte

Ma femme est chanteuse pro, elle sort des morceaux… et les clips / visuels, c'est toujours un casse-tête :

- un shooting amateur ? Ça fait vite cheap (et ça peut vite prendre des jours mis bout à bout… pour quelque chose qui n'est que secondaire dans son cas) ;
- payer quelqu'un ? Cher (et sauf disque d'or… ça coûtera autant que ce que rapporte le morceau).

Et en même temps, elle est comme moi : elle aime les projets un peu poussés.

Du motion design « de base » avec [Claude](https://claude.com/product/overview) : hors de question.
Une vidéo avec un modèle d'IA générative : hors de question aussi (cher, itérations compliquées, slop…).

## À la place ? Du code

Je suis parti… sur du code :)

- un système de génération d'assets en [Python](https://www.python.org/) (SVG pour la 2D, [Blender](https://docs.blender.org/manual/en/latest/) pour la 3D) ;
- un moteur custom qui rend le clip de façon déterministe, une fois les assets et les JSON de config prêts ;
- des animations calées… sur le tempo, les graves, les aigus… ;
- un univers graphique réutilisable de clip en clip (et l'imagination est la seule limite pour la DA) ;
- des options pour itérer en léger, et rendre en 4K à la fin ;
- un export paysage ou vertical pour les différentes plateformes ;
- etc.

En gros, du graphisme fait par un développeur (sachant que j'adore aussi le graphisme, et que j'en ai fait pendant des années :)

## Quelque chose de vraiment nouveau

Et je peux déjà vous dire que le résultat va dépasser toutes mes attentes de départ.

Avec, a priori, quelque chose de vraiment « nouveau ». Et faire ça à la main m'aurait pris des mois… rien que pour les tests.

On est vraiment dans un monde nouveau, où les idées valent tout ! C'est d'ailleurs l'angle que [je pousse sur les produits auxquels je participe](/fr/work-with-me/).

Bons builds !

PS : je partagerai le premier clip… et vous verrez, c'est bluffant :)
