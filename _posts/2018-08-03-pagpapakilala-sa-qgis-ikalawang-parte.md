---
layout: post
title: "Pagpapakilala sa QGIS (ikalawang parte): Ang QGIS"
description: Ikalawang parte ng isang serye kung saan ipapakilala kung ano ang QGIS, ano ang mga kakayahan nito, paano ito gamitin, at marami pang iba. Sa parteng ito, tatalakayin kung ano ang QGIS.
tags: [foss4g, qgis, qgis3, filipino, gis]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/site/images/BNHR-bg.webp
    twitter: /img/site/images/BNHR-bg.webp
---

Sa [huling lathala]({{ site.baseurl }}/2018/07/20/pagpapakilala-sa-qgis-unang-parte.html), tinalakay ang mas pangkalahatang konsepto ng GIS. Ngayon, tutungo na tayo sa pagtalakay ng QGIS.

## Ano ang QGIS? (What is QGIS?)
Ang [**QGIS**](https://qgis.org) ay isang **malaya** at **bukas** (free and open source) na software. Ito ay maaaring gamitin sa iba't ibang plataporma (Windows, Mac, Linux, Android), maasahan, at patuloy na nililinang ng mga developers at ng komunidad. Ito ay nasa ilalim ng _GNU GPL (General Public License) v2_ at isang opisyal na proyekto ng _Open Source Geospatial Foundation (OSGeo)_. Ito ay maaring i-download mula [dito](https://qgis.org/en/site/forusers/download.html).

### Malayang Software (Free Software)
Ang ibig sabihin ng **Free** sa Free software ay mas malapit ang kahulugan sa salitang **Malaya** ng wikang Filipino kaysa sa salitang libre. Sabi nga: **Free as in Freedom, not Free as in Free Beer.** Sinasabing malaya ang Free software sapagkat pinagkakalooban ka nito ng mga kalayaan na inaasahang ipagkakaloob mo din sa ibang taong kapwa gumagamit ng nasabing software.

Ayon sa [Free Software Foundation](https://www.gnu.org/philosophy/free-sw.en.html), ang Apat na Kinakailangan Kalayaan (Four Essential Freedoms) ng Malayang Software ay:

* **(Kalayaan 0)** - Ang Kalayaan na **patakbuhin ang programa paano mo man naisin, at para sa kahit anong layunin**.
* **(Kalayaan 1)** - Ang Kalayaan na **pag-aralan kung paano gumagana ang programa upang magawa nito ang iyong nais**.
* **(Kalayaan 2)** - Ang Kalayaan na **ipamahagi muli ang kopya ng programa para makatulong sa kapwa**.
* **(Kalayaan 3)** - Ang Kalayaan na **ipamahagi sa iba ang kopya ng iyong binagong programa**.

Walang nagsasabing bawal kang kumita gamit ang Free software. Sa katotohanan, maaring kumita ng pera sa Free software sa pamamagitan ng pagtuturo nito sa iba, pagbibigay suporta, o pag-gamit nito sa komersyal na paraan. Ang hindi pwedeng gawin ay ang ipagkait sa iba ang kalayaang ipinagkaloob sa iyo ng malayang software.

**Halimbawa:** Hindi mo pwedeng itago ang source code ng malayang software mula sa mga tao o kliyente mo sapagkat ito ay lalabag sa Kalayaan 1. Kailangan bigyan ng kopya ng source code o kaya ng link patungo sa source code ng QGIS o ng plugin sa QGIS na ginawa mo para sa isang kliyente.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/adobo.jpg" alt="adobo"></div>

**Adobo...** Ganito ko ipaliwanag at ihalintulad ang malayang software. Isipin mo na mayroong dalawang tao na may hawak ng recipe para sa adobo -- si **Jose** at si **Juan**.

**Jose**: **Hindi binibigay ni Jose ang kaniyang recipe sa iba** at kung ibigay niya man ito sa iyo, ito ay sa ilalim ng kasunduan na **hindi mo pwedeng ibigay sa iba ang recipe niya** at **hindi mo ito pwedeng baguhin**. Si Jose lang ang pwedeng magbigay ng recipe niya sa ibang tao.

**Juan**: Sa kabilang dako, **malayang ibinabahagi ni Juan ang kanyang recipe sa iba**. Kapag ibinahagi sayo ni Juan ang recipe niya, binibigyan ka din niya ng **kalayaang baguhin at mas pagandahin ito** (magdagdag ng bagong sahog, magbawas ng toyo, palitan ang dami ng mga sangkap, atbp). Maliban dito, ibinibigay din sa iyo ni Juan ang **kalayaang ipamahagi sa iba ang recipe niya pati na rin ang mga pagbabago sa recipe na idinagdag mo**.  Ang tanging hiling lamang ni Juan ay ibahagi mo rin sa iba ang mga kalayaang ibinabahagi niya sa iyo.

Sinisimbolo ni Juan at ng kanyang recipe ang malayang software na nagbibigay sa atin ng kalayaang magpakilala ng pagbabago sa recipe ng adobo at ipamagagi ang recipe natin sa iba. Si Jose naman ay ang tipikal na proprietary software. Sa paglipas ng panahon, marahil ang adobo na nagmula sa recipe ni Juan ang maging mas masarap at dahil sa kakayahan niton magbago ayon sa panlasa ng mga tao. Ito din marahil ang mas tatangkilikin ng karamihan sapagkat kahit gaano natin kapaborito ang adobo, siguro'y hindi rin natin magugustuhan na lahat ng adobo sa mundo ay pare-pareho ang lasa.

### Bukas (Open Source)
**Ang malayang software ay bukas na software**

Sa isang **bukas** (open-source) na software, tayo ay malayang makita ang source code nito at malaman kung paano siya gumagana. Ang pagiging bukas ng software ay isang paraan upang matugunan ang Kalayaan 0 at Kalayaan 1 ng malayang software.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/carhood.jpg" alt="kotse"></div>

Ang isang software na **hindi bukas** ay inihahalintulad ko sa binilo mong **kotse na hindi mo pwedeng buksan ang hood kung saan nakalagay ang makina at iba pang parte nito**. Kapag nagkaroon ng sira ang kotse, kailangan mo itong dalhin sa iba para lamang pabuksan ang hood upang makita nila ang kamalian at maayos ito. Kumpara dito, ang **bukas** na software ay **isang kotse na malaya kang tingnan kung ano ang nangyayari sa makina at sa iba pang parte nito kapag nagkaroon ng sira**. Maari mong ayusin sa sarili mo ang sira o dalhin sa iba upang ipatingin at ipaayos ito. Siguro naman ay mas gugustuhin natin ang ikalawang kotse kaysa sa una.

## Ang interface ng QGIS
Ang interface ang bahagi ng software na kumukunekta sa tao at sa makinarya. Ito ay kung saan nagaganap ang interaksyon sa pagitan ng tagagamit at ng software. Dito, maaring magbigay ng input ang taga-gamit at ang software naman ay maaring magpakita ng mga resulta.

Ang interface ng QGIS ay may anim na pangunahing bahagi. Ito ay ang:
1. Menu bar
2. Toolbars
3. Panels
4. Map View/Map Canvas
5. Status bar
6. Locator

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/gui.png" alt="QGIS GUI graphical user interface"></div>

Mas marami pang impormasyon ukol sa interface ng QGIS ay maaaring makita [dito](https://docs.qgis.org/testing/en/docs/user_manual/introduction/qgis_gui.html).

### Menu bar
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/menubar.png" alt="QGIS Menu bar"></div>

Ang menu bar sa QGIS ay katulad ng mga menu bar sa ibang programa. Dito makikita ang mga utos (commands) at bagay na kayang gawin (functions) ng QGIS.

### Toolbars
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/toolbar1.png" alt="QGIS Toolbars"></div>

Ang mga toolbar ay nagbibigay ng shortcut upang patakbuhin ang mga commands at functions ng QGIS.

Ang listahan ng mga toolbars ay maaring makita sa Menu bar sa ilalim ng **View -> Toolbars**.

Ang mga karaniwang toolbar na ginagamit ay:

1. Attributes toolbar
2. Raster Toolbar
3. Vector Toolbar
4. Plugins Toolbar

Ang mga toolbar ay maaring galawin at ilagay kung saan man sa QGIS interface. Maari silang ipwesto sa taas, baba, o sa gilid ng Map Canvas.

### Panels
<div class="row">
    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/panels1.png" alt="QGIS Panels"></div>

    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/panels2.png"></div>
</div>

Ang mga panels ay naglalaman ng mga widgets na maaring gamitin para sa mga mas komplikadong interaksyon sa QGIS.

Ang listahan ng mga panels ay maaring makita sa Menu bar sa ilalim ng **View -> Panels**.

Ang mga karaniwang toolbar na ginagamit ay:

1. Layers - nagpapakita ng listahan ng layers
2. Browser - ginagamit upang ipakita ng listahan ng mga files, atbp.
3. Layer Styling - mabilisang pagpapalit ng styles ng mga layers
4. Statistics - nagpapakita ng istatistika ng mga vector layers

Katulad sa toolbars, ang mga panels ay  maaring galawin at ilagay kung saan man sa QGIS interface. Maari silang ipwesto sa taas, baba, o sa gilid ng Map Canvas.

### Map View/Map Canvas
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/mapcanvas.png" alt="QGIS Map Canvas"></div>

Ito ang lugar kung saan makikita ang mapa/imahe ng mga layers.

Maaring palakihin, paliitin, at galawin ang mga mapa/imahe na nakikita dito

Gumagamit ng On-the-Fly Coordinate Reference System Transformation (OTF) upang ang mga layers na parehong lugar ang ipinapakita ay maglapat kahit na hindi pareho ang coordinate reference system na gamit nila (IMPORTANTE. Tingnan ang [huling lathala](https://benhur07b.github.io/2018/07/20/pagpapakilala-sa-qgis-unang-parte.html))

### Status bar
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/statusbar.png" alt="QGIS Status Bar"></div>

Ang status bar ay nagbibigay ng impormasyon ukol sa map view o map canvas:

1. Ipinapakita nito ang coordinates ng mouse;
2. Ipinapakita nito ang extent o sakop ng map view (pinakakaibaba-at-kaliwa na sulok, pinakakaitaas-at-kanan na sulok);
3. Ipinapakita ang iskala ng map view;
4. Kayang palakihin, paikutin, o kaya pigilan ang pagpapakita ng mga layers sa map view;
5. Ipinapakita ang EPSG code ng Coordinate Reference System na ginagamit ng Proyekto;
6. Nagpapakita sa gumagamit ng mga mensahe at kalagayan ng mga prosesong pinapatakbo.

### Locator
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/locator.png" alt="QGIS Locator"></div>

Isang napakamakapangyarihang kagamitan sa QGIS. Maaring gamitin ang locator upang maghanap ng mga layers, mga aksyon na kayang gawin, at mga proseso ng QGIS. Mainam gamitin kapg hindi mo alam kung saan hahanapin o ano ang pipindutin para sa aksyon na gusto mong mangyari sa QGIS.

### Others - Python Console
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/python-c2.png" alt="QGIS Python console 1"></div>
<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/python-c.png" alt="QGIS Python console 2"></div>

Ang Python console ay maaring mabuksan sa pagpindot ng Python logo sa Plugins toolbar.

Dito, maaring gumamit ang user ang Python upang magpatakbo ng mga commands o kaya i-extend ang QGIS.

Ang **pyqgis** ay isang [Python library para sa QGIS](https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/) na maaring gamitin sa pagsusulat ng Python codes para sa QGIS.

Isa sa mga magagandang lugar upang matuto ng pyqgis para sa mga hindi programmers ay ang [blog posts](https://anitagraser.com/pyqgis-101-introduction-to-qgis-python-programming-for-non-programmers/) ni Anita Graser/underdarkGIS tungkol dito.

## User profiles
Ang user profiles ay isa sa mga bagong bagay na idinagdag sa QGIS 3.X. Ang bawat user profile ay may sarling settings, plugins, shortcuts na naka-save sa sarili nitong folder. Mainam itong gamitin kung maraming mga gagamit ng QGIS at iba-iba ang kanilang pangagailangan or nakasanayang shortcuts. Pwede rin itong gamitin ng isang user upang gumawa ng profile para sa mga natatanging gamit ng QGIS (halimbawa: isang profile na nakatuon sa remote sensing, isa na nakatuon sa pag-digitize, atbp).

Maaring pumili ng user profiles sa pamamagitan ng **Settings -> User Profiles**. Ang folder ng aktibong user profile ay maaring buksan gamit ang **Settings -> User Profiles -> Open Active Profile Folder**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/user-profiles.png" alt="User profiles in QGIS 3"></div>

## Ang mga QGIS Plugins
Isa sa mga pinaka-mahalagang bahagi ng QGIS ay ang mga plugins. Sila ay nagbibigay ng karagdagang mga kakayahan at abilidad sa QGIS at gingagawang mas kapaki-pakinabang ito. Karamihan sa mga bagay na madalas akalain na hindi kaya ng QGIS ay nasasagot ng mga plugins. Ang mga plugins na ito ay likha din ng mga users ng QGIS at ang mga source code nila ay bukas sa publiko upang pag-aralan. Maari tayong tumulong sa pag-papaganda ng mga plugins o kaya ay gumawa ng sarili nating plugins upang ipamahagi sa ibang users.

May **dalawang uri** ng plugins:
* **Core** plugins - ito ay kasama na sa QGIS at hindi pwedeng tanggalin or i-uninstall.
* **External** plugins - ito ay maaring i-install mula sa isang repository tulad ng ```QGIS Official Plugin Repository``` o kaya ay mula sa source code.

Mayroon ding **dalawang paraan** upang mag-install ng plugins sa QGIS:
* Gamit ang Manage and Install Plugins Dialog (**Plugins -> Manage and Install Plugins**)
* Mano-manong pag-lagay ng source code ng plugin sa QGIS plugin folder ng iyong QGIS profile. Ang mga ito ay makikita sa:
* **Linux**: ```.local/share/QGIS/QGIS3/profiles/default/python/plugins```
* **Mac OS X**: ```Library/Application/Support/QGIS/QGIS3/profiles/default/python/plugins```
* **Windows**: ```C:\\Users\<User>\AppData\Roaming\QGIS\QGIS3\profiles\default\python\plugins```

Maraming mga lathala sa internet na tumatalakay sa mga QGIS plugins. Dito mismo ay tinatalakay ko ito sa serye kong [#PluginFridays](http://localhost:4000/blog/tags.html#plugin-fridays).

## Mga expressions sa QGIS
Ang mga expressions sa QGIS ay ginagamit para sa mga gawain tulad ng pagpili ng features (selection), pag-sala ng features (filtering), at iba pang mga kompyutasyon (computations). Ang syntax o paraan ng pagbuo ng mga expressions ay katulad sa Structured Query Language (SQL). Ang mga pangunahing batayan ay:
1. Ang mga pangalan ng fields o attributes ay nasa double quotes (hal. "Pangalan")
2. Ang mga strings o characters (mga salita o letra) ay nasa single quotes (hal. 'Jose')
3. Ang mga numero (1, 2.5, 1900.23, atbp) at maaring isulat ng walang pagbabago

Ilan sa mga lugar kung saan pwedeng gamitin ang expressions ay sa **Expression tab** ng Field Calculator, Select by Expression, at Query Builder ng Filter. Ang **Expression tab** ay mayroong mga widgets para:
1. Bumuo ng expression gamit ang mga functions o fields. Maari ring isulat diretso dito ang expression.
2. Pumili ng tamang function mula sa listahan ng mga functions at fields. Mayroon ding search box na maaring gamitin upang mas madaling mahanap ang isang partikular na function o field. Ang item sa listahan ay madadagdag sa expression na binubuo kapag dinouble-click ito.
3. Magpakita ng impormasyon at tulong sa mga napiling function. Kapag field ang napili, ang widget na ito ay nagpapakita ng sample ng mga values ng field. Kapag dinouble-click ang isang value ay madadagdag ito sa binubong expression.

<div class="row">
    <div class="col-lg-4 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/exp1.png" alt="QGIS Expressions 1"></div>

    <div class="col-lg-4 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/exp2.png" alt="QGIS Expressions 2"></div>

    <div class="col-lg-4 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/exp3.png" alt="QGIS Expressions 3"></div>
</div>

## Mga layers sa memorya
Ang mga layers sa memorya (layers in memory) ay katulad ng mga normal na layers ngunit sila ay hindi permanente at hindi pisikal na naka-save sa kompyuter subalit ay naka-save sa memorya ng computer lamang. Sila ay kapakipakinabang kapag kailangan ng pansamantalang layers o kaya mga layers na di naman kailangan i-save bilang files. Sa QGIS, ang mga output ng processing ay madalas na nakalagay lamang sa memorya kung hindi direktang sasabihing i-save sila bilang files. Maari ring gumawa ng mga pansamantalang layers gamit ang **Layer -> Create Layer -> New temporary scratch layer**.

Ang mga layers sa memorya ay pansamantala lamang at "nakakalimutan" ng QGIS kapag pinatay na ang QGIS. Sa madaling salita, kapag gumawa ka ng pansamantalang layer at pinatay mo ang QGIS, sa susunod na pagbukas mo nito ay wala na ang pansamantalang layer na iyon. Ang solusyon para di ito mangyari ay ang pag-gamit ng **Memory Layer Saver** na plugin. Gamit ito, maaring "maalala" ang mga layers sa memory na kasabay ng isang QGIS project kahit pagkatapos patayin ang QGIS.

```Laging tandaan na i-save ang mga layers bilang aktwal na files (.gpkg, .geojson, .shp) kung kailangan mo ng pisikal na kopya nito.```

## Paglagay ng layers sa QGIS
Isa pang bagong dagdag sa QGIS 3.X ay ang pagkakaroon ng isang komprehensibong paraan para maglagay ng layers sa QGIS sa pamamagitan ng **Data Source Manager** na maaring buksan gamit ang **CTRL + L** o **Layer -> Data Source Manager**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/datasource.png" alt="QGIS Data Source Manager toolbar"></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/datasource2.png" alt="QGIS Data Source Manager Window"></div>

Mula sa **Data Source Manager**, maaring maglagay na iba-ibang uri ng data sa QGIS o kaya ay kumabit sa iba't-ibang pwedeng pagkunan ng data.

### Mula sa mga files (rasters, vectors, CSV, spreadsheet)
Ang mga rasters at vectors ay tinalakay sa [huling lathala](https://benhur07b.github.io/2018/07/20/pagpapakilala-sa-qgis-unang-parte.html). Ang mga layers na ito ay maaring ilagay sa QGIS gamit ang nararapat ng opsyon sa **Data Source Manager** (hal. Vector para sa vector data, Raster para sa raster data, Delimited Text Layer para sa CSV data).

Ang Browser ay maaring gamitin upang hanapin sa kompyuter ang mga layers na nais ilagay sa QGIS.

Maari ding "i-drag" o hatakin papasok sa interface ng QGIS ang mga vector, raster, at CSV files upang mabasa sila ng QGIS. Para sa mga CSV files, maari rin tingnan [ito](https://bnhr.xyz/2018/08/07/specifying-csv-data-types-using-a-csvt-file.html) kung paano siya ilagay sa QGIS bilang layer.

Para naman sa mga Spreadsheet files tulad ng mga gawa sa LibreOffice Calc o MS Excel, maaring gamitin ang Spreadsheet layers plugin na tinalakay [dito](https://bnhr.xyz/2018/07/27/plugin-fridays-spreadsheet-layers-plugin.html).

### Pagkonekta sa mga database
Para naman kumunekta sa isang database, maaring:
1. **Pindutin ang uri ng database (GeoPackage, Postgresql, atbp) sa Data Source Manager -> New**
2. **I-right-click ang uri ng the database sa Browser panel -> New connection**

Bubuksan nito ang isang dialog kung saan maaring ilagay ang mga detalye para kumunekta sa database.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/db-create1.png" alt="QGIS Data Source Manager Connect to PostgreSQL"></div>

<div class="row">
    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/db-create2.png" alt="QGIS Connect to PostgreSQL in the Browser"></div>

    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/db-create3.png" alt="QGIS Connect to Postgres dialog"></div>
</div>

### Pagkonekta sa mga Web Service (WFS, WMS)

Ang QGIS ay maari ring gamitin upang makakuha ng data mula sa mga online services o imbakan ng geospatial data. Ginagawa ito sa pamamagitan ng pagkonekta sa mga sites na nagbibigay WFS (World Features Service), WMS (World Mapping Service), at iba pang OGC-compliant web services.

Maaring kumunekta sa isang web service sa pamamagitan ng:
1. **Pindutin ang uri ng web service (WFS, WMS, atbp) sa Data Source Manager -> New**
2. **I-right-click ang uri ng the database sa Browser panel -> New connection**

Bubuksan nito ang isang dialog kung saan maaring ilagay ang mga detalye para kumunekta sa database.

Halimbawa, maari tayong kumunekta sa WMS service ng Philippine Geoportal. Ang url nila ay:
> http://geoserver.namria.gov.ph/geoserver/ows?version=1.1.1&

<div class="row">
    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/wms-new.png" alt="Connect to Philippine Geoportal WMS in QGIS Browser"></div>

    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/wms-pgp.png" alt="Connect to Philippine Geoportal WMS in QGIS success"></div>
</div>

Kapag matagumpay na nakakonekta sa WMS ng Philippine Geoportal, maari nang magamit bilang layer ang mga mapa nila.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/wms-succ.png" alt="Connected to Philippine Geoportal WMS in QGIS Browser"></div>

### Pagkonekta sa Geonode

Ang Geonode ay isang Content Management System para sa Geospatial na data. Pinapadali nito ang pag-imbak at pag-bahagi ng mga datos na maaring gamitin sa GIS. Sa 3.X na bersyon ng QGIS, mas madali na kumunekta sa mga website na nagpapatakbo ng GeoNode para makita at magamit ang mga datos na nakapaloob sa mga sites na ito.

Maaring kumunekta sa isang web service sa pamamagitan ng:
1. **Pindutin ang Geonode sa Data Source Manager -> New**
2. **I-right-click Geonode sa Browser panel -> New connection**

Ang Geonode ng World Food Programme (WFPGeonode) ay isang halimbawa ng Geonode site kung saan pwedeng kumunekta ang QGIS para makakuha ng data. Ang url nila ay:
> http://geonode.wfp.org/

<div class="row">
    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/geonode-wfp-new.png" alt="Connect to World Food Programme GeoNode in QGIS Browser"></div>

    <div class="col-lg-6 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/geonode-wfp.png" alt="Connect to World Food Programme GeoNode in QGIS success"></div>
</div>

Kapag matagumpay na nakakonekta sa Geonode ng World Food Programme, maari nang magamit sa QGIS ang mga layers at mapa nila.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2018-08-03-pagpapakilala-sa-qgis-ikalawang-parte/geonode-wfp-succ.png" alt="Connected to World Food Programme GeoNode in QGIS Browser"></div>


## Sa susunod na kabanata
At iyan ang munting pagpapakilala natin sa QGIS. Sana ay nabigyan kayo nito ng simple bagama't pangkalahatang pananaw sa kung ano ang QGIS. Sa mga susunod na lathala, mas bibigyan tuon at pansin natin ang mga partikular na kayang gawin ng QGIS at kung paano ito gamitin sa iba't ibang larangan.

Hangang sa muli! Tagay!
