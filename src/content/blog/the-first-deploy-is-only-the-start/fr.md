---
title: "Produit vibecodé : le premier déploiement n'est que le début"
description: "Failles PHP et Next.js, 1 094 correctifs Microsoft, 95 000 CVE en 2026 : un produit vibecodé n'est jamais « fini », sa maintenance commence au déploiement."
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

L'erreur du vibecodeur, c'est de croire qu'une fois le produit « fini », c'est bon...

...sauf que...

## Rien que ces dernières semaines

- [PHP](https://www.php.net/archive/2026.php#2026-10-21-5) : 2 failles critiques, [déjà exploitées](https://www.cybersecuritydive.com/news/cisa-security-researchers-exploitation-php-flaws/872886/) (dans du code vieux de plus de 10 ans)
- [Next.js](https://nextjs.org/blog/nextjs-security-update-october-14-2026) (qu'adore l'IA) : 2 RCE critiques mi-octobre (après d'autres en septembre, en [août](https://nextjs.org/blog/august-2026-security-release)...)
- Microsoft : [1 094 (oui oui, vous lisez bien) failles corrigées](https://cyberinsider.com/microsoft-november-2026-patch-tuesday-outlook-zero-day/) dans **un seul** patch cette semaine. Dont une faille Outlook déjà exploitée.
- [Node.js](https://nodejs.org/en/blog/vulnerability/november-2026-security-releases) (pareil, un chouchou de l'IA) : des releases de sécurité en chaîne depuis début 2026
- Cloudflare : pas de faille, mais des pannes ([février 2026](https://blog.cloudflare.com/cloudflare-outage-february-20-2026/), [novembre 2025](https://blog.cloudflare.com/18-november-2025-outage/))... qui touchent une grosse partie du web

Et ça s'accélère !

## Les chiffres

On parle de [plus de 95 000 CVE](https://craci.com/resources/CVE-publication-trends) publiées depuis début 2026. Soit environ x2,3 par rapport à la même période l'année dernière.

Le coût d'une fuite de données ? [4,99 M$ en moyenne](https://www.ibm.com/reports/data-breach).

La CNIL ?

- [42 M€ pour Free](https://www.cnil.fr/fr/sanction-free-2026) en janvier
- [500 k€ pour un hôpital privé](https://www.cnil.fr/fr/sanction-hopital-prive-loire) en septembre

Ça ne touche pas que les géants (on l'a vu avec [la CVE sur les apps Lovable](/fr/blog/lovable-cve-real-cost-of-vibe-coding/)).

## Un projet commence au premier déploiement

L'IA, c'est un outil incroyable pour un prototype, ou dans les mains d'un professionnel du métier.

Mais un projet [ne s'arrête pas au premier déploiement](/fr/blog/side-projects-die-after-the-mvp/)... il commence tout juste :

- mises à jour des dépendances
- patchs à appliquer (toutes les semaines...)
- monitoring

Et **une** faille peut suffire à couler votre société : confiance client perdue, amendes...

Bref, faites-vous [accompagner par des professionnels](/fr/work-with-me/).

D'autant qu'aujourd'hui, vous n'avez [plus besoin de quelqu'un à temps plein](/fr/blog/the-part-time-senior-developer/) là-dessus.
