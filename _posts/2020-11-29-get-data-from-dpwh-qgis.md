---
layout: post
title: "Get Data from DPWH Road and Bridge Inventory in QGIS"
description: Ever wanted to get or load DPWH Road and Bridge Inventory in QGIS? Here's how.
tags: [foss4g, qgis, qgis3, dpwh, philippines]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-11-29-get-data-from-dpwh-qgis/main.png 
    twitter: /img/posts/2020-11-29-get-data-from-dpwh-qgis/main.png
---

*DISCLAIMER: I don't condone getting private data or any sensitive data.*

DPWH or the Department of Public Works and Highways has [GIS Web Apps for [Roads and Bridges Inventory](https://www.dpwh.gov.ph/dpwh/gis/rbi), [Road Traffic Information](https://www.dpwh.gov.ph/dpwh/gis/rti), and [Detailed Bridge Inventory](https://www.dpwh.gov.ph/dpwh/gis/dbi). If you take a peek at these web apps, you will notice that these are hosted on an ArcGIS Map and Feature Servers. The layers in these servers, when not set to private, can be accessed from outside clients such as QGIS. Here's how:

>
>* Go to **Browser Panel -> Right-click on ArcGIS Feature Service -> New connection**.
>* Enter the following details:
>
>```
>Name: DPWH
>URL: https://apps.dpwh.gov.ph/ArcGIS/rest/services
>```
>
>* Click **OK**
>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-11-29-get-data-from-dpwh-qgis/add.png" alt="Add DPWH ArcGIS Service in QGIS Browser"><figcaption class="figure-caption text-center">Add DPWH ArcGIS Service in QGIS Browser</figcaption></div>

You should now be able to see the databases and layers inside the said Feature Service from the QGIS Browser.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-11-29-get-data-from-dpwh-qgis/browser.png" alt="DPWH ArcGIS Service in QGIS Browser"><figcaption class="figure-caption text-center">DPWH ArcGIS Service in QGIS Browser</figcaption></div>

And load said layers in QGIS.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-11-29-get-data-from-dpwh-qgis/loaded-layer.png" alt="Load DPWH Layer in QGIS"><figcaption class="figure-caption text-center">Load DPWH Layer in QGIS</figcaption></div>


You can do the same with ArcGIS Map Service if you just want the tiles instead of the features.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-11-29-get-data-from-dpwh-qgis/add-map.png" alt="Add DPWH ArcGIS Map Service in QGIS Browser"><figcaption class="figure-caption text-center">Add DPWH ArcGIS Map Service in QGIS Browser</figcaption></div>

Lastly, if you need road or building footprint data, you can just use OpenStreetMap. OpenStreetMap data can easily be loaded in QGIS by using the QuickOSM plugin as shown in this [post]({{ site.baseurl }}/2018/10/12/connecting-qgis-to-remote-services.html)

P.S. Please be a responsible data user. :)