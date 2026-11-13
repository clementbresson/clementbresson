---
title: "Using AI to code a music video engine from scratch"
description: "My wife is a singer and her music videos are a headache. Instead of a shoot or an AI-generated video, I coded a custom engine that renders each video."
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

[Yesterday, I was saying we could use AI to do new things](/blog/ai-to-build-something-new/), and not only to go faster.

I didn't think I'd put it into practice so soon!

## The context

My wife is a professional singer, she releases songs… and the music videos / visuals are always a headache:

- an amateur photo shoot? It quickly looks cheap (and it can easily add up to days… for something that is only secondary in her case);
- paying someone? Expensive (and short of a gold record… it will cost as much as the song brings in).

At the same time, she's like me: she likes projects that go a bit further.

"Basic" motion design with [Claude](https://claude.com/product/overview): out of the question.
A video from a generative AI model: out of the question too (expensive, tricky iterations, slop…).

## Instead? Code

I went… for code :)

- an asset generation system in [Python](https://www.python.org/) (SVG for 2D, [Blender](https://docs.blender.org/manual/en/latest/) for 3D);
- a custom engine that renders the video deterministically, once the assets and the JSON config files are ready;
- animations synced… to the tempo, the bass, the treble…;
- a visual universe reusable from one video to the next (and imagination is the only limit for the art direction);
- options to iterate on lightweight renders, then render in 4K at the end;
- landscape or vertical export for the different platforms;
- and so on.

Basically, graphic design done by a developer (and I love graphic design too, I did it for years :)

## Something truly new

And I can already tell you the result will exceed all my initial expectations.

With, it seems, something truly "new". And doing it by hand would have taken me months… just for the tests.

We really are in a new world, where ideas are everything! It's also the angle [I push on the products I take part in](/work-with-me/).

Happy building!

PS: I'll share the first video… and you'll see, it's stunning :)
