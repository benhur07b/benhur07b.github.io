---
layout: post
title: "Hillshade in QGIS"
description: Create beautiful hillshades in QGIS by utilizing a few tricks. :)
tags: [foss4g, qgis, qgis3, gis, cartography, hillshade]
pinned: false
comments: true
og_type: article
image:
    facebook: /assets/img/posts/2019-01-22-hillshade-in-qgis/albay-hillshade.png
    twitter: /assets/img/posts/2019-01-22-hillshade-in-qgis/albay-hillshade.png
---

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/albay-hillshade.png"></div>

<br>

Hillshading is a classic technique that visualizes terrain as shaded relief by illuminating it with a hypothetical light source. A hillshade provides users an immediate appreciation for the surface topography, providing depth to a 2-dimensional map, which makes it easier (even to those untrained in cartography) to interpret features on the map (e.g. valleys, hills, mountains, etc.). Because of this, hillshades are commonly used as backgrounds in maps. Aside from their practical purpose, hillshade maps are also aesthetically pretty.

In this post, we'll look at how we can create beautiful hillshade maps in QGIS inspired by Open GIS Lab's [post](https://opengislab.com/blog/2018/3/20/3d-dem-visualization-in-qgis-30).

To create something similar to the map above, we just need to follow four steps:
1. **```Load and Duplicate DEM```**
2. **```Style DEM with a Multidirectional Hillshade```**
3. **```Drape a Colored DEM```**
4. **```Drape a Satellite Image```**

## Load and duplicate DEM
The first step is to load the DEM in QGIS and create a duplicate. One of the layers will be used for the hillshade and the other will be for the colored DEM that will be draped on the hillshade.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/load-dem.png"></div>

To duplicate the layer, **```right-click on the layer -> Duplicate Layer```**

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/duplicate-dem.png"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/duplicate-dem-1.png"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/duplicate-dem-2.png"></div>

## Style DEM with a multidirectional hillshade
Traditional hillshades are created by illuminating light from a single direction. Most commonly it's from the northwest direction (315 degrees azimuth). A limitation of traditional hillshades is that they often produce over-exposed results with details in the non-illuminated sides being obscured.

To counter this, multidirectional hillshades illuminate the terrain from several directions (225, 270, 315, and 360 deg azimuth). This results in a more realistic representation of terrain and improves the balance between the over-exposed and non-illuminated areas in the map.

QGIS 3 has a multidirectional option when styling a raster as a hillshade.

Use the **```Layer Styling Panel```** or **```right-click on layer -> Properties -> Symbology```** to style the DEM as a Multidirectional Hillshade.

**Use the following options:**
>
>* Select **```Hillshade```** as **```Render Type```**
>* Set **```Z Factor```** to **```2.0```**
>* Check the **```Multidirectional checkbox```**
>* Select **```Cubic```** and **```Average```** for **```Resampling```** with **```Oversampling```** at **```2.0```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/hillshade-style.png"></div>

The resulting layer should look like this:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/hillshade-dem.png"></div>

## Drape a colored DEM
The next step is to drape a colored DEM over the hillshade. For this, we use the duplicate layer we created.

**Use the following options:**
>
>* Select **```Singleband pseudocolor```** as **```Render Type```**
>* For the **```Color ramp```**, **```BrBG```** works great
>* Edit the **```Classification intervals```**
>* Select **```Blending mode```** as **```Multiply```**
>* Select **```Cubic```** and **```Average```** for **```Resampling```** with **```Oversampling```** at **```2.0```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/colored-dem-style-1.png"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/colored-dem-style-2.png"></div>

Make sure that the colored-dem layer is ahead (or on top) of the hillshade layer in the Layers panel. The map should then look like this:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/colored-dem.png"></div>

## Drape a satellite image
We're not limited to just draping a single layer over our hillshade. We can also load other layers like satellite images. For example, load a Google Satellite basemap in QGIS.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/sat-1.png"></div>

**Afterwards, update the symbology of the Google Satellite layer and use the following options to overlay it on the hillshade:**
>
>* Select **```Blending mode```** as **```Overlay```**
>* Update the **```Brightness```**, **```Contrast```**, and **```Saturation```**
>* Select **```Cubic```** and **```Average```** for **```Resampling```** with **```Oversampling```** at **```2.0```**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/sat-style.png"></div>

The resulting map would then look like this:
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2019-01-22-hillshade-in-qgis/fin.png"></div>

There you have it. You can use the resulting map as a basemap to your other maps -- add a layer for rivers and water bodies, another layer for settlements and built-up areas, etc. You can also play around with different settings to see which combination works best for you. Good luck!
