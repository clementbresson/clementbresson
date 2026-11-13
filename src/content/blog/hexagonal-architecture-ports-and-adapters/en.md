---
title: "Hexagonal Architecture: Cockburn's Ports & Adapters pattern"
description: "Alistair Cockburn, 2005: think of a program as a business inside and an outside plugged in through ports and adapters, rather than as layers."
pubDate: 2026-08-22
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7496864962611662848/
sources:
  - title: "Hexagonal (Ports & Adapters) Architecture"
    author: "Alistair Cockburn"
    year: 2005
    url: https://alistair.cockburn.us/hexagonal-architecture/
  - title: "Interview with Alistair Cockburn"
    author: "Juan Manuel Garrido de Paz"
    year: 2020
    url: https://jmgarridopaz.github.io/content/interviewalistair.html
draft: false
---

How do you make a program testable without a graphical interface and without a database?

In 2005, Alistair Cockburn published his thinking on the subject, [which dates back to the 90s](https://jmgarridopaz.github.io/content/interviewalistair.html): the [Port/Adapter pattern](https://alistair.cockburn.us/hexagonal-architecture/).

## What is it?

Rather than thinking of a program [in layers](/blog/what-is-a-layer-in-software-architecture/) (he criticises their inevitable porosity, which lets pollution in and leaks out what they are supposed to protect, first and foremost the business code), he proposes to think of it as:

- an **inside** (the business code);
- an **outside** (the real world: persistence technologies, user interface, etc.).

He draws the whole thing as a hexagon, hence the pattern's second name: Hexagonal Architecture (though he prefers Port/Adapter pattern).

## How do the inside and the outside communicate?

Through **ports**, which he defines as an "intention of conversation with an outside actor".

Two common examples from the TS world:

- the "User persistence" conversation, expressed in TS by a `UserRepository` interface;
- the "User management" conversation, expressed in TS by the use cases the outside can call (`CreateUser`, `DeleteUser`…).

Into these ports plug the **adapters**, which are implementations of the outside that honour their conversation contract.

Going back to our previous examples, here are two common adapters for each:

- `PostgresUserRepository`
- `InMemoryUserRepository`
- an Express controller using `CreateUser`
- a CLI command using `CreateUser`

## Driving and driven adapters

These examples also illustrate a distinction he makes between:

- **driving** (or primary) adapters, which call the inside (Express/CLI => call `CreateUser`);
- **driven** (or secondary) adapters, which are called by the inside (PostgreSQL/InMemory => `CreateUser` probably calls methods like `findUserByX`, `saveUser`…).

To him, these two types of adapters are symmetrical... and essentially the same thing.

That is actually the source of a second criticism he makes of layers: they cannot represent this symmetry (for example: user interface at the top, infrastructure at the bottom? According to him, that makes no sense).

## What it gives you

In the end, he explains that the Port/Adapter pattern represents reality more faithfully than layers do, and that once (properly) implemented, it lets you:

- test business code without a UI or without a DB;
- change technology over the years;
- reuse your business code more easily for different purposes;
- have backup adapters in case one adapter fails.

## What Cockburn leaves open

Note: in his original article, Cockburn stays conceptual.

- Concrete examples of ports?
- The preferred granularity of ports?
- How to organise the inside?

=> Up to the architect, as long as the ports are easy to find and express a clear intention.

Where to draw that line between inside and outside is exactly [the kind of call I help teams make](/work-with-me/).
