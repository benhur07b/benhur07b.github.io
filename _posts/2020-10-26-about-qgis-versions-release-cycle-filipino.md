---
layout: post
title: "Ukol sa mga bersyon at release cycle ng QGIS"
description: Ang post na ito ay naglalayong sagutin ang ilang katanungan ukol sa mga bersyon ng QGIS at ang kanyang release cycle. LTR, LR, ano nga ba ang mga ito? Bakit kaya kakadownload ko pa lang ng isang bersyon ng QGIS ay may bago na naman?
tags: [foss4g, qgis, qgis3, release cycle, filipino]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-10-26-qgis-versions-release-cycle/main.png
    twitter: /img/posts/2020-10-26-qgis-versions-release-cycle/main.png
---

Ang post na ito ay naglalayong sagutin ang ilang katangungan ukol sa mga bersyon ng QGIS at ang release cycle nito. 

Una sa lahat, maari mong malaman ang version ng QGIS na gamit mo at iba pang impormasyon sa pamamagitan ng **Help -> Check QGIS Version** mula sa Menu bar.

## Mayroon bang schedule na sinusunod ang QGIS sa paglalabas ng bagong bersyon?
**Mayroon.** Ang release at development ng QGIS ay sumusunod sa isang timebased schedule or roadmap. Ang schedule o roadmap na nito ay maaring [makita dito](https://www.qgis.org/en/site/getinvolved/development/roadmap.html) o sa ibaba.

<table style="border:none">
<colgroup>
<col width="18%" />
<col width="16%" />
<col width="16%" />
<col width="15%" />
<col width="18%" />
<col width="8%" />
<col width="9%" />
</colgroup>
<thead valign="bottom">
<tr class="row-odd"><th class="head">Event</th>
<th class="head">Latest</th>
<th class="head">Long-Term Repo</th>
<th class="head">Freeze</th>
<th class="head">Date</th>
<th class="head">Week #</th>
<th class="head">Weeks</th>
</tr>
</thead>
<tbody valign="top">
<tr class="row-even"><td><strong>LTR</strong>/PR</td>
<td>3.4.0</td>
<td>2.18.25</td>
<td>&#160;</td>
<td>2018-10-26</td>
<td>43</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>EPR</td>
<td>3.4.1</td>
<td>&#160;</td>
<td>&#160;</td>
<td>2018-11-02</td>
<td>44</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR</td>
<td>3.4.2</td>
<td>2.18.26</td>
<td>&#160;</td>
<td>2018-11-23</td>
<td>47</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>3.4.3</td>
<td>2.18.27</td>
<td>&#160;</td>
<td>2018-12-21</td>
<td>51</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR/FF</td>
<td>3.4.4</td>
<td>2.18.28</td>
<td>3.5</td>
<td>2019-01-18</td>
<td>3</td>
<td>5</td>
</tr>
<tr class="row-odd"><td><strong>LR</strong>/PR</td>
<td>3.6.0</td>
<td>3.4.5</td>
<td>&#160;</td>
<td>2019-02-22</td>
<td>8</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR</td>
<td>3.6.1</td>
<td>3.4.6</td>
<td>&#160;</td>
<td>2019-03-22</td>
<td>12</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>3.6.2</td>
<td>3.4.7</td>
<td>&#160;</td>
<td>2019-04-19</td>
<td>16</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR/FF</td>
<td>3.6.3</td>
<td>3.4.8</td>
<td>3.7</td>
<td>2019-05-17</td>
<td>20</td>
<td>5</td>
</tr>
<tr class="row-odd"><td><strong>LR</strong>/PR</td>
<td>3.8.0</td>
<td>3.4.9</td>
<td>&#160;</td>
<td>2019-06-21</td>
<td>25</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR</td>
<td>3.8.1</td>
<td>3.4.10</td>
<td>&#160;</td>
<td>2019-07-19</td>
<td>29</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>3.8.2</td>
<td>3.4.11</td>
<td>&#160;</td>
<td>2019-08-16</td>
<td>33</td>
<td>3</td>
</tr>
<tr class="row-even"><td>FF</td>
<td>&#160;</td>
<td>&#160;</td>
<td>3.9</td>
<td>2019-09-06</td>
<td>36</td>
<td>1</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>3.8.3</td>
<td>3.4.12</td>
<td>&#160;</td>
<td>2019-09-13</td>
<td>37</td>
<td>4</td>
</tr>
<tr class="row-even"><td>HF</td>
<td>&#160;</td>
<td>&#160;</td>
<td>&#160;</td>
<td>2019-10-11</td>
<td>41</td>
<td>2</td>
</tr>
<tr class="row-odd"><td><strong>LTR</strong>/PR</td>
<td>3.10.0</td>
<td>3.4.13</td>
<td>&#160;</td>
<td>2019-10-25</td>
<td>43</td>
<td>6</td>
</tr>
<tr class="row-even"><td>PR</td>
<td>3.10.1</td>
<td>3.4.14</td>
<td>&#160;</td>
<td>2019-12-06</td>
<td>49</td>
<td>6</td>
</tr>
<tr class="row-odd"><td>PR/FF</td>
<td>3.10.2</td>
<td>3.4.15</td>
<td>3.11</td>
<td>2020-01-17</td>
<td>3</td>
<td>5</td>
</tr>
<tr class="row-even"><td><strong>LR</strong>/PR</td>
<td>3.12.0</td>
<td>3.10.3</td>
<td>&#160;</td>
<td>2020-02-21</td>
<td>8</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>3.12.1</td>
<td>3.10.4</td>
<td>&#160;</td>
<td>2020-03-20</td>
<td>12</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR</td>
<td>3.12.2</td>
<td>3.10.5</td>
<td>&#160;</td>
<td>2020-04-17</td>
<td>16</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR/FF</td>
<td>3.12.3</td>
<td>3.10.6</td>
<td>3.13</td>
<td>2020-05-15</td>
<td>20</td>
<td>5</td>
</tr>
<tr class="row-even"><td><strong>LR</strong>/PR</td>
<td>3.14.0</td>
<td>3.10.7</td>
<td>&#160;</td>
<td>2020-06-19</td>
<td>25</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>3.14.1</td>
<td>3.10.8</td>
<td>&#160;</td>
<td>2020-07-19</td>
<td>29</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR</td>
<td>3.14.15</td>
<td>3.10.9</td>
<td>&#160;</td>
<td>2020-08-14</td>
<td>33</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR/FF</td>
<td>3.14.16</td>
<td>3.10.10</td>
<td>3.15</td>
<td>2020-09-11</td>
<td>37</td>
<td>6</td>
</tr>
<tr class="row-even"><td><strong>LTR</strong>/PR</td>
<td>3.16.0</td>
<td>3.10.11</td>
<td>&#160;</td>
<td>2020-10-23</td>
<td>43</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR</td>
<td>3.16.1</td>
<td>3.10.12</td>
<td>&#160;</td>
<td>2020-11-20</td>
<td>47</td>
<td>4</td>
</tr>
<tr class="row-even"><td>PR</td>
<td>3.16.2</td>
<td>3.10.13</td>
<td>&#160;</td>
<td>2020-12-18</td>
<td>51</td>
<td>4</td>
</tr>
<tr class="row-odd"><td>PR/FF</td>
<td>3.16.3</td>
<td>3.10.14</td>
<td>3.17</td>
<td>2021-01-15</td>
<td>3</td>
<td>5</td>
</tr>
<tr class="row-even"><td><strong>LR</strong>/PR</td>
<td>3.18.0</td>
<td>3.16.4</td>
<td>&#160;</td>
<td>2021-02-19</td>
<td>8</td>
<td>4</td>
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


## Ano ang ibig sabihin ng mga numero sa bersyon ng QGIS?
Makikita natin na ang bawat bersyon ng QGIS ay may kaakibat na tatlong numero (**X, Y, Z**). Halimbawa, **QGIS 3.10.11**. Ano nga ba ang ibig sabihin ng 3, 10, at 11?

Ang **X** ay ang **main version** ng QGIS. Sa ngayon, tayo ay nasa QGIS 3 na. Kaya ang mga release ng QGIS ay nagsisimula sa QGIS 3.

Ang **Y** ay kung anong **release version** ito. Ang release version ay sinisimbulo ng isang even number. Halimbawa: 3.2, 3.4, 3.6, 3.8, 3.12, 3.14, 3.16, 3.18, etc. Bakit nga ba sila even numbers? Ito ay dahil ang odd numbers ay nakareserba para sa development versions o yung mga bersyon kung saan nagaganap ang development ng QGIS bago sila i-release. Halimbawa: ang QGIS 3.1 ay ang development version para sa QGIS 3.2, ang QGIS 3.3 ay ang development version para sa QGIS 3.4.

Ang **Z** ay sumisimbulo kung pang-ilang Point Release (PR) na ito sa release version.

Bumalik tayo sa QGIS 3.10.11, ang ibig sabihin ng mga numerong ito ay:
- Ito ay base sa QGIS 3
- Ito ay base sa 3.10 release version
- Ito ang ika-labing-isa (11th) point release sa 3.10 version


## Ilang branches ba mayroon ang QGIS?
Technically, mayroong tatlong branches ang QGIS na maari mong idownload/install. Ito ay ang **Long Term Release (LTR) branch**, **Latest Release (LR) branch**, at ang **Development (Nightly) branch**. Bilang isang user, madalas ang mahalagang branches lang na kailangan natin ay ang LTR at LR branch. Ang development o nightly branch ay ang bersyon ng QGIS na nakabase sa pinakabagong bersyon ng source code ng QGIS at hindi ganun kasigurado ang stability nito ngunit kung nais mong ma-test o makita ang mga paparating na features ng QGIS, sa development o nightly branch mo sila mahahanap.


## Ano ang ibig sabihin ng LTR, LR, at PR?
Ang LTR, LR ay designations kung anong uri ng release ang bersyon na iyon. Tulad ng nabanggit sa itaas may LTR at LR branches (o bersyon) ng QGIS na maari nating i-install.

Ang **Long Term Release (LTR)** ay tinatawag na ganito sapagkat ito ay maintained at nakakatangap ng bug-fixes hanggang ilabas ang susunod na LTR. Sa ngayon, pinag-uusapan pa kung itataas ang length of support para sa LTR branch sa dalawang (2) taon mula sa kasalukuyang (1) taon. Sa kasalukuyan, ang LTR ay 3.10.11 subalit ito ay mapapalitan ng 3.16.4 sa Pebrero 2021.

Ang **Latest Release (LR)** ay ang release version ng QGIS na naglalaman ng mga pinakabagong featues nito. May bagong LR na inilalabas bawat apat na buwant. Halimbawa, ang 3.16 LR ay inilabas ngayong buwan ng Oktubre, ang susunod na LR (3.18) ay ilalabas apat na buwan mula ngayon sa Pebrero. Sa kasalukuyan, ang bawat ika-tatlong LR ay ang nagiging susunod na LTR. Halimbawa, ang LTR ngayon ay ang 3.10 release. Ang ikatlong release mula sa 3.10 ay 3.16 (3.10, 3.12, 3.14, 3.16) kaya ang susunod na LTR ay nakabase sa 3.16 release version.

Sa unang apat na buwan matapos ang release ng bagong designated LTR (3.16.0), hindi nito agad pinapalitan ang nakaraan LTR sa LTR repositories. Papalitan niya lamang ito kapag nailabas na din ang bagong LR (3.18.0).


## Ano naman ang nightly o development version?
Ang development o nightly na bersyon ay nakabase sa pinaka-recent na bersyon ng source code ng QGIS (master branch). Ang source code na ito ay maaring makita [dito](https://github.com/qgis/QGIS).

- Ang bersyon na ito ang may pinaka-bagong mga features (bleeding-edge) subalit karamihan sa kanila ay hindi pa natetest ng lubusan kaya maaring mayroon pa ding mga bugs.
- The best ang bersyon na ito kung gusto mong i-test ang mga nasabing bagong features.
- Hindi recommended ang bersyon na ito para sa production use o kung kailangan mo ng stable working environment.


## Ano ang development cycle ng QGIS at kailang sila nagrerelease ng mga bagong bersyon?
Tulad nga ng makikita sa itaas, consistent ang development cycle ng QGIS. Narito ang ilang bagay na kailangan mong malaman.
* Kada apat (4) na buwan ay may bagong release version na nilalabas.
* Sa apat na buwan na ito, ang unang tatlong (3) buwan ay nakalaan para sa development ng mga bagong features pati na rin sa pag-aayos ng mga bugs. Sa huling buwan ng release cycle, nagkakaroon ng tinatawag na feature freeze kung saan wala nang bagong developments or features at magsisimula ng magfocus sa testing, bug-fixing, translations, at paghahanda para sa release.
* Subalit, kada buwan ay naglalabas ng Point Release (PR) para sa LTR at LR branch. Ang PR sa LTR branch ay naglalaman ng mga bug-fixes. Ang PR naman sa LR branch ay naglalaman ng bug-fixes at mga bagong features.


## Anong bersyon ang dapat kong gamitin?
**Depende sa user.**
Kung kailangan mo ng bersyon na supported ng mas matagal at hindi mo naman masyadong kailangan ang mga bagong features, mainam gamitin ang LTR.
Kung ang nais mo naman ay magkaroon ng mga pinakabagong features ng QGIS at hindi issue ang pag-uupgrade kada ilang buwan, mainam gamitin ang LR.
Mainam din minsan tingnan ang Development version lalo na kung curious or excited kang magamit ang mga paparating na features ng QGIS.


## TL;DR
- May tatlong branches (o bersyon) ng QGIS na maaring i-install: Long Term Release (LTR), Latest Release (LR), o Development (Nightly).
- Ang LTR ay makakatangap ng bug-fixes hanggang ilabas ang susunod na LTR subalit maaring wala itong mga features na mayroon sa LR.
- Ang LR naman ay nagtataglay ng mga pinaka-bagong features ng QGIS.
- Bawat apat na buwan ay may bagong release version na nilalabas para sa LTR at LR.
- Bawat buwan ay may Point Release na nilalabas para sa LTR at LR.


At iyan ang mga bagay ukol sa mga bersyon at release cycle ng QGIS. Ikaw, anong bersyon ang gamit o paborito mo? Maari ring mag-iwan ng katanungan o kumento sa ibaba.

Like and follow BNHR on [Facebook](https://facebook.com/bnhr.xyz) and [Twitter](https://twitter.com/BNHRdotXYZ) for more #FOSS4G and #QGIS stuff. :)

