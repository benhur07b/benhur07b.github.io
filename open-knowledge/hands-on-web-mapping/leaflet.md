---
layout: open-knowledge
title: "Hands-on: Web Mapping with Leaflet"
---

# About this hands-on tutorial
This is a self-paced hands-on tutorial that will walk you through creating your first web map using [Leaflet](https://leafletjs.com).

You need basic knowledge of HTML, CSS, and JS.

You can use online code editors like [JSFiddle](https://jsfiddle.net/) or [Codepen](https://codepen.io) to run the code **OR** run the files locally or via a local HTTP server (e.g. via Python's http.server module).

# Directory Structure
Create the following directories and files on your computer.

```ruby
hands-on-web-mapping/
├── data
├── index.html
└── static
    ├── css
    │   └── main.css
    └── js
        └── main.js

4 directories, 3 files
```

* **data** - directory to hold the GeoJSON datasets for your web map
* **index.html** - main HTML file for your web map
* **static** - directory to hold CSS and JS files
* **css** - directory to hold CSS files of your web map
* **main.css** - the main CSS file for your web map
* **js** - directory to hold JS files of your web map
* **main.js** - the main JS file for your web map

# Create a basic web map
## index.html
Copy the code below to create the structure of your **index.html** file.

```html
<html>
<head>
<!-- Links to CSS and JS will go here -->
</head>

<body>
<!-- HTML code for our web map will go here -->
</body>
</html>
```

## Add the CSS and JS files inside <head></head>
### Leaflet CSS
```html
<link rel='stylesheet' href='https://unpkg.com/leaflet@1.5.1/dist/leaflet.css'
integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
crossorigin=''/>
```

### Leaflet JS
```html
<script src='https://unpkg.com/leaflet@1.5.1/dist/leaflet.js'
integrity='sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=='
crossorigin=''></script>
```
**MAKE SURE THAT THE CSS FILE COMES BEFORE THE JS FILE**

### main.css
```html
<link rel='stylesheet' href='static/css/main.css'>
```

### JQuery JS
Add the link to JQuery JS file also inside <head></head>
```html
<script src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
crossorigin='anonymous'></script>
```

## Add the div for the map inside <body></body>
The map will be contained in a div element. We define this div element with a unique id (commonly 'map').

Copy the following lines inside <body> </body>.
```html
<div id='map'></div>
```

## Add the link to the main JS file inside <body></body>
You should also add the link the the main JS file right before the </body> tag.
```html
<script src='static/js/main.js'></script>
```

Your updated **index.html** should look like this.
```html
<html>
<head>
    <link rel='stylesheet' href='https://unpkg.com/leaflet@1.5.1/dist/leaflet.css'
    integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
    crossorigin=''/>

    <script src='https://unpkg.com/leaflet@1.5.1/dist/leaflet.js'
    integrity='sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=='
    crossorigin=''></script>

    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
    integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
    crossorigin='anonymous'></script>

    <link rel='stylesheet' href='static/css/main.css'>
</head>

<body>
    <div id='map'></div>
    <script src='static/js/main.js'></script>
</body>
</html>
```

Next, you should add a default height to your map. We can do this by defining the style of our div in our CSS file.

## main.css
Add a height parameter to the div with id='map' by copying the following lines in your **main.css** file.

```css
#map {
    height: 600px; /* set the height of the div (map) to 600px */
}
```

Now you've defined the structure and style of our page elements but how do you add an actual map to your web page? This is where **JavaScript** comes in. Leaflet is a JavaScript library so we use JavaScript to tell our browser what to do with our maps.

## main.js
Insert all JS code in main.js inside the the following:
```js
$(document).ready(function() {
/* ALL JS CODE WILL GO HERE */
})
```

Let's add a map to our web page. Copy the following lines into your **main.js** file.
```js
var map = L.map('map', {
    center: [12.8797, 121.7740],
    zoom: 6,
});
```

What you did was define a map inside the div with id='map' whose center is at 12.8797 lat, 121.7740 lon and at zoom level 6.

However, if you try to load the page right now, you won't see a map. The reason is because even though you've defined a map, you have yet to add any data that will be shown on the map.

*So let's do that.* *Let's add a basemap to our web map.*

Copy the following lines into **main.js**.
```js
var osm_mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {2AQVltc
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
```

What you're doing here is defining a variable (osm_mapnik) that points to a tile layer variable. Other free basemaps or layers for Leaflet can be found at [Leaflet Providers](https://leaflet-extras.github.io/leaflet-providers/preview/).

Your main.js file should now look like this:
```js
$(document).ready(function() {

var map = L.map('map', {
    center: [12.8797, 121.7740],
    zoom: 5,
});

var osm_mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

})
```

*You should now be able to see a map like the one below:*
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/leaflet-01.png'></div>

If you're having problems with incorrect map sizes, try adding the following line to your **main.js** file after defining your map.

```js
map.invalidateSize();
```

> **```CHALLENGE:```**
>* **Try to make the map cover the entire height of the browser**
>* **Try to limit the boundaries of your web map so that you can't swipe beyond the Philippines**
>* **Try to change the basemap being used**
>* **Try to change zoom in to your province/region**


*You can always check out the [Leaflet documentation & API reference](https://leafletjs.com/reference-1.5.0.html) for more information.*

# Adding feature data from GeoJSON files to your map
Download this [flood hazard GeoJSON for Puerto Princesa Palawan](https://raw.githubusercontent.com/benhur07b/puerto-princesa-hazards/master/data/flood.geojson) inside the **data** directory.

We'll add this data to the map by using the [Leaflet Ajax](https://github.com/calvinmetcalf/leaflet-ajax) plugin. [Leaflet plugins](https://leafletjs.com/plugins.html) are created by the community and extend the functionality of Leaflet.

The Leaflet Ajax plugin allows us to easily add GeoJSON data to our map via ajax or jsonp. Download [**leaflet.ajax.min.js**](https://raw.githubusercontent.com/calvinmetcalf/leaflet-ajax/gh-pages/dist/leaflet.ajax.min.js) and save it under the **static/js folder**.

Now, add the link to **leaflet.ajax.min.js** under <head></head>.
```html
<script src="static/js/leaflet.ajax.min.js"></script>
```

Your new **directory structure** should look like this:
```ruby
hands-on-web-mapping/
├── data
│   └── flood.geojson
├── index.html
└── static
    ├── css
    │   └── main.css
    └── js
        ├── leaflet.ajax.min.js
        └── main.js

4 directories, 5 files
```

While your **index.html** should look like this:
```html
<html>
<head>
    <link rel='stylesheet' href='https://unpkg.com/leaflet@1.5.1/dist/leaflet.css'
    integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
    crossorigin=''/>

    <script src='https://unpkg.com/leaflet@1.5.1/dist/leaflet.js'
    integrity='sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=='
    crossorigin=''></script>

    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
    integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
    crossorigin='anonymous'></script>

    <script src="static/js/leaflet.ajax.min.js"></script>

    <link rel='stylesheet' href='static/css/main.css'>
</head>

<body>
    <div id='map'></div>
    <script src='static/js/main.js'></script>
</body>
</html>
```

*Let's add our flood GeoJSON data to the map.*

Copy the following lines to **main.js**.
```js
var flood = new L.GeoJSON.AJAX("data/flood.geojson", {
});
```

Update your **main.js**.
```js
$(document).ready(function() {

var osm_mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var flood = new L.GeoJSON.AJAX("data/flood.geojson", {
});

var map = L.map('map', {
    center: [9.830, 118.745],
    zoom: 10,
    layers: [osm_mapnik, flood]
});

map.invalidateSize();
})
```

Notice that we put the removed **addTo(map)** from osm_mapnik but added a new option (**layers**) to our map variable. The **layers** option accepts an array of layers that will be added to the map initially. In this case we added osm_mapnik and flood. We also changed the **center** and **zoom** so that the map focuses on Puerto Princesa intially.

Load the map. *It should look like this:*
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/leaflet-02.png'></div>

Congratulations! You've just added data to your map from a GeoJSON file. *How about we add some more?*

Download this [Stormsurge GeoJSON](https://raw.githubusercontent.com/benhur07b/puerto-princesa-hazards/master/data/storm-surge.geojson) to your **data** folder.

> **```CHALLENGE:```**
>* **Add the Storm-surge data to your map**
>* **Add a second basemap to your map**

**Great!** You should now have 2 basemaps and 2 feature data loaded on our map *but how can we choose which of them to view?*

# Adding Layers Control
This is where Leaflet's layers control comes in. The layers control gives users the ability to switch between different base layers and switch overlays on/off.

In your case, you can define your layer groups as follows in **main.js**
```js
var basemaps = {
    "OSM Mapnik": osm_mapnik,
    "OpenTopoMap": open_topo,
}

var overlays = {
    "Flood": flood,
    "Storm Surge": storm_surge,
}
```
*You may replace OpenTopoMap with any other basemap that you've chosen to add.*

After defining your layer groups, you add your layers control to the map by adding the following code:
```js
L.control.layers(basemaps, overlays).addTo(map);
```

Your **main.js** should now *look like this:*
```js
$(document).ready(function() {

var osm_mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var open_topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var flood = new L.GeoJSON.AJAX("data/flood.geojson", {
});

var storm_surge = new L.GeoJSON.AJAX("data/storm-surge.geojson", {
});

var basemaps = {
    "OSM Mapnik": osm_mapnik,
    "OpenTopoMap": open_topo,
}

var overlays = {
    "Flood": flood,
    "Storm Surge": storm_surge,
}

var map = L.map('map', {
    center: [9.830, 118.745],
    zoom: 10,
    layers: [osm_mapnik, flood]
});

L.control.layers(basemaps, overlays).addTo(map);

map.invalidateSize();
})
```

*Your map should look like this:*
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/leaflet-03.gif'></div>

> **```CHALLENGE:```**
>* **Try to use other Layers Control from the Plugins**

**Awesome!** You've now added a way to control which layers to view/select on your map. *What's next?*

Well, your feature data (flood and storm-surge) looks boring and useless. They don't necessarily relay information to the user since they are the same color so how about you style them?

# Styling layers on Leaflet
You can define the style of our GeoJSON data by setting a **style** option. Update the following lines in **main.js**.

```js
var flood = new L.GeoJSON.AJAX("data/flood.geojson", {
    style: function(feature) {
        switch (feature.properties.FloodSusc) {
            case 'HF':   return {color: "#0000fe", fillOpacity: 0.7, weight: 1};
            case 'LF':   return {color: "#75cff0", fillOpacity: 0.7, weight: 1};
            case 'MF':   return {color: "#c896ff", fillOpacity: 0.7, weight: 1};
            case 'VHF':  return {color: "#00064d", fillOpacity: 0.7, weight: 1};
        }
    }
});

var storm_surge = new L.GeoJSON.AJAX("data/storm-surge.geojson", {
    style: function(feature) {
       switch (feature.properties.HAZ) {
           case 3:   return {color: "#e31a1c", fillOpacity: 0.7, weight: 1};
           case 2:   return {color: "#ff7f00", fillOpacity: 0.7, weight: 1};
           case 1:   return {color: "#effb08", fillOpacity: 0.7, weight: 1};
           default:  return {color: "#cf4320", fillOpacity: 0.7, weight: 1};
       }
   }
});
```
Basically, what you're doing is adding categorized symbology to the layers wherein the feature's style or symbology is based on its discrete value.

In the case of the **flood** data, you pass each **feature** of the GeoJSON through a function that returns style values (**color**, **fillOpacity**, **weight**) based on the feature's **FloodSusc** property/field. *For example*, if the **FloodSusc** of the feature is 'HF', the style of the feature will be {color: "#0000fe", fillOpacity: 0.7, weight: 1}.

For the **storm-surge** data, instead of the FloodSusc field, you look at the value of the feature's **HAZ** property to determine its style.

The updated **main.js** should now *look like this:*
```js
$(document).ready(function() {

var osm_mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var open_topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var flood = new L.GeoJSON.AJAX("data/flood.geojson", {
    style: function(feature) {
        switch (feature.properties.FloodSusc) {
            case 'HF':   return {color: "#0000fe", fillOpacity: 0.7, weight: 1};
            case 'LF':   return {color: "#75cff0", fillOpacity: 0.7, weight: 1};
            case 'MF':   return {color: "#c896ff", fillOpacity: 0.7, weight: 1};
            case 'VHF':  return {color: "#00064d", fillOpacity: 0.7, weight: 1};
        }
    }
});

var storm_surge = new L.GeoJSON.AJAX("data/storm-surge.geojson", {
    style: function(feature) {
       switch (feature.properties.HAZ) {
           case 3:   return {color: "#e31a1c", fillOpacity: 0.7, weight: 1};
           case 2:   return {color: "#ff7f00", fillOpacity: 0.7, weight: 1};
           case 1:   return {color: "#effb08", fillOpacity: 0.7, weight: 1};
           default:  return {color: "#cf4320", fillOpacity: 0.7, weight: 1};
       }
   }
});

var basemaps = {
    "OSM Mapnik": osm_mapnik,
    "OpenTopoMap": open_topo,

}

var overlays = {
    "Flood": flood,
    "Storm Surge": storm_surge,
}

var map = L.map('map', {
    center: [9.830, 118.745],
    zoom: 10,
    layers: [osm_mapnik, flood]
});

L.control.layers(basemaps, overlays).addTo(map);

map.invalidateSize();
})
```

*Your map should look like this:*
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/leaflet-04.gif'></div>

*So what more can you do?*

How about adding a pop-up that shows information about a feature when it is clicked?

# Popups in Leaflet
Adding popups on GeoJSON is done by defining an **onEachFeature** option when calling your GeoJSON data. The onEachFeature option gets called on each feature before adding it to a GeoJSON layer. A common reason to use this option is to attach a popup to features when they are clicked.

For your purpose, you can update the **main.js** and add **onEachFeature** options for the flood and storm-surge layers.

```js
var flood = new L.GeoJSON.AJAX("data/flood.geojson", {
    style: function(feature) {
        switch (feature.properties.FloodSusc) {
            case 'HF':   return {color: "#0000fe", fillOpacity: 0.7, weight: 1};
            case 'LF':   return {color: "#75cff0", fillOpacity: 0.7, weight: 1};
            case 'MF':   return {color: "#c896ff", fillOpacity: 0.7, weight: 1};
            case 'VHF':  return {color: "#00064d", fillOpacity: 0.7, weight: 1};
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b>Flood Susceptibility:</b> ' +feature.properties.FloodSusc);
    }
});

var storm_surge = new L.GeoJSON.AJAX("data/storm-surge.geojson", {
    style: function(feature) {
       switch (feature.properties.HAZ) {
           case 3:   return {color: "#e31a1c", fillOpacity: 0.7, weight: 1};
           case 2:   return {color: "#ff7f00", fillOpacity: 0.7, weight: 1};
           case 1:   return {color: "#effb08", fillOpacity: 0.7, weight: 1};
           default:  return {color: "#cf4320", fillOpacity: 0.7, weight: 1};
       }
   },
   onEachFeature: function (feature, layer) {
       layer.bindPopup('<b>Storm-Surge Susceptibility:</b> ' +feature.properties.HAZ);
   }
});
```

The updated **main.js** *is now:*
```js
$(document).ready(function() {

var osm_mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var open_topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var flood = new L.GeoJSON.AJAX("data/flood.geojson", {
    style: function(feature) {
        switch (feature.properties.FloodSusc) {
            case 'HF':   return {color: "#0000fe", fillOpacity: 0.7, weight: 1};
            case 'LF':   return {color: "#75cff0", fillOpacity: 0.7, weight: 1};
            case 'MF':   return {color: "#c896ff", fillOpacity: 0.7, weight: 1};
            case 'VHF':  return {color: "#00064d", fillOpacity: 0.7, weight: 1};
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup('<b>Flood Susceptibility:</b> ' +feature.properties.FloodSusc);
    }
});

var storm_surge = new L.GeoJSON.AJAX("data/storm-surge.geojson", {
    style: function(feature) {
       switch (feature.properties.HAZ) {
           case 3:   return {color: "#e31a1c", fillOpacity: 0.7, weight: 1};
           case 2:   return {color: "#ff7f00", fillOpacity: 0.7, weight: 1};
           case 1:   return {color: "#effb08", fillOpacity: 0.7, weight: 1};
           default:  return {color: "#cf4320", fillOpacity: 0.7, weight: 1};
       }
   },
   onEachFeature: function (feature, layer) {
       layer.bindPopup('<b>Storm-Surge Susceptibility:</b> ' +feature.properties.HAZ);
   }
});

var basemaps = {
    "OSM Mapnik": osm_mapnik,
    "OpenTopoMap": open_topo,

}

var overlays = {
    "Flood": flood,
    "Storm Surge": storm_surge,
}

var map = L.map('map', {
    center: [9.830, 118.745],
    zoom: 10,
    layers: [osm_mapnik, flood]
});

L.control.layers(basemaps, overlays).addTo(map);



map.invalidateSize();
})
```

Your map would then function like below:
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/leaflet-05.gif'></div>
