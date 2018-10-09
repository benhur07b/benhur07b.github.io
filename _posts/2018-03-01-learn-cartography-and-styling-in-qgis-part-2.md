---
layout: post
title: "Learn Cartography and Styling in QGIS through Basketball Visualization (Part 2): The Print Composer/Layout"
description: Part 2 of a series of posts focused on teaching cartography and styling in QGIS by creating visualizations for basketball. In this post, we'll dive into the heart of map-making in QGIS -- the QGIS Print Composer.
tags: [foss4g, qgis, qgis3, how-to, cartography, basketball, courtvisionph]
pinned: false
comments: true
og_type: article
image:
  facebook: /media/bnhr-qgis-bball.png
  twitter: /media/bnhr-qgis-bball.png
---

In the [previous post](https://benhur07b.github.io/2018/01/03/learn-cartography-and-styling-in-qgis-part-1.html), we created shot charts using Rule-based symbology in QGIS. In this post, we'll take a look at how we can turn those shot charts into printable maps like this:

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-01-03-learn-cartography-and-styling-in-qgis-part-1/shotchart.png"></div>

At the heart of map-making in QGIS is the Print Composer. It's a poweful tool that creates different map layouts and allows the user to fine-tweak each part of the map that being created -- the map, titles, images, scales, legends, etc. In QGIS 3, Print composers were renamed to Print layouts.

## Creating a New Print layout
To access the Print Composer, we first create a new Print layout/composer (if we haven't already) via ```Project -> New Print layout``` (QGIS 3), ```Project -> New Print Composer``` (QGIS 2), or ```CTRL + P```. Previously created layouts/composers can be accessed via ```Project -> Layouts``` (QGIS 3) or ```Project -> Print composers``` (QGIS 2).

Let's create a new layout/composer and name it ```basketball```.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/new-print-composer.gif"></div>

Creating or opening a print layout opens that Print Composer/Layout window.

## The Print Composer Window
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/print-composer-window.png"></div>

The Print Composer/Layout window is composed of a canvas, a menu bar, toolbars, and a side pane.

<div class="col-full">

<div class="col-half">
<h3>Canvas</h3>
<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/canvas.png"></div>
<p>The canvas is where we see the actual layout of the map we are going to create. This is where we add images, texts, legends, etc.</p>
</div>

<div class="col-half">
<h3>Menu bar</h3>
<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/menu-bar.png"></div>
<p>The menu bar provides access to commands and functions of the Print composer such as adding and editing maps, texts, and images.</p>
</div>

<div class="col-half">
<h3>Side pane</h3>
<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/side-pane.png"></div>
<p>For me, the side pane is one of the most important areas in the Print composer window. The Layout, Item Properties, and Guides tabs allow the user to fine-tune elements of the map from the color of the font to the scale used, etc.</p>
</div>

<div class="col-half">
<h3>Toolbars</h3>
<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/toolbars-1.png"></div>

<div class="col-quarter img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/toolbars-2.png"></div>
<div class="col-three-quarter">
<p>Like the menu bar, the toolbars provide quick access to commands and functions of the Print composer.</p>
</div>
</div>

</div>

## Creating a Map with the Print Composer
Now let's create an actual map that we can print using the Map composer.

### Set the Page Setup of the Layout
The first thing we need to do is to setup the size of our map canvas via ```Layout -> Page Setup``` or ```CTRL + SHIFT + P```. For this map, we'll be printing it in A4 sized paper.

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/page-setup.gif"></div>

With this, when we print our map or save it as an image, we know that its size will be A4.

### Add a Map to the Canvas
Now let's add our map to the canvas via  ```Add Item -> Add Map``` or by clicking the Add Map button on the left toolbar.

<div class="col-full">
<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-map-1.png"></div>

<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-map-2.png"></div>

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-map.gif"></div>
</div>

After adding the map, we can place it anywhere on the canvas and change its size or zoom level by changing its scale property. Other aspects of the map can also be edited in the ```Item Properties``` tab.

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/edit-map.gif"></div>

### Add Map title
Every map needs a title. Let's add one to ours using ```Add Item -> Add Label``` or by clicking the Add Label button on the left toolbar. We can add a label for the title and another for the subtitle.

<div class="col-full">
<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-label-1.png"></div>

<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-label-2.png"></div>

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-titles.gif"></div>
</div>

The text, font style, color, and other properties can be changed in the ```Item Properties``` Tab.

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/edit-titles.gif"></div>

### Add Map Legend
The next step is to add a legend so people can understand our map better. A Legend can be added using ```Add Item -> Add Legend``` or the Add Legend button on the left toolbar.

<div class="col-full">
<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-legend-1.png"></div>

<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-legend-2.png"></div>

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-legend.gif"></div>
</div>

Like with other map elements, legends properties can be edited in the ```Item Properties``` tab. Let's rename the FGA item in the legend and remove the CourtMap item.

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/edit-legend.gif"></div>

### Add Texts
Let's add another label that provides a little more information and explanation about our map.

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-text.gif"></div>

### Add Images (North Arrow, Logos, etc)
Images can also be added to our map via the ```Add Item -> Add Picture``` or the Add Picture button in the left toolbar.

<div class="col-full">
<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-picture-1.png"></div>

<div class="col-half img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-picture-2.png"></div>

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/add-picture.gif"></div>
</div>

### Print or Export Map
Once we are satisfied with the layout of our map, we can export it to an image, pdf, or svg file. The commands for this can be found under the ```Layout``` menu or on the toolbar. We can also Print the map directly.

<div class="col-full">
<div class="col-half">
<div class="img-container">
<img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/export-map-1.png">
</div>
</div>

<div class="col-half">
<div class="img-container">
<img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/export-map-2.png">
</div>
<p>Let's save our map as a .PNG file that we can print.</p>
</div>

<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/export-map.gif"></div>
</div>

Congratulations! You should now have a ready-to-print PNG file like the one below:
<div class="col-full img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-03-01-learn-cartography-and-styling-in-qgis-part-2/shot-chart-up.png"></div>

## Final Thoughts
Those are just the basics of map-making in QGIS using the Map Composer. With a bit of practice, creativity, and familiarity, greater and more beautiful maps can be created in QGIS. For some inspiration, you can check out [Map Examples from the QGIS site](https://www.qgis.org/en/site/about/screenshots.html).

Stay tuned for the next part of this series where we'll look at creating a Hot Zones map and adding Labels to Symbology. Cheers!
