---
layout: post
title: "Select duplicate geometries from a layer in QGIS"
description: "Removing duplicate geometries and features is fairly straightforward in QGIS but what if you want to select and extract the features with duplicates or the features and their duplicates? In this post, we use a query in the DB Manager and the 'Select by location' algorithm to do just that."
tags: [foss4g, qgis, qgis3]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/main.png 
    twitter: /img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/main.png
---

Removing duplicate geometries and features is fairly straightforward in QGIS but what if you want to select and extract the features with duplicates or the features and their duplicates? In this post, we use a query in the DB Manager and the 'Select by location' algorithm to do just that. You can use this method with a point, line, or polygon layer.

In this example, we will select and extract duplicate geometries/features from a polygon layer.

## Check if there are duplicates using the Topology Checker
Here we have a polygon layer aptly named "With duplicates". We know that it has duplicates because if we run the Topology checker on the layer with a Rule "must not have duplicates", it returns 250 errors.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/topch0.png" alt="Topology checker must not have duplicates rule"><figcaption class="figure-caption text-center">Topology checker "must not have duplicates" rule</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/topch1.png" alt="Topology checker showing 250 errors (with duplicates)"><figcaption class="figure-caption text-center">Topology checker showing 250 errors (with duplicates)</figcaption></div>

## Use the DB Manager to run a query that lists all geometries with duplicates
Now that we know that we have duplicates, how can we select the features and their duplicates. Well, since we know that duplicate geometries technically have the same geometry, we can utilize a simple SQL query to list down the geometries with duplicates in our table.

Open the DB Manager via **Database -> DB Manager**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/dbman0.png" alt="Opening the QGIS DB Manager"><figcaption class="figure-caption text-center">Opening the QGIS DB Manager</figcaption></div>

Layers don't need to be inside databses like PostGIS or a geopackage for it to be used in the DB Manager. Layers loaded in your current project can also be used by the DB Manager. You can see the fields and features of layers in the DB Manager. You can also create a query to run on your layer.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/dbman0.gif" alt="QGIS DB Manager"><figcaption class="figure-caption text-center">QGIS DB Manager</figcaption></div>

After opening a SQL Window, type the query below. This query selects the geometries that have duplicates in the layer. Click **Execute** to run the query.

```sql
select * from
(select *, count(geometry) as num_geom from "With duplicates" group by geometry) as a
where a.num_geom > 1
```

Note that the outputted table is not the table of duplicates but the table of geometries with duplicates. Each one of these geometries can have multiple duplicates. To load this table as a layer in QGIS, check **Load as new layer** and provide a **Layer name (prefix)**. Since this layer has a geometry field, it can be loaded with geometry.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/dbman1.gif" alt="Running query on QGIS DB Manager"><figcaption class="figure-caption text-center">Running the query on QGIS DB Manager</figcaption></div>

The output should be a layer of the geometries with duplicates.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/dups0.png" alt="Layer of geometries with duplicates"><figcaption class="figure-caption text-center">Layer of geometries with duplicates</figcaption></div>

## Use the Select by location algorithm to select all features in the original layer that are equal to the features with duplicates

Now that we have a layer of the geometries/features with duplicates, we can use the **Select by location** algorithm to find geometries/features in our original layer that are equal to the geometries/features with duplicates.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/selloc.png" alt="Select attribute by location"><figcaption class="figure-caption text-center">Select attribute by location</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/dups0.gif" alt="Using the Select by location to select the geometries/features with duplicates"><figcaption class="figure-caption text-center">Using the Select by location to select the geometries/features with duplicates</figcaption></div>

Now you have the geometries/features with duplicates selected. You can extract or save this selection by **Right-cliking on the layer -> Export -> Save selected features as...**. Your output/saved layer will be the duplicate features from the original layer.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-09-select-duplicate-geometries-layer-qgis/dups1.png" alt="Layer of duplicate geometries"><figcaption class="figure-caption text-center">Layer of duplicate geometries</figcaption></div>


You can watch the video below if you want to follow along.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="mb-4 embed-responsive-item" src="https://www.youtube.com/embed/_Ml82z6LnKI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>