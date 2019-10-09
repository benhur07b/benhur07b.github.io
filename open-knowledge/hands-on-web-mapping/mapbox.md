---
layout: open-knowledge
title: "Hands-on: Web Mapping with Mapbox"
---

# About this hands-on tutorial
This is a self-paced hands-on tutorial that will walk you through creating your first web map using [Mapbox](https://www.mapbox.com/).

You need basic knowledge of HTML, CSS, and JS. You also need to create a Mapbox account to get an API Key.

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
### Mapbox CSS
```html
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.css' rel='stylesheet' />
```

### Mapbox JS
```html
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.js'></script>
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
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.css' rel='stylesheet' />

    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.js'></script>

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

## Mapbox Access Token
Put the following lines on top of your **main.js** file.
```js
mapboxgl.accessToken = 'insert-mapbox-access-token-here'
```

The Access Token provides us access to the Mapbox API and other Mapbox features (e.g. basemaps).

## main.js
Insert all JS code in main.js inside the the following:
```js
$(document).ready(function() {
/* ALL JS CODE WILL GO HERE */
})
```

Let's add a map to our web page. Copy the following lines into your **main.js** file.
```js
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [121.7740, 12.8797],
    zoom: 5.5,
});
```

Since Mapbox is built on top of Leaflet, they share some common options like center and zoom. **Do you notice any difference between how Mapbox or Leaflet defines these options?**

*You should now be able to see a map like the one below:*
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/mapbox-01.png'></div>

If you're having problems with incorrect map sizes, try adding the following line to your **main.js** file after defining your map.

```js
map.resize();
```

Basemaps in Mapbox can be defined by the Map's **style** option. You can check out existing basemaps [here](https://www.mapbox.com/maps/) or you can create your own in [Mapbox Studio](https://studio.mapbox.com/).

Let's create our own basemap style in Mapbox Studio and use it in our map.
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/mapbox-02.png'></div>

## Add zoom controls
```js
map.addControl(new mapboxgl.NavigationControl(), 'top-left');
```

Your **main.js** should now *look like this:*
```js
mapboxgl.accessToken = 'insert-mapbox-token-here';

$(document).ready(function() {
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/counter-mapping-ph/ck0jsx3dc3rqd1cpex6hixwcy',
    center: [121.7740, 12.8797],
    zoom: 5.5,
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');
})
```

# Adding feature data from GeoJSON files to your map
Download this [flood hazard GeoJSON for Puerto Princesa Palawan](https://raw.githubusercontent.com/benhur07b/puerto-princesa-hazards/master/data/flood.geojson) inside the **data** directory. Download this Storm

Compared to Leaflet, loading GeoJSON data in Mapbox is pretty straightforward and does need a plugin.

For this we use the **map.on()** function.
```js
map.on('load', function () {
/* Put commands on what will happen when map loads here */
})
```

First, load the sources of data. This source can be a database, an API, tileserver, or a GeoJSON file. You can add the source of the flood data using the following lines.

```js
map.addSource(
   'flood', {
       type: 'geojson',
       data: 'data/flood.geojson',
});
```

Afterwards, you can load the layer from your source. In this case, your layer is the flood layer.

```js
map.addLayer({
    'id': 'flood',
    'type': 'fill',
    'source': 'flood',
    'layout': {
        'visibility': 'visible'
    },
});
```

Your updated **main.js** should *look like this:*
```js
mapboxgl.accessToken = 'insert-mapbox-token-here;

$(document).ready(function() {
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/counter-mapping-ph/ck0jsx3dc3rqd1cpex6hixwcy',
    center: [118.745, 9.830],
    zoom: 9.5,
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', function(){
    map.addSource(
       'flood', {
           type: 'geojson',
           data: 'data/flood.geojson',
    });

    map.addLayer({
      'id': 'flood',
      'type': 'fill',
      'source': 'flood',
      'layout': {
          'visibility': 'visible'
      },
  });
})
})
```

Styling a GeoJSON in Mapbox is defined by the **paint** option when adding a layer. In your case, we can define the style/symbology of our flood layer by updating our addLayer function like below:

```js
map.addLayer({
   'id': 'flood',
   'type': 'fill',
   'source': 'flood',
   'layout': {
       'visibility': 'visible'
   },
   'paint': {
       'fill-color': ['match',
                         ['get', 'FloodSusc'],
                         'HF', '#0000fe',
                         'LF', '#75cff0',
                         'MF', '#c896ff',
                         'VHF', '#00064d',
                         'rgb(171, 72, 33)'
                     ],
       'fill-outline-color': ['match',
                         ['get', 'FloodSusc'],
                         'HF', '#0000fe',
                         'LF', '#75cff0',
                         'MF', '#c896ff',
                         'VHF', '#00064d',
                         'rgb(171, 72, 33)'
                     ],
       'fill-opacity': 0.7
   }
});
```

Your updated **main.js** should look *like this:*
```js
mapboxgl.accessToken = 'insert-mapbox-token-here';

