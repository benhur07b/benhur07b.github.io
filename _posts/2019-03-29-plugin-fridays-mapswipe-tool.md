---
layout: post
title: "#PluginFridays: MapSwipe Tool"
description: The MapSwipe Tool helps with easy visual comparison by allowing the user to swipe a layer -- perfect for showing the difference between two layers or the changes between two points in time.
tags: [foss4g, qgis, qgis3, plugin, plugin-fridays]
pinned: false
comments: true
og_type: article
image:
    facebook:  /media/posts/2019-03-29-plugin-fridays-mapswipe-tool/mapswipe.png
    twitter: /media/posts/2019-03-29-plugin-fridays-mapswipe-tool/mapshipe.png
---

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-03-29-plugin-fridays-mapswipe-tool/mapswipe.gif"></div>

Swiping (apologies to Dora the Explorer) is a simple way to show the difference between two layers or highlight changes over time. I've found that this neat trick is very effective in grabbing people's attention or getting a reaction from them. It's a common feature you can see in webmaps using [Leaflet](http://lab.digital-democracy.org/leaflet-side-by-side/) and [Mapbox](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-compare/). This functionality is also available in desktop GIS like [GRASS through the Map Swipe](https://grass.osgeo.org/grass76/manuals/wxGUI.mapswipe.html) and [QGIS via the MapSwipe Tool plugin](https://plugins.qgis.org/plugins/mapswipetool_plugin/)

*If you don't know how to install plugins yet, you can check-out [this post for QGIS 2](https://benhur07b.github.io/2017-07-14-qgis-plugins.html) and [this post for QGIS 3](https://benhur07b.github.io/2018-10-08-qgis-plugins-3.0.html).*

## The Plugin
You can install the **```MapSwipe Tool```** plugin via **```Plugins -> Manage and Install Plugins```**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-03-29-plugin-fridays-mapswipe-tool/mapswipetool.png" alt="MapSwipe Tool plugin"></div>

* **Name:** **```MapSwipe Tool```** plugin
* **Funtion:** Allows for the selected layer to be swiped.
* **Description:** This plugin is a map tool for swipe active layer. The active layer, or group, will appear above all others. This plugin is developed of collaborative form with IBAMA [1] and APPLIED TECHNOLOGY CO., LTD [2].
<br>[1] [http://www.ibama.gov.br](http://www.ibama.gov.br)
<br>[2] [http://www.apptec.co.jp](http://www.ibama.gov.br)
* **Author:** [Hirofumi Hayashi and Luiz Motta](mailto:hayashi@apptec.co.jp,motta.luiz@gmail.com)
* **Code Repository:** [https://github.com/lmotta/mapswipetool_plugin](https://github.com/lmotta/mapswipetool_plugin)

## How to Use
The plugin is used in a very straightforward manner. For my example below, I'm using two XYZ maps (Google Satellite and Bing VirtualEarth). The plugin works for both vector and raster layers.

1. Select the layer that you want to swipe on the Layers panel.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-03-29-plugin-fridays-mapswipe-tool/01-mapswipe.png" alt="Select layer in Layers panel"></div>

2. Activate the plugin by clicking the MapSwipe Tool icon in the Plugins toolbar or via **```Plugins -> Map swipe tool -> Map swipe tool```**. Note that this will unselect/disable your layer as well.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-03-29-plugin-fridays-mapswipe-tool/02.2-mapswipe.png" alt="MapSwipe Tool in Plugin toolbar"></div>

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-03-29-plugin-fridays-mapswipe-tool/02.1-mapswipe.png" alt="MapSwipe Tool in Menu bar"></div>

3. Drag your mouse to swipe the selected layer. You can swipe horizontally or vertically.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-03-29-plugin-fridays-mapswipe-tool/03-mapswipe.gif" alt="Swiping with the plugin"></div>

4. Once finished, click the icon again to deactivate the plugin.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-03-29-plugin-fridays-mapswipe-tool/04-mapswipe.gif" alt="Deactivate the plugin"></div>

That's it. You can use the MapSwipe Tool on your next mapping project. **```#HappyMapping```**!
