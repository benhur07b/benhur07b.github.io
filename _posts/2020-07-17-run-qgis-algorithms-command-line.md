---
layout: post
title: Here's how to Run QGIS Processing Algorithms from the Command Line
description: QGIS 3.14 introduced the qgis_process command that allows users to run QGIS processing algorithms from the console without having the QGIS GUI open.
tags: [foss4g, qgis, qgis3, qgis3.14, terminal]
pinned: false
comments: true
og_type: article
image:
    facebook: /assets/img/posts/2020-07-17-run-qgis-algorithms-command-line/main.webp
    twitter: /assets/img/posts/2020-07-17-run-qgis-algorithms-command-line/main.webp
---
QGIS 3.14 (Pi) introduced the **qgis_process** tool -- a command-line executable that **"allows users to run processing algorithms (both built-in, and those provided by plugins) directly from the console"** developed by [Nyall Dawson](https://twitter.com/nyalldawson) and sponsored by the Swedish User Group. You can find the Pull Request of the feature [here](https://github.com/qgis/QGIS/pull/34617).

Being run straight from the console and outside the QGIS GUI application, **qgis_process** provides users the ability to harness the full power of the QGIS processing algorithms through batch files, shell scripts, and other operating system tools. This is also useful if you want to use QGIS processing algorithms externally without needing to write Python (or PyQGIS) scripts.

Currently, the tool has several commands:

* **qgis_process list**: outputs a complete list of all available algorithms, grouped by provider.
* **qgis_process plugins**: lists available and activated plugins which advertise the hasProcessingProvider metadata option (only these plugins are loaded by the tool)
* **qgis_process help algid**: outputs the help and input descriptions for the specified algorithm, e.g. qgis_process help native:centroids
* **qgis_process run**: runs an algorithm. Parameters are specified by a ```--param=value syntax```. For example:

```shell
qgis_process run native:centroids --INPUT="my_shapefile.shp" --OUTPUT="centroids.kml"
```
```shell
qgis_process run native:buffer --INPUT=/home/me/my.shp --DISTANCE=20 --OUTPUT=/home/me/buffered.shp
```
<br>
## Running the qgis_process tool
If you are on Linux, the tool can be accessed **directly from the terminal**. For Windows users, you can access the tool from the **OSGeo4W shell** (this usually comes installed with QGIS).

In my examples, I run this tool on a machine with a Pop! OS 20.04 (based on Ubuntu 20.04) operating system.

### qgis_process list
If you want to find what algorithms you can run, enter **qgis_process list** on the terminal.
```shell
qgis_process list
```
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-07-17-run-qgis-algorithms-command-line/qgis_process_list.webp'><figcaption class='figure-caption text-center'>Running qgis_process list</figcaption></div>

### qgis_process help algid
If you want help for a specific algorithm (e.g. you want to know its parameters/arguments), enter **qgis_process help algid** on the terminal. **algid** refers to the id used by QGIS to identify the algorithm. Veterans and power users of the QGIS processing framework are probably already familiar with this. For beginners, these are the first items per line of the **qgis_process list** output and follows the format <provider>:<algorithm name> (e.g. native:dissolve which refers to the dissolve algorithm provided by QGIS natively).
```shell
qgis_process help native:dissolve
```
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-07-17-run-qgis-algorithms-command-line/qgis_process_help.webp'><figcaption class='figure-caption text-center'>Running qgis_process help</figcaption></div>

Take note of the **Arguments** listed by **qgis_process help**. These are the arguments/parameters that can be provided when running the algorithm. Some arguments/parameters are optional. To learn more about QGIS processing algorithms and their parameters, you can check the QGIS documentation or this [list](https://gist.githack.com/ThomasG77/7ef3163f2c45f83fd90040ea84a37af2/raw/1b03ef2e0a7fa12d9c95975208d22e0bbe272b60/index.html) made by Thomas Gratier.

```shell
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
```

For **native: dissolve**, we have **INPUT**, **FIELD**, and **OUTPUT**. Adding these arguments/parameters to the command is done via a ```--param=value``` syntax.

### qgis_process run
Let's run a simple dissolve algorithm. First, add/export the **QT_QPA_PLATFORM** variable (for Linux).
```shell
export QT_QPA_PLATFORM='offscreen'
```

Afterwards, run the algorithm.
```shell
qgis_process run native:dissolve --FIELD="[]" --INPUT="/path/to/input.vector" --OUTPUT="/path/to/output.vector"
```

In my example, I used a geojson containing features of municipalities of a province and dissolved them to have a geojson with just the feature of the province.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-07-17-run-qgis-algorithms-command-line/qgis_process_dissolve.webp'><figcaption class='figure-caption text-center'>Running qgis_process run</figcaption></div>

You can check your output by opening it in QGIS.

<br>
Hat-tip to [Totò Fiandaca](@totofiandaca) for the original post [here](https://pigrecoinfinito.com/2020/07/16/usare-qgis-senza-aprirlo-qgis-processing-standalone-executable/).
