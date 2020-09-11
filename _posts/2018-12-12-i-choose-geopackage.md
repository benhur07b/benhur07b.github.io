---
layout: post
title: "#MakeTheSwitch: Choose GeoPackage"
description: This year, I made the decision and conscious effort to use shapefiles less and GeoPackages more in the work that I do. Whenever possible and whenever people will listen, I also try to talk and explain why I made the switch to GeoPackage and why I think the format has a lot of potential.
tags: [foss4g, qgis, qgis3, gis, geopackage]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2018-12-12-i-choose-geopackage/prefer-geopackage.png
    twitter: /img/posts/2018-12-12-i-choose-geopackage/prefer-geopackage.png
---

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-12-12-i-choose-geopackage/prefer-geopackage.png" alt="Say no to shapefile and choose geopackage"></div>
<small>_* credits to http://switchfromshapefile.org/ for the image_</small>

This year, I made the decision and conscious effort to use shapefiles less and GeoPackages more in the work that I do. Whenever possible and whenever people will listen, I also try to talk and explain why I made the switch to GeoPackage and why I think the format has a lot of potential.

Like most people I know, I had my first experience with geospatial data with shapefiles. In fact, in the Philippines, when I say "I need a vector file", some people won't know what I mean; but if I say "I need a shapefile", people instantly get it. Shapefile has become synonymous with geospatial data which isn't necessarily a bad thing. Personally, I don't use shapefile and geospatial data interchangeably -- I use vector when I mean vector files and shapefiles only when I mean shapefiles. Shapefiles have their uses but it has its limitations which other formats like GeoJSON and GeoPackage seek to address.

