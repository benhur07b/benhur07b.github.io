---
layout: post
title: "#PluginFridays: Spreadsheet Layers plugin"
description: A look at some of the awesome plugins that make QGIS amazing. This week -- the Spreadsheet Layers plugin.
tags: [foss4g, qgis, qgis3, plugin, plugin-fridays]
pinned: false
comments: true
og_type: article
image:
    facebook: /media/site/img/BNHR-bg.png
    twitter: /media/site/img/BNHR-bg.png
---

I've discussed about how powerful, and sometimes underutilized, QGIS plugins are in a [previous post](https://benhur07b.github.io/2017-07-14-qgis-plugins.html). In this series, which I'm aptly calling **```#PluginFridays```**, I would like to highlight some of the plugins that I use in hopes that more people become aware of them and the power they bring to QGIS.

If you don't know how to install plugins yet, you can check-out [this post for QGIS 2](https://benhur07b.github.io/2017-07-14-qgis-plugins.html) and [this post for QGIS 3](https://benhur07b.github.io/2018-10-08-qgis-plugins-3.0.html).

This week, I'll take a look at a simple yet powerful (aren't all QGIS plugins like that?) QGIS plugin: the **```Spreadsheets Layers```** plugin.

## The Plugin
You already probably know that you can load vector files, raster files, and even delimited text files like comma-separated value (CSV) files or tab-separated value (TSV) files in QGIS but did you know that you can also load spreadsheet files (like .xls and .xlsx from MS Excel and .ods from LibreOffice)? This is done through the **```Spreadsheet Layers```** plugin.

You can install the **```Spreadsheet Layers```** plugin via **```Plugins -> Manage and Install Plugins```**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/spreadsheetlayers.png" alt="Spreadsheet Layers plugin"></div>

* **Name:** **```Spreadsheet Layers```** plugin
* **Funtion:** Load layers from spreadsheet files (.ods, .xls, .xlsx)
* **Description:** This plugin adds a **```Add spreadsheet layer```** entry in **```Layer -> Add new Layer```** menu and a corresponding button in the **```Layers toolbar```**. These two links open the same dialog to load a layer from a **spreadsheet file (.ods, .xls, .xlsx)** with some options (*use header at first line, ignore some rows and optionally load geometry from x and y fields*). When this dialog is accepted, it creates a new GDAL VRT file in same folder as the source data file and layer name, expanded with a .vrt suffix which is loaded into QGIS using OGR VRT driver. When reusing the same file twice, the dialog loads its values from the existing .vrt file. No need to install additional dependencies.
* **Author:** [Camptocamp](mailto:info@camptocamp.com)
* **Code Repository:** [https://github.com/camptocamp/QGIS-SpreadSheetLayers](https://github.com/camptocamp/QGIS-SpreadSheetLayers)

## How to use
The **```Spreadsheet Layers```** plugin can load sheets with or without geometry attributes. The plugin also allows the user load a worksheet from a spreadsheet with multiple worksheets.

For example, we have a spreadsheet file (```SAMPLE SPREADSHEET.ods```) with two sheets -- one (```Sample Spreadsheet NO GEOM```) is just a list of Names and Ages of individuals and has no geometry attribute while the other (```Sample Spreadsheet WITH GEOM```) is a list of households with their latitude and longitude.

<div class="row">
    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/samp_nog.png" alt="Sample Sheet No Geometry"></div>
    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/samp_g.png" alt="Sample Sheet With Geometry"></div>
</div>

Both sheets can be loaded in QGIS using the **```Spreadsheet Layers```** plugin.

### Loading a spreadsheet layer without geometry
1. Go to **```Layer -> Add Layer -> Add spreadsheet layer```**.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/add-layer.png" alt="Add Spreadsheet Layer"></div>


2. Select the spreadsheet file and the sheet to load. Give the layer name. The rows in the spreadsheet file are shown together with their corresponding column headers and data types.

3. **```Leave the Geometry Checkbox UNCHECKED.```**

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/add-no-geom.png" alt="Add Spreadsheet Layer"></div>


4. Click **```OK```** and the layer should be loaded in QGIS. Note that since there is no spatial reference for this table, it will be loaded as a non-spatial table in QGIS. We can notice this by the layer having a table logo before its name.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/no-geom-layer.png" alt="Add Spreadsheet Layer"></div>


5. Check the contents of the table layer by **``` right-clicking -> Open attribute table```**.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/no-geom-attr.png" alt="Add Spreadsheet Layer"></div>

### Loading a spreadsheet layer with geometry
1. Go to **```Layer -> Add Layer -> Add spreadsheet layer```**.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/add-layer.png" alt="Add Spreadsheet Layer"></div>


2. Select the spreadsheet file and the sheet to load. Give the layer name. The rows in the spreadsheet file are shown together with their corresponding column headers and data types.

3. **```CHECK the Geometry Checkbox.```**

4. Select the **```fields that correspond to the X and Y coordinates```** as well as the **```Reference system```** that the X and Y coordinates are in. When the **```Show fields in attribute table```** checkbox is checked, the X and Y fields will be included in the attribute table.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/add-geom.png" alt="Add Spreadsheet Layer"></div>


5. Click **```OK```** and the layer should be loaded in QGIS as a point layer.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/geom-layer.png" alt="Add Spreadsheet Layer"></div>


6. Check the contents of the table layer by **``` right-clicking -> Open attribute table```**. Notice that there are no fields for Latitude and Longitude because we did not check the **```Show fields in attribute table```** option.

    <div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/geom-attr.png" alt="Add Spreadsheet Layer"></div>

## Other plugin options
When present, the plugin automatically detects headers in the sheet to use as headers for the attribute table. It also detects the data type to use (String, Real, Integer, etc). If needed, you can select the data type of the field directly in the plugin.

**```Number of lines to ignore```** is useful when the header is not the first line of the sheet. This option will skip the number of lines indicated and use the first row it encounters after skipping lines as the headers. For example, you have metadata on the first 3 rows, a blank line on the 4th, and the header and data are found starting from the 5th row like the one below:

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/samp_nogskip.png" alt="Spreadsheet SKIP ROWS"></div>

When loading this sheet using the plugin, we skip 5 rows (the header is in the 5th row while the data itself is in the 6th row) to get:

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.baseurl }}/assets/img/posts/2018-07-27-plugin-fridays-spreadsheet-layers-plugin/add-to-skip.png" alt="Spreadsheet SKIP ROWS"></div>

You can then load this as a layer in QGIS.

And that's the **```Spreadsheet Layers```** plugin. Stay tuned for the next **```#PluginFridays```** post and if you have any suggestions or questions, feel free to message me or leave a comment below.

If you want to check out more QGIS Plugins, you can visit the [Official QGIS Plugins web portal](https://plugins.qgis.org/).

**```Cheers!```**
