---
layout: post
title: How to Install pgAdmin4 in Xubuntu 16.04
description: Here's how you can install and access pgAdmin4 on Xubuntu 16.04
tags:
  - pgadmin
  - Xubuntu
  - '16.04'
comments: true
pinned: false
---

pgAdmin4 is a rewrite of pgAdmin3 built using Python, javascirpt, and jQuery. It allows for pgAdmin to be accessed locally or via webserver. Here's how you can install it in Xubuntu 16.04.

### Create a virtual environment for pgAdmin4
pgAdmin has a lot of other python dependencies. To save your machine from unwanted updating of system modules, it is good practice to install pgAdmin in a virtial environment of its own.

Here, I'm using virtualenvwrapper:
```shell
mkvirtualenv pgAdmin4
```
The python version I'm using is Python 2.7.12.

### Download the pgAdmin4 wheel and install using pip
```shell
wget https://ftp.postgresql.org/pub/pgadmin3/pgadmin4/v1.3/pip/pgadmin4-1.3-py2.py3-none-any.whl
```

```shell
pip install pgadmin4-1.3-py2.py3-none-any.whl
```

Your pgAdmin4 will be installed in ```<location-of-virtualenv>/lib/python2.7/site-packages/pgadmin4/```

### Configure pgAdmin to run on Desktop mode

Create a ```config_local.py``` in ```<location-of-virtualenv>/lib/python2.7/site-packages/pgadmin4/```
```shell
nano <location-of-virtualenv>/lib/python2.7/site-packages/pgadmin4/config_local.py
```

and add the line SERVER_MODE = False
```shell
SERVER_MODE = False
```

### Run pgAdmin4
```shell
python <location-of-virtualenv>/lib/python2.7/site-packages/pgadmin4/pgAdmin.py
```

### Access pgAdmin4
Go to [http://localhost:5050](http://localhost:5050)
