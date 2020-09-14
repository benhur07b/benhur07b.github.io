---
layout: post
title: "Create a globe-like orthographic projection map in QGIS 3"
description: Learn how to create globe-like orthographic projection maps in QGIS 3 centered at different places on the earth by using custom Coordinate Reference Systems (CRS).
tags: [foss4g, qgis, qgis3, map-projections]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2018-09-21-create-a-globe-in-qgis/main.png
    twitter: /img/posts/2018-09-21-create-a-globe-in-qgis/main.png
---

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/main.png" alt="Globe-like orthographic projection map pof the world with the Philippines at center"></div>

Orthographic projection maps are great. They have that "global" feel to them since they look like globes which is useful when you want to evoke a sense of "global context" in your map. They also do wonders for emphasizing and highlighting a part of the map especially if you put it in the center and give it a different color than the rest of your map.

Just look at the image above. What's the first thing you notice? The Philippines, right?

So how do we create globe-like orthogoraphic projection maps in QGIS? Turns out, it's pretty straightforward. We just have to define a custom Coordinate Reference System. For example, if I want to create a map like the one above, here's what I'd do:

## Download World Borders dataset
Download a World Borders dataset like [this from thematicmapping.org](http://thematicmapping.org/downloads/world_borders.php).

## Load the downloaded dataset in QGIS
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/globe-01.png" alt="Load World Borders dataset in QGIS"></div>

## Define custom projection
You can define custom Coordinate Reference Systems (CRS) in QGIS by going to **```Settings -> Custom Projections```**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/custom-crs.png" alt="Define custom projection in QGIS"></div>

The projection definition that we'll use is shown below:

>
```+proj=ortho +lat_0=13.5 +lon_0=121.9 +x_0=0 +y_0=0 +a=6371000 +b=6371000 +units=m +no_defs```
>

We are basically defining an orthographic projection centered at 13.5 degrees latitude and 121.9 degrees longitude. That coordinate approximates the center of the Philippines (Hello Balanacan Island!).

If you want to center the map somewhere else, you can just replace 13.5 and 121.9 with the corresponding latitude and longitude values where you want to center your map.

Let's name our Custom CRS as **Globe - PHL** and click **OK**.

<div class="row">
    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/custom-crs-1.png" alt="Creating a custom coordinate reference system (CRS) in QGIS"></div>

    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/custom-crs-2.png" alt="Custom CRS parameters in QGIS"></div>
</div>

## Change the current CRS to our custom CRS
Next, we just change the current CRS of our project to that of the custom CRS we just defined.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/custom-crs-3.png" alt="Change current coordinate reference system (CRS) in QGIS"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/custom-crs-4.png" alt="Select custom coordinate reference system (CRS) in QGIS"></div>

After clicking **OK**, we should see the following result:

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/custom-crs-5.png" alt="Map using custom orthoghraphic projection in QGIS"></div>

## Change the style of the map
The last step is just to change the style of the map to highlight the Philippines.

You can do this by using a ```Categorized Symbology``` on the ```NAME``` column like below:

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-09-21-create-a-globe-in-qgis/custom-crs-6.png" alt="Globe-like custom ortographic projection map in QGIS with the Philippines"></div>

And that's it! You've created a globe-like map in QGIS! :)
