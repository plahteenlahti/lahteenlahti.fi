---
title: "How to Fix 'VirtualizedLists should never be nested inside plain ScrollViews'"
date: "2020-02-02"
draft: true
tags: ["React Native", "Mobile Development"]
---

When developing with React Native using FlatList or SectionList component inside a plain ScrollView your debugger might display the following message:

```javascript
VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.
```

This warning pretty much tells what is about. What is doesn't tell is why this is bad and how to fix error (other than changing the orientation of the nested VirtualizedList but that is not always possible). Let's look how why this happens and how to fix it.

### Why nesting VirtualizedList inside a plain ScrollView is bad?

Virtualized lists, that means <SectionList> and <FlatList> are performance optimized which massively improves memory consumption and performance when using them to render large lists of content. The way this optimization works, is that it only renders the content that is currently visible in the window, usually meaning the container / screen of your device. It also replaces all the other list items same sized blank space, and renders them based on your scrollinb

Now If you put these two list inside inside a ScrollView they fail to calculate the size

finite render window of active items and replacing all items outside of the render window with appropriately sized blank space. The window adapts to scrolling behavior, and items are rendered incrementally with low-pri (after any running interactions) if they are far from the visible area, or with hi-pri otherwise to minimize the potential of seeing blank space.

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
