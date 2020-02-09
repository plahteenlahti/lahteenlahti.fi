---
title: "How to Fix 'VirtualizedLists should never be nested inside plain ScrollViews'"
date: "2020-02-02"
tags: ["React Native", "Mobile Development"]
---

When developing with React Native using FlatList or SectionList component inside a plain ScrollView your debugger might display the following message:

```javascript
VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.
```

This warning pretty much tells what is about. What is doesn't tell is why this is bad and how to fix error (other than changing the orientation of the nested VirtualizedList but that is not always possible). Let's look how why this happens and how to fix it.

### Why nesting VirtualizedList inside a plain ScrollView is bad?

In the early days of React Native,

### How fix this error the right way

Let's imagine we have an app where user can scroll through a different recipes. The main view consists of a ScrollView and inside that view we have collection of components such as a header, text, and cover photo. It looks something like this:

```javascript
<ScrollView>
  <CoverPhoto src={images[0]} />
  <Title>Welcome</Title>
  <Text>
    Nice to have you here. Take a look at the list of possible actions below
  </Text>
</ScrollView>
```

Now we want to add a list of different
