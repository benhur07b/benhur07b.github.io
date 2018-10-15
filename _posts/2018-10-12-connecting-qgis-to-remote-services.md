---
layout: post
title: "Connecting QGIS to Remote Services (WFS, WMS, GeoNode, OSM): Hazard Mapping with Phil-LiDAR 1 and Project NOAH Hazard Maps on the Web"
description: In this post, I'll show you how to take advantage of QGIS' capabilities for connecting to remote services like WFS, WMS, and GeoNode; getting data from OSM; and even loading vector and raster files stored on the web.
tags: [foss4g, qgis, qgis3, gis, basemaps, wfs, wms, geonode, phil-lidar, project noah, drrm, hazard maps]
pinned: false
comments: true
og_type: article
image:
    facebook:  /media/posts/2018-10-12-connecting-qgis-to-remote-services/main.png
    twitter: /media/posts/2018-10-12-connecting-qgis-to-remote-services/main.png
---

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/main.png"></div>

There is a lot of geospatial data out there -- in the wild, on the cloud, on the internet, and in a lot of obscure places. The beauty of QGIS is that it's now very good at getting data from all these different sources. So good, in fact, that most of the time I don't even need to leave the application in order to get data and perform my analysis.

In this post, I'll show you how you can take advantage of QGIS' capabilities for connecting to remote services like WFS, WMS, and GeoNode; how you can load OSM data directly in QGIS; and even how rasters and vectors stored on the internet can be loaded into QGIS.

