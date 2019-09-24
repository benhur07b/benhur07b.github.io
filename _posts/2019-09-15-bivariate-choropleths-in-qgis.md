---
layout: post
title: 'Bivariate Choropleth Maps in QGIS'
description: Bivariate choropleth maps are both stunningly beautiful and informative. Here's how you can create them in QGIS.
tags: [foss4g, qgis, qgis3, gis, cartography, bivariate-choropleth]
pinned: false
comments: true
og_type: article
image:
    facebook:  /media/posts/2019-09-15-bivariate-choropleth-in-qgis/bivariate-choropleth-banner.png
    twitter: /media/posts/2019-09-15-bivariate-choropleth-in-qgis/bivariate-choropleth-banner.png
---

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/bivariate-choropleth-banner.png'></div>

I've had a fascination with bivariate choropleth maps for quite some time now. Who wouldn't? With the right color combination, a bivariate choropleth map hits that sweet spot of being both visually stunning and highly informative. Just do a [Google search of bivariate choropleth](https://www.google.com/search?q=Bivariate+Choropleth&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiqlYS8kOnkAhUpK6YKHRZcDLAQ_AUIEigB&biw=1920&bih=980) and you'll see what I mean.

Inspired by [this post by Joshua Stevens](https://www.joshuastevens.net/cartography/make-a-bivariate-choropleth-map/), this post will detail how to make bivariate choropleth maps in QGIS. We'll create a bivariate choropleth map using election returns of the recent (2019) Philippine Elections focusing on 2 candidates -- Senator Bato dela Rosa and Chel Diokno. The data (in GeoPackage format) can be found [here](http://bit.ly/data-bivariate-choropleth-in-qgis-1).

Before diving into that, let's go through some basics.

## (Univariate) Choropleth Maps
A choropleth map is a thematic map wherein areas (typically geographic areas) are colored, shaded, or patterned based on the value of a single variable (univariate) corresponding to that area. One of the most basic examples is a population density map. A choropleth map can be created in QGIS by using ```Graduated Symbology``` on a polygon vector.

For example, let's create a choropleth map by applying a ```Graduated Symbology``` on our election returns dataset.
1. Open the ```bivariate-choropleth-qgis.gpkg``` file in QGIS.
2. Edit the Symbology to ```Graduated```.
    1. Set ```Column``` to ```DELA ROSA, BATO (PDPLBN) - PERCENTAGE```
    2. Click ```Classify```

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/choro-01.gif'></div>

You've now created a choropleth map showing the percentage of votes obtained by the now Senator Bato dela Rosa for each of the provinces.

### The Need for Normalization
Here's a simple rule to remember when creating choropleth maps: **```Use rates/percentages, not counts/totals.```**

Notice in the example above, we used percentage of votes for the province as the variable instead of total votes obtained. Using rates/percentages is important because if we used counts/totals, we'd introduce the bias brought by the fact that larger areas tend to have higher population. For example, a candidate can obtain more votes in Metro Manila than Tawi-tawi not because he is more popular in the former but simply because there are more voters in the Metro Manila than Tawi-tawi.

If choropleth maps are not normalized they become merely another population map.

## Bivariate Choropleth Maps
A bivariate choropleth map is similar to a basic (univariate) choropleth map but instead of a single variable, it shows *(surprise surprise)* **```two variables at once```**. A bivariate choropleth map doesn't just show two variables at once but it also shows a **```relationship between these two variables```** -- *do they agree or disagree, do they increase/decrease proportionally, etc.*.

### Number of Categories
Since a bivariate choropleth map shows two variables, the number of categories it has increases exponentially by two -- *a bivariate choropleth using two univariate choropleth with 3 categories each has 9 categories*. Having too many categories in a single map isn't good practice so a 3x3 or 4x4 bivariate choropleth is workable but anything above that is usually too much.

### Choosing A Color Combination
Also, the choice of colors is important since we're basically combining/mixing the colors of the 2 univariate choropleths to create our bivariate choropleth. [Joshua Stevens](https://www.joshuastevens.net/cartography/make-a-bivariate-choropleth-map/) has a few bivariate color scheme examples that we can use, as seen below:

<div class='row'>
    <div class='col-lg-3 col-md-3 col-sm-6 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/js_bivariatePalettes-1.png'></div>
    <div class='col-lg-3 col-md-3 col-sm-6 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/js_bivariatePalettes-2.png'></div>
    <div class='col-lg-3 col-md-3 col-sm-6 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/js_bivariatePalettes-3.png'></div>
    <div class='col-lg-3 col-md-3 col-sm-6 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/js_bivariatePalettes-4.png'></div>
</div>

For example, our bivariate choropleth map below shows how the provinces voted during the 2019 Election in terms of voting for Bato and/or Chel. Are there areas where both of them got a lot of votes? Or does a high vote percentage for one candidate mean a lower vote percentage for the other? To answer these questions, we have 9 categories and using the second color scheme from Joshua Stevens above.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/bivariate-choropleth-banner.png'></div>

So how do we go about creating this map in QGIS?

## Bivariate Choropleth Maps in QGIS
If you can create a univariate choropleth map in QGIS, you can create a bivariate choropleth map. :)

### Make Two Choropleth Maps
The first step is to create two choropleth maps -- one for each variable we want to show. In our case, these two variables are:
1. ```DELA ROSA, BATO (PDPLBN) - PERCENTAGE``` - the percentage of total votes in the province obtained by Bato
2. ```DIOKNO, CHEL (LP) - PERCENTAGE``` - the percentage of total votes in the province obtained by Chel

After loading the election returns data in QGIS, duplicate the layer so that you have 2 layers.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/biva-01.png'></div>

The top layer will be the choropleth map for Bato and the bottom layer will be the choropleth map for Chel. We can rename them to avoid confusion.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/biva-02.png'></div>

Now we edit each of the layer's symbology using a **```Graduated Symbology with 3 categories```**.

>For Bato, we'll use the left-most colors of our color scheme. Our parameters will be:
>
>* **```Symbology``` - Graduated**
>* **```Column``` - DELA ROSA, BATO (PDPLBN) - PERCENTAGE**
>* **```Classes```**
>   * **0.0 - 2.5**
>       * Color: **<span style='color:#e8e8e8'>#e8e8e8</span>**
>       * Values: **0.000 - 2.5000**
>   * **2.5 - 5.0**
>       * Color: **<span style='color:#dfb0d6'>#dfb0d6</span>**
>       * Values: **2.500 - 5.000**
>   * **5.0 - 100**
>       * Color: **<span style='color:#be64ac'>#be64ac</span>**
>       * Values: **5.000 - 100.000**
>

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/styles-bato.png'></div>

The result should be:
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/styles-bato-0.png'></div>

>For Chel, we'll use the bottom-most colors of our color scheme. Our parameters will be:
>
>* **```Symbology``` - Graduated**
>* **```Column``` - DIOKNO, CHEL (LP) - PERCENTAGE**
>* **```Classes```**
>   * **0.0 - 2.5**
>       * Color: **<span style='color:#e8e8e8'>#e8e8e8</span>**
>       * Values: **0.000 - 2.5000**
>   * **2.5 - 5.0**
>       * Color: **<span style='color:#ace4e4'>#ace4e4</span>**
>       * Values: **2.500 - 5.000**
>   * **5.0 - 100**
>       * Color: **<span style='color:#5ac8c8'>#5ac8c8</span>**
>       * Values: **5.000 - 100.000**
>

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/styles-chel.png'></div>

The result should be:
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/styles-chel-0.png'></div>

### Edit the Top Layer's Blending Mode
Now here's where we let QGIS do its magic to create our bivariate choropleth map. We edit the blending mode of the top layer to **```Multiply```**. This parameter can be found in the Layer Styling Panel under Layer Rendering.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/styles-biva.png'></div>

The result would now be a bivariate choropleth map. :)

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/styles-biva-0.png'></div>

We can now use this map in our Print Layout. But what about the legend?

### The Bivariate Legend plugin
Thankfully, QGIS has a plugin for creating bivariate legends (**_YAY PLUGINS!!!_**). The Bivariate Legend plugin can be installed via the Manage and Install Plugins Dialog.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/bl-manage-install.png'></div>

This plugin generates a bivariate legend using two layers. The generated legend can then be exported to an image that can be added to the Print Layout.

>Using the Bivariate Legend plugin, our parameters will be:
>
>* **```Top layer``` - Election Returns - BATO**
>   * **```Check``` Reverse Colors**
>* **```Bottom layer``` - Election Returns - CHEL**
>* **```Square width``` -  48**
>* **```Multiply```**
>* **```Click``` Generate legend**
>* **```Click``` Export legend to image**
>
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/styles-legend.png'></div>

The bivariate choropleth map and the generated bivariate legend can now be used to create a map in the Print Layout like the one below. Good luck!

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-09-15-bivariate-choropleth-in-qgis/bivariate-choropleth-banner.png'></div>
