---
title: "Supabase et RLS : la vérification de 2 minutes"
description: "L'IA oublie parfois d'activer RLS sur les tables Supabase créées en SQL : n'importe qui peut alors lire ta base. Voici comment le vérifier en 2 minutes."
pubDate: 2026-08-10
tags: ["security", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7492523835691446273/
sources:
  - title: "Row Level Security"
    author: "Supabase"
    url: https://supabase.com/docs/guides/database/postgres/row-level-security
  - title: "Supabase"
    author: "Supabase"
    url: https://supabase.com/
  - title: "Welcome to Lovable"
    author: "Lovable"
    url: https://docs.lovable.dev/introduction
  - title: "Statement on CVE-2025-48757"
    author: "Matt Palmer"
    year: 2025
    url: https://mattpalmer.io/posts/statement-on-CVE-2025-48757/
  - title: "CVE-2025-48757"
    author: "Matt Palmer"
    year: 2025
    url: https://mattpalmer.io/posts/CVE-2025-48757/
draft: false
---

L'IA oublie régulièrement une config [Supabase](https://supabase.com/) qui décide si n'importe qui peut lire ta base.

Ça s'appelle [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), et ce n'est pas activé par défaut sur les tables créées via SQL… Et devine qui utilise le SQL pour les créer ? L'IA ! La plupart du temps, elle configure tout comme il faut… mais elle n'est pas infaillible.

L'an dernier, 170+ apps [Lovable](https://docs.lovable.dev/introduction) se sont fait aspirer leur base comme ça. Emails, paiements, clés API.

## La vérification de 2 minutes si tu utilises Supabase

1. Dashboard Supabase ⇒ Database ⇒ Policies.
2. Cherche les tables marquées « RLS disabled » ou sans aucune policy.

⇒ Une table sans policy = une table publique.

De rien :)