For the purpose of demonstration, we'll do some simple hazard mapping. We'll get:
* ```Flood Hazard Map``` stored on [Phil-LiDAR 1's](https://dream.upd.edu.ph/) [LiPAD (LiDAR Portal for Archiving and Distribution)](https://lipad.dream.upd.edu.ph)
* ```Landslide Hazard Data``` and ```Stormsurge Hazard Data``` from [Project NOAH](http://noah.up.edu.ph/downloads/) (*which even though they released them late, I think is still good*)
* ```Building data``` from OpenStreetMaps using the [QuickOSM](https://plugins.qgis.org/plugins/QuickOSM/) plugin.

Before anything else, let's briefly go over a few concepts.

## What is WFS and WMS?
[WFS (Web Feature Service)](http://www.opengeospatial.org/standards/wfs) and [WMS (Web Map Service)](http://www.opengeospatial.org/standards/wms) are [Open Geospatial Consortium (OGC)](https://www.opengeospatial.org/) Open Web Services standards for accessing geographic data over a network.

```WFS``` provides direct access to the dataset which allows for the reading, writing, and editing of the data's features. Because WFS provides direct access to a dataset, whatever you can do on a local vector file loaded in QGIS you can also do on a vector file accessed via WFS. These include:
1. quering a dataset and retrieve the features;
2. finding the feature definition (feature’s property names and types);
3. adding, deleting, or updating features in a dataset;
4. locking features to prevent modification;
5. performing analysis of the dataset; and
6. adding a custom style to the dataset

```WMS```, on the other hand, delivers data as map images and does not allow you access to the individual features of a dataset. Thus, it's not as useful as WFS if you want to perform your own analysis but it's very useful if you just want to use the data to create a map.

To differentiate between the two, I usually give this example: ```If you load a layer using WFS, you can open its attribute table. If you load a layer using WMS, you can't.```

## GeoServer
[GeoServer](http://geoserver.org/) is an open-source server that allows for sharing, processing, and editing geospatial data. Its main selling point is interoperability as it can publish data from any major spatial data source using open standards. For example, GeoServer can allow users to load your vector file saved in a PostGIS database via WFS, WMS, or as another data format such as GeoJSON (useful for web mapping libraries like Leaflet and Mapbox). It also allows you to connect your data to most mapping applications or GIS infrastructures -- including QGIS.

GeoServer is used by GeoNode applications and a common component for Spatial Data Infrastructures (SDI) like the [Philippine Geoportal](http://www.geoportal.gov.ph/).

## GeoNode
[GeoNode](http://geonode.org) is an Open Source Geospatial Content Management System designed to be a platform for developing geospatial information systems (GIS) and for deploying spatial data infrastructures (SDI). It is built on top of the Django framework together with PostGIS and GeoServer.

GeoNode is used for the data repositories of the Phil-LiDAR program as well as many other [organizations and projects](http://geonode.org/gallery/) around the world.

## Add the Philippine Geoportal Basemap by connecting to an XYZ Tiles Service
I've discussed about basemaps in QGIS in [this post](https://bnhr.xyz/2018/10/07/basemaps-in-qgis.html) and recently, I added the Philippine basemap hosted by the [Philippine Geoportal](http://geoportal.gov.ph) to the [QuickMapServices catalog](http://qms.nextgis.com). You can load the basemap in QGIS by searching for **```Philippine Geoportal Basemap```** in the QuickMapServices plugin.

You can also directly connect to the service hosting the basemap by the Philippine Geoportal. I updated the directions [here](http://www.geoportal.gov.ph/downloads/How%20to%20connect%20and%20consume%20the%20PGS%20Basemap%20in%20QGIS.pdf) to reflect how this can be done in QGIS 3.

>
>* Go to **```Browser Panel -> Right-click on XYZ Tiles -> New connection```**.
>* Enter the following details:
>
>```
>Name: Philippine Geoportal
>URL: http://v2.geoportal.gov.ph/tiles/v2/PGP/{z}/{x}/{y}.png
>```
>

<div class="col-lg-12">
<div class="col-lg-6 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-xyz.png"></div>

<div class="col-lg-6 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-xyz-pgp.png"></div>
</div>

If you successfully connect to the service, you should see a **```Philippine Geoportal```** option under XYZ Tiles and be able to load the layer in QGIS.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/pg_basemap.png"></div>

Once you're connected to the service, you should be able to access and load the basemap any time as long as you have internet connection.

## Connecting to a WFS and WMS
Connecting to a WFS, WMS, or WCS is simple in QGIS. Let's try to connect to the Philippine Geoportal WMS.

>
>* Go to **```Browser Panel -> Right-click on WMS/WMTS -> New connection```**.
>* Enter the following details:
>
>```
>Name: Philippine Geoportal
>URL: http://geoserver.namria.gov.ph/geoserver/ows?version=1.1.1&
>```
>
>* Click **```OK```**
>

<div class="col-lg-12">
<div class="col-lg-6 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-wms.png"></div>

<div class="col-lg-6 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-wms-pgp.png"></div>
</div>

If you successfully connect to the service, you should be able to see the layers available from the Philippine Geoportal under **```WMS/WMTS -> Philippine Geoportal -> GeoServer Web Map Service```**

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-wms-pgp-done.png"></div>

Connecting to a WFS follows the same procedure.

## Connecting to a GeoNode instance

In QGIS 2.X, if you wanted to connect QGIS to a GeoNode instance, you had to manually connect QGIS to both the WFS and WMS of the instance by following the steps outlined in the previous section.

Luckily, QGIS 3.X made it easier to connect QGIS to a GeoNode instance. Let's try to connect to the Phil-LiDAR 1 Flood Modelling Component's GeoNode which holds the Flood Hazard Maps generated by the project.

>
>* Go to **```Browser Panel -> Right-click on GeoNode -> New connection```**.
>* Enter the following details:
>
>```
>Name:LiPAD FMC GeoNode
>URL: https://lipad-fmc.dream.upd.edu.ph/
>```
>* If you want to check if what you are connecting to is a valid GeoNode instance, you can click >**```Check connection```**
>* Click **```OK```**
>

<div class="col-lg-12">
<div class="col-lg-6 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-geonode.png"></div>

<div class="col-lg-6">
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-geonode-lipad.png"></div>
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-geonode-lipad-test.png"></div>
</div>
</div>

If you successfully connect to the GeoNode instance you should be able to see the layers available from both WFS and WMS under  **```GeoNode -> LiPAD FMC GeoNode -> WFS or WMS```**

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/conn-geonode-lipad-done.png"></div>

Now let's try to add a Flood Hazard Map from the LiPAD FMC GeoNode.

### Get a 100-year Flood Hazard Map for the City of Legazpi
Once we are connected to the LiPAD FMC GeoNode, we should be able to load the Flood Hazard Maps by Phil-LiDAR 1. Let's select the 100-year Flood Hazard Map for the City of Legazpi

>
>* Go to **```Browser Panel -> GeoNode -> LiPAD FMC GeoNode -> WMS - > LiPAD FHM WMS```**.
>* Locate the **```City of Legazpi, Albay 100 Year Flood Hazard Map```**
>* Load the map in QGIS by **```Double-clicking```** it or **```Right-click -> Add Selected Layer(s) to Canvas```**

Sometimes you'll encounter an **```SSL Handshake Failed```** Error caused by QGIS failing to connect securely to the service. There are a lot of ways to overcome this. One method I employ is by using a different internet connection.

If the map is successfully added in QGIS, you should be able to see something like this:

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/flood-hazard-0.png"></div>

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/flood-hazard-1.png"></div>

Notice that if you right click on the layer, there is no option to open the Attribute Table.

## Loading Rasters and Vectors stored on the internet
Aside from Flood Hazard Maps by Phil-LiDAR 1, Project NOAH also (finally) released, a few years ago, their Landslide and Stormsurge Hazard Maps. They released them as downloadable rasters and vectors which you can find [here](http://noah.up.edu.ph/downloads/). Why they didn't release it as a database and share it via a web service, I don't know but we make do with what we're given. If you want to download multiple files, you can try the [NOAH downloads scraper](https://github.com/benhur07b/NOAH-downloads-scraper) I created.

Of course you can always just download the files and load them in QGIS but for the sake of demonstration, I'll show you how you can load the vector and raster files found on the internet in QGIS.

### Load a Landslide Hazard Raster

>
>* Open the **```Data Source Manager```** via **```CTRL + L```** or the **```Layer -> Data Source Manager```** menu
>* Go to **```Raster```** tab
>* Tick the **```Protocol: HTTP(S), cloud, etc.```** radio button
>* Enter the following details:
>
>```
>Type: HTTP/HTTPS/FTP
>URL: http://noah.up.edu.ph/downloads/LANDSLIDE/RASTER/HAZARDS/Batanes_LandslideHazards.TIFF
>```
>* Click **```Add```**

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/noah-landslide-raster-0.png"></div>


Loading the layer might take some time but afterwards you should be able to see something like this:

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/landslide-raster-0.png"></div>

That's for loading a raster, how about a vector (shapefile) stored on the internet?

### Load a Stormsurge Hazard Vector
We basically follow the same steps.

>
>* Open the **```Data Source Manager```** via **```CTRL + L```** or the **```Layer -> Data Source Manager```** menu
>* Go to **```Vector```** tab
>* Tick the **```Protocol: HTTP(S), cloud, etc.```** radio button
>* Enter the following details:
>
>```
>Type: HTTP/HTTPS/FTP
>URL: http://noah.up.edu.ph/downloads/STORMSURGE/SHAPEFILES/SSA4/Albay_StormSurge_SSA4.shp
>```
>* Click **```Add```**
>

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/noah-ss-vector.png"></div>

Again, loading the layer might take some time but afterwards you should be able to see something like this:

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/ss-vector-0.png"></div>

Since we loaded a vector file, we should be able to change its symbology like so:

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/ss-vector-1.png"></div>

Now what else can we add to create our hazard maps? How about some building footprint data from OpenStreetMaps?

## Getting OSM data using the QuickOSM Plugin

Let's get all the buildings in OpenStreetMaps within the area covered by our map canvas. This is easily done using the [QuickOSM](https://plugins.qgis.org/plugins/QuickOSM/) plugin which allows you to execute overpass queries from QGIS to get OSM data. [Overpass](https://wiki.openstreetmap.org/wiki/Overpass_API) is a read-only API that serves up custom selected parts of the OSM map data. Basically, it allows you to get elements from OSM selected by search criteria like e.g. location, type of objects, tag properties, proximity, or combinations of them. This is very useful specially if you only need certain parts of OSM data (i.e. no need to download the entire OSM dataset for the Philippines) and need the most recent data in OSM (i.e. no need to download the entire OSM dataset everytime it is updated).

To run the plugin, find the QuickOSM Toolbar and click **```QuickOSM```**.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/quickosm.png"></div>

This will open a window where you can create and run custom Overpass queries or even open a local .osm file.

For our purpose, let's just run a quick query to get all the buildings within our current map canvas.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/quickosm-bldgs.png"></div>

After the query is completed, you should be able to see the following layer:

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/quickosm-bldg-layer.png"></div>

You can style the queried layer and check its attribute table.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/quickosm-bldg-layer-1.png"></div>

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-12-connecting-qgis-to-remote-services/quickosm-bldg-layer-attr.png"></div>

Now that you've loaded the layers in QGIS, you can then proceed with creating maps using the **```Print Layout```**. You can check a simple tutorial on how to create maps in the Print Layout [here](https://bnhr.xyz/2018/03/01/learn-cartography-and-styling-in-qgis-part-2.html).

That ends this brief post on how to connect QGIS to remote services. I hope you learned something new.

If you have questions, clarifications, or want to suggest a topic that I should write about next (on FOSS4G, QGIS, GRASS, etc), leave a comment below. Cheers! :)
