---
layout: post
title: QGIS Plugins 3.0
description: Another cheers to one of the most commonly underutilized and underappreciated part of QGIS.
tags: [foss4g, qgis, qgis3, plugins]
pinned: false
comments: true
og_type: article
image:
  facebook: /assets/img/posts/2018-10-08-qgis-plugins-3.0/qgis-has-plugins.png
  twitter: /assets/img/posts/2018-10-08-qgis-plugins-3.0/qgis-has-plugins.png
---

<div style="padding-bottom: 1.5em;"><img class="img-fluid" style="display: block; margin: auto;" src="{{ site.baseurl }}/assets/img/posts/2018-10-08-qgis-plugins-3.0/qgis-has-plugins.png"></div>

This is an update of a [previous post](https://benhur07b.github.io/2017-07-14-qgis-plugins.html) where I talked about plugins in QGIS 2.X. Here, we'll talk about plugins in QGIS 3.

QGIS 3, while still not having as many plugins as QGIS 2, already has an extensive plugin library that is still commonly underutilized by those unfamiliar or new to QGIS. I've had experiences where people told me that they don't use QGIS because it doesn't have **function X** and they always get surprised when I tell them that QGIS actually has the function they're looking for **as a plugin**.

For the latest version (3.2.3), there are currently more than 200 plugins already available on the QGIS Official Plugin repository that users can download (and improve upon) whose functions range from the simple to the complex to the mundane. Most of these are ports of the QGIS 2 plugins.

## Manage and Install Plugins
As with QGIS 2, plugins in QGIS 3 can still be classified into two (2) types:
* **```Core plugins```** - built-in to your version of QGIS, cannot be uninstalled
* **```External plugins```** - manually installed by fetching from an external repository (i.e. QGIS Official Plugin Repository) or via the source code.

In QGIS 3, you can install plugins in two (2) ways:
1. Manually adding the source code in your QGIS profile’s plugins folder
    * **```Linux```**: ```.local/share/QGIS/QGIS3/profiles/default/python/plugins```
    * **```Mac OS X```**: ```Library/Application/Support/QGIS/QGIS3/profiles/default/python/plugins```
    * **```Windows```**: ```C:\\Users\<User>\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins```

2. Via the Manage and Install Plugins Dialog (**```Plugins -> Manage and Install Plugins```**)

<div style="padding-bottom: 1.5em;"><img class="img-fluid" style="display: block; margin: auto;" src="{{ site.baseurl }}/assets/img/posts/2018-10-08-qgis-plugins-3.0/manage-and-install.png"></div>

<div style="padding-bottom: 1.5em;"><img class="img-fluid" style="display: block; margin: auto;" src="{{ site.baseurl }}/assets/img/posts/2018-10-08-qgis-plugins-3.0/qgis-has-plugins.png"></div>

The **```Manage and Install Plugins Dialog```** connects to the QGIS Official Plugin repository (or any repository that you indicate in the **```Settings Tab```**) to fetch plugins available for your version of QGIS. It has 4 Tabs:
* **```All Tab```** -- shows ALL the plugins available for your QGIS version including those that are already installed on your machine.
* **```Installed Tab```** -- shows only the plugins installed on your machine.
* **```Not installed Tab```** -- shows the plugins that are not installed on your machine.
* **```Settings Tab```** -- gives you options on when to check for plugin updates, whether or not to include experimental and deprecated plugins, or add/change the repository to fetch plugins from.

An addition to QGIS 3 is the ability to install from zip which can be accessed via the **```Install from ZIP```** tab.

<div style="padding-bottom: 1.5em;"><img class="img-fluid" style="display: block; margin: auto;" src="{{ site.baseurl }}/assets/img/posts/2018-10-08-qgis-plugins-3.0/from-zip.png"></div>

## Making your own plugin
Now what if there's no plugin that does what you want? Well, you can always make one yourself!

The **Plugin Builder** is a plugin that creates a template that can serve as the starting point for QGIS plugin development so you won't have to create one from scratch. You can install it from the **```Manage and Install Plugins Dialog```**.

Of course, you can always create a plugin from scratch. If you are interested in creating your own plugin, you can check the [Official QGIS documentation](http://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/plugins.html). For Python plugins, it's a good idea to check out the [PyQGIS Developer Cookbook](http://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/).


Now that you know about QGIS Plugins, don't be afraid to download and try them so that you can fully utilize the power of QGIS. You can even create your own and share it with the community.
