---
layout: post
title: Solve Boot Configuration Data (missing or corrupt BCD) file problem in Windows 8/8.1/10.
description: Windows not booting properly? Giving you that Blue Screen of Death? It might be a problem with our Boot Configuration Data. Here's one of the ways you can solve it.
tags: [windows]
pinned: false
comments: true
og_type: article
image: /images/2017-04-03-how-to-solve-bcd-problem-in-windows-8-8.1-10/bcd-001.jpg
---

<img class="img-responsive" src="{{ site.baseurl }}/images/posts/2017-04-03-how-to-solve-bcd-problem-in-windows-8-8.1-10/bcd-001.jpg">

You've probably encountered the image above or one of its iterations while booting into your Windows computer. A missing or corrupted Boot Configuration Data (BCD) file prevents your OS from booting up. It seems scary but it should be fixed in a pretty straightforward manner. Also, don't worry about your files. They're probably still safe as it's just your OS that's being problematic. If you want to be sure about your files, you can use a Linux live-usb to check.

Going back to the BCD error, before you bring your computer to a service center and get charged for its repair, you can try this DIY fix first.

### What you'll need
**1. Windows installation media/recovery disk (e.g. DVD or USB)**

If you don't have the installation disk with you, you can download ISOs [here](https://www.microsoft.com/en-us/software-download/) or use the Windows Media Creation Tool if you're using a Windows machine. If you're using a Linux machine, you can check our how to make a bootable Windows USB on Linux [here]({{ site.baseurl }}/2017/04/03/how-to-create-a-bootable-windows-10-usb-in-xubuntu-16.04-using-mkusb.html)

> <span style="color: red;"><em>Important:</em></span> Make sure that your installation media/recovery disk is the same Windows version and edition as the OS you're trying to fix. If your OS is Windows 8.1 Single Language, use a Windows 8.1 SL installation media, if you have a Windows 10 N OS, use a Windows 10 N installation media, etc.

**2. Change your BIOS/UEFI settings so that your OS has the same Boot Mode as your installation media**

This is **very** important. If your OS uses UEFI, you should repair it with a EUFI installation media booted via UEFI BIOS. If your OS was installed using Legacy BIOS, you should use a non-UEFI installation media booted via Legacy BIOS.

There are several ways to access your UEFI/BIOS settings depending on your computer maker and model. F2 and F8 are common ones. You can always check with your manufacturer if you're unsure or you can wait until you get a BSOD (like the first picture in this post) and press ESC.

### How to do the fix

**1. Insert the installation media (USB or DVD).**

**2. Make sure you have the correct Boot Mode enabled.**

**3. Boot into your computer using the installation media.**

**4. Launch the command prompt.**

Troubleshoot -> Command Prompt

**5. Enter the following lines into the command prompt.**

```
bootrec /fixboot
```

which should output ```The operation completed successfully```

```
bootrec /fixmbr
```

which should output ```The operation completed successfully```

```
bootrec /rebuildbcd
```

This has two possible outputs, if you're lucky you'll get the 1st one which makes your life that much easier.

**Output #1:**
```
Scanning all disks for Windows installations.

Please wait, since this may take a while...

Successfully scanned Windows installations.
Total identified Windows installations: 1
[1]  C:\Windows
Add installation to boot list? Yes<Y>/No<N>/All<A>:
```

Proceed to **8.**

**Output #2:**
```
Scanning all disks for Windows installations.

Please wait, since this may take a while...

Successfully scanned Windows installations.
Total identified Windows installations: 0
```

This means that the system cannot find a Windows installation on your machine. First, make sure that you're using the same Windows version and edition in your installation media and that the Boot Mode is correct. If they are, we need to rebuild our bcd completely.

Proceed to **6.**

**6. Enter the following lines into the command prompt**

Let n: be the volume where your OS is installed. Most commonly, this is the c: volume.

Make a backup of the bcd.
```
bcdedit /export n:\bcdbackup
```

Change the file attributes of the bcd so you can edit it.
```
attrib n:\boot\bcd -h -r -s
```

Rename the bcd so the system will rebuild it. You can actually delete the file but renaming it serves as another form of backup.
```
ren n:\boot\bcd bcd.backup
```

**7. Rebuild the BCD**

Enter the following again in the command prompt.
```
bootrec /rebuildbcd
```

It should now output:
```
Scanning all disks for Windows installations.

Please wait, since this may take a while...

Successfully scanned Windows installations.
Total identified Windows installations: 1
[1]  C:\Windows
Add installation to boot list? Yes<Y>/No<N>/All<A>:
```

**8. Enter Y or Yes in the command prompt**

This should result in a ```The operation completed successfully``` message.


**9. Reboot your computer.**

If you followed all the instructions above and the BCD is the only problem, your computer should now boot into its OS without a hitch.
