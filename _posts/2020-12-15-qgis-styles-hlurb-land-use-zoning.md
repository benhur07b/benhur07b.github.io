---
layout: post
title: "QGIS Styles based on HLURB Land Use Categories and Color Coding (CLUP Guidebook Vol 3, 2014)"
description: "Here are some QGIS styles based on HLURB Land Use Categories and Color Coding (CLUP Guidebook Vol. 3, 2014) that you can use in your next Land Use or Zoning map."
tags: [foss4g, qgis, qgis3, styles, land-use, zoning, hlurb, philippines]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/main.png 
    twitter: /img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/main.png
---

The QGIS Style Manager is a very powerful cartography and styling tool. It allows you to create, store, re-use, and even share styles you use in QGIS. This is specially useful if you have specific styles that you commonly utilize. Here I'm sharing styles I created based on the [Land Use Categories and Color Coding Guide (Annex 1) of the HLURB CLUP Guidebook Vol. 3 (2014)](https://hlurb.gov.ph/services/local-government-unit/clup-guidebook/)

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/styles.png" alt="HLURB Land Use Categories and Color Coding QGIS Styles"><figcaption class="figure-caption text-center">HLURB Land Use Categories and Color Coding in the QGIS Style Manager</figcaption></div>

The styles are currently awaiting review in the [QGIS Styles Repository](https://plugins.qgis.org/styles/). In the meantime, you can find and download the styles from my [GitHub account](https://github.com/benhur07b/qgis-style-hlurb-land-use-zoning-color-codes).

To load the styles in QGIS:
* you can download the Style XML file located [**here**](https://raw.githubusercontent.com/benhur07b/qgis-style-hlurb-land-use-zoning-color-codes/main/styles/hlurb-luc-color-coding-2014.xml) and Import it as File in the QGIS Style Manager;
* you can simply import the style from this URL: **https://raw.githubusercontent.com/benhur07b/qgis-style-hlurb-land-use-zoning-color-codes/main/styles/hlurb-luc-color-coding-2014.xml**.

To do this:
* Go to **Settings -> Style Manager...** in the Menu bar. This will open the Style Manager Window.
* On the bottom left of the Style Manager Window, click **Import/Export -> Import Items**. This will open the Import Item(s) dialog.
    * If you select **File** in the Import From option, select the [XML file](https://raw.githubusercontent.com/benhur07b/qgis-style-hlurb-land-use-zoning-color-codes/main/styles/hlurb-luc-color-coding-2014.xml) you downloaded.
    * If you select **URL** in the Import From option, use this URL: **https://raw.githubusercontent.com/benhur07b/qgis-style-hlurb-land-use-zoning-color-codes/main/styles/hlurb-luc-color-coding-2014.xml**
        * Click **Fetch items**
* A preview of the styles should be available for selection.
* Select all styles (or just the styles you want).
* Click **Import**.
* **IF A WARNING APPEARS THAT THE STYLE ALREADY EXISTS AND ASKS YOU IF YOU WANT TO OVERWRITE IT, JUST CLICK YES TO ALL OR NO TO ALL**
* The styles should now be available under the HLURB LUC Color Coding (2014) tag and can be used for styling your layers.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/style-man-1.png" alt="QGIS Style Manager"><figcaption class="figure-caption text-center">The QGIS Style Manager</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/import-items.png" alt="QGIS Style Manager Import Items Dialog"><figcaption class="figure-caption text-center">QGIS Style Manager Import Items Dialog</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/import-file.png" alt="QGIS Style Manager Import Items Dialog File"><figcaption class="figure-caption text-center">QGIS Style Manager Import Items Dialog using File</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/import-url.png" alt="QGIS Style Manager Import Items Dialog URL"><figcaption class="figure-caption text-center">QGIS Style Manager Import Items Dialog using URL</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/select-all.png" alt="QGIS Style Manager Import Items Select All Styles"><figcaption class="figure-caption text-center">QGIS Style Manager Import Items Select All Styles</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/warning.png" alt="QGIS Style Manager Import Items Warning"><figcaption class="figure-caption text-center">QGIS Style Manager Import Items Warning</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-12-15-qgis-styles-hlurb-land-use-zoning/style-man-2.png" alt="QGIS Style Manager HLURB Land Use Zoning Styles"><figcaption class="figure-caption text-center">QGIS Style with HLURB Land Use Zoning Styles</figcaption></div>

You can watch the video below if you want to follow along.

<div class="embed-responsive embed-responsive-16by9">
<iframe class="mb-4 embed-responsive-item" src="https://www.youtube.com/embed/k-5QgzA54rw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>
Pull Requests and Updates are welcome especially if you have a more updated version of the guidebook.