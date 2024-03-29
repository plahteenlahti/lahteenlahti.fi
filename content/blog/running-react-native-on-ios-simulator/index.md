---
title: Running React Native apps on specific iOS simulators
date: "2019-10-31T00:00:00.0000"
draft: false
tags: ["React Native", "iOS"]
description: "There is no need to start Xcode to test on different React Native apps on different device simulators. You can do that easily with the simulator flag."
---

If you're developing React Native apps for iOS you're most likely familiar with this command:

```bash
react-native run-ios
```

In most cases that command opens up the iPhone X simulator. Instead, if you want to open your React Native app in a specific simulator you can also add the wanted device name with the simulator flag like this:

```bash
react-native run-ios simulator='iPhone 8'
```

And it will open up the iPhone 8 Simulator. You can get the full list of available devices with the command

```bash
xcrun simctl list devices
```

And here's a list of all the available devices available for testing:

```bash
react-native run-ios --simulator="iPhone 5s"
react-native run-ios --simulator="iPhone 6"
react-native run-ios --simulator="iPhone 6 Plus"
react-native run-ios --simulator="iPhone 6s"
react-native run-ios --simulator="iPhone 6s Plus"
react-native run-ios --simulator="iPhone 7"
react-native run-ios --simulator="iPhone 7 Plus"
react-native run-ios --simulator="iPhone 8"
react-native run-ios --simulator="iPhone 8 Plus"
react-native run-ios --simulator="iPhone SE"
react-native run-ios --simulator="iPhone X"
react-native run-ios --simulator="iPhone XR"
react-native run-ios --simulator="iPhone XS"
react-native run-ios --simulator="iPhone XS Max"
react-native run-ios --simulator="iPhone 11"
react-native run-ios --simulator="iPhone 11 Pro"
react-native run-ios --simulator="iPhone 11 Pro Max"
react-native run-ios --simulator="iPhone XS Max"
react-native run-ios --simulator="iPad Air"
react-native run-ios --simulator="iPad Air 2"
react-native run-ios --simulator="iPad"
react-native run-ios --simulator="iPad Pro"
react-native run-ios --simulator="iPad"

```

### I'm getting "Could not find iPhone X simulator" or similar error message when running this command

At times you might run into problems with this command. This error message, for example, is quite common:

```bash
Could not find iPhone X simulator

Error: Could not find iPhone X simulator
```

This often caused by updating to a new Xcode version which doesn't include the iPhone X simulator any more, which is the default for react-native-cli. This problem should disappear when you pass the simulator flag and another device than iPhone X.

This was a quick and simple guide to running on different iOS simulators when building React Native apps. I wrote this because I found myself googling different device names too often. I hope that you find it useful 🙂
