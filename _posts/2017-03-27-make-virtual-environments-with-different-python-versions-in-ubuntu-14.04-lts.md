---
layout: post
title: Make Virtual Environments with different Python versions in Xubuntu 14.04
description: You should avoid upgrading or modifying the Python version that came with your system. This post will show you how you can make virtual environments with different Python versions in Xubuntu 14.04.
tags: [python, xubuntu, '14.04']
pinned: false
comments: true
og_type: article
image:
  facebook: /media/bnhr-600-bg.png
  twitter: /media/bnhr-600-bg.png
---

If you're running Ubuntu, you should avoid upgrading or modifying the Python version that came with your system because doing so could lead to unwanted results, conflicts, and even system breakage. In the case of Xubuntu 14.04 (Trusty Tahr), the Python versions that come with it are 2.7.6 and 3.4.3.

Now, if you feel that these versions are outdated and you want to try the newer Python versions, the best course of action is to use virtual environments. Virtual environments allow you to sandbox multiple Python versions depending on your development needs so that you don't have to upgrade or downgrade your system's Python version. For python 2.7-3.4, [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) is probably your best option. From version 3.3 onwards, Python has included the [venv](https://docs.python.org/3/library/venv.html) module for creating virtual environments as part of its standard library.

I personally use virtualenvwrapper so that's what I'm going to show you here. First of all, make sure the virtualenvwrapper is already installed in your machine then follow the steps below.

## 1. Install dependencies
Install the following dependencies if they aren't already.

```shell
sudo apt-get install -y \
autotools-dev      \
blt-dev            \
build-essential    \
bzip2              \
dpkg-dev           \
g++-multilib       \
gcc-multilib       \
libbluetooth-dev   \
libbz2-dev         \
libexpat1-dev      \
libffi-dev         \
libffi6            \
libffi6-dbg        \
libgdbm-dev        \
libgpm2            \
libncursesw5-dev   \
libreadline-dev    \
libsqlite3-dev     \
libssl-dev         \
libtinfo-dev       \
mime-support       \
net-tools          \
netbase            \
python-crypto      \
python-dev         \
python-mox3        \
python-pil         \
python-pip         \
python-ply         \
python-setuptools  \
python-smbus       \
quilt              \
tk-dev             \
zlib1g-dev
```

## 2. Download the Python version that you want
```shell
wget https://www.python.org/ftp/python/X.X.X/Python-X.X.X.tgz
```

If you want to get Python 2.7.13 (the latest Python 2 version)

```shell
wget https://www.python.org/ftp/python/2.7.13/Python-2.7.13.tgz
```

## 3. Unpack, Configure, and Compile
The line below will unpack the contents of the archive to a Python-2.7.13 directory.

```shell
tar xfz Python-2.7.13.tgz
```

Go to the directory and configure where you want to install the new Python version. Here we'll install it in ```/usr/local/lib/python2.7.13```.

```shell
cd Python-2.7.13/
./configure --prefix /usr/local/lib/python2.7.13 --enable-ipv6
```

Run make and make install.

```shell
make
```

```shell
sudo make install
```

## 4. Test if the Python version was compiled successfully
Remember where we installed our new Python version? Let's check if the compiler will run.

Enter the following in your command line.

```shell
/usr/local/lib/python2.7.13/bin/python
```

It should result in something similar below.

```shell
Python 2.7.13 (default, Mar 27 2017, 13:19:48)
[GCC 4.8.4] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

## 5. Make a Virtual Environment using the version of Python you just installed.
```shell
mkvirtualenv --python=/location/where/you/installed/python <name-of-virtualenv>
```

or

```shell
mkvirtualenv --python=/usr/local/lib/python2.7.13/bin/python python2.7.13
```

Upon making the virtual environment, you will be able to immediately start working on it.


## 6. Test if the Python version in your virtual environment is correct.

```shell
python
```

should result in:

```shell
Python 2.7.13 (default, Mar 27 2017, 13:19:48)
[GCC 4.8.4] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

<br>

From here you can start developing using the Python version of your virtual environment. Write code, download libraries, etc.

<br>

## Additional Stuff:
virtualenvwrapper has a lot of stuff that makes working with virtual environments easier. Some of these are:

**To list the virtual environments on your machine**
```shell
lsvirtualenv
```

**To work on a virtual environment**
```shell
workon <name-of-virtualenv>
```

**To create a virtual environment**
```shell
mkvirtualenv <name-of-virtualenv>
```
*This uses the default Python of your machine. See #5 above if you want to use a different Python version.*

**To remove/delete a virtual environment**
```shell
rmvirtualenv <name-of-virtualenv>
```
