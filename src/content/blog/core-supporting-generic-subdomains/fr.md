---
title: "Core, supporting, generic : les trois types de subdomains"
description: "Analyser le business domain révèle trois types de subdomains : core, supporting et generic. Les identifier, c'est savoir où mettre son temps et son effort."
pubDate: 2026-10-18
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7517542999543791616/
sources:
  - title: "Domain-Driven Design: Tackling Complexity in the Heart of Software"
    author: "Eric Evans"
    year: 2004
    url: https://www.domainlanguage.com/ddd/blue-book/
  - title: "Learning Domain-Driven Design"
    author: "Vlad Khononov"
    year: 2021
    url: https://vladikk.com/page/books/
  - title: "Stripe"
    url: https://stripe.com/
  - title: "Brevo"
    url: https://www.brevo.com/
  - title: "Postmark"
    url: https://postmarkapp.com/
draft: false
---

Un software est là pour servir tout ou partie d'un **business domain**.

Analyser ce business domain est crucial : c'est ce qui permet d'identifier les **subdomains**.

Ils se rangent en trois catégories.

## Core subdomains

C'est là que réside [la valeur ajoutée de l'entreprise](/fr/blog/the-value-is-in-the-business-rules/) face à ses concurrents. La partie complexe (si c'était simple, les concurrents copieraient vite), à construire en interne par les meilleurs, et qui va fortement évoluer sur la durée.

Quelques exemples : le routing pour un software de taxis, les algorithmes pour un software de recommandation...

## Generic subdomains

Les parties complexes mais courantes, pour lesquelles il existe déjà des solutions toutes faites. Ne pas réinventer la roue, ni perdre du temps dessus.

Quelques exemples : le paiement ([Stripe](https://stripe.com/) ou équivalent), le mailing ([Brevo](https://www.brevo.com/), [Postmark](https://postmarkapp.com/)), l'authentification (patterns connus ou lib toute faite)... etc.

## Supporting subdomains

Le reste ! Les parties spécifiques au programme (donc pas génériques), mais qui ne sont pas **le** cœur de la valeur. Souvent moins complexes, moins volatiles, et un bon point de départ pour de la montée en compétence ou de l'outsourcing.

Attention cependant : elles restent essentielles au bon fonctionnement du programme.

Quelques exemples : la gestion du catalogue produits, les connecteurs avec de la data tierce...

## Pourquoi se donner la peine de mapper tout ça ?

Tout simplement pour prioriser son temps et son effort.

- **Generic** : reconstruire = perte de temps et d'argent. Payer un outil tiers est souvent 20x plus rentable.
- **Supporting** : un profil plus junior peut s'en charger, en le cadrant bien. Et on n'y passe pas plus de temps que nécessaire.
- **Core** : les meilleurs ingénieurs, le max de l'effort, les itérations.

Et dans le pire des cas, vous pouvez même vous rendre compte pendant l'exercice que vous n'avez pas de vrai core domain complexe. Là, c'est toute la viabilité du projet qui est à revoir.

Cette cartographie, c'est [l'un des premiers exercices que je mène avec une équipe](/fr/work-with-me/).

On confond souvent subdomains et bounded contexts : [voici comment les distinguer](/fr/blog/subdomains-vs-bounded-contexts/).

PS : je n'invente absolument rien ici. C'est de la vulgarisation de concepts au cœur du DDD ([Eric Evans](https://www.domainlanguage.com/ddd/blue-book/), [Vlad Khononov](https://vladikk.com/page/books/)... etc.).

PPS : désolé pour les anglicismes... mais traduire ces termes est contre-productif je pense. Mieux vaut parler le même langage ;)
