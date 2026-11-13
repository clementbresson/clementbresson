---
title: "Harnais IA : les scripts, ces grands oubliés du déterminisme"
description: "Un skill dit à l'IA comment créer des fichiers, un script le fait à sa place, de façon déterministe. Moins cher, plus robuste : un exemple concret avec un CMS."
pubDate: 2026-09-19
tags: ["ai-harnesses"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7507013824546365440/
sources:
  - title: "Harness engineering for coding agent users"
    author: "Birgitta Böckeler"
    year: 2026
    url: https://martinfowler.com/articles/harness-engineering.html
draft: false
---

Un bon [Harness IA](/fr/blog/ai-harness-guides-and-sensors/), c'est avant tout un Harness le plus déterministe possible.

Et je pense que les scripts sont actuellement sous-utilisés dans ce domaine.

Voici un exemple récent.

## Le besoin

Besoin client : gérer la création de posts dans un CMS git-based (pour les moins techos : articles stockés directement dans la codebase, donc sans CMS externe ni DB).

Le but étant que l'humain écrive l'article, et que l'IA s'occupe de le rajouter dans le CMS et de le publier.

## Harness IA basique : un skill

Création d'un skill pour un agent IA qui explique comment bien faire les choses à partir d'un texte : correction des fautes, traduction dans une 2ᵉ langue, récupération des articles existants pour ajouter du maillage, création des fichiers.

Relisez bien ce dernier point : création des fichiers.

Bien sûr, un LLM le fera bien dans la majorité des cas. Parce qu'il y a 300 posts à côté sur le même format, et que c'est bête et méchant.

Mais ça reste une intention dictée dans un prompt de skill... [pas une règle inviolable](/fr/blog/architecture-rules-that-break-the-build/). Rien n'empêche une mauvaise surprise un jour où le modèle s'est levé du mauvais pied.

## Harness IA plus avancé : un script

Faire un script qui gère à 100 % la création des fichiers sur le disque. Le LLM envoie ses textes au script... qui valide la donnée et crée les fichiers de façon déterministe et quasi instantanée.

C'est à la fois moins cher et plus robuste.

Le LLM s'occupe uniquement de sa partie : traduire, corriger du texte, repérer de bons liens entre articles... et délègue ensuite le reste au script.

Cette stratégie fonctionne très très bien dès que vous tombez sur quelque chose que l'IA fait de façon répétitive, et qui doit être strictement identique à chaque fois.

Selon les définitions de [Böckeler](https://martinfowler.com/articles/harness-engineering.html), on parle ici de Sensor Feedforward d'un bon Harness IA.

Comme toujours, ça part d'un besoin identifié, et doit être [customisé pour chaque projet](/fr/work-with-me/).
