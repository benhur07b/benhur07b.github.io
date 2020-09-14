---
layout: post
title: "Using a .csvt file to specify CSV column data type when loading a CSV in QGIS"
description: Make sure that the data types of your CSVs are read correctly by QGIS when using Add Vector Layer or dragging the data into QGIS.
tags: [foss4g, qgis, csv, csvt]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/site/images/BNHR-bg.webp
    twitter: /img/site/images/BNHR-bg.webp
---

CSV are very useful formats consumable not only by GIS but also by other platforms and frameworks. It's one of the most common ways to store and share tabular data.

CSVs can be loaded in QGIS in a couple of ways.
1. Via the **Add Delimited Text Layer** in the **Data Source Manager** (**CTRL + L**)
2. Via the **Add Vector Layer** in the **Data Source Manager** (**CTRL + L**)
3. **Dragging** the CSV in the QGIS interface

The safest method is using the **Add Delimited Text Layer** option. I say safest because this option guesses the data type of the columns in your CSV when adding them as layers in QGIS. Most of the time, strings will be considered strings and numbers will be considered as integers or real. This is not the case for the other two options.

When adding a CSV via the **Add Vector Layer** option or **Dragging** it into QGIS, the fields become **strings by default**. This becomes very problematic if you have numeric data in your CSV.

**To illustrate**: Lets' say we have a CSV of names and ages of persons (**sample.csv**) like the one below.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/samplecsv.png" alt="Sample CSV to load in QGIS"></div>

If we import this as a layer in QGIS via the **Add Delimited Text Layer** and check its fields, we can see that the data types are correct. The Name is a text/string and the Age is an integer.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/dsm-input.png" alt="Add CSV delimited text layer in QGIS"></div>
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/dsm-fields.png" alt="Layer properties of CSV delimited text layer in QGIS using data source manager"></div>

Now, if you try to import it using the other two options. You'll notice that the Age field becomes a string.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/vect-input.gif" alt="Load CSV delimited text layer in QGIS as vector data source manager"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/sampcsv.gif" alt="Load CSV delimited text layer in QGIS by drag and drop"></div>

**So how do we solve this?** Enter the **.csvt** file.

## The .csvt file
The .csvt file is a one-line text file with a .csvt file extension and holds information on the data types of the columns of the CSV file it corresponds to. CSVTs enable the user to define the following data types: Integer, Real, String, Date (YYYY-MM-DD), Time (HH:MM:SS+nn), and DateTime (YYYY-MM-DD HH:MM:SS+nn).

For example, we can create the following .csvt file (sample.csvt) for our sample csv.
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/samplecsvt.png" alt="Sample CSVT file"></div>

For the .csvt file to work it needs to:
1. Have the **same name** as the CSV file it corresponds to (i.e. sample.csv has sample.csvt).
2. Be in the **same directory** as the CSV it corresponds to.

With the .csvt file present, we can see that the data types of the fields in the CSVs are classified by QGIS based on the .csvt when using **Add Vector Layer** or **Dragging** the file in QGIS.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/vect-input-csvt.gif" alt="Correct load CSV delimited text layer in QGIS as vector data source manager with csvt"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-07-specifying-csv-data-types-using-a-csvt-file/drag-input-csvt.gif" alt="Load correct CSV delimited text layer in QGIS by drag and drop with csvt"></div>

And that's the use of .csvt files in ensuring the correct data type for your CSV fields when not using the **Add Delimited Text Layer** option when loading them in QGIS.
