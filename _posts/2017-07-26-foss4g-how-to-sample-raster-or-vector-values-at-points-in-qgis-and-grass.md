---
layout: post
title: "FOSS4G How-to: Sample raster or vector values at points in QGIS and GRASS"
description:  This is the first of a series of posts that will show how to perform basic or standard GIS functions using FOSS4G (Free-and-Open-Source for Geospatial) applications like QGIS and GRASS. In this post, we take a look at how we can sample raster and vector values at points using QGIS and GRASS.
tags: [foss4g, how-to, foss4g-how-to, qgis, 2.18.10, grass, 7.2.1]
pinned: false
comments: true
og_type: article
image:
  facebook: /img/site/BNHR_bg_default.webp
  twitter: /img/site/BNHR_bg_default.webp
---

Let's say we want to know the values of rasters and vectors at specific points in a point layer (e.g. household locations). How would we go about doing this in QGIS or GRASS?

Well, it's actuallly pretty easy. You just need to know the right tools to use. QGIS has the **Point sampling tool** plugin for sampling rasters and vectors while GRASS has the **v.what.rast** or **Sample raster maps at point locations** module for sampling rasters and the **v.what.vect** or **Update point attributes from areas** module for sampling vectors.

Now let's take a look at these tools.

For this how-to, we'll be using the following layers:

1. **sample-points** -- a point (vector) layer
2. **solar-radiation** -- a (raster) layer of Global Horizontal Irradiance (GHI) values
3. **biomass-potential** -- a polygon (vector) layer of available Biomass potential

We'll try to get the solar radiation and biomass potential values at the sample points.

