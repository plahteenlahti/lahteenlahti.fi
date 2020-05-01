---
title: "React Native How to Change Package Name"
date: "2020-04-30"
draft: true
tags: ["React Native", "Mobile Development", "JavaScript"]
---

When starting a new React Native project you might have come across the following problem. You decide to initialize a new project, and you choose a random name for it. However, later on you decide, perhaps just as you're about to release the app, that the name should be something else instead.

## How Not to Repeat This Mistake

When initiating project a new project, you can actually pass a `-package` flag, which will you the right package name from the start:

```bash
react-native init mobileApp -package "com.lahteenlahti.mobile"

```
