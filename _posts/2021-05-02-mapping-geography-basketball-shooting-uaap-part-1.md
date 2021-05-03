---
layout: post
title: "Mapping the Geography of the UAAP Men's Basketball Tournament (Season 81) [Part 1]"
description: "For my Masters in Geomatics Engineering (GeoInformatics) thesis, I'm mapping the geography of the UAAP Men's Basketball Tournament. Specifically, I'm studying the spatial characterization and analysis of field goals. I'll be writing and sharing about it here. :)"
tags: [foss4g, foss4gph, thesis, uaap, mapping the geography of the uaap]
pinned: true
comments: true
og_type: article
image:
    facebook: /img/posts/2021-05-02-mapping-geography-basketball-shooting-uaap-part-1/main.png
    twitter: /img/posts/2021-05-02-mapping-geography-basketball-shooting-uaap-part-1/main.png
---

## The premise

**1.** **Basketball is spatial.** The concepts of space, location, and time are ubiquitous in basketball. In any event that happens in a basketball game -- a made shot, a missed shot, a rebound, a steal, a foul -- there is spatial and spatio-temporal information embedded in that event and, without a doubt, location has an effect on these basketball events. This is specially true when looking at shooting and field goals because...


**2. Players shoot differently at different locations on the court.** When we say that Player A shoots 50% from the field while Player B shoots 40% from the field, although it seems like we are talking about the same "field" (i.e. the basketball court), we aren't really pertaining to the same "field". Player A could be a 50% shooter but only takes shots from the paint while Player B, the lowly 40% shooter, only takes three-pointers. In this case, Player B actually scores more efficiently than Player B -- 1.2 points per attempt (PPA) vs 1.0 for Player A. Advanced statistics like PPA, effective Field Goal % (eFG), and True Shooting Percentage (TS%) account for the difference in points scored by 2pt FG, 3pt FG, and free throws but they do not account for the difference in points scored due to where players take shots. In general...


**3. Conventional statistics that measure shooting performance and ability do not incorporate the effects of location thus failing to account for the spatial nature of the sport.** How do we define a good shooter? Is it someome who simply makes a high percentage of his shots like a center or power forward who dominates the interior but rarely takes shots outside the paint? Is it someome who can make shots that are far from the basket, a three-point specialist perhaps? Or is it someone who is a threat to score everywhere on the court even though they may not shoot particularly well overall? When answering this question, conventional statistics such as FG%, 3P%, PPA, eFG, and TS% provide a generalized version of a player's shooting or scoring ability but they don't tell us the locations where players shoot and how well they shoot at these locations. This is disappointing because, when you think about it, being able to pinpoint where a player or team scores is a powerful tool to have when creating basketball stragegies and game plans.


**4. The current methods used in the country that try to account for the spatial nature of shooting are limited and arbitrary.** In the Philippine setting, the most common techniques for showing shooting ability on the court are shot charts and shooting zones. Shot charts show where field goals are taken and whether they scored or not but provide little analytical information beyond that. Shooting zones provide more information but the way the court is divided for analysis is arbitrary.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2021-05-02-mapping-geography-basketball-shooting-uaap-part-1/shot-charts.png" alt="Shot chart of UP vs ADMU UAAP Game S81"><figcaption class="figure-caption text-center">Shot chart of UP vs ADMU UAAP Game S81 (Soure: FIBA LiveStats, https://www.fibalivestats.com/)</figcaption></div>


<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2021-05-02-mapping-geography-basketball-shooting-uaap-part-1/shot-zones.png" alt="Shot breakdown per zone, DLSU vs ADMU"><figcaption class="figure-caption text-center">Shot breakdown per zone, DLSU vs ADMU (Source: FIBA LiveStats, https://www.fibalivestats.com/)</figcaption></div>


**5. The Philippines is a basketball-crazed country.** Basketball is probably one of the most popular, if not the most popular, sport in the Philippines. A lot of kids grow up wanting to become pro ballers. Basketball courts are literally everywhere. Basketball players and teams enjoy celebrity status. Basketball itself is ingrained in our culture. Rafe Bartholomew even wrote about our love affair with basketball in Pacific Rims. We Filipinos will probably never wow the world with our height. Pinoy basketball has always been about heart -- **PUSO** -- but I think it's also good to put brains -- **UTAK** -- with that **PUSO**. Different people may have different views on analytics in basketball but I think that, when used properly, it could be give a team that slight advantage it needs to win.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2021-05-02-mapping-geography-basketball-shooting-uaap-part-1/osm-basketball.png" alt="features tagged as sport=basketball in OSM"><figcaption class="figure-caption text-center">Features tagged as sport=basketball in OSM</figcaption></div>


## The research

The research proposes better methods and metrics for analyzing, visualizing, and describing the geography of field goals in the UAAP by using spatial analysis. 

This idea isn't particularly new. Over the past decade, there's been a rise in the use of analytics, specifically spatial analytics, in basketball leagues overseas. This is specially true for leagues with player tracking systems that extract large amounts of spatial and spatio-temporal data during basketball games -- something like the NBA with its SportsVU Player Tracking System. Using these datasets, Dr. Kirk Goldsberry's was able to tell the story about how the NBA has changed through visual and spatial analytics in his book Sprawlball.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2021-05-02-mapping-geography-basketball-shooting-uaap-part-1/sprawlball.png" alt="prawlball utilizes spatial data to tell 
a visual story of the new era of the NB
"><figcaption class="figure-caption text-center">Sprawlball utilizes spatial data to tell a visual story of the new era of the NBA</figcaption></div>

Now, I know that what I want for the research can be done. The question is how can it be done and applied in the Philippines. With this research, I want to address two main problems:
1. How do we best characterize the geography of field goals in the UAAP Men's Basketball Tournament (MBT)?
    - How do we identify shooting zones and areas stochastically and empirically?

2. How can we better understand and compare the shooting and scoring abilities of players in a way that incorporates the spatial aspect of shooting?
    - How do we describe a good shooter and do we differentiate him from a bad one?
    - Who are the best and worst shooters/scorers in the UAAP?
    - Where and how do the best and worst shooters / teams take their field goals?


## The research objectives

To address these problems, I set out three (3) objectives for the research:

1. Spatially characterize and visualize field goals in UAAP Season 81.
    - Map the shooting and scoring geography.
    - Determine the parts/zones that make up the field goal geography.
    - Group players based on their shooting tendencies.
2. Generate spatial metrics for analyzing shooting tendencies and abilities.
    - Determine how better or poorer a player shoots/scores compared to the rest of the league
    - Determine how better or poorer a player shoots/scores compared to similar players
    - Rank the best, the worst, the most efficient, and the least efficient shooters
3. Create and share a spatial dataset of field goals that can be used for further research.


## Related literature

-- COMING SOON --


## Methodology

-- COMING SOON --


## Outputs

-- COMING SOON --
