---
title: "IDOR: the security hole AI leaves in your routes"
description: "AI builds a route that returns an invoice by its id, but forgets to check who owns it. Here is the 3-step test to spot an IDOR in your own app."
pubDate: 2026-08-12
tags: ["security", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7493216729804976129/
sources:
  - title: "Insecure Direct Object Reference Prevention Cheat Sheet"
    author: "OWASP"
    url: https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html
draft: false
---

AI makes a common security blunder: [IDOR (Insecure Direct Object Reference)](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html).

What is it?

You ask the AI for a route that fetches some data. Say, an invoice.

The AI creates a route that takes the invoice id and returns it. Great…

… except it forgets to check that the invoice actually belongs to the authenticated user… or worse, that the user is authenticated at all.

Why? Because you didn't ask for it.

And AI [codes what you ask for](/blog/ai-does-only-what-you-ask/), not what you forget to ask for.

The result: the id in the URL acts as proof of identity. Except an id is just a number. Anyone can type another one.

## The test to run on your app

1. Create 2 accounts on your own app.
2. Log in with account A.
3. In the URL, replace your id with account B's.

Can you see B's data?

⇒ **Everyone** sees everything. Your customers see other customers' invoices.
