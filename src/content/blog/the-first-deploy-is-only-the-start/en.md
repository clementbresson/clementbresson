---
title: "A vibe-coded product isn't done at the first deploy"
description: "PHP and Next.js flaws, 1,094 Microsoft fixes, 95,000 CVEs in 2026: a vibe-coded product is never done, and its maintenance starts on the day you deploy."
pubDate: 2026-11-13
tags: ["security", "ai-era"]
sources:
  - title: "Security advisory: Critical remote code execution vulnerabilities, update now"
    author: "The PHP Group"
    year: 2026
    url: https://www.php.net/archive/2026.php#2026-10-21-5
  - title: "CISA, security researchers warn of exploitation of PHP flaws"
    author: "Cybersecurity Dive"
    year: 2026
    url: https://www.cybersecuritydive.com/news/cisa-security-researchers-exploitation-php-flaws/872886/
  - title: "Next.js Security Update for Upstream Vulnerabilities"
    author: "Vercel"
    year: 2026
    url: https://nextjs.org/blog/nextjs-security-update-october-14-2026
  - title: "August 2026 Security Release"
    author: "Vercel"
    year: 2026
    url: https://nextjs.org/blog/august-2026-security-release
  - title: "Microsoft November 2026 Patch Tuesday fixes Outlook zero-day"
    author: "CyberInsider"
    year: 2026
    url: https://cyberinsider.com/microsoft-november-2026-patch-tuesday-outlook-zero-day/
  - title: "November 2026 Security Releases"
    author: "Node.js"
    year: 2026
    url: https://nodejs.org/en/blog/vulnerability/november-2026-security-releases
  - title: "Cloudflare outage on February 20, 2026"
    author: "Cloudflare"
    year: 2026
    url: https://blog.cloudflare.com/cloudflare-outage-february-20-2026/
  - title: "Cloudflare outage on November 18, 2025"
    author: "Cloudflare"
    year: 2025
    url: https://blog.cloudflare.com/18-november-2025-outage/
  - title: "CVE publication trends"
    author: "CRACI"
    year: 2026
    url: https://craci.com/resources/CVE-publication-trends
  - title: "Cost of a Data Breach Report 2026"
    author: "IBM"
    year: 2026
    url: https://www.ibm.com/reports/data-breach
  - title: "Violation de données : sanction de 42 millions d'euros à l'encontre des sociétés FREE MOBILE et FREE"
    author: "CNIL"
    year: 2026
    url: https://www.cnil.fr/fr/sanction-free-2026
  - title: "Violation de données en matière de santé : sanction de 500 000 euros à l'encontre de l'HÔPITAL PRIVÉ DE LA LOIRE"
    author: "CNIL"
    year: 2026
    url: https://www.cnil.fr/fr/sanction-hopital-prive-loire
draft: false
---

The vibe coder's mistake is believing that once the product is "done", you're set...

...except that...

## In the last few weeks alone

- [PHP](https://www.php.net/archive/2026.php#2026-10-21-5): 2 critical vulnerabilities, [already exploited](https://www.cybersecuritydive.com/news/cisa-security-researchers-exploitation-php-flaws/872886/) (in code more than 10 years old)
- [Next.js](https://nextjs.org/blog/nextjs-security-update-october-14-2026) (which AI loves): 2 critical RCEs in mid-October (after others in September, in [August](https://nextjs.org/blog/august-2026-security-release)...)
- Microsoft: [1,094 (yes, you read that right) vulnerabilities fixed](https://cyberinsider.com/microsoft-november-2026-patch-tuesday-outlook-zero-day/) in **a single** patch this week. Including an Outlook flaw already being exploited.
- [Node.js](https://nodejs.org/en/blog/vulnerability/november-2026-security-releases) (another AI favourite): one security release after another since early 2026
- Cloudflare: no vulnerability, but outages ([February 2026](https://blog.cloudflare.com/cloudflare-outage-february-20-2026/), [November 2025](https://blog.cloudflare.com/18-november-2025-outage/))... that hit a big part of the web

And it's speeding up!

## The numbers

We're talking about [more than 95,000 CVEs](https://craci.com/resources/CVE-publication-trends) published since early 2026. That's about 2.3 times the same period last year.

The cost of a data breach? [$4.99M on average](https://www.ibm.com/reports/data-breach).

The CNIL, France's data protection authority?

- [€42M for Free](https://www.cnil.fr/fr/sanction-free-2026) in January
- [€500k for a private hospital](https://www.cnil.fr/fr/sanction-hopital-prive-loire) in September

It doesn't only hit the giants (we saw it with [the CVE on Lovable apps](/blog/lovable-cve-real-cost-of-vibe-coding/)).

## A project starts at the first deploy

AI is an incredible tool for a prototype, or in the hands of a professional who knows the trade.

But a project [doesn't stop at the first deploy](/blog/side-projects-die-after-the-mvp/)... it's only just starting:

- dependency updates
- patches to apply (every week...)
- monitoring

And **one** vulnerability can be enough to sink your company: lost customer trust, fines...

In short, get [support from professionals](/work-with-me/).

Especially since, today, you [no longer need someone full-time](/blog/the-part-time-senior-developer/) on it.
