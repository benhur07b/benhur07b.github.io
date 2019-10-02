---
layout: post
title: 'Strictly By The Numbers: The Dominance of Ateneo in Round 1 of #UAAPSeason82'
description: 'The Ateneo de Manila University Blue Eagles are undefeated in the first round of #UAAPSeason82. Can someone stop them on their way to a third straight Championship or are they just #ThatDamnGood.'
tags: [sports, uaap, basketball, analytics, strictly-by-the-numbers, admu, blue-eagles, data, uaapseason82]
pinned: false
comments: true
og_type: article
image:
    facebook: /media/posts/2019-10-02-strictly-by-the-numbers-admu-dominance-uaapseason82/main.png
    twitter: /media/posts/2019-10-02-strictly-by-the-numbers-admu-dominance-uaapseason82/main.png
---

Let's get down to brass tacks: With the way Ateneo has been playing, **this season's UAAP championship is still theirs to lose**.

Let's go strictly by the numbers.
* They are **undefeated** in the first round.
* Aside from their one-point win against UST, they've **won every game by more than 12 points**.
* They've **outscored their opponents** by an average of **16 points per game**.

Now those are just basic stats. If we take a look at more advanced stats, we see just how dominant they've been in the first round. *Let's do that.* I scraped the box scores of the games for Round 1 of **#UAAPSeason82** and computed the following:

>* <span style='color: #DF6E21'>**Pace**</span> - Estimate of the number of possessions by a team per 40 minutes
>* <span style='color: #DF6E21'>**ORtg (Offensive Rating)**</span> - Points scored by a team per 100 possessions
>* <span style='color: #DF6E21'>**DRtg (Defensive Rating)**</span> - Points allowed by a team per 100 possessions
>* <span style='color: #DF6E21'>**AORtg (Adjusted Offensive Rating)**</span> - Points scored by a team per 100 possessions ABOVE League Average (*Higher is Better*)
>* <span style='color: #DF6E21'>**ADRtg (Adjusted Defensive Rating)**</span> - Points allowed by a team per 100 possessions BELOW League Average (*Higher is Better*)
>* <span style='color: #DF6E21'>**NRtg**</span> - Point Differential per 100 possessions

I chose **Offensive Rating (ORtg) and Defensive Rating (DRtg)** over Points Scored Per Game and Points Allowed Per Game because they're better at determining the quality of a team's offense/defense since they **account for Pace** or the number of possessions a team has in a game. A team that plays at a **high Pace will usually score more points** simply because they play more possessions but that **doesn't necessarily mean they have the best or most efficient offense**. On the other hand, teams that play a **slow Pace tend to have low scoring contests** because they play less possessions but that **doesn't necessarily mean they have the best or most efficient defense**. ORtg and DRtg removes this bias introduced by a team's Pace.

I computed for the league average ORtg and DRtg then compared these with the ORtg and DRtg of each team to arrive at the **Adjusted ORtg (AORtg) and Adjusted DRtg (ADRtg)**. **AORtg** is simply the number of points per 100 possessions that a team scores ABOVE league average (**i.e. Team ORtg - League ORtg**) so the higher the value of AORtg, the better. For aesthetic purposes, I made **ADRtg** be the number of points per 100 possessions that a team allows BELOW league average (**i.e. League DRtg - Team DRtg**) so that it will look similar to AORtg. I did this since people tend to look at positive numbers positively and negative numbers, well, negatively.

This way **positive values for AORtg or ADRtg would be good.**
* +X AORtg = scores X more points than league average
* +X ADRtg = allows X less points than league average

While **negative values for AORtg or ADRtg would be bad.**
* -X AORtg = scores X less points than league average
* -X ADRtg = allows X more points than league average

By getting the difference between ORtg and DRtg (or the sum of AORtg and ADRtg), we get a team's **Net Rating (NRtg)** or **the number of points per 100 possessions that a team outscores its opponents (if positive) or is outscored by its opponent (if negative)**. Of course if you're a team (or a fan), you'd want to have a positive NRtg or have either a positive AORtg or a positive ADRtg at the very least.

Wanna know how the teams did for Round 1? Let's take a look at a summary of the stats below ordered via NRtg. Now take a look at the **gap** between the Blue Eagles and the rest of the league. **Take. A. Look. At. That. Gap.**
<iframe class='embed-responsive' height='300px' src='https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-p6fUKdSDt9sVL66gEmVoyyb03Fl89aah3l4yNO5He0Vguh7B_DSy6umFRq2bJ3cwqNapXpTCNqGO/pubhtml?widget=true&amp;headers=false'></iframe>
<br>
Ateneo is the **ONLY team with BOTH positive AORtg and ADRtg** which means that for every 100 possessions they are scoring more points than league average while allowing less points than league average. It's worth noting that they are doing this while playing the **2nd slowest pace in the league at 75.70 possessions per game**. *Let's put this in perspective.* UST, the team with the 2nd highest AORtg at 5.78, plays at the fastest pace with around 7 more possessions per game than Ateneo. Ateneo still outscores them by 2 points per 100 possessions. FEU, the team with the lowest pace at 74.73 or about 1 possession less than Ateneo per game, has the worst AORtg in the league at -7.47. Even though they play almost the same number of possessions per game, Ateneo outscores FEU by more than 15 points for every 100 possessions.

**So what does this all mean?** Well, it could mean that Ateneo's on its way to a three-peat if other teams don't step up their game. **Or** it could mean nothing at all and Ateneo manages to lose all its remaining games, lose in the Final Four, or lose in the Finals. We'll have to wait and see but if you're taking bets on who'll win this year, at this point in time Ateneo's not a bad place to start.

Anyway, wanna see the **gap** using a chart? Here you go:

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/media/posts/2019-10-02-strictly-by-the-numbers-admu-dominance-uaapseason82/main.png'></div>

You see that Blue Eagle by its lonesome in Quadrant 1 of the chart? Dude's probably lonely up there.  Hey, at least La Salle's Green Archer (logo) looks like its about to shoot it down.
