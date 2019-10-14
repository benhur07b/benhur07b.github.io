---
layout: open-knowledge
title: "QGIS Training: Beginner - Module 1.1"
description: GOAL: To familiarize yourself with the QGIS Interface
og_type: article
image:
---

# Module 1.1 - The QGIS Interface
Any modern window-based applications contains standard components such as menus, toolbars, etc. In this exercise you'll take a tour and learn about the different parts of the QGIS interface.

## GOAL
To familiarize yourself with the QGIS Interface.

## Start QGIS
Run QGIS

## Parts of the QGIS Interface
The parts of the QGIS Interface are:
1. Menu bar
2. Toolbars
3. Panels
4. Map View/Map Canvas
5. Status bar
6. Locator

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/qgis-int.png'>
<p class='figure-caption my-2'>The QGIS Interface</p>
</figure>

Let's go over each one.

## Menu bar
* Provides access to commands and functions via a standard hierarchical menu.

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/menu-bar.png'>
<p class='figure-caption my-2'>The QGIS Menu bar</p>
</figure>

### Try:
* *Open each menu and read each option you see listed in the menus*

## Toolbars
* Provides quick access to QGIS functions and commands (click-and-run)
* A list of toolbars can be found under **```View -> Toolbars```**
* Common toolbars include:
    * Attributes Toolbar
    * Raster Toolbar
    * Vector Toolbar
    * Plugin and Plugins Toolbar
* Toolbars can be moved and placed anywhere on the QGIS interface. They can be docked above, below, or on the sides of the Map Canvas

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/tool-bar.png'>
<p class='figure-caption my-2'>Toolbars</p>
</figure>

### Try:
* *Move your mouse slowly over the toolbars and read each tooltip.*
* *Try dragging and dropping toolbars to arrange them in a way that is comfortable for you.*

## Panels
* Widgets that are used to interact with QGIS and perform more complicated tasks
* Available panels can be found under **```View -> Panels```**
* Common panels include:
    * Layers - shows list of layers
    * Browser - navigation of filesystem and managing geodata
    * Layer Styling - easy access to styling layers
    * Statistics - shows statistics of a vector layer
* Similar to toolbars, panels can be moved and placed anywhere

<div class='row'>
<figure class='figure col-md-6 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/panels.png'>
<p class='figure-caption my-2'>Layer Panel</p>
</figure>

<figure class='figure col-md-6 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/panels2.png'>
<p class='figure-caption my-2'>Layer Styling Panel</p>
</figure>
</div>

### Try:
* *What happens when you drag one panel onto another?*

## Status Bar
* Provides general information about the map view
* Shows the current Coordinate of the mouse,
* Shows the Extent (current lower leftmost and upper rightmost points of the Map View),
* Shows the Scale of the Map View.
* It can magnify, rotate, and disable rendering of the layers in the Map View.
* Shows the EPSG code of the current Coordinate Reference System (CRS) of the Project
* Informs the user of underlying messages, logs, and processes

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/status-bar.png'>
<p class='figure-caption my-2'>Status bar</p>
</figure>

### Try:
* *Type the word 'world' into the coordinates box in the status bar at the bottom of the QGIS main window. What happened?*

## Map Canvas/Map Window
* Area where layers appear
* Can be zoomed, panned, etc.
* Automatically performs On-the-Fly Coordinate Reference System Transformation (OTF) so layers covering the same extent will appear to be so even if they are not in the same coordinate reference system

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/map-canvas.png'>
<p class='figure-caption my-2'>Map Canvas</p>
</figure>

### Try:
* *Zoom, pan, and rotate the world map in the map canvas.*

## Locator
* One of the most powerful parts of QGIS
* Can be used to locate actions, layers, and processing algorithms available to the user in QGIS
* Can be accessed via **```CTRL + K```**


<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='{{ site.baseurl }}/media/open-knowledge/qgis/module1.1/locator.png'>
<p class='figure-caption my-2'>Locator</p>
</figure>

### Try:
* *Use the locator to search for buffer algorithms in QGIS*

## More
Nearly every graphical element in QGIS has a tooltip - get in the habit of using them! It is a good idea to customise the user interface to your particular workflows. Will you do a lot of digitising? Enable the advanced digitising toolbar and consider hiding other toolbars you do not need.

You should spend some time in the **```View -> Panels```** and **```View -> Toolbars```** menus and hide and show things as needed. Once you make these changes, QGIS will remember them for subsequent sessions.

You will also find options in **```Settings -> Options -> General```** that determine things like font sizes, icon sizes and so on. QGIS' look and feel can be edited in here.

### Try:
* *Change the look and feel of QGIS to what you're comfortable with.*

Note that depending on your operating system, the appearance of QGIS may differ slightly - the user interface adapts to the native operating system norms as much as possible.

One toolbar you should really get familiar with straight away is the Map Navigation Toolbar - it provides standard tools to pan and zoom around the map.

<figure class='figure col-lg-12 img-container'>
<img class='img-fluid img-shadow' src='https://changelog.kartoza.com/media/images/lesson/worksheet/more_about/d849c62ef63751189922bdac0b92fe0a0527178d.png'>
<p class='figure-caption my-2'>Map Navigation Toolbar</p>
</figure>

## Test Yourself
1. QGIS once installed requires access to a license server - true or false?
    <ol type="a">
    <li>true</li>
    <li>false</li>
    </ol>
2. Customizations made to the QGIS user interface will be lost when you next start QGIS?
    <ol type="a">
    <li>true</li>
    <li>false</li>
    </ol>


<div class='row'>
<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6'><a href='#'><h4 class='text-left'></h4></a></div>
<div class='col-xs-6 col-sm-6 col-md-6 col-lg-6'><a href='{{ site.baseurl }}/open-knowledge/qgis/beginner/module1.2.html'><h4 class='text-right'>Module 1.2</h4></a></div>
</div>
