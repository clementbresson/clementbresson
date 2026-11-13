---
title: "Supabase and RLS: the 2-minute check"
description: "AI sometimes forgets to enable RLS on Supabase tables created via SQL, and then anyone can read your database. Here is how to check it in 2 minutes."
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

AI regularly forgets a [Supabase](https://supabase.com/) setting that decides whether anyone can read your database.

It is called [RLS](https://supabase.com/docs/guides/database/postgres/row-level-security), and it is not enabled by default on tables created via SQL… And guess who uses SQL to create them? AI! Most of the time it sets everything up properly… but it is not infallible.

Last year, 170+ [Lovable](https://docs.lovable.dev/introduction) apps had their database siphoned off this way. Emails, payments, API keys.

## The 2-minute check if you use Supabase

1. Supabase dashboard ⇒ Database ⇒ Policies.
2. Look for tables marked "RLS disabled" or with no policy at all.

⇒ A table with no policy = a public table.

You're welcome :)
