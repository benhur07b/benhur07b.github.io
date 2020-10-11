---
layout: post
title: Run QGIS processing algorithms in R
description: QGIS 3.14 introduced the qgis_process command that allows users to run QGIS processing algorithms from the console without having the QGIS GUI open. Now, an R package (qgisprocess) allows us to run QGIS processing algorithms inside of R! Awesome!
tags: [foss4g, qgis, qgis3, qgis3.14, r, rstudio]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-10-04-run-qgis-algorithms-r/main.png
    twitter: /img/posts/2020-10-04-run-qgis-algorithms-r/main.png
---
QGIS 3.14 (Pi) introduced the **qgis_process** tool -- a command-line executable that **"allows users to run processing algorithms (both built-in, and those provided by plugins) directly from the console"** developed by [Nyall Dawson](https://twitter.com/nyalldawson) and sponsored by the Swedish User Group. You can find the Pull Request of the feature [here](https://github.com/qgis/QGIS/pull/34617). You can check this [post]({{ site.baseurl }}/2020/07/17/run-qgis-algorithms-command-line.html) to learn more.

Recently, Dewey Dunnington ([@paleolimbot](https://twitter.com/paleolimbot)) created an R package (aptly named qgisprocess) that allows you to call processing algorithms straight from R. You can check out the qgisprocess R package in this GitHub [repo](https://github.com/paleolimbot/qgisprocess). Read below to learn how you can utilize this with R and QGIS 3.14.

## Installing the qgisprocess R package

We can install the **qgisprocess** package from its GitHub repo using the **remotes** package. To do so, type:

```r
install.packages("remotes")
remotes::install_github("paleolimbot/qgisprocess")
```

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-04-run-qgis-algorithms-r/rqgisprocess1.gif" alt="Install QGIS qgisprocess R package"><figcaption class="figure-caption text-center">Install the qgisprocess R package</figcaption></div>

## Checking if the package was installed

We can then check if the qgisprocess package was installed by calling some functions.

```r
library(qgisprocess)
qgis_path()
[1] "qgis_process"

# check QGIS version
qgis_version()
[1] "3.14.16-Pi"

# check available QGIS algorithms
qgis_algorithms()
# A tibble: 984 x 5
   provider provider_title algorithm                  algorithm_id          algorithm_title          
   <chr>    <chr>          <chr>                      <chr>                 <chr>                    
 1 3d       QGIS (3D)      3d:tessellate              tessellate            Tessellate               
 2 gdal     GDAL           gdal:aspect                aspect                Aspect                   
 3 gdal     GDAL           gdal:assignprojection      assignprojection      Assign projection        
 4 gdal     GDAL           gdal:buffervectors         buffervectors         Buffer vectors           
 5 gdal     GDAL           gdal:buildvirtualraster    buildvirtualraster    Build virtual raster     
 6 gdal     GDAL           gdal:buildvirtualvector    buildvirtualvector    Build virtual vector     
 7 gdal     GDAL           gdal:cliprasterbyextent    cliprasterbyextent    Clip raster by extent    
 8 gdal     GDAL           gdal:cliprasterbymasklayer cliprasterbymasklayer Clip raster by mask layer
 9 gdal     GDAL           gdal:clipvectorbyextent    clipvectorbyextent    Clip vector by extent    
10 gdal     GDAL           gdal:clipvectorbypolygon   clipvectorbypolygon   Clip vector by mask layer
# … with 974 more rows

# show help on a sample algorithm
qgis_show_help("native:dissolve")
Dissolve (native:dissolve)

----------------
Description
----------------
This algorithm takes a vector layer and combines their features into new features. One or more attributes can be specified to dissolve features belonging to the same class (having the same value for the specified attributes), alternatively all features can be dissolved in a single one.

All output geometries will be converted to multi geometries. In case the input is a polygon layer, common boundaries of adjacent polygons being dissolved will get erased.

----------------
Arguments
----------------

INPUT: Input layer
	Argument type:	source
	Acceptable values:
		- Path to a vector layer
FIELD: Dissolve field(s)
	Argument type:	field
	Acceptable values:
		- The name of an existing field
		- ; delimited list of existing field names
OUTPUT: Dissolved
	Argument type:	sink
	Acceptable values:
		- Path for new vector layer

----------------
Outputs
----------------

OUTPUT: <outputVector>
	Dissolved

```

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-04-run-qgis-algorithms-r/rqgisprocess2.gif" alt="Checking if the qgisprocess package is installed in R"><figcaption class="figure-caption text-center">Checking if the qgisprocess package is installed in R</figcaption></div>

If you're running RStudio, the **qgisprocess** package should be available in the **Packages** tab.


## Running a simple QGIS algorithms

Now let's try to run a simple QGIS algorithm. Here, I'll load a vector file of Bicol provinces and I'll dissolve them (e.g. merge all features into a single feature) using the QGIS dissolve algorithm.

```r
library(sf)

# load input file
input_file <- sf::read_sf("/home/bnhr/rdata/vectors/bicol-provinces.shp")
# plot input file
plot(sf::st_geometry(input_file))

# create temp output file
output_file <- file.path(tempdir(), "bicol-dissolved.gpkg")

# run QGIS dissolve algorithm
qgis_run_algorithm(
    "native:dissolve",
    INPUT = input_file,
    FIELD = "[]",
    OUTPUT = output_file
    )

output_sf <- sf::read_sf(output_file)

# plot output (dissolved features)
plot(sf::st_geometry(output_sf))
```

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-04-run-qgis-algorithms-r/rqgisprocess3.gif" alt="Loading a vector file of Bicol provinces in R"><figcaption class="figure-caption text-center">Loading a vector file of Bicol provinces in R</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-04-run-qgis-algorithms-r/rqgisprocess4.gif" alt="Dissolving the Bicol provinces vector using the QGIS dissolve function in R"><figcaption class="figure-caption text-center">Dissolving the Bicol provinces vector using the QGIS dissolve function in R</figcaption></div>

And that's how you can run QGIS algorithms in R. Please give the package a test and provide feedback [here](https://github.com/paleolimbot/qgisprocess/issues).

Like and follow BNHR on [Facebook](https://facebook.com/bnhr.xyz) and [Twitter](https://twitter.com/BNHRdotXYZ) for more #FOSS4G and #QGIS stuff. :)