---
layout: post
title: "Geotagged photos in QGIS"
description: Working with geotagged photos in QGIS 3 is now simpler and easier. :)
tags: [foss4g, qgis, qgis3, gis, cartography, geotagged-photos]
pinned: false
comments: true
og_type: article
image:
    facebook: /assets/img/posts/2019-09-22-geotagged-photos-in-qgis/main.png
    twitter: /assets/img/posts/2019-09-22-geotagged-photos-in-qgis/main.png
---

Imagine going on a trip somewhere for the first time and, while on this trip, you encounter some fascinating and interesting things. So like most people, you pull out your phone and start taking photos of all the stuff that interest you (e.g. famous landmarks, buildings, etc.). You return from your trip with a bunch of fond memories, a bucket of experiences, and a phone full of photographs. You then choose the best photographs and think of what to do with them -- you can upload them on social media, you can send them to friends, or you can make a map. Thankfully, you had your phone's **```geolocation```** on while taking the photographs so you don't just have photographs but **```geotagged photographs```**.

A geotagged photograph is a **photograph with an ```associated geographic location``` added to it by a process called ```geotagging```**. The geographic information (latitude, longitude, and optionally altitude, bearing, and others) are stored in the image's EXIF header. Most modern smartphones have the option of geotagging the photos they take. Geotagged photographs are geospatial data that you can play around with in something like QGIS.

## Importing geotagged photos in QGIS
Prior to QGIS 3.4, importing geotagged photos in QGIS was done via a plugin. If you're still using QGIS version lower than 3.4 *(but why?)*, you can use the [ImportPhotos](https://plugins.qgis.org/plugins/ImportPhotos/) plugin to import geotagged photos in QGIS.

With QGIS 3.4 onwards, importing geotagged photos is now a core processing algorithm which can be found in the Processing Toolbox under **```Vector creation → Import geotagged photos.```**

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/import-geotagged-processing.png'></div>

The processing algorithm scans a given directory/folder for images and imports the geotagged images to QGIS as a point layer.

>* **```Input folder``` - the location of the images/photographs**
>* **```Photos``` - the name of the file to be created/loaded in QGIS**
>* **```Invalid photos table``` - a table of unreadable or non-geotagged photos**

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/import-geotagged-processing-1.png'></div>

After successfully running the algorithm, a point layer will be added in QGIS.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/import-geotagged.png'></div>

Let's add a basemap to add some flavor to the map.
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/import-geotagged-1.png'></div>

The attribute table of the point layer will contain the file location of the photo as well as the corresponing geographic information.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/import-geotagged-attr.png'></div>

Congratulations on importing your geotagged photos in QGIS but what now? It's a bit boring if the photos just appear as points on the map. What else can we do with our geotagged photos?

**IMPORTANT: The next steps on Viewing and Displaying the geotagged photos depend on QGIS knowing the file location of the photographs (i.e. the photo, filename, and directory fields of the point layer). If you move the location of the photographs, change their name, or change the name of the folder/directory of the photographs, you also need to edit the values of the fields to correspond to these changes.**

## Viewing geotagged photos using eVis
If you simply want to see what photos are on what points, you can use the eVis Event Browser. eVis is a core plugin in QGIS that you can activate under the Manage and Install Plugins dialog.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/evis-plugin.png'></div>

The eVis Event Browser can be found in **```Database → eVis → eVis Event Browser```**. Run eVis Event Broswer while the point vector is selected in the Layer Panel.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/evis-run.png'></div>

This will open the Event Browser window that you can use to view the photos.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/evis.png'></div>

The Event Browser shows the information (including the photo) correponding to the point highlighted in the Map Canvas.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/evis.gif'></div>

## Viewing geotagged photos using Map Tips
Map Tips are awesome. It allows you to define what to display when hovering over a feature -- **sort of** like pop-ups in web-maps (scratch that, **_exactly_** like pop-ups in web-maps).

To define the map tips to be shown, we first activate the Map Tips button found in the Attribute toolbar.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/maptips-toolbar.png'></div>

Afterwards, go to the Display tab of the layer's Properties (**```right click on layer → Properties → Display```**). Here, we can define what's to be displayed when hovering over the points. Map Tips accept HTML code so we can use HTML tags in creating our map tips. If we just want to show an image, we can use:

``` html
<img src='file://[% "photo" %]' height='197' width='256' />
```

>* **```file://```** informs your machine that your image is a local file located at [% "photo" %]
>* **```[% "photo" %]```** is the value of the photo field in the attribute table
>* **```height```** and **```width```** define the dimensions of the photo in the map tip

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/maptips.png'></div>

After clicking OK, you should now be able to see the photos when hovering over the points.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/maptips.gif'></div>

That's all fine and good but what if I want to show the images on the map and not need to hover over them? Well, you're in luck because **_QGIS gotchu fam_**.

## Displaying geotagged photos using Raster image markers
QGIS 3.6 came with a new symbology for points know as **```Raster image marker```**. Basically, you can now use rasters (read: images) as markers for your points which is perfect when we want to display geotagged photos in QGIS.

> To use Raster image markers:
>* Choose **```Single Symbol```**
>* Change **```Symbol label type```** from **Simple marker** to **Raster image marker**
>* Use a **```Data-defined override```** for the file location
>   * **```Field type: string → photo (string)```**

<div class='row'>
<div class='col-md-6 col-sm-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/raster-symbol-layer-type.png'></div>

<div class='col-md-6 col-sm-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/raster-data-defined.png'></div>
</div>

After clicking Apply, the photos should now appear as markers on the map.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2019-09-22-geotagged-photos-in-qgis/raster-image-marker.png'></div>

You can now use this to create a printable/shareable map in the Print Layout. Enjoy! :)