## Point sampling tool in QGIS
The point sampling tool collects polygon attributes and raster values from multiple layers at specified sampling points. It is a QGIS plugin that you can download from the QGIS Python Plugins Repository. You can check it out [here](https://plugins.qgis.org/plugins/pointsamplingtool/).

If you need help with installing plugins, you can check [this post]({{ site.baseurl }}/2017/07/14/qgis-plugins.html).

Once installed, the plugin can be accessed via **Plugins -> Analyses -> Point sampling tool**.

<div class=" img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/pst-cropped.png" alt="Point sampling tool in the QGIS menu bar"></div>

>
**DIRECTIONS:**
>
Make sure that the layers you want to sample values from are active (checked).
>
Open the Point sampling tool.
>
On the **General** tab:
>
1. Select the Layer containing sample points (sample-points).
2. Select the Fields you want to get values from. You can select multiple fields using CTRL + click. This will be the fields of the output point vector (id from sample-points, Bn_Coconut and Bv_Coconut from the biomass-potential, Band1 of solar-radiation).
3. Create a new Output point vector layer.
4. Tick Add created layer to the TOC.
>
On the **Fields** tab:
1. You can change the name of the fields of the output point vector. Be sure to make the field names unique. Vector field names also have a max length of 10 characters.
>
Click **OK**.

<div class="row">
    <div class="col-md-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/general.png" alt="Selecting fields and bands to sample using Point sampling tool in QGIS"></div>

    <div class="col-md-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/fields.png" alt="Renaming the selected fields and bands to sample using Point sampling tool in QGIS"></div>
</div>

If the tool is successful, there should be a new point layer in the Layer panel whose fields are the ones you selected.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/sampled-cropped.png" alt="Resulting point layer with sampled values loaded in QGIS"></div>

Open the attribute table of the created point layer to check.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/attr-tab.png" alt="Attribute table of resulting point layer with sampled values using Point sampling tool"></div>

Some important things to note with the Point sampling tool.
1. It does not copy the sample points but creates a new point shapefile. Thus, if you want to include the fields of the sample points, you need to select them.
2. It does not overwrite an existing point layer. Doing so will result in an error. You need to create a new point shapefile as output for the tool.
3. It is not compatible with multipoint sources except if each multipoint contains exactly one point.

## v.what.vect in GRASS
The **v.what.vect** module transfers attributes from the query_map's map attribute table into the attribute table of points present in the map map. The script is based on v.distance. You can read more about it [here](https://grass.osgeo.org/grass72/manuals/v.what.vect.html).

Before running the module, we first need to prepare our sampling point layer. The **v.what.vect** module does not create new fields on the sampling point layer so we need to add new fields that will hold the sampled values if there aren't ones yet.

Adding new fields in the attribute table is easy. You can type **v.db.addcolumn** in the Command console or open the Attribute table of the point layer (**right-click on layer -> Show attribute data**) and go to the **Manage tables** tab.

In the **Manage tables** tab you can add a Bn_Coconut and a Bv_Coconut field of type double.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/v.what.vect-bn_coco-add.png" alt="Add new fields in attribute table in GRASS GIS"></div>

Afterwards, the **v.what.vect** module can be accessed by typing **v.what.vect** in the Command console or via **Vector -> Update attributes -> Update point attributes from areas [v.what.vect]**.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/v.what.vect-crp.png" alt="Update point attribute by areas in GRASS GIS"></div>

>
**DIRECTIONS:**
>
On the **Required** tab:
1. Select the point layer we want to sample with (sample-points).
2. Select the attribute column (field) that we want to update (e.g. the Bn_Coconut field we added earlier). *If the dropdown button doesn't work, you can just type in the attribute column name*
3. Select the vector layer we want to query (biomass-potential).
4. Select the attribute column (field) that we want to query (Bn_Coconut). *If the dropdown button doesn't work, you can just type in the attribute column name*
>
Click **Run**.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/v.what.vect-bn_coco.png" alt="v.what.vect parameters for sampling vector layers in GRASS GIS"></div>

Do the same for the Bv_Coconut field.

If you are successful, the Bn_Coconut and Bv_Coconut fields of the sample-points layer should now have values. Open the attribute table to check.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/grass-attr-tab-2.png" alt="Attribute table with values of sampled vector layers using v.what.vect in GRASS GIS"></div>

## v.what.rast in GRASS
The **v.what.rast** module retrieves raster value from a given raster map for each point or centroid stored in a given vector map. It can update a column in the linked vector attribute table with the retrieved raster cell value or print it. The column type needs to be numeric (integer, float, double, ...). If the column doesn't exist in the vector attribute table than the module will create the new column of type corresponding with the input raster map. You can read more about it [here](https://grass.osgeo.org/grass72/manuals/v.what.rast.html).

It can be accessed by typing **v.what.rast** in the Command console or via **Vector -> Update attributes -> Sample raster maps at point locations [v.what.rast]**.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/v.what.rast-crp.png" alt="Sample raster maps at point locations using v.what.rast in GRASS GIS"></div>

>
**DIRECTIONS:**
>
On the **Required** tab:
1. Select the point layer we want to sample with (sample-points).
2. Select the existing raster map to be queried (solar-radiation).
>
On the **Optional** tab:
1. Select or set the name of the attribute column you want to update.
2. Unlike **v.what.vect**, the **v.what.rast** module will create a new attibute column (field) if the attribute column to update does not exist in the sampling point layer.
>
Click **Run**

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/v.what.rast-reqd.png" alt="v.what.rast parameters for sampling raster layers in GRASS GIS"></div>

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/v.what.rast-opt.png" alt="other v.what.rast parameters for sampling raster layers in GRASS GIS"></div>


If you are successful, the GHI attribute column of sample-points should now have values. Open the attribute table to check.

<div class="col-md-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2017-07-26-foss4g-how-to-sample-raster-or-vector-values-at-points-in-qgis-and-grass/grass-attr-tab.png" alt="Attribute table with values of sampled raster layers using v.what.rast in GRASS GIS"></div>

## Final thoughts
Unlike the **Point sampling tool** that creates a new point shapefile, the GRASS modules used for sampling just updates the attribute table of your sampling point layer.

If you'll notice, the results we got from using the **Point sampling tool** in QGIS and **v.what.vect** and **v.what.rast** in GRASS are just the same.

That's it. That's how you can sample rasters and vectors using a point shapefile in QGIS and GRASS.

Stay tuned for the other installments of [**FOSS4G How-to**]({{site.baseurl}}/blog/tags.html#foss4g-how-to) and if you have any queries or requests, don't hesitate to [contact]({{site.baseurl}}/#contact) me.

Cheers!
