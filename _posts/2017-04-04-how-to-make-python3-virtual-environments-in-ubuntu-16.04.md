---
layout: post
title: How to make a Python 3.6 virtual environment in Xubuntu 16.04 using venv
description: Python 3.6 is the latest version of Python. Ubuntu 16.04 comes packaged with an earlier version. Learn how to install Python 3.6 on Xubuntu 16.04 and make a virtual environment using venv.
tags:
  - python
  - xubuntu
  -  '16.04'
comments: true
pinned: false
---

Xubuntu 16.04 comes packaged with Python 3.5.2. As is standard practice, it's not advisable to update or change the Python version of your distribution lest you risk possible problems in your system. One of the better options if you want to use different python versions in your machine is to use virtual environments. Since version 3.4, Python has come packaged with *venv* -- a library for making virtual environments. This post will show you how to install Python 3.6.1 in Xubuntu 16.04 and use venv to create a virtual environment running Python 3.6.1.


### Install dependencies

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

### 2. Download the Python 3.6.1

```shell
wget https://www.python.org/ftp/python/3.6.1/Python-3.6.1.tgz
```

### 3. Unpack, Configure, and Compile

The line below will unpack the contents of the archive to a Python-3.6.1 directory.

```shell
tar xfz Python-3.6.1.tgz
```

Go to the directory and configure where you want to install the new Python version. Here we'll install it in ```/usr/local/lib/python3.6.1```.

```shell
cd Python-3.6.1/
./configure --prefix /usr/local/lib/python3.6.1 --enable-ipv6
```

Run make and make install.

```shell
make
```

```shell
sudo make install
```

### 4. Test if the Python version was compiled successfully

Remember where we installed our new Python version? Let's check if the compiler will run.

Enter the following in your command line.

```shell
/usr/local/lib/python3.6.1/bin/python3
```

It should result in something similar below.

```shell
Python 3.6.1 (default, Apr  4 2017, 12:20:28)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

### 5. Make a Virtual Environment using the version of Python you just installed.

```shell
/usr/local/lib/python3.6.1/bin/python3 -m venv <location-of-virtualenv>
```

I tend to put all my virtual environments in a single directory. I recommend having something like a ```.venvs``` directory for that purpose.

```shell
/usr/local/lib/python3.6.1/bin/python3 -m venv ~/.venvs/python3.6.1
```

### 6. Activate the virtual environment

```shell
source ~/.venvs/python3.6.1/bin/activate
```

From here you can start developing using the Python version of your virtual environment. Write code, download libraries, etc.