$(document).ready(function() {
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/counter-mapping-ph/ck0jsx3dc3rqd1cpex6hixwcy',
    center: [118.745, 9.830],
    zoom: 9.5,
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', function(){
    map.addSource(
       'flood', {
           type: 'geojson',
           data: 'data/flood.geojson',
    });

    map.addLayer({
       'id': 'flood',
       'type': 'fill',
       'source': 'flood',
       'layout': {
           'visibility': 'visible'
       },
       'paint': {
           'fill-color': ['match',
                             ['get', 'FloodSusc'],
                             'HF', '#0000fe',
                             'LF', '#75cff0',
                             'MF', '#c896ff',
                             'VHF', '#00064d',
                             'rgb(171, 72, 33)'
                         ],
           'fill-outline-color': ['match',
                             ['get', 'FloodSusc'],
                             'HF', '#0000fe',
                             'LF', '#75cff0',
                             'MF', '#c896ff',
                             'VHF', '#00064d',
                             'rgb(171, 72, 33)'
                         ],
           'fill-opacity': 0.7
       }
    });
})

map.resize();
})
```

Download this [Stormsurge GeoJSON](https://raw.githubusercontent.com/benhur07b/puerto-princesa-hazards/master/data/storm-surge.geojson) to your **data** folder.

> **```CHALLENGE:```**
>* **Add the Storm-surge data to your map**
>* **Style the Storm-surge data using the same style as in the Leaflet exercise**

Your map should now *look like this:*
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/mapbox-03.png'></div>

**Great!** You should now have 2 feature data loaded on our map *but how can we choose which of them to view?*

Unlike Leaflet, Mapbox doesn't have plugins for Layer Controls but you can easily create your own using JavaScript.

First, you should define the style of your layer control in **main.css**. Add the following lines to you main CSS file.
```css
#menu {
    background: #fff;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 10px;
    border-radius: 3px;
    width: 120px;
    border: 1px solid rgba(0,0,0,0.4);
    font-family: 'Open Sans', sans-serif;
}

#menu a {
    font-size: 13px;
    color: #404040;
    display: block;
    margin: 0;
    padding: 0;
    padding: 10px;
    text-decoration: none;
    border-bottom: 1px solid rgba(0,0,0,0.25);
    text-align: center;
}

#menu a:last-child {
    border: none;
}

#menu a:hover {
    background-color: #f8f8f8;
    color: #404040;
}

#menu a.active {
    background-color: #3887be;
    color: #ffffff;
}

#menu a.active:hover {
    background: #3074a4;
}
```

Now, create your JS script for the layer control. Add the following lines.
```js
var toggleableLayerIds = [ 'Flood', 'Storm Surge'];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
    // var clickedLayer = this.textContent.split(" ").join("-").toLowerCase() + '_puerto-princesa';
    var clickedLayer = this.textContent.split(" ").join("-").toLowerCase();
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    if (visibility === 'visible') {
    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
    this.className = '';
    } else {
    this.className = 'active';
    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}
```

Your **main.js** should now be:
```js
mapboxgl.accessToken = 'insert-mapbox-token-here';

$(document).ready(function() {
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/counter-mapping-ph/ck0jsx3dc3rqd1cpex6hixwcy',
    center: [118.745, 9.830],
    zoom: 9.5,
});

map.addControl(new mapboxgl.NavigationControl(), 'top-left');

map.on('load', function(){
    map.addSource(
       'flood', {
           type: 'geojson',
           data: 'data/flood.geojson',
    });

    map.addSource(
        'storm-surge', {
            type: 'geojson',
            data: 'data/storm-surge.geojson',
        }
    );

    map.addLayer({
       'id': 'flood',
       'type': 'fill',
       'source': 'flood',
       'layout': {
           'visibility': 'visible'
       },
       'paint': {
           'fill-color': ['match',
                             ['get', 'FloodSusc'],
                             'HF', '#0000fe',
                             'LF', '#75cff0',
                             'MF', '#c896ff',
                             'VHF', '#00064d',
                             'rgb(171, 72, 33)'
                         ],
           'fill-outline-color': ['match',
                             ['get', 'FloodSusc'],
                             'HF', '#0000fe',
                             'LF', '#75cff0',
                             'MF', '#c896ff',
                             'VHF', '#00064d',
                             'rgb(171, 72, 33)'
                         ],
           'fill-opacity': 0.7
       }
    });

    map.addLayer({
        'id': 'storm-surge',
        'type': 'fill',
        'source': 'storm-surge',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
            'fill-color': ['match',
                              ['get', 'HAZ'],
                              1.0, '#effb08',
                              2.0, '#ff7f00',
                              3.0, '#e31a1c',
                              '#cf4320'
                          ],
            'fill-outline-color': ['match',
                              ['get', 'HAZ'],
                              1.0, '#effb08',
                              2.0, '#ff7f00',
                              3.0, '#e31a1c',
                              '#cf4320'
                          ],
            'fill-opacity': 0.7
        }
    });
})

map.resize();

var toggleableLayerIds = [ 'Flood', 'Storm Surge'];

    for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i];

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = id;

        link.onclick = function (e) {
        // var clickedLayer = this.textContent.split(" ").join("-").toLowerCase() + '_puerto-princesa';
        var clickedLayer = this.textContent.split(" ").join("-").toLowerCase();
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
        } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
        };

        var layers = document.getElementById('menu');
        layers.appendChild(link);
    }
})
```

Now add a <nav> to hold the layer toggel in **index.html**.
```html
<nav id='menu'></nav>
```

Your **index.html** should *now be:*
```html
<html>
<head>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.css' rel='stylesheet' />

    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.js'></script>

    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
    integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
    crossorigin='anonymous'></script>

    <link rel='stylesheet' href='static/css/main.css'>
</head>

<body>
    <nav id='menu'></nav>
    <div id='map'></div>
    <script src='static/js/main.js'></script>
</body>
</html>
```

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/open-knowledge/mapbox-03.gif'></div>
