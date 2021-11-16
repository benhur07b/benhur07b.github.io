---
layout: post-no-pagination
title: "Pista ng Mapa 2021 QGIS Workshop"
description: ""
tags: [qgis, qgis3, pistangmapa, basketball, foss, foss4g, opensource, freeasinfreedom, freesoftware]
pinned: true
comments: true
og_type: article
---
## Setting of expectations
- Time vs Objectives
  - **Really short-term (< 1 day)** events are best for **awareness-raising and community building**.
  - **Short-term (<1 week)** events can provide **some skill-building opportunities**.
  - **Medium-term (2-12 weeks)** events are good for **building and applying skills**.
  - **Long-term (> 3 months)** events can create **direct-impact projects**.
- This isn't a basic QGIS training (you can visit my [website](https://bnhr.xyz/services/training/spatial) for that).
- This isn't a comprehensive list of QGIS features but you can find a lot of stuff about QGIS, FOSS4G, and open geospatial on my [website](https://bnhr.xyz), [YouTube](https://youtube.com/c/bnhrdotxyz), [Facebook](https://facebook.com/bnhr.xyz), and [Twitter](https://twitter.com/bnhrdotxyz).
- Some of the exercises shown will be about the application of QGIS features and functionalities to **basketball analysis**.

## Data
You can find the data for the workshop here: 

---
### QGIS Processing Framework
The QGIS Processing Framework includes:
- native QGIS algorithms
- algorithms from processing providers (GDAL, GRASS, SAGA)
- algorithms from processing plugins and processing scripts
- QGIS models
- Python scripts

Algorithms that are part of the Processing Framework can:
- be batch processed
- be used in the Graphical Modeler
- be used in Python (via PyQGIS processing), R, and the command line

How do I know if the plugin I'm using is part of the Processing Framework:
- Can you see it in the Processing Toolbox?
  - If yes, then it's part of the framework
  - If not, then it is not

**LEARN MORE**:
- [QGIS Open Day presentation: Intro to processing provider plugins](https://www.youtube.com/watch?v=9fWQZqPjPVk)
- [FOSS4G2 2019 Presentation: QGIS: No more plugins only processing](https://www.youtube.com/watch?v=pdO49ysuqVY)
- [QGIS Processing Framework, QGIS Desktop User Guide/Manual](https://docs.qgis.org/latest/en/docs/user_manual/processing/index.html)

*NOTE: Make sure you have downloaded all the data for the workshop before proceeding*

---
### The graphical modeler

*NOTE: Add spatial indices to your vector data for faster processing. Use the Create spatial index processing algorithm.*

1. Open the Graphical Modeler I QGIS project file (Graphical Modeler I.qgz)
2. If QGIS encounters "Handle Unavailable Layers" issue, try to use **Auto-Find** to resolve the issue or you can just manually add the correct link to the following layers inside **pnm21-qgis-workshop-data.gpkg** in the data folder:
   - highway_all
   - amenity_school
   - PHL_provinces
3. Let's build two models that look for suitable sites for schools using just 2 parameters:
   - distance from existing schools
   - distance from roads

#### Model 1 - Suitable areas are those near existing schools and roads that meet the following criteria:
1. Within X meters from an existing school
2. Within X meters from a road

#### Model 2 - Suitable areas are those that are isolated and meet the following criteria:
1. Not within X meters from an existing school
2. Not within X meters from a road

**BONUS:** You can open the ***suitable-school-sites.model3*** and ***suitable-school-sites-isolated.model3*** files inside models/school-suitability to see how the final models look like (or reverse engineer them).

**LEARN MORE**:
- [The graphical modeler, QGIS Desktop User Guide/Manual](https://docs.qgis.org/latest/en/docs/user_manual/processing/modeler.html)

---
### Expressions are your best friend

*NOTE: Add spatial indices to your vector data for faster processing. Use the Create spatial index processing algorithm.*

Whenever you see this icon ![](https://docs.qgis.org/3.22/en/_images/mIconExpression.png), that means that you can use an Expression in that part of QGIS.

1. Open the Expressions I QGIS project file (Expressions I.qgz).
2. Our task is to summarize field goals per grid (e.g. count the number of attempts, count the number of points scored, count the points per attempt)

**BONUS:** You can open the ***summarize-fg.model3*** file inside models/courtvisionph to see how the final models look like (or reverse engineer them).

**CHALLENGE:** If I want to add fields that count the number of missed and made attempts per grid, what should I do?

**LEARN MORE**:
- [Level up with Expressions, QGIS Desktop User Guide/Manual](https://docs.qgis.org/latest/en/docs/user_manual/expressions/index.html)
- [List of functions/expressions](https://docs.qgis.org/latest/en/docs/user_manual/expressions/functions_list.html)


---
### Layering your symbols and geometry generators

Utilize symbol layers and geometry generators to create custom and complex styles.

1. Open the Symbol layers and geometry generators I QGIS project file (Symbol layers and geometry generators I.qgz).

---
### The data-defined Assistant

Whenever you see this icon ![](https://docs.qgis.org/3.22/en/_images/mIconDataDefine.png), that means you can use a data-defined override for that parameter.

The Data-defined assistant is an option under the Data-defined override. The Assistant makes it easier to define how the data is applied to the parameter for each feature.

**LEARN MORE**:
- [Data defined override setup, QGIS Desktop User Guide/Manual](https://docs.qgis.org/3.22/en/docs/user_manual/introduction/general_tools.html#data-defined-override-setup)
- [Using the data-defined assistant interface, QGIS Desktop User Guide/Manual](https://docs.qgis.org/latest/en/docs/user_manual/introduction/general_tools.html#data-defined-assistant)

---
### QGIS Atlas tricks

1. Open the QGIS Atlas tricks I QGIS project file (QGIS Atlas tricks I.qgz).
1. Open the QGIS Atlas tricks II QGIS project file (QGIS Atlas tricks II.qgz).
1. Open the QGIS Atlas tricks III QGIS project file (QGIS Atlas tricks III.qgz).

---
### Share everything as one GeoPackage

You can save layers, projects, styles, models, and other things in a GeoPackage.

You can use the Package Layers algorithm to save multiple layers in one run.