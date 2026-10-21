---
title: "Majuscules-Driven Development : crier sur l'IA ne sert à rien"
description: "Crier en majuscules sur une IA pour qu'elle respecte une règle d'architecture ne sert à rien : un outil déterministe la vérifie à votre place."
pubDate: 2026-10-21
tags: ["architecture", "ai-harnesses"]
sources:
  - title: "eslint-plugin-boundaries"
    author: "Javier Brea"
    year: 2020
    url: https://github.com/javierbrea/eslint-plugin-boundaries
  - title: "The 'Godfather of AI' says it's not 'unreasonable' to believe there's a 10% chance the technology will end humanity"
    author: "Brent D. Griffiths, Business Insider"
    year: 2026
    url: https://www.businessinsider.com/geoffrey-hinton-godfather-of-ai-human-extinction-odds-2026-9
draft: false
---

Voici un exemple de Majuscules-Driven Development :

> MAIS B\*\*\*L CLAUDE IL NE FAUT RIEN IMPORTER DE CETTE COUCHE DANS CELLE-CI !!!

Au-delà du risque d'être impoli et rustre avec elle (à l'heure où [Geoffrey Hinton](https://www.businessinsider.com/geoffrey-hinton-godfather-of-ai-human-extinction-odds-2026-9) lui-même juge qu'une probabilité de 10 % que l'IA éteigne l'humanité n'a « rien de déraisonnable »...), ce n'est pas très efficace.

Pourquoi ?

Parce qu'une règle d'import entre couches est vérifiable de façon déterministe et computationnelle.

Par exemple avec [dependency-cruiser](/fr/blog/dependency-cruiser-as-a-sensor-for-ai-agents/) ou [eslint-plugin-boundaries](https://github.com/javierbrea/eslint-plugin-boundaries) dans le monde TypeScript.

## Tout ce qui peut être vérifié sans IA doit être fait sans IA

Et il y a une règle toute simple, bien trop souvent oubliée aujourd'hui : TOUT ce qui peut être vérifié sans IA doit être fait sans IA.

C'est plus rapide, moins cher, et ça peut augmenter votre espérance de vie de quelques années.

Une règle posée dans un outil comme dependency-cruiser ou eslint-plugin-boundaries ne peut pas être oubliée, contournée par lassitude ou mal interprétée. C'est exactement [la différence entre une intention et une contrainte](/fr/blog/architecture-rules-that-break-the-build/) : écrite en toutes lettres dans un prompt, la règle reste un vœu pieux ; posée dans la CI, elle devient infranchissable.
