---
layout: post
title: Connecting or Mounting a Windows Share folder in Xubuntu 16.04
description: Accessing files in a Windows Share folder is fairly straightforward in Xubuntu 16.04.
tags: [foss, windows]
comments: true
pinned: false
og_type: article
image:
  facebook: /media/site/img/BNHR-bg.png
  twitter: /media/site/img/BNHR-bg.png
---

Working in an environment where a majority of the computers are running Windows when you're using Linux is exciting and a bit frustrating at times. Recently, one of our computers (running Windows 8) at work was used as a make-shift file server so that everyone can connect and check the files there.

It came as a pleasant surprise that connecting to the shared folder on our Windows Machine was pretty straightforward.

## REQUIREMENTS

### On the WINDOWS host/server
1. The IP address of the Windows server/host (you can check this using *ipconfig* in the command propmt or in the *Network and Connection Settings*)

2. The name of the shared folder

3. The shared folder must be accessible by everyone

### On your Linux (Xubuntu 16.04) machine
1. *cifs-utils*
    ```shell
    sudo apt install cifs-utils
    ```

2. A directory to mount the share folder
    ```shell
    sudo mkdir /media/windows-share
    ```

### Variables
*windows_ip* - the IP address of the Windows host/server

*sharename* - the name of the Shared folder

*mount_point* - the path where the shared folder will be mounted

## How-to
1. Open ```/etc/fstab```.
    ```shell
    sudo nano /etc/fstab
    ```

2. Add the following lines and save.
    ```shell
    //windows_ip/sharename  mount_point   cifs  guest,uid=1000,iocharset=utf8   0   0
    ```

3. Reset ```/etc/fstab```.
    ```shell
    sudo mount -a
    ```

The Windows share folder should now be mounted and you can access the files on your Linux machine.

For more information, you can check [here](https://help.ubuntu.com/community/MountWindowsSharesPermanently).
