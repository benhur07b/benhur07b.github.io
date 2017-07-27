---
layout: post
title: Create a Bootable Windows 10 USB in Xubuntu 16.04 using mkusb
description: But why? Hahaha.
tags: [windows, xubuntu, '16.04']
pinned: false
comments: true
og_type: article
---

### Requirements
**1.** [**Windows 10 ISO**](https://www.microsoft.com/en-us/software-download/windows10ISO)

**2. mkusb**

```shell
sudo add-apt-repository ppa:mkusb/ppa
sudo apt update
sudo apt install mkusb
```

**3. A good USB**

At least 8Gb USB/pendrive. Some USBs can't make bootable drives so invest on a good one if you can.


### Instructions

**1. Run mkusb**.

```shell
sudo mksub-dus
```

<img class="img-responsive" src="{{ site.baseurl }}/media/posts/2017-04-03-how-to-create-a-bootable-windows-10-usb-in-xubuntu-16.04-using-mkusb/mkusb-001.png">

**2. Select <em>Install (make a boot device) [ i ]</em>**

<img class="img-responsive" src="{{ site.baseurl }}/media/posts/2017-04-03-how-to-create-a-bootable-windows-10-usb-in-xubuntu-16.04-using-mkusb/mkusb-002.png">


**3. Select <em>extracting Windows installer [ w ]</em>**

<img class="img-responsive" src="{{ site.baseurl }}/media/posts/2017-04-03-how-to-create-a-bootable-windows-10-usb-in-xubuntu-16.04-using-mkusb/mkusb-003.png">

**4. Choose the Windows 10 ISO**

<img class="img-responsive" src="{{ site.baseurl }}/media/posts/2017-04-03-how-to-create-a-bootable-windows-10-usb-in-xubuntu-16.04-using-mkusb/mkusb-004.png">

**5. Choose the USB where Windows 10 will be installed.**
<p style="color: red;">**NOTE: This will delete all contents of the USB**</p>

<img class="img-responsive" src="{{ site.baseurl }}/media/posts/2017-04-03-how-to-create-a-bootable-windows-10-usb-in-xubuntu-16.04-using-mkusb/mkusb-005.png">

**6. At the end of the process, your USB should be labeled WIN-INSTALL.**

<img class="img-responsive" src="{{ site.baseurl }}/media/posts/2017-04-03-how-to-create-a-bootable-windows-10-usb-in-xubuntu-16.04-using-mkusb/mkusb-006.png">

You can now use this to Install, Reinstall, or Repair Windows 10 in other computers.
