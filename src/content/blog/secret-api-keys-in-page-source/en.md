---
title: "Your secret API keys might be visible to everyone"
description: "AI puts keys wherever they work: in the bundle, so on everyone's machine. Here is how to check whether your secret API keys are visible on your website."
pubDate: 2026-08-11
tags: ["security", "ai-era"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7492873432200613891/
sources:
  - title: "API keys"
    author: "Stripe"
    url: https://docs.stripe.com/keys
draft: false
---

You might have secret API keys… publicly visible on your website.

To check:

1. Go to your website.
2. Right-click ⇒ "View page source".
3. Ctrl+F (search), then type `sk_`, then `api_key`, then `secret`.

If you get any results, that is not a good sign…

AI loves putting keys wherever they work. Except that wherever they work = in the bundle = on everyone's machine, in public.

PS: `sk_live_` in the page source is your [Stripe](https://docs.stripe.com/keys) key, free for the taking. Check that one first.
