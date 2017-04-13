---
layout: post
title: Install some stuff on Xubuntu 16.04
description: I just recently upgraded (which I was holding off for a long time) my OS to Xubuntu 16.04 from 14.04. This post is so that I won't forget how to install/re-install some stuff in the future.
tags: [xubuntu, '16.04']
comments: true
pinned: false
og_type: article
---

I recently upgraded my machine to Xubuntu 16.04 after almost 3 years of using Xubuntu 14.04. This is always an exciting (or frustrating) time as it allows me to reinstall most of my stuff and keep my machine updated.

This post will just detail how I install/reinstall on Xubuntu 16.04 the common software and tools I use everyday as well as the not-so-common ones that I keep for special ocassions so that I don't forget them in the future.


### Set Proxy for the Shell (bash)
I usually set my proxy in the bash config file (```.bashrc```) if I need to access the web through the shell.
```shell
cd ~
nano .bashrc
```

Add this line to ```.bashrc``` file.
```shell
#PROXY SETTINGS
export {http,https,ftp}_proxy=<proxy-username>:<proxy-password>@<proxy-host>:<proxy-port>
```

Restart the shell.

Another method is to create a ```95proxies``` file inside ```/etc/apt/apt.conf.d/```.
```shell
sudo nano /etc/apt/apt.conf.d/95proxies
```

Then add the following lines:
```shell
Acquire::http::proxy "<proxy-username>:<proxy-password>@<proxy-host>:<proxy-port>";
Acquire::https::proxy "<proxy-username>:<proxy-password>@<proxy-host>:<proxy-port>";
Acquire::ftp::proxy "<proxy-username>:<proxy-password>@<proxy-host>:<proxy-port>";
```

