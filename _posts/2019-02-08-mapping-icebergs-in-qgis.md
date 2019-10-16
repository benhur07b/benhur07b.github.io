---
layout: post
title: "Mapping Icebergs in QGIS"
description: Map over 300 thousand historic iceberg locations and animate them over time in QGIS.
tags: [foss4g, qgis, qgis3, gis, cartography, time-manager]
pinned: false
comments: true
og_type: article
image:
    facebook: /media/posts/2019-02-08-mapping-icebergs-in-qgis/icebergs.png
    twitter: /media/posts/2019-02-08-mapping-icebergs-in-qgis/icebergs.png
---

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/site/portfolio/maps-and-viz/icebergs-qgis.gif'></div>

<br>

A friend showed me a [post](https://www.esri.com/arcgis-blog/products/arcgis-pro/mapping/iceberg-map-part-1-cartography/) about creating a map of over 300 thousand historic iceberg locations in ArcGIS Pro and asked me if the same could be done in QGIS. The map above is my attempt at creating something similar using QGIS and the Time Manager plugin. This post details the steps -- utilizing Draw Effects and some Data-driven styling -- to create the map. :)

## Datasets Needed
1. **```Iceberg ```** data from ["The Antarctic Iceberg Tracking Database"](http://www.scp.byu.edu/data/iceberg/). Our friends from ESRI were kind enough to provide us with a feature layer merging all the data. I created a GeoPackage version that you can download [here](https://drive.google.com/drive/folders/1zJ5XM7BJqKx-PF6kUc-1hjpYBnPni8SU?usp=sharing). If you want to use the original feature layer, it can be opened in QGIS by connecting to an ```ArcGisFeatureServer```. The Feature Layer can be found [here](https://services.arcgis.com/nGt4QxSblgDfeJn9/arcgis/rest/services/Icebergs/FeatureServer)

2. **```World Borders```** vector file available from [thematicmapping.org](http://thematicmapping.org/downloads/TM_WORLD_BORDERS-0.3.zip).

3. **```Graticules```** vector file from [naturalearthdata.com](https://www.naturalearthdata.com/downloads/50m-physical-vectors/50m-graticules/). I used the ones with 10 degree and 20 degree intervals.

## Set the Map Canvas Background Color to Dark Gray
The first thing I did was set the canvas color to a <span style="color: #494747">**dark gray(#494747)**</span> color. This can be done by changing the Background color in the General Settings of the Project Properties. Open the Project Properties via **```Project -> Properties```** or **```CTRL + SHIFT + P```**.
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/canvas-bg-1.png"></div>

Afterwards, go to the **```General Settings```** tab and change the **```Background color```** option.
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/canvas-bg-2.png"></div>

The background color of the map canvas should change to dark gray.
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/canvas-bg-3.png"></div>

## Use a South Pole Orthographic Projection CRS
The next step is to choose a projection that will focus on the Antartic and highlight the icebergs. For this, I decided to use a South Pole Orthographic Projection. Since I couldn't find one in QGIS, I simply created a custom CRS with the following projection definition:

>
>```+proj=ortho +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs```
>

For more information on creating custom CRS in QGIS, you can check out [this post]({{ site.baseurl }}/2018/09/21/create-a-globe-in-QGIS.html)

Afterwards, I set the project CRS to my custom CRS.
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/crs-1.png"></div>

Our map canvas should now look like this:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/crs-2.png"></div>

The next step is to style our layers.

## Style the World Borders
Let's start with the world borders. For this step, I duplicated the world borders layer.
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/borders-1.png"></div>

One will be used for the gradient fill and the other will be used for the glowing outline/coasts.

### Gradient Fill
Use the **```Layer Styling Panel```** or **```right-click on layer -> Properties -> Symbology```** to style one of the world borders with a **```Gradient Fill```**.

**Use the following options:**
>
>* Select **```Gradient fill```** as **```Symbol layer type```**
>* Select **```Color ramp```**
>* Select **```Radial```** as **```Gradient type```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/borders-2.png"></div>

**For the color ramp, use the following options**
>
>* Set **```Color 1```** to <span style="color: #494747">**dark gray (#494747)**</span> with **```75% Opacity```**
>* Set **```Color 2```** to <span style="color: #494747">**dark gray (#494747)**</span>
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/borders-3.png"></div>

The resulting map should now look like this:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/borders-4.png"></div>

Now let's style the coasts.

### Glowing Coasts with Draw Effects
I decided to give the coasts a  <span style="color: #ff7f00">**dark orange (#ff7f00)**</span> color with a glowing (or firefly) effect. The dark orange color works well with our dark gray background.

Use the **```Layer Styling Panel```** or **```right-click on layer -> Properties -> Symbology```** to style the duplicated world border layer.

**Use the following options:**
>
>* Select **```Simple fill```** as **```Symbol layer type```**
>* Set **```Fill color```** to **```transparent```**
>* Set **```Stroke color```** to <span style="color: #ff7f00">**dark orange (#ff7f00)**</span>
>* Check **```Draw effects```** under **```Layer Rendering```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/outline-1.png"></div>

Click on the star button on the right of Draw effects to add an Inner and Outer Glow to the layer. For the color of the Inner and Outer glow, use <span style="color: #ff7f00">**dark orange (#ff7f00)**</span>.

<div class="row">
<div class="col-lg-6 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/outline-1-inner.png"></div>
<div class="col-lg-6 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/outline-1-outer.png"></div>
</div>

Our map should now look like this:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/outline-2.png"></div>

Before styling the graticules, duplicate the 10 degree interval graticule and put this layer before the world borders layers like so:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-1.png"></div>

We'll use this layer to create the blackish effect around our map. First, filter this layer so that only the outermost ring remains. You can do this with the filter:

>
> ```"display" = '10 S'```
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-2.png"></div>

This should result in the following:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-3.png"></div>

Use the **```Layer Styling Panel```** or **```right-click on layer -> Properties -> Symbology```** to style this filtered graticule layer.

**Use the following options:**
>
>* Select **```Simple line```** as **```Symbol layer type```**
>* Set **```Stroke color```** to <span style="color: #494747">**dark gray (#494747)**</span>
>* Check **```Draw effects```** under **```Layer Rendering```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-4.png"></div>

Click on the star button on the right of Draw effects to add an Inner and Outer Glow to the layer. For the color of the Inner and Outer glow, use <span style="color: #494747">**dark gray (#494747)**</span> with **```100% Opacity```**.

<div class="row">
<div class="col-lg-6 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-4-inner.png"></div>
<div class="col-lg-6 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-4-outer.png"></div>
</div>

The resulting map should now look like this:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-5.png"></div>

Now let's give our graticules a firefly effect similar to our coasts.

## Style the Graticules
For the graticules, I chose a <span style="color:#02db00">**green (#02db00)**</span> color.

### 20-degree interval graticules
Use the **```Layer Styling Panel```** or **```right-click on layer -> Properties -> Symbology```** to style this 20-degree interval graticule layer.

**Use the following options:**
>
>* Select **```Simple line```** as **```Symbol layer type```**
>* Set **```Stroke color```** to <span style="color:#02db00">**green (#02db00)**</span>
>* Select **```Solid line```** as **```Stroke style```**
>* Check **```Draw effects```** under **```Layer Rendering```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-20-1.png"></div>

Click on the star button on the right of Draw effects to add an Inner Glow to the layer. For the color of the Inner glow, use <span style="color:#02db00">**green (#02db00)**</span> with **```50% Opacity```**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-20-1-inner.png"></div>

Next, we'll style the 10-degree interval graticules

### 10-degree interval graticules
Use the **```Layer Styling Panel```** or **```right-click on layer -> Properties -> Symbology```** to style this 10-degree interval graticule layer.

**Use the following options:**
>
>* Select **```Simple line```** as **```Symbol layer type```**
>* Set **```Stroke color```** to <span style="color:#02db00">**green (#02db00)**</span>
>* Select **```Dash line```** as **```Stroke style```**
>* Check **```Draw effects```** under **```Layer Rendering```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-10-1.png"></div>

Click on the star button on the right of Draw effects to add an Inner and Outer Glow to the layer. For the color of the Inner glow, use <span style="color:#02db00">**green (#02db00)**</span> with **```50% Opacity```**. For the Outer Glow, use <span style="color:#02db00">**green (#02db00)**</span> with **```75% Opacity```**

<div class="row">
<div class="col-lg-6 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-10-1-inner.png"></div>
<div class="col-lg-6 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-10-1-outer.png"></div>
</div>

After styling the graticules, the resulting map should look like:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/grats-6.png"></div>

Now we'll go to the icebergs.

## Style the Icebergs
For the icebergs, we'll use a simple marker symbology but we'll vary the size of the symbol based on the size field of the iceberg. For the color, I decided on a <span style="color:#16f3d6">**cyan (#16f3d6)**</span> color

Use the **```Layer Styling Panel```** or **```right-click on layer -> Properties -> Symbology```** to style the icebergs layer.

**Use the following options:**
>
>* Select **```Simple marker```** as **```Symbol layer type```**
>* Use **```Data defined override```** for the **```Size```**
>* Set **```Fill color```** to **```white```**
>* Set **```Stroke color```** to <span style="color:#16f3d6">**cyan (#16f3d6)**</span>
>* Check **```Draw effects```** under **```Layer Rendering```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/icebergs-1.png"></div>

**```Data driven overrides```** allow us to set values of symbology variables (e.g. size) based on fields in the attribute table or expressions based on them. For the size of our iceberg markers, we'll base it on the size field of our layer.

>
> ```size/50000```
>

<div class="row">
<div class="col-lg-4 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/icebergs-1-size.png"></div>
<div class="col-lg-8 col-sm-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/icebergs-1-size-1.png"></div>
</div>

Click on the star button on the right of Draw effects to add an Inner Glow to the layer. For the color of the Inner glow, use <span style="color:#16f3d6">**cyan (#16f3d6)**</span> with **```70% Opacity```**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/icebergs-1-inner.png"></div>

The final map should look like:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/icebergs-2.png"></div>

Now that we've styled our layers. Let's create a GIF of icebergs over time using the Time Manager plugin. Thankfully, the iceberg layer has a date field that is perfect for this.

## Create a GIF of the Icebergs over time using the Time Manager plugin
Access the **```Time Manager```** plugin via **```Plugins -> Time Manager -> Toggle visibility```**. The Time Manager dock usually appears below the map canvas.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/timeman-0.png"></div>

Click **```Settings```** and click **```Add layer```**
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/timeman-1.png"></div>

**Use the following options:**
>
>* Select **```icebergs```** as **```Layer```**
>* Select **```date```** as **```Start time```**
>* Select **```No end time - accumulate features```** as **```End time```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/timeman-2.png"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/timeman-3.png"></div>

Activate the Time Manager by clicking on the **```ON```** button (leftmost). It should turn green.

>
>* Set the **```Time frame start```** to **```1997-01-01 00:00:00.000```**
>* Set **```Time frame size```** to **```1 year```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/timeman-4.png"></div>

Click **```Export video```**.

>
>* Set the **```Output folder```** to **```the folder where you want your GIF and frames to be stored```**
>* Select **```Animated gif (requires ImageMagick in path, Linux/OSX only)```** [Sorry Windows people. :(]
>* Set the **```Animation frame delay```** to **```500```** [Other values will work]
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2019-02-08-mapping-icebergs-in-qgis/timeman-6.png"></div>

Click **```OK```** and wait for your export to finish. If the export succeeds, you should have a GIF similar to the one at the top of this post.

For more information on the Time Manager plugin, you can check out [Anita Graser's (underdark) website](https://anitagraser.com/tag/time-manager/).

That's it. Play around with the styling and settings to see what look works best for you. If you have other maps that you want recreated in #QGIS, feel free to leave a comment below or contact me. **```Happy mapping!```** :)
