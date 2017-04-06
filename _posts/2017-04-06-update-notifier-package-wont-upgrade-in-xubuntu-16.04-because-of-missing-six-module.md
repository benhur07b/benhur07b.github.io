---
layout: post
title: update-manager and update-notifier packages won't upgrade in Xubuntu 16.04 because of missing six module. [SOLVED]
description: Sometimes the simlplest solutions are the best ones.
tags:
  - python
  - '16.04'
comments: true
pinned: false
---
I was performing a routine update and upgrade of my system packages when I encountered this error.

update-manager, update-notifier, and update-notifier-common failed to upgrade because *apparently* the python module six was not found in my system.

```shell
ImportError: No module named 'six'
```

I was pretty sure I had python-six and python3-six in my system so I checked. Everything was fine when I exported six in python and python2 but I encountered a problem when I tried to import six using the system's default python3 interpreter.

```python
python3
Python 3.5.2 (default, Nov 17 2016, 17:05:23)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import six
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: No module named 'six'
>>>
```

It seems like the module six wasn't being read by my system's python3.

I looked around for a solution. Some involved reinstalling python3 or running sudo apt install --fix-missing. Others included repairing ```/var/lib/dpkg/status``` or clearing ```/var/lib/apt/lists*``` but the easiest method that worked for me was simply reinstalling python3-six.

```shell
sudo apt install --reinstall python3-six
```

After this, update-manager and update-notifier were both automatically upgraded/installed in my machine.

To check, I tried to run another update and upgrade.

```shell
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Calculating upgrade... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
```
