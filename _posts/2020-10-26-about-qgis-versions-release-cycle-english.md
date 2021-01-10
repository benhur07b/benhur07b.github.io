---
layout: post
title: "About QGIS versions and release cycles"
description: This post seeks to answer common questions about QGIS versions and its release cycle. What does LR and LTR mean? Why does it seem like there's always a new version every month?
tags: [foss4g, qgis, qgis3, release cycle]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-10-26-about-qgis-versions-release-cycle/main.png
    twitter: /img/posts/2020-10-26-about-qgis-versions-release-cycle/main.png
---

This post seeks to answer common questions about QGIS versions and its release cycle. 

First of all, you can find which version of QGIS you are using by going to **Help -> Check QGIS Version** on the Menu bar.


## Is there a schedule that QGIS follows for releasing versions? 
**Yes.** QGIS follows a timebased schedule or roadmap that you can find [here](https://www.qgis.org/en/site/getinvolved/development/roadmap.html) or below.

<table style="border:none">
<colgroup>
<col style="width: 18%" />
<col style="width: 16%" />
<col style="width: 16%" />
<col style="width: 15%" />
<col style="width: 18%" />
<col style="width: 7%" />
<col style="width: 9%" />
</colgroup>
<thead>
<tr class="row-odd"><th class="head"><p>Event</p></th>
<th class="head"><p>Latest</p></th>
<th class="head"><p>Long-Term
Repo</p></th>
<th class="head"><p>Freeze</p></th>
<th class="head"><p>Date</p></th>
<th class="head"><p>Week
#</p></th>
<th class="head"><p>Weeks</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><strong>LTR</strong>/PR</p></td>
<td><p>3.4.0</p></td>
<td><p>2.18.25</p></td>
<td></td>
<td><p>2018-10-26</p></td>
<td><p>43</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>EPR</p></td>
<td><p>3.4.1</p></td>
<td></td>
<td></td>
<td><p>2018-11-02</p></td>
<td><p>44</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.4.2</p></td>
<td><p>2.18.26</p></td>
<td></td>
<td><p>2018-11-23</p></td>
<td><p>47</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.4.3</p></td>
<td><p>2.18.27</p></td>
<td></td>
<td><p>2018-12-21</p></td>
<td><p>51</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR/FF</p></td>
<td><p>3.4.4</p></td>
<td><p>2.18.28</p></td>
<td><p>3.5</p></td>
<td><p>2019-01-18</p></td>
<td><p>3</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-odd"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.6.0</p></td>
<td><p>3.4.5</p></td>
<td></td>
<td><p>2019-02-22</p></td>
<td><p>8</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.6.1</p></td>
<td><p>3.4.6</p></td>
<td></td>
<td><p>2019-03-22</p></td>
<td><p>12</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.6.2</p></td>
<td><p>3.4.7</p></td>
<td></td>
<td><p>2019-04-19</p></td>
<td><p>16</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR/FF</p></td>
<td><p>3.6.3</p></td>
<td><p>3.4.8</p></td>
<td><p>3.7</p></td>
<td><p>2019-05-17</p></td>
<td><p>20</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-odd"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.8.0</p></td>
<td><p>3.4.9</p></td>
<td></td>
<td><p>2019-06-21</p></td>
<td><p>25</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.8.1</p></td>
<td><p>3.4.10</p></td>
<td></td>
<td><p>2019-07-19</p></td>
<td><p>29</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.8.2</p></td>
<td><p>3.4.11</p></td>
<td></td>
<td><p>2019-08-16</p></td>
<td><p>33</p></td>
<td><p>3</p></td>
</tr>
<tr class="row-even"><td><p>FF</p></td>
<td></td>
<td></td>
<td><p>3.9</p></td>
<td><p>2019-09-06</p></td>
<td><p>36</p></td>
<td><p>1</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.8.3</p></td>
<td><p>3.4.12</p></td>
<td></td>
<td><p>2019-09-13</p></td>
<td><p>37</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>HF</p></td>
<td></td>
<td></td>
<td></td>
<td><p>2019-10-11</p></td>
<td><p>41</p></td>
<td><p>2</p></td>
</tr>
<tr class="row-odd"><td><p><strong>LTR</strong>/PR</p></td>
<td><p>3.10.0</p></td>
<td><p>3.4.13</p></td>
<td></td>
<td><p>2019-10-25</p></td>
<td><p>43</p></td>
<td><p>6</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.10.1</p></td>
<td><p>3.4.14</p></td>
<td></td>
<td><p>2019-12-06</p></td>
<td><p>49</p></td>
<td><p>6</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.10.2</p></td>
<td><p>3.4.15</p></td>
<td><p>3.11</p></td>
<td><p>2020-01-17</p></td>
<td><p>3</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-even"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.12.0</p></td>
<td><p>3.10.3</p></td>
<td></td>
<td><p>2020-02-21</p></td>
<td><p>8</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.12.1</p></td>
<td><p>3.10.4</p></td>
<td></td>
<td><p>2020-03-20</p></td>
<td><p>12</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.12.2</p></td>
<td><p>3.10.5</p></td>
<td></td>
<td><p>2020-04-17</p></td>
<td><p>16</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.12.3</p></td>
<td><p>3.10.6</p></td>
<td><p>3.13</p></td>
<td><p>2020-05-15</p></td>
<td><p>20</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-even"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.14.0</p></td>
<td><p>3.10.7</p></td>
<td></td>
<td><p>2020-06-19</p></td>
<td><p>25</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.14.1</p></td>
<td><p>3.10.8</p></td>
<td></td>
<td><p>2020-07-19</p></td>
<td><p>29</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.14.15</p></td>
<td><p>3.10.9</p></td>
<td></td>
<td><p>2020-08-14</p></td>
<td><p>33</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.14.16</p></td>
<td><p>3.10.10</p></td>
<td><p>3.15</p></td>
<td><p>2020-09-11</p></td>
<td><p>37</p></td>
<td><p>6</p></td>
</tr>
<tr class="row-even"><td><p><strong>LTR</strong>/PR</p></td>
<td><p>3.16.0</p></td>
<td><p>3.10.11</p></td>
<td></td>
<td><p>2020-10-23</p></td>
<td><p>43</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.16.1</p></td>
<td><p>3.10.12</p></td>
<td></td>
<td><p>2020-11-20</p></td>
<td><p>47</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.16.2</p></td>
<td><p>3.10.13</p></td>
<td></td>
<td><p>2020-12-21</p></td>
<td><p>52</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.16.3</p></td>
<td><p>3.10.14</p></td>
<td><p>3.17</p></td>
<td><p>2021-01-15</p></td>
<td><p>3</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-even"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.18.0</p></td>
<td><p>3.16.4</p></td>
<td></td>
<td><p>2021-02-19</p></td>
<td><p>8</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.18.1</p></td>
<td><p>3.16.5</p></td>
<td></td>
<td><p>2021-03-19</p></td>
<td><p>12</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.18.2</p></td>
<td><p>3.16.6</p></td>
<td></td>
<td><p>2021-04-16</p></td>
<td><p>16</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.18.3</p></td>
<td><p>3.16.7</p></td>
<td><p>3.19</p></td>
<td><p>2021-05-14</p></td>
<td><p>20</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-even"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.20.0</p></td>
<td><p>3.16.8</p></td>
<td></td>
<td><p>2021-06-18</p></td>
<td><p>25</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.20.1</p></td>
<td><p>3.16.9</p></td>
<td></td>
<td><p>2021-07-16</p></td>
<td><p>29</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.20.2</p></td>
<td><p>3.16.10</p></td>
<td></td>
<td><p>2021-08-13</p></td>
<td><p>33</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.20.3</p></td>
<td><p>3.16.11</p></td>
<td><p>3.21</p></td>
<td><p>2021-09-10</p></td>
<td><p>37</p></td>
<td><p>6</p></td>
</tr>
<tr class="row-even"><td><p><strong>LTR</strong>/PR</p></td>
<td><p>3.22.0</p></td>
<td><p>3.16.12</p></td>
<td></td>
<td><p>2021-10-22</p></td>
<td><p>43</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.22.1</p></td>
<td><p>3.16.13</p></td>
<td></td>
<td><p>2021-11-19</p></td>
<td><p>47</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.22.2</p></td>
<td><p>3.16.14</p></td>
<td></td>
<td><p>2021-12-17</p></td>
<td><p>51</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.22.3</p></td>
<td><p>3.16.15</p></td>
<td><p>3.23</p></td>
<td><p>2022-01-14</p></td>
<td><p>3</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-even"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.24.0</p></td>
<td><p>3.22.4</p></td>
<td></td>
<td><p>2022-02-18</p></td>
<td><p>8</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.24.1</p></td>
<td><p>3.22.5</p></td>
<td></td>
<td><p>2022-03-18</p></td>
<td><p>12</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.24.2</p></td>
<td><p>3.22.6</p></td>
<td></td>
<td><p>2022-04-15</p></td>
<td><p>16</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.24.3</p></td>
<td><p>3.22.7</p></td>
<td><p>3.25</p></td>
<td><p>2022-05-13</p></td>
<td><p>20</p></td>
<td><p>5</p></td>
</tr>
<tr class="row-even"><td><p><strong>LR</strong>/PR</p></td>
<td><p>3.26.0</p></td>
<td><p>3.22.8</p></td>
<td></td>
<td><p>2022-06-17</p></td>
<td><p>25</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.26.1</p></td>
<td><p>3.22.9</p></td>
<td></td>
<td><p>2022-07-15</p></td>
<td><p>29</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.26.2</p></td>
<td><p>3.22.10</p></td>
<td></td>
<td><p>2022-08-12</p></td>
<td><p>33</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.26.3</p></td>
<td><p>3.22.11</p></td>
<td><p>3.27</p></td>
<td><p>2022-09-09</p></td>
<td><p>37</p></td>
<td><p>6</p></td>
</tr>
<tr class="row-even"><td><p><strong>LTR</strong>/PR</p></td>
<td><p>3.28.0</p></td>
<td><p>3.22.12</p></td>
<td></td>
<td><p>2022-10-21</p></td>
<td><p>43</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR</p></td>
<td><p>3.28.1</p></td>
<td><p>3.22.13</p></td>
<td></td>
<td><p>2022-11-18</p></td>
<td><p>47</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-even"><td><p>PR</p></td>
<td><p>3.28.2</p></td>
<td><p>3.22.14</p></td>
<td></td>
<td><p>2022-12-16</p></td>
<td><p>51</p></td>
<td><p>4</p></td>
</tr>
<tr class="row-odd"><td><p>PR/FF</p></td>
<td><p>3.28.3</p></td>
<td><p>3.22.15</p></td>
<td><p>3.29</p></td>
<td><p>2023-01-13</p></td>
<td><p>3</p></td>
<td><p>5</p></td>
</tr>
</tbody>
</table>

<br>
**Event Legend**
<table style="border: none">
<colgroup>
<col width="15%" />
<col width="85%" />
</colgroup>
<thead valign="bottom">
<tr class="row-odd"><th class="head">Event</th>
<th class="head">Description</th>
</tr>
</thead>
<tbody valign="top">
<tr class="row-even"><td>LTR</td>
<td>Long term release, begin of new development phase</td>
</tr>
<tr class="row-odd"><td>LR</td>
<td>Regular release, begin of new development phase</td>
</tr>
<tr class="row-even"><td>FF</td>
<td>Feature freeze, end of development phase</td>
</tr>
<tr class="row-odd"><td>HF</td>
<td>Hard freeze</td>
</tr>
<tr class="row-even"><td>SF</td>
<td>Soft freeze with bi-monthly vote</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>Point release of latest release and LTR branch</td>
</tr>
<tr class="row-even"><td>EPR</td>
<td>Extra Point release</td>
</tr>
</tbody>
</table>
<br>


## What do the numbers in the QGIS versions mean?
Each QGIS release is specified by three numbers (X,Y,Z). For example, QGIS 3.16.4. What does the 3, 16, and 4 pertain to?

The **X** is the **main version** of QGIS. In our example above, that pertains to 3 because we are in QGIS 3.

The **Y** pertains to the **release version**. A release version is always an even number: 3.2, 3.4, 3.6, ..., 3.16. This is because odd numbers are reserved for the development versions where active development of QGIS happens before it is released. For example, QGIS 3.15 is the develpment version for QGIS 3.16 and QGIS 3.17 is the development version that eventually becomes released as QGIS 3.18.

The **Z** pertains to which Point Release (PR) it is of the release version. A Point Release is released every month for each of the Long Term Release (LTR) and Latest Release (LR) branches. 

In our 3.16.4 example:
- It is based on QGIS 3
- It is based on the 3.16 release version
- It is the 4th Point Release of the 3.16 version


## How many branches does QGIS have?
We mentioned the LTR and LR branches above but what do they mean? Technically, QGIS has three branches that a user can download/install. These are the **Long Term Release (LTR) branch**, **Latest Release (LR) branch**, and the **Development (Nightly) branch**. As a user, the branches that are usually important to us are the LTR and LR branches as these hold the release versions of QGIS. The development or nightly branch is based on the most recent version of the QGIS source code but is useful if you want to test, debug, or help in the development of QGIS.

## So what does LTR, LR, and PR mean?
LTR and LR are designations as to the kind of release. 

**Long Term Release (LTR)** is named that way because it is maintained and receives bug fixes until the next LTR is released. Currently, that means one (1) year. The current LTR release version is 3.10.Z but it will be replaced by 3.16.4 by February 2021.

**Latest Release (LR)** refers to the release version of QGIS that containst he most recent or latest features. A new LR is released every four (4) months. For example, a new 3.16 LR was released this October 2020. The next LR (3.18) will be released 4 months from now which is on February 2021. Currently, every 3rd LR becomes the next LTR. For example, the LTR this October 2020 is the 3.10 release. The 3rd LR from 3.10 is 3.16 (1st is 3.12, 2nd is 3.14, 3rd is 3.16) therefore the next LTR will be based on the 3.16 release version. During the first four months after the release of the new designated LTR (in this case 3.16.0 in October 2020), it won't immediately replace the currecnt LTR in the LTR repositories. It will replace the Old LTR once the new LR (in this case 3.18.0 on February 2021) is released.

**Point Release (PR)** refers to the monthly release of QGIS. Each month, a Point Release is released for both the LTR and LR branches. The PR for the LTR contains bug-fixes while the PR for the LR contains both bug-fixes and new features.


## But what about the nightly or development version?
The development or nightly version is based on the most recent version of the source code available on the [master branch of QGIS](https://github.com/qgis/QGIS).

- This version has the most recent (bleeding-edge) features but most of them might not have been fully tested and could include some bugs.
- This versions is great if you want to test new features before they are officially released.
- This version is not receommended for use in production environments or those the require a stable version of QGIS.


## What is the QGIS development cycle and when are versions released?
As mentioned above, QGIS follows a consistent development cycle. Some of the notable things about this are:
* A new release version is released every 4 months.
* In those 4 months, the first 3 are for feature development and bug-fixing. During the last month of the release cycle, a feature freeze is implemented where no new developments or features are added and the efforts are focused on testing, bug-fixing, translations, packaging, and other preparation for the release.
* Every month, a Point Release for the LTR and LR branches are released.


## Which version should I use?
**It depends**
If you need a version that is maintained for a longer time and you don't necessily need new features as they are released then the LTR version might be for you.
If you need to have the most recent features and don't mind doing an upgrade every few months, the LR version just might be for you.
Sometimes it's also good to take a look at the development or nightly versions especially if you are curious or excited about the upcoming features in QGIS.


## TL;DR
- There are three (3) branches or versions of QGIS that you can easily install: the Long Term Release (LTR), Latest Release (LR), and Development (Nightly)
- The LTR receives bug fixes until the next LTR is released (currently 1 year) but may not have new features that are in the LR.
- The LR has the most recent (tested) features of QGIS.
- Every 4 months, a new release version is released for the LTR and LR branches.
- Every month, a Point Release is released for the LTR and LR branches.


## BONUS 1: Quantum GIS or QGIS?
You've probably heard the name Quantum GIS or seen it used interchangebly with QGIS, especially those who became acquainted with QGIS during its version 0 and 1 days but did you know that since QGIS 2 in 2013, [QGIS has officially changed its name from Quantum GIS to QGIS](https://www.qgis.org/en/site/forusers/visualchangelog200/index.html#feature-quantum-gis-is-now-known-only-as-qgis). In fact, QGIS prefers being called and refered to as QGIS instead of Quantuam GIS.


## BONUS 2: Names of versions
Currently, the names of QGIS versions are based ont he places where [QGIS User Conference at Developer Meetings](https://www.qgis.org/en/site/getinvolved/meetings/developer/index.html) where previously held such as Hannover, București, A Coruña, Zanzibar, Madiera, etc. The exception is QGIS 3.14 which was named after Pi.

Prior to this, the names of QGIS versions were based on the moons of Saturn and Jupiter 
as well as some other things (pets if I'm not mistaken).

And those are some thigns about QGIS versions and its release cycle. What's your favorite QGIS version?

Like and follow BNHR on [Facebook](https://facebook.com/bnhr.xyz) and [Twitter](https://twitter.com/BNHRdotXYZ) for more #FOSS4G and #QGIS stuff. :)

