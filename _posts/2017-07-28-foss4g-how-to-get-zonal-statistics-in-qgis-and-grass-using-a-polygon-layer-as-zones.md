---
layout: post
title: "FOSS4G How-to: Get Zonal Statistics in QGIS and GRASS using a Polygon Layer as Zones"
description: This is the second entry for this series. In the last entry, we learned how to sample rasters using points. This time we'll compute zonal statistics using a polygon layer using QGIS and GRASS.
tags: [foss4g, how-to, foss4g-how-to, qgis, 2.18.10, grass, 7.2.1]
pinned: false
comments: true
og_type: article
image:
  facebook: /media/site/img/BNHR-bg.png
  twitter: /media/site/img/BNHR-bg.png
---

In the [previous entry](https://benhur07b.github.io/2017/07/26/foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass.html), we learned how to sample raster and vector values at points. In this post, we'll take a look at how we can compute for zonal statistics using a polygon layer in QGIS and GRASS.

Zonal statistics work by computing for statistics of a raster dataset (i.e. minimum, maximum, mean, etc.) within certain zones provided by another dataset (either another raster or a vector layer). Here, we'll use a polygon vector layer to define our zones.

The tools we'll be using are the **```Zonal statistics```** plugin in QGIS and the **```v.rast.stats```** or ```Update area attributes from raster``` module in GRASS.

The data layers for this how-to are:
1. *sample-polygons* -- a polygon (vector) layer
2. *solar-radiation* -- a (raster) layer of Global Horizontal Irradiance (GHI) values

We'll try to get the minimum, maximum, and average solar radiation values for each zone provided in our sample-polygons layer.

## Zonal statistics
The Zonal statistics plugin is a Core plugin in QGIS 2.18.XX that allows the user to calculate statistics on pixels of a raster band that are within polygons/zones in a vector layer. It creates additional fields in the vector layer using a user-defined prefix to hold the calculated statistics which include the minimum value, maximum value, mean value, count, and sum. You can read more about it [here](https://docs.qgis.org/2.18/en/docs/user_manual/plugins/plugins_zonal_statistics.html).

Check [this post](https://benhur07b.github.io/2017/07/14/qgis-plugins.html) if you need help with installing/activating plugins.

Once activated, the plugin can be accessed via ```Raster -> Zonal statistics -> Zonal statistics```.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2017-07-28-foss4g-how-to-get-zonal-statistics-in-qgis-and-grass-using-a-polygon-layer-as-zones/zonal-stats-cropped.png"></div>

>
**DIRECTIONS:**
>
Make sure that the layers you want to use are active (checked).
>
Open the Zonal statistics plugin.
>
1. Select the Raster layer containing the band you want to compute statistics from (solar-radiation).
2. Select the Band you want to compute statistics from (Band 1).
3. Select the Polygon layer containing the zones (sample-polygons).
4. Set the Output column prefix (GHI_).
5. Check the Statistics to calculate.
>
Click ```OK```.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2017-07-28-foss4g-how-to-get-zonal-statistics-in-qgis-and-grass-using-a-polygon-layer-as-zones/zonal-stats-gui-1.png"></div>

If you open the attribute table of the sample-polygons layer, it should contain three additional fields named GHI_mean, GHI_min, and GHI_max.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2017-07-28-foss4g-how-to-get-zonal-statistics-in-qgis-and-grass-using-a-polygon-layer-as-zones/qgis-attr-tab-2.png"></div>

## v.rast.stats
The ```v.rast.stats``` module calculates univariate statistics from a raster map based on a vector map and uploads statistics to new attribute columns. You can read more about it [here](https://grass.osgeo.org/grass72/manuals/v.rast.stats.html). It can be accessed by typing ```v.rast.stats``` in the Command console or via ```Vector -> Update attributes -> Update area attributes from raster [v.rast.stats]```.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2017-07-28-foss4g-how-to-get-zonal-statistics-in-qgis-and-grass-using-a-polygon-layer-as-zones/v.rast.stats-cropped.png"></div>

>
**DIRECTIONS:**
>
On the ```Required``` tab:
1. Select the Name of the vector map containing the zones (sample-polygons).
2. Select the Name of the input raster to calculate statistics from (solar-radiation).
3. Set the Column prefix for new attribute columns (GHI).
>
On the ```Optional``` tab:
1. Select the Layer number or name to compute statistics from (1).
2. Select the methods to use (or statistics to compute).
>
Click ```Run```

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2017-07-28-foss4g-how-to-get-zonal-statistics-in-qgis-and-grass-using-a-polygon-layer-as-zones/v.rast.stats-reqd.png"></div>

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2017-07-28-foss4g-how-to-get-zonal-statistics-in-qgis-and-grass-using-a-polygon-layer-as-zones/v.rast.stats-opt.png"></div>

If you open the attribute table of the sample-polygons layer, it should contain three additional fields named GHI_minimum, GHI_maximum, and GHI_average.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/media/posts/2017-07-28-foss4g-how-to-get-zonal-statistics-in-qgis-and-grass-using-a-polygon-layer-as-zones/grass-attr-tab-2.png"></div>

## Final thoughts
If you check their values, the results obtained using ```Zonal statistics``` in QGIS and ```v.rast.stats``` in GRASS are the same. Only the names of the additional attribute columns/fields created are different.

With that, you should now be able to compute zonal statistics using a polygon vector in QGIS and GRASS.

Tune in for the next installment of [**FOSS4G How-to**]({{site.baseurl}}/blog/tags.html#foss4g-how-to) and if you have any queries or requests, you can [contact]({{site.baseurl}}) me or leave a comment below.

Cheers!