## Why not Shapefile?
Shapefile is an old standard/specification. If you want to learn more about why shapefiles are bad, you can check out [switchfromshapefile.org](http://switchfromshapefile.org/).

Some of these limitations that I'd like to highlight are:

### A Shapefile is not just 1 file
Ever noticed that what we call a shapefile is actually a bunch of files? For a shapefile to be useful, we need 3 required components with the same names and in the same directory. These are the ***.shp***, ***.shx***, and ***.dbf*** files that store the ***feature geometry***, ***position of individual feature IDs***, and ***attribute information of the features*** respectively. When one of these files are missing, the shapefile becomes unusable. Imagine my surprise when one time I asked for a shapefile and was given the .shp file by itself.

### 2GB size limit
The ***.shp*** or ***.dbf*** files of a shapefile ***cannot be larger than 2GB*** in size so the maximum size of a shapefile that you can have is just 4GB.

In most cases, this seems enough but I've had experiences where people need more than 4GB for their geospatial data -- especially for big datasets or those with a large number of fields. In cases like these, you can ask "Why not just use a spatial database like PostGIS?". The answer is simply most people aren't comfortable working with a spatial database and are more familiar working with files that they can copy, paste, etc.

### 10-character limit for field names
Another thing you probably noticed when working with shapefiles is that ***field names have a 10-character limit***. Need to name something "Cities and Municipalities"? You better be prepared to settle for something like "MuniCities". Of course, something like "MuniCities" is still workable but imagine having to name fields that correspond to "Number of children below 5 years old who are unvaccinated", "Number of children from 5-10 years old who are unvaccinated", and "Number of children from 10-15 years old who are unvaccinated". I've had instances working with individuals and organizations whose datasets require the fields of the shapefiles to correspond to those values. Usually, what we do is name the field using a code that meets the 10-character limit and create a look-up table so that people will know what the codes mean. This can work but it leads to field names being unintuitive and not understandable without the look-up table.

### Maximum number of fields is 255
Speaking of fields and big data, good luck with using shapefiles for datasets that require more than 255 fields because that's the maximum number that a shapefile can have. Again, for most cases, 255 is more than enough but if ever you find yourself needing more, shapefiles just won't cut it.

## Why GeoPackage?
I'll start this off by saying that ***GeoPackage doesn't have to replace shapefiles for all purposes*** -- it can but it doesn't have to. There are instances where a shapefile or GeoJSON is more approriate to use than a GeoPackage like if you simply want to share and display a small dataset. ***However, for most cases and especially for cases where you need to overcome the limitations of shapefiles, GeoPackage provides a very good and solid alternative.***

### What is GeoPackage
[GeoPackage](http://www.geopackage.org/) is ***an open, standards-based, platform-independent, portable, self-describing, compact format for transferring geospatial information***. It is adopted by the [Open Geospatial Consortium (OGC)](http://www.opengeospatial.org/) as the Open Format for Geospatial Information.

A GeoPackage is an SQLite container (.gpkg extension) whose contents follow the GeoPackage Encoding Standard that describes a set of rules and requirements for storing the following within the container:
* ***vector features***
* ***tile matrix sets of imagery and raster maps at various scales***
* ***attributes (non-spatial data)***
* ***extensions***

What this means is that a ***GeoPackage is a single file (SQLite database) that can contain other files like vector features, tiles, rasters, attributes, etc***. You can think of GeoPackage as similar to ESRI's personal geodatabase only this one has better features and isn't limited for use to just ESRI products.

### GeoPackage is a single-file format without a 2GB limitation on file size
If you haven't heard of it yet, let me introduce you to [OS Open Zoomstack](https://www.ordnancesurvey.co.uk/business-and-government/products/os-open-zoomstack.html). It is a comprehensive vector basemap showing coverage of Great Britain at a national level, right down to street level detail. It contains data on roads, buildings, points of interest, etc. in one file to be used for GIS, web, mobile or offline use utilizing the power of Vector Tiles and it's available as a GeoPackage. ***Imagine all that data (~10GB) in just a single file*** that you can easily open in  a GIS and share with others.

### GeoPackages can have more than 255 fields and the field names do not have a 10-character limit
Being based on a relational database, a ***GeoPackage can have more than 255 fields***. With GeoPackages you can also finally name your fields "Number of children below 5 years old who are unvaccinated", "Number of children from 5-10 years old who are unvaccinated", "Number of children from 10-15 years old who are unvaccinated", or any other name you want and ***not be limited to 10 characters***. This results in having ***more intuitive field names***. I find this to be very useful when working on projects that need to measure really descriptive or specific things.

### GeoPackages can include vectors and rasters inside a single file
Another beauty of GeoPackage is that it can contain multiple files -- vectors, rasters, and extensions in a single file making data sharing easier and cleaner.

When providing GIS training and workshops, I've found that GeoPackage is a great format to use. Instead of giving students/trainees multiple files or a zipped file containing multiple shapefiles and rasters, I often opt to provide them with a GeoPackage containing the dataset that they need for our session.

### GeoPackage and GIS
GeoPackage is now supported in a lot of GIS software and mapping applications. In fact,*** QGIS 3.X and GRASS GIS 7.4.X now has GeoPackage as the default option when importing and exporting vector files*** which is a testament to the promise and potential that the format has. In fact, ESRI's ArcGIS for Desktop 10.2.2 and above also has support for GeoPackages.

For a list of GeoPackage implementations, you can check [here](http://www.geopackage.org/implementations.html).

### GeoPackage and non-GIS applications
Because GeoPackage is an SQLite container, ***you don't actually need a full-blown GIS to access, update, and use its contents***. For example, you can use [DB Browser for SQLite](http://sqlitebrowser.org/) to query your GeoPackage and if you add SpatiaLite extension to your DB Browser, you can also perform spatial analysis on it.

### The sweet spot
One more thing I like about GeoPackage is that it's in that sweet spot between a flat-file format like a Shapefile or GeoJSON and an enterprise-level spatial database like PostGIS which gives GeoPackage somewhat the best of both worlds -- ***more powerful than a shapefile and less complicated to use than PostGIS*** (even if it's less powerful). This makes it powerful enough for advanced users while being friendly enough for beginners and novice users.

## Make the Switch
The Shapefile is and will always be a part of my geospatial journey and history. It's one of the first geospatial formats that I fell in love with, so to speak, and there was a time when I thought geospatial work started and ended with shapefiles, but that's not the case anymore. As I moved forward, I've come to accept the limitations of the format and the fact that it's not the end-all, be-all format I once thought it was. The field of geospatial science is always advancing and, as students of the field, we should always advance with it. For myself, that included learning to use GeoJSONs and Vector Tiles for web and mobile applications, learning to manage and utilize a spatial database like PostGIS, and adapting GeoPackage instead of shapefiles, among other things. I still use and will still use shapefiles but only on a case-to-case basis.

In 2019, I'll continue working with GeoPackages more and I invite you to try them and ***#MakeTheSwitch*** with me.