### Atom
The first thing I reinstalled was [Atom](https://atom.io) because every developer/programmer needs a good text-editor. A few years ago, this spot was reserved for Sublime Text (still one of the best text editors EVER) but recently I've found myself liking and using Atom more. Atom gets plus points for being open-source -- something that Sublime is not (probably one of the few bad points with Sublime for me).

If you're using 'buntu, installing Atom is easy. Just download the [.deb](https://atom.io/download/deb) then install it using:
```shell
sudo dpkg --install atom-amd64.deb
```

### LibreOffice
LibreOffice is my go-to Office Suite. Xubuntu comes packaged with LibreOffice Writer, Calc, and Math but not the entire Suite. What I usually do is remove the built-in LibreOffice package and replace it with one from the [LibreOffice Fresh PPA](https://launchpad.net/~libreoffice/+archive/ubuntu/ppa).

First, you remove all the built-in LibreOffice packages.
```shell
sudo apt remove libreoffice-*
```

Then add the PPA to your software sources.
```shell
sudo add-apt-repository ppa:libreoffice/ppa
sudo apt update
```

Then install LibreOffice.
```shell
sudo apt install libreoffice
```

If the above method doesn't work, we can try using snaps.
```shell
sudo apt install snapd
```

```shell
sudo snap install libreoffice
```

### PDF Chain
PDF Chain is a GUI for the PDF Toolkit (PDFtk). For those times I need to combine or split pdf files.
```shell
sudo add-apt-repository ppa:pdfchain-team/ppa
sudo apt update
sudo apt install pdfchain
```

### pip
Because Python devs still need pip.
```shell
sudo apt install python-pip python3-pip
```

### virtualenvwrapper
Same as above. virtualenvwrapper makes Python development easier.
```shell
sudo pip install virtualenvwrapper
```

Edit ```.bashrc``` by adding
```shell
export WORKON_HOME=$HOME/.virtualenvs
export PROJECT_HOME=$HOME/Projects
source /usr/local/bin/virtualenvwrapper.sh
```

### GRASS GIS
Add the UbuntuGIS Unstable PPA to your software sources
```shell
sudo add-apt-repository ppa:ubuntugis/ubuntugis-unstable
```

or you can add the following lines to your ```/etc/apt/sources.list```
```shell
deb http://ppa.launchpad.net/ubuntugis/ubuntugis-unstable/ubuntu xenial main
deb-src http://ppa.launchpad.net/ubuntugis/ubuntugis-unstable/ubuntu xenial main
```

Update your software sources and install GRASS.
```shell
sudo apt update
sudo apt install grass
```

### QGIS
There are a lot of ways to install QGIS depending on the version that you want and if you want the repos to be based on the ubuntugis-unstable PPA.

There are 3 main versions of QGIS that you can install on your machine:

**QGIS LTR (Long Term Release)**

A Long Term Release is a special QGIS release that receives updates and bug-fixes for up to 1 year. Afterwhich it undergoes a feature freeze where no new features are added. This is suitable for people who want a version of QGIS that does not vary often. The current LTR is 2.14 with the latest version being 2.14.12. There are talks of increasing the LTR support time to 2 years but it won't be implemented, if approved, until QGIS 3.0.

To install the QGIS LTR, add the following lines to ```/etc/apt/sources.list```
```shell
deb http://qgis.org/debian-ltr xenial main
deb-src http://qgis.org/debian-ltr xenial main
```

For ubuntugis-based dependencies, add:
```shell
deb http://qgis.org/ubuntugis-ltr xenial main
deb-src http://qgis.org/ubuntugis-ltr xenial main
```

**QGIS Latest Release**

QGIS releases a new version every 4 months. This is more bleeding edge than the LTR release and often contains newer features. However, this version also comes with the occasional bugs due to these new features. Get this release if you always want the latest version of QGIS on your machine.

To install the Latest Release, add the following lines to ```/etc/apt/sources.list```
```shell
deb http://qgis.org/debian xenial main
deb-src http://qgis.org/debian xenial main
```

For ubuntugis-based dependencies, add:
```shell
deb http://qgis.org/ubuntugis xenial main
deb-src http://qgis.org/ubuntugis xenial main
```

**QGIS Development Version**

This is more bloody than bleeding edge. Get this if you want to check/test the upcoming release and/or you want to get into QGIS development.

To install the Development version, add the following lines to ```/etc/apt/sources.list```
```shell
deb http://qgis.org/debian-nightly xenial main
deb-src http://qgis.org/debian-nightly xenial main
```

For ubuntugis-based dependencies, add:
```shell
deb http://qgis.org/ubuntugis-nightly xenial main
deb-src http://qgis.org/ubuntugis-nightly xenial main
```

If you will use one of the ubuntugis-based repos, you have to add the following lines on your ```/etc/apt/sources.list``` if you haven't already.
```shell
deb http://ppa.launchpad.net/ubuntugis/ubuntugis-unstable/ubuntu xenial main
deb-src http://ppa.launchpad.net/ubuntugis/ubuntugis-unstable/ubuntu xenial main
```

Add the public keys (without fingerprint verification).
```shell
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key 073D307A618E5811
```

When working behind a proxy, try:
```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-key 073D307A618E5811
```

Make sure that you uninstall all previous versions of QGIS not coming from the repos above.

Update your software sources and install:
```shell
sudo apt update
sudo apt install qgis python-qgis qgis-plugin-grass
```

For more information, you can visit the [QGIS website](http://qgis.org/en/site/forusers/alldownloads.html#debian-ubuntu).

### PostGIS
PostGIS is an extension of PostgresSQL database which adds support for geographic objects allowing for location queries to be run in SQL.

The ubuntugis-unstable PPA maintains a version of postgis. You can install it by:
```shell
sudo apt update
sudo apt install postgis
```

### libgdal-dev
Installing GDAL in a virtual environment isn't as straightforward as we like.

First make sure that you have the ubuntugis-unstable repo in your sources list then install libgdal-dev.
```shell
sudo apt install libgdal-dev
```

Now you can install GDAL in a virtual environment with:
```shell
pip install gdal==<gdal-version> --global-option=build_ext --global-option="-I/usr/include/gdal"
```

### rvm (Ruby Version Manager)
```shell
curl -sSL https://get.rvm.io | bash -s stable --ruby
```

Add the following lines to ```.bashrc``` if you encounter the 'rvm is not a function' message
```shell
source $HOME/.rvm/scripts/rvm
```
*A Note with RVM: The PATH export lines of RVM should be the last line in your .profile or .bashrc files*

### Steam
Download the [Steam installer (.deb)](http://store.steampowered.com/about/) and run it.

When you first run Steam, it will ask you to download certain packages. Install these packages.

Update Steam and start playing.

*If you're behind a firewall, you won't be able to play but you'll be able to update steam through the command line.*
```shell
steam update
```

### mkusb
Xubuntu 16.04 doesn't come with Startup Disk Creator. You can still install Startup Disk Creator but mkusb is a little bit better because it uses **dd** to create the live-usbs. You can install it in your machine by:
```shell
sudo add-apt-repository ppa:mkusb/ppa
sudo apt update
sudo apt install mkusb
```

### Pinta
Pinta is a drop-in replacement for Microsoft Paint. For simple graphics manipulation. It's 1.6 version is part of the Ubuntu Official Repository. The pinta-stable PPA has no release for 16.04 while the pinta-daily PPA has.

If you're okay with version 1.6, just type:
```shell
sudo apt install pinta
```

If you want to use the pinta-daily PPA:
```shell
sudo add-apt-repository ppa:pinta-maintainers/pinta-daily
sudo apt update
sudo apt install pinta-daily
```
