---
layout: post
title: "Basemaps! in QGIS"
description:
tags: [foss4g, qgis, qgis3, gis, basemaps]
pinned: false
comments: true
og_type: article
image:
    facebook:  /media/posts/2018-10-07-basemaps-in-qgis/basemaps.png
    twitter: /media/posts/2018-10-07-basemaps-in-qgis/basemaps.png
---

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-07-basemaps-in-qgis/basemaps.png"></div>
<span class="small">*The header image is edited*</span>

## Basemaps! Basemaps! Basemaps!
A good basemap can make or break the maps you create. Basemaps provide context. They provide character and personality. They also allow you to minimize or highlight certain aspects of your map. Thankfully, there are a lot of free basemap providers out there and it's now very easy to incorporate them in QGIS.

Personally, I use 2 main methods to add basemaps in QGIS:
1. Adding the basemaps as XYZ Tiles in my Browser panel using [qgis_basemaps.py](https://github.com/klakar/QGIS_resources/blob/master/collections/Geosupportsystem/python/qgis_basemaps.py) by [Klas Karlsson](https://github.com/klakar/)
2. Using the [QuickMapServices](https://plugins.qgis.org/plugins/quick_map_services/) plugin by [NextGIS](nextgis.com)

## qgis_basemaps.py
[qgis_basemaps.py](https://github.com/klakar/QGIS_resources/blob/master/collections/Geosupportsystem/python/qgis_basemaps.py) is a Python script created by [Klas Karlsson](https://github.com/klakar/) that you can run in QGIS to add basemaps in your Browser Panel under an XYZ Tiles heading. You only need to run it once.

You can get the code [here](https://github.com/klakar/QGIS_resources/blob/master/collections/Geosupportsystem/python/qgis_basemaps.py) or see below:

```python
"""
This script should be run from the Python consol inside QGIS.
It adds online sources to the QGIS Browser.
Each source should contain a list with the folowing items (string type):
[sourcetype, title, authconfig, password, referer, url, username, zmax, zmin]
You can add or remove sources from the sources section of the code.
Script by Klas Karlsson
Sources from https://qms.nextgis.com/
Licence GPL-3
"""


# Sources
sources = []
sources.append(["connections-xyz","Google Maps","","","","https://mt1.google.com/vt/lyrs=m&x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D","","19","0"])
sources.append(["connections-xyz","Google Satellite", "", "", "", "https://mt1.google.com/vt/lyrs=s&x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D", "", "19", "0"])
sources.append(["connections-xyz","Google Terrain", "", "", "", "https://mt1.google.com/vt/lyrs=t&x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D", "", "19", "0"])
sources.append(["connections-xyz","Google Terrain Hybrid", "", "", "", "https://mt1.google.com/vt/lyrs=p&x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D", "", "19", "0"])
sources.append(["connections-xyz","Google Satellite Hybrid", "", "", "", "https://mt1.google.com/vt/lyrs=y&x=%7Bx%7D&y=%7By%7D&z=%7Bz%7D", "", "19", "0"])
sources.append(["connections-xyz","Stamen Terrain", "", "", "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL", "http://tile.stamen.com/terrain/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "20", "0"])
sources.append(["connections-xyz","Stamen Toner", "", "", "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL", "http://tile.stamen.com/toner/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "20", "0"])
sources.append(["connections-xyz","Stamen Toner Light", "", "", "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL", "http://tile.stamen.com/toner-lite/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "20", "0"])
sources.append(["connections-xyz","Stamen Watercolor", "", "", "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL", "http://tile.stamen.com/watercolor/%7Bz%7D/%7Bx%7D/%7By%7D.jpg", "", "18", "0"])
sources.append(["connections-xyz","Wikimedia Map", "", "", "OpenStreetMap contributors, under ODbL", "https://maps.wikimedia.org/osm-intl/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "20", "1"])
sources.append(["connections-xyz","Wikimedia Hike Bike Map", "", "", "OpenStreetMap contributors, under ODbL", "http://tiles.wmflabs.org/hikebike/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "17", "1"])
sources.append(["connections-xyz","Esri Boundaries Places", "", "", "", "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "20", "0"])
sources.append(["connections-xyz","Esri Gray (dark)", "", "", "", "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "16", "0"])
sources.append(["connections-xyz","Esri Gray (light)", "", "", "", "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "16", "0"])
sources.append(["connections-xyz","Esri National Geographic", "", "", "", "http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "12", "0"])
sources.append(["connections-xyz","Esri Ocean", "", "", "", "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "10", "0"])
sources.append(["connections-xyz","Esri Satellite", "", "", "", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "17", "0"])
sources.append(["connections-xyz","Esri Standard", "", "", "", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "17", "0"])
sources.append(["connections-xyz","Esri Terrain", "", "", "", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "13", "0"])
sources.append(["connections-xyz","Esri Transportation", "", "", "", "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "20", "0"])
sources.append(["connections-xyz","Esri Topo World", "", "", "", "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/%7Bz%7D/%7By%7D/%7Bx%7D", "", "20", "0"])
sources.append(["connections-xyz","OpenStreetMap Standard", "", "", "OpenStreetMap contributors, CC-BY-SA", "http://tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "19", "0"])
sources.append(["connections-xyz","OpenStreetMap H.O.T.", "", "", "OpenStreetMap contributors, CC-BY-SA", "http://tile.openstreetmap.fr/hot/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "19", "0"])
sources.append(["connections-xyz","OpenStreetMap Monochrome", "", "", "OpenStreetMap contributors, CC-BY-SA", "http://tiles.wmflabs.org/bw-mapnik/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "19", "0"])
sources.append(["connections-xyz","Strava All", "", "", "OpenStreetMap contributors, CC-BY-SA", "https://heatmap-external-b.strava.com/tiles/all/bluered/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "15", "0"])
sources.append(["connections-xyz","Strava Run", "", "", "OpenStreetMap contributors, CC-BY-SA", "https://heatmap-external-b.strava.com/tiles/run/bluered/%7Bz%7D/%7Bx%7D/%7By%7D.png?v=19", "", "15", "0"])
sources.append(["connections-xyz","Open Weather Map Temperature", "", "", "Map tiles by OpenWeatherMap, under CC BY-SA 4.0", "http://tile.openweathermap.org/map/temp_new/%7Bz%7D/%7Bx%7D/%7By%7D.png?APPID=1c3e4ef8e25596946ee1f3846b53218a", "", "19", "0"])
sources.append(["connections-xyz","Open Weather Map Clouds", "", "", "Map tiles by OpenWeatherMap, under CC BY-SA 4.0", "http://tile.openweathermap.org/map/clouds_new/%7Bz%7D/%7Bx%7D/%7By%7D.png?APPID=ef3c5137f6c31db50c4c6f1ce4e7e9dd", "", "19", "0"])
sources.append(["connections-xyz","Open Weather Map Wind Speed", "", "", "Map tiles by OpenWeatherMap, under CC BY-SA 4.0", "http://tile.openweathermap.org/map/wind_new/%7Bz%7D/%7Bx%7D/%7By%7D.png?APPID=f9d0069aa69438d52276ae25c1ee9893", "", "19", "0"])
sources.append(["connections-xyz","CartoDb Dark Matter", "", "", "Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.", "http://basemaps.cartocdn.com/dark_all/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "20", "0"])
sources.append(["connections-xyz","CartoDb Positron", "", "", "Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.", "http://basemaps.cartocdn.com/light_all/%7Bz%7D/%7Bx%7D/%7By%7D.png", "", "20", "0"])
sources.append(["connections-xyz","Bing VirtualEarth", "", "", "", "http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1", "", "19", "1"])


# Add sources to browser
for source in sources:
   connectionType = source[0]
   connectionName = source[1]
   QSettings().setValue("qgis/%s/%s/authcfg" % (connectionType, connectionName), source[2])
   QSettings().setValue("qgis/%s/%s/password" % (connectionType, connectionName), source[3])
   QSettings().setValue("qgis/%s/%s/referer" % (connectionType, connectionName), source[4])
   QSettings().setValue("qgis/%s/%s/url" % (connectionType, connectionName), source[5])
   QSettings().setValue("qgis/%s/%s/username" % (connectionType, connectionName), source[6])
   QSettings().setValue("qgis/%s/%s/zmax" % (connectionType, connectionName), source[7])
   QSettings().setValue("qgis/%s/%s/zmin" % (connectionType, connectionName), source[8])

# Update GUI
iface.reloadConnections()
```

To run the code, open the **```Python console```** in QGIS and click **```Show Editor```**.
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-07-basemaps-in-qgis/python-show-editor.png"></div>

Copy the qgis_basemaps.py code, paste it in the Editor, and **```Run Script```**.
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-07-basemaps-in-qgis/python-add-script.png"></div>

After the script is finished running, you should now see the available basemaps under the **```XYZ Tiles```** header in the **```Browser Panel```**.
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-07-basemaps-in-qgis/browser-xyz.png"></div>

You can now choose from the basemaps and add them to your map.

Aside from the usual satellite imagery (Esri Satellite, Bing VirtualEarth, Google Satellite) and street/maps (Open Street Map, Google Maps), I enjoy using CartoDb Dark Matter and CartoDb Positron.
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-07-basemaps-in-qgis/sample-routes.png"></div>

The muted colors (black and off-white) of these basemaps make them especially suitable for visualization purposes like the one above.

## QuickMapServices Plugin
Another way to easily add basemaps in QGIS is by using the QuickMapServices Plugin by [NextGIS](nextgis.com). As with

After installing the plugin, you can access it via **```Web -> QuickMapServices```** or in the **```Plugins Toolbar```**. Initially, the plugin comes with just a few basemaps validated by the authors. However, you can easily add basemaps that were contributed by users by going to **```Web -> QuickMapServices -> Settings```** then going to the **```More services```** tab and clicking **```Get contributed pack```**.
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-07-basemaps-in-qgis/qms-contrib.png"></div>

In fact, you can also add your own services to the plugin so that others can use it by going to https://github.com/nextgis/quickmapservices_contrib.

Currently, you can select from over a hundred basemaps from the QuickMapServices plugin.
<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-10-07-basemaps-in-qgis/qms-basemaps.png"></div>

That's how you add basemaps in QGIS so the next time you feel like your map is looking dull or that it needs something extra, why not try using a new basemap.

I hope this post helped you learn something new and improve your #QGIS skills. Remember to keep honing your skills and #MakeBetterMaps. :)
