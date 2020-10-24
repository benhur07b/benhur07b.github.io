---
layout: post
title: "#PluginFridays: SRTM Downloader"
description: SRTM (Shuttle Radar Topography Mission) is a global research endeavor that yielded nearly-global digital elevation models (DEM). QGIS has a plugin called the SRTM Downloader that allows for SRTM data to easily be downloaded straight from QGIS. 
tags: [foss4g, qgis, qgis3, plugin, plugin-fridays, srtm, raster]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-10-22-plugin-fridays-srtm-downloader/main.png
    twitter: /img/posts/2020-10-22-plugin-fridays-srtm-downloader/main.png
---

**SRTM (Shuttle Radar Topography Mission)** is a global research endeavor that yielded nearly-global digital elevation models (DEM). QGIS has a plugin called the [**SRTM Downloader**](https://plugins.qgis.org/plugins/SRTM-Downloader/) that allows for SRTM data to easily be downloaded straight from QGIS. SRTM data downloaded by the plugin is in the form of .hgt files. Note also that these rasters are downloaded as 1 degree by 1 degree and the plugin will download all tiles that intersect the extent that you set.

In order to download SRTM data using the plugin, you should have a working **NASA Earth Data** account available, if not you may create one at [](https://urs.earthdata.nasa.gov/users/new).

## Download the SRTM Downloader
1. Open the **Manage and Install Plugins** dialog from **Plugins -> Manage and Install Plugins** from the Menu bar.
2. Search for **SRTM-Downloader**.
3. Click **Install Plugin**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/install-1.png" alt="SRTM Downloader in the Manage and Install Plugins dialog"><figcaption class="figure-caption text-center">SRTM Downloader in the Manage and Install Plugins dialog</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/install-2.png" alt="Installed SRTM Downloader in the Manage and Install Plugins dialog"><figcaption class="figure-caption text-center">Installed SRTM Downloader in the Manage and Install Plugins dialog</figcaption></div>

Once successfully installed, the plugin should be available from **Plugins -> SRTM-Downloader -> SRTM Downloader** from the Menu bar.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/srtm-downloader-menu-bar.png" alt="Accessing the SRTM Downloader plugin in the Menu bar"><figcaption class="figure-caption text-center">Accessing the SRTM Downloader plugin in the Menu bar</figcaption></div>

## Loading SRTM Digital Elevation Models

1. Open the SRTM Downloader via **Plugins -> SRTM-Downloader -> SRTM Downloader**.
2. Set the extent to download data.
3. You can set the extent to be equal to the canvas extent by clicking **Set canvas extent**.
4. **Output-Path** will be where the rasters will be stored. They can be downloaded as temporary files. 
5. **Load images to QGIS** will load the rasters in QGIS.
6. Click **Download**.
7. The plugin will list the number of rasters to download. In this example, 4 images wil be downloaded. 
8. The plugin will ask for your NASA Earth Data account and password.
9. The plugin will then download the rasters and prompt you of its success.

The rasters should now be loaded in QGIS for styling, analysis, processing, and manipulation. :)

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/albay.png" alt="Extent to download SRTM scenes (Albay)"><figcaption class="figure-caption text-center">Extent to download SRTM scenes (Albay)</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/srtm-downloader.png" alt="The SRTM Downloader"><figcaption class="figure-caption text-center">The SRTM Downloader</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/download-creds.png" alt="SRTM Downloader NASA Earth Data Account"><figcaption class="figure-caption text-center">SRTM Downloader NASA Earth Data Account</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/download-number.png" alt="Number of SRTM Scenes to Download"><figcaption class="figure-caption text-center">Number of SRTM Scenes to Download</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/download-finish.png" alt="Finished downloading SRTM scenes"><figcaption class="figure-caption text-center">Finished downloading SRTM scenes</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/download-success.png" alt="SRTM download success"><figcaption class="figure-caption text-center">SRTM download success</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/albay-srtm.png" alt="SRTM scenes downloaded for extent (Albay)"><figcaption class="figure-caption text-center">SRTM scenes downloaded for extent (Albay)</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/srtm-downloader-1.gif" alt="Using the SRTM Downloader 1"><figcaption class="figure-caption text-center">Using the SRTM Downloader 1</figcaption></div>


<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-22-plugin-fridays-srtm-downloader/srtm-downloader-2.gif" alt="Using the SRTM Downloader 2"><figcaption class="figure-caption text-center">Using the SRTM Downloader 2</figcaption></div>

And that's how you can load SRTM Digital Elevation Models (DEM) in QGIS. :)

Like and follow BNHR on [Facebook](https://facebook.com/bnhr.xyz) and [Twitter](https://twitter.com/BNHRdotXYZ) for more #FOSS4G and #QGIS stuff. :)