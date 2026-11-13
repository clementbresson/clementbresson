---
title: "Five types of coupling, from most acceptable to worst"
description: "External, common, control, stamp, content: five types of coupling ranked from the most acceptable to the worst, and how to keep each one in check in a codebase."
pubDate: 2026-02-16
tags: ["architecture"]
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7429229724092149760/
sources:
  - title: "The Hexagonal (Ports & Adapters) Architecture"
    author: "Alistair Cockburn"
    year: 2005
    url: https://alistair.cockburn.us/hexagonal-architecture/
  - title: "Passing Data Deeply with Context"
    author: "React"
    url: https://react.dev/learn/passing-data-deeply-with-context
draft: false
---

Right, to give you a break from AI posts, a bit of software architecture technique.

In your view, what are the worst forms of coupling in a codebase ([enemy number one, if you ask me](/blog/coupling-is-the-worst-thing-in-a-codebase/)), from the most acceptable to the least acceptable? Here is my take:

## 1. External coupling

Several modules depend on the same external system (DB, API…). You can't avoid it entirely. With a port/adapter setup ([hexagonal architecture](https://alistair.cockburn.us/hexagonal-architecture/)), you can save your own life the day you want to migrate that external system.

## 2. Common coupling

Shared, mutable global state (a big config, a big catch-all [React context](https://react.dev/learn/passing-data-deeply-with-context)…). Side effects, implicit execution order, painful debugging. Avoid it and keep it to the bare minimum (things that are truly global and never, or almost never, change).

## 3. Control coupling

You pass flags to drive the internal behaviour of another module. The `if`s pile up. Prefer polymorphism, or a composition approach if you can.

## 4. Stamp coupling

You pass a whole object when you only use part of it. A needless dependency on its structure. It is often better to pass only the data you need.

## 5. Content coupling

One module reaches into the internals of another. The worst. Run away from it. When it happens, it's often because there was no time to do better.

Can you think of others?

The goal isn't to remove 100% of coupling (impossible), but to contain it and keep it under control.
