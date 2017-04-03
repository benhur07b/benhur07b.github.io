---
layout: post
title: How to create a Bootable Windows 10 USB in Xubuntu 16.04 using mkusb
description: But why? Hahaha.
tags:
  - windows
  - xubuntu
  - '16.04'
comments: true
pinned: false
---

### Requirements
**[Windows 10 ISO]**(https://www.microsoft.com/en-us/software-download/windows10ISO)

**mkusb**

```shell
sudo add-apt-repository ppa:mkusb/ppa
sudo apt update
sudo apt install mkusb
```

**A good USB**
At least 8Gb USB/pendrive. Some USBs can't make bootable drives so invest on a good one if you can.


### HOWTO
Run **mkusb**.
```shell
mksub
```
