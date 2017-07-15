---
layout: post
title: QGIS Plugins
description: Cheers to one of the most commonly underutilized and underappreciated part of QGIS.
tags: [foss4g, qgis, plugins]
pinned: false
comments: true
og_type: article
image:
  facebook: /images/posts/2017-07-14-qgis-plugins/qgis-has-plugins.png
---

<div style="padding-bottom: 1.5em;"><img class="img-responsive" style="display: block; margin: auto;" src="{{ site.baseurl }}/images/posts/2017-07-14-qgis-plugins/qgis-has-plugins.png"></div>

QGIS has an extensive plugin library but it's commonly underutilized by those unfamiliar or new to QGIS. I've had experiences where people told me that they don't use QGIS because it doesn't have ```function X``` and they always get surprised when I tell them that QGIS actually has the function they're looking for **as a plugin**.

For the latest LTR (2.18.10), there are currently more than 700 plugins available on the QGIS Official Plugin repository that users can download (and improve upon) whose functions range from the simple to the complex to the mundane.


### Manage and Install Plugins
There are two ways to install plugins in QGIS. The first is by putting the source code in your computer's QGIS plugin directory.

For **WINDOWS**: this is usually found in ```C:\Users\<your username>\.qgis(2)\python\plugins\```

For **LINUX/MAC**: it is usually in ```~/.qgis2/python/plugins/```

A function is currently being developed for the upcoming QGIS 3.0 release that will allow you to install plugins from zip files.

The second option is by downloading the plugin from a plugin repository (i.e. The QGIS Official Plugin Repository) using the ```Manage and Install Plugins Dialog``` which can be accessed via **Plugins -> Manage and Install Plugins ...** in the Main Menu bar.

<div style="padding-bottom: 1.5em;"><img class="img-responsive" style="display: block; margin: auto;" src="{{ site.baseurl }}/images/posts/2017-07-14-qgis-plugins/manage-and-install.png"></div>

<div style="padding-bottom: 1.5em;"><img class="img-responsive" style="display: block; margin: auto;" src="{{ site.baseurl }}/images/posts/2017-07-14-qgis-plugins/properties.png"></div>

The ```Manage and Install Plugins Dialog``` connects to the QGIS Official Plugin repository (or any repository that you indicate in the ```Settings Tab```) to fetch plugins available for your version of QGIS. It has 4 Tabs:
* ```All Tab``` -- shows ALL the plugins available for your QGIS version including those that are already installed on your machine.
* ```Installed Tab``` -- shows only the plugins installed on your machine.
* ```Not installed Tab``` -- shows the plugins that are not installed on your machine.
* ```Settings Tab``` -- gives you options on when to check for plugin updates, whether or not to include experimental and deprecated plugins, or add/change the repository to fetch plugins from.

Some plugins come bundled with your QGIS version. These are called **Core** plugins. You don't need to download these plugins but merely activate them in the ```Manage and Install Plugins Dialog```. One such plugin is the **Spatial Query Plugin**.

To install this plugin, type **Spatial Query** in the search bar while on the ```All``` or ```Installed``` tab and select the plugin. To activate/deactivate it, tick the check-box on the left of the plugin name.

<div style="padding-bottom: 1.5em;"><img class="img-responsive" style="display: block; margin: auto;" src="{{ site.baseurl }}/images/posts/2017-07-14-qgis-plugins/spatial-query.png"></div>

If you successfully activated the plugin, you should be able to access it via **Vector -> Spatial Query -> Spatial Query**

<div style="padding-bottom: 1.5em;"><img class="img-responsive" style="display: block; margin: auto;" src="{{ site.baseurl }}/images/posts/2017-07-14-qgis-plugins/spatial-query-run.png"></div>

The plugins that are not part of the Core plugins can also be downloaded and installed from the ```Manage and Install Plugins Dialog```. These **External** plugins are fetched from the plugin repositories indicated in the ```Settings``` tab. For example, you can install the **Statist** plugin which calculates statistics for a field by searching for **Statist** in the search bar while on the ```All``` or ```Not istalled``` tab then clicking the ```Install plugin``` button on the lower right corner of the dialog.

<div style="padding-bottom: 1.5em;"><img class="img-responsive" style="display: block; margin: auto;" src="{{ site.baseurl }}/images/posts/2017-07-14-qgis-plugins/statist.png"></div>

If you successfully installed the plugin, you should be able to access it via **Vector -> Statist -> Statist**

<div style="padding-bottom: 1.5em;"><img class="img-responsive" style="display: block; margin: auto;" src="{{ site.baseurl }}/images/posts/2017-07-14-qgis-plugins/statist-run.png"></div>

### Making your own plugin
Now what if there's no plugin that does what you want? Well, you can always make one yourself!

The **Plugin Builder** is a plugin that creates a template that can serve as the starting point for QGIS plugin development so you won't have to create one from scratch. You can install it from the ```Manage and Install Plugins Dialog```.

Of course, you can always create a plugin from scratch. If you are interested in creating your own plugin, you can check the [Official QGIS documentation](http://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/plugins.html). For Python plugins, it's a good idea to check out the [PyQGIS Developer Cookbook](http://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/).


Now that you know about QGIS Plugins, don't be afraid to download and try them so that you can fully utilize the power of QGIS. You can even create your own and share it with the community.
