---
layout: open-knowledge
title: "QGIS Training: Beginner - Module 1.2"
description: "GOAL: To familiarize yourself with QGIS Plugins"
og_type: article
image:
---

# Module 1.2 - QGIS Plugins
QGIS has an extensive plugin library but it's commonly underutilized by those unfamiliar or new to QGIS. In this exercise, you'll familiarize yourself with QGIS Plugins.

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.2/plugins.png'>
<p class='figure-caption text-center my-2'>QGIS Plugins</p>
</figure>

For the latest version (3.8.3), there are currently more than 500 plugins (including experimental ones) already available on the QGIS Official Plugin repository that users can download (and improve upon) whose functions range from the simple to the complex to the mundane.

## GOAL
To familiarize yourself with QGIS Plugins.

## Manage and Install Plugins
Plugins in QGIS 3 can still be classified into two (2) types:
* **```Core plugins```** - built-in to your version of QGIS, cannot be uninstalled
* **```External plugins```** - manually installed by fetching from an external repository (i.e. QGIS Official Plugin Repository) or via the source code.

In QGIS 3, you can install plugins in two (2) ways:
1. Manually adding the source code in your QGIS profile’s plugins folder
    * **```Linux:```** ```.local/share/QGIS/QGIS3/profiles/default/python/plugins```
    * **```Mac OS X:```** ```Library/Application/Support/QGIS/QGIS3/profiles/default/python/plugins```
    * **```Windows:```** ```C:\\Users\<User>\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins```

2. Via the Manage and Install Plugins Dialog (**```Plugins -> Manage and Install Plugins```**)

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.2/mai1.png'>
<p class='figure-caption text-center my-2'>Plugins -> Manage and Install Plugins</p>
</figure>

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.2/plugins.png'>
<p class='figure-caption text-center my-2'>Manage and Install Plugins Dialog</p>
</figure>

The **```Manage and Install Plugins Dialog```** connects to the QGIS Official Plugin repository (or any repository that you indicate in the **```Settings Tab```**) to fetch plugins available for your version of QGIS. It has 4 Tabs:
* **```All Tab```** -- shows ALL the plugins available for your QGIS version including those that are already installed on your machine.
* **```Installed Tab```** -- shows only the plugins installed on your machine.
* **```Not installed Tab```** -- shows the plugins that are not installed on your machine.
* **```Settings Tab```** -- gives you options on when to check for plugin updates, whether or not to include experimental and deprecated plugins, or add/change the repository to fetch plugins from.

An addition to QGIS 3 is the ability to install from zip which can be accessed via the **```Install from ZIP```** tab.


<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.2/ifz.png'>
<p class='figure-caption text-center my-2'>Install from ZIP</p>
</figure>

### Try:
Look for and Install the following plugins via the Manage and Install Plugins dialog:
1. Spreadsheet Layers
2. QuickMapServices
3. QuickOSM
4. MapSwipe Tool
5. Freehand raster georeferencer
6. qgis2web

Download the Data Plotly plugin here[https://github.com/ghtmtt/DataPlotly/releases/tag/v3.9-beta0](https://github.com/ghtmtt/DataPlotly/releases/tag/v3.9-beta) and install it from ZIP.

**NOTE:** Don't forget to **activate** your installed plugins. **Activated Plugins** have a **check** or **tick** on their boxes. Only plugins that are activated can be used in QGIS.

## Making your own plugin
Now what if there's no plugin that does what you want? Well, you can always make one yourself!

The **Plugin Builder** is a plugin that creates a template that can serve as the starting point for QGIS plugin development so you won't have to create one from scratch. You can install it from the **```Manage and Install Plugins Dialog```**.

Of course, you can always create a plugin from scratch. If you are interested in creating your own plugin, you can check the [Official QGIS documentation](http://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/plugins.html). For Python plugins, it's a good idea to check out the [PyQGIS Developer Cookbook](http://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/).


Now that you know about QGIS Plugins, don't be afraid to download and try them so that you can fully utilize the power of QGIS. You can even create your own and share it with the community.


## Test Yourself
1. The Official QGIS Plugin Repository is the only place where you can find and get QGIS plugins - true or false?
    <ol type="a">
    <li>true</li>
    <li>false</li>
    </ol>
2. You need to pay to download the plugins in QGIS - true of false?
    <ol type="a">
    <li>true</li>
    <li>false</li>
    </ol>


<div class='row'>
<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6'><a href='{{ site.baseurl }}/open-knowledge/qgis/beginner/module1.1.html'><h4 class='text-left'>Module 1.1</h4></a></div>
<!-- <div class='col-xs-6 col-sm-6 col-md-6 col-lg-6'><a href='{{ site.baseurl }}/open-knowledge/qgis/beginner/module1.3.html'><h4 class='text-right'>Module 1.3</h4></a></div> -->
</div>
