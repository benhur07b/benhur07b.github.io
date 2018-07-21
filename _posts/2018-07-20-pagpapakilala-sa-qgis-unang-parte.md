---
layout: post
title: "Pagpapakilala sa QGIS: Unang Parte - Isang Marahang Pagpapakila sa GIS (Introduction to QGIS: Part 1 - A Gentle Introduction to GIS)"
description: Unang parte ng isang serye kung saan ipapakilala kung ano ang QGIS, ano ang mga kakayahan nito, paano ito gamitin, at marami pang iba. Sa parteng ito, tatalakayin at ipapakilala ang mas pangkalahatang paksa ng GIS.
tags: [foss4g, qgis, filipino, gis, map-projections]
pinned: true
comments: true
og_type: article
image:
    facebook: /media/bnhr-600px-wt.png
    twitter: /media/bnhr-600px-wt.png
---

Ito ay ang unang parte sa isang serye kung saan kikilalanin natin ang QGIS at kung anu-anong mga bagay ang maari nating gawin dito. Hindi naman ito bago. Napakaraming mga lathala sa internet kung saan maari tayong matuto tungkol sa QGIS. Halimbawa ay ang dokumentasyon at mga materyales sa [website ng QGIS mismo](https://qgis.org/en/site/forusers/index.html).

Siguro ang pinagkaiba nito ay isinulat ito sa wikang Filipino sa pagbabakasakali na mas madali itong maintindihan at mas maging kaaya-aya sa mga kapwa ko Pilipino at upang mas marami rin ang maenganyong magbasa at matuto tungkol sa QGIS at sa FOSS4G (Free and Open Source Software for Geospatial). Kayo ay malayang isalin ito sa inyong mga wika kung inyong nais. Paumanhin na din kung hindi ako ganun kagaling o katatas sa Filipino. Bikol (Ligao City represent!) ang pangunahing wika ko noong bata ako at mas nasanay na rin akong gumamit ng Ingles pagdating sa pagsusulat.

Ang unang parte na ito ay tatalakay sa mas pangkalahatang paksa ng Geographic Information Systems o GIS bago tayo tumungo sa QGIS sa mga susunod na parte. Ano nga ba ang mga pangunahing konsepta na kailangan nating matutunan tungkol sa GIS?


## Ano ang Geographic Information System (GIS)?

Ang Geographic Information System (GIS) ay isang sistema ng impormasyon kung saan ang gumagamit nito ay may kakayahang **```kumuha```**, **```magimbak```**, **```magbago```**, **```magmanipula```**, **```magsuri```**, at **```magpakita```** ng mga datos na may kaaikbat na impormasyon tungkol sa lokasyon na tinatawag ding ```geographically-referenced``` o ```spatially-referenced``` data. Ang GIS ay isang kagamitan na maaring gamitin upang sagutin ang ating mga katanungan na may kinalaman sa lugar o kaya ay lokasyon. Halimbawa: *```Ano ang pinaka-malapit na Jollibee sa bahay namin?```*, *```Ilan ang mga karinderya sa bayan namin?```*, *```Gaano kalayo ang paaralan ko sa mga ospital at istasyon ng pulis?```*


## Mga Parte at Tungkulin (Parts and Functions)

Karamihan ng mga modernong GIS ay mayroon ng mga sumusunod na parte at kayang gampanan ang mga sumusunod na tungkulin:

### Mga Parte o Sangkap ng GIS

* **```Hardware```**: Ito ay ang mga makinarya, instrumento, at iba pang aspetong pisikal (kompyuter, cellphone, atbp) na ginagamit upang magampanan ang mga tungkulin ng GIS.

* **```Software```**: Ito ay ang mga programs at applications (sa kompyuter, cellphone, o sa internet) na ginagamit upang magampanan ang mga tungkulin ng GIS.

* **```Method```**  Ito ay tumutukoy sa sining at siyensya sa likod ng GIS -- paano ginagawa ang mapa, mga pormyula sa pagsusuri, atbp.

* **```Data```**: Ito ay mga impormasyon na ginagamit sa GIS na maaring mayroon o walang kaakibat na lokasyon *(hal: pangalan ng tao, lokasyon ng bahay, lawak ng lupa, atbp)*.

* **```People (Tao)```**: Ito ang mga tao na marunong at may kakayahang gumamit ng GIS upang matugunan ang kanilang mga pangangailangan tulad ng mga siyentista, espesyalista, at mga gumagamit ng GIS para sa kanilang trabaho. Maari rin isama ang mga kaswal na gumagamit ng GIS bilang libangan o sa pansariling rason.

*```Sapagkat ang GIS ay isang sistema, hindi ito magiging matagumpay kung may kakulangan sa mga sangkap nito.```*

**Halimbawa:** Kahit mayroon tayong ng pinakabagong software kung hindi naman ito kayang patakbuhin ng kompyuter natin, hindi rin natin ito magagamit. Pwede rin na bago ang software at kompyuter natin ngunit hindi naman kumpleto o maganda ang datos na mayroon tayo kaya hindi rin magiging maganda ang kalalabasan ng pagsusuri gamit ang GIS. O kaya naman ay kumpleto ang software, hardware, at datos natin subalit wala sa atin ang may kakayahang gumamit ng GIS, di pa rin magiging matagumpay ang ating proyekto o kung ano man ang nais nating makamit gamit ang GIS.

Sa aking opinyon, ang tao na marahil ang pinaka-importanteng parte ng GIS. Kapag nagkaroon ng kakulangan sa ibang parte ng GIS, ang taong magaling at maalam sa GIS ay kayang punan ang kakulangan na ito gamit ang kanyang karunungan, karanasan, at pagkamalikhain.

### Mga Tungkulin ng GIS

Ang isang GIS ay dapat kayang:

* **```Kumuha```** ng datos mula sa tunay na mundo.

* **```Mag-imbak```** ng nakuhang datos sa makabuluhan at kapaki-pakinabang na digital formats.

* **```Baguhin```** ang datos kapag kinakailangan.

* **```Manipulahin```** at ihanda ang datos para sa pagsusuri o iba pang gamit.

* **```Suriin```** ang datos.

* **```Magpakita```** ng makabuluhan at kapaki-pakinabang na impormasyon sa pamamagitan ng mga mapa, mga tsart, mga kompyutasyon, at iba pang biswalisasyon.


## Mga Uri ng Data (Data Types)

### Spatial Data
Ang **```spatial data```** ay tumutukoy sa datos na may kaakibat na impormasyon tungkol sa:
* **```Lokasyon o lawak```** ng bagay o pangyayari *(hal: lokasyon ng poste, lugar na may mga panganib ng baha)*

* **```Katanginan```** ng bagay o pangyayari *(hal: tangkad ng poste, antas ng panganib ng baha sa lugar)*

* **``Relasyon``** ng mga bagay o pangyayari sa isa't isa *(hal: ano ang magkadikit na bayan, gaano kalayo ang dalawang bahay)*

Ang spatial data ay ginagamit upang kumatawan ng mga bagay o pangyayari sa loob ng GIS. May **```dalawang uri```** ng spatial data na maaring gamitin sa pagmodelo ng mga bagay o pangyayari sa GIS: ang **```raster data```** at **```vector data```**.

### Raster Data Type

Ang raster data ay isang **```cell-based o pixel-based```** na pagkatawan ng mga bagay o pangyayari sa mundo. Ito ay binubuo ng mga hanay at haligi ng mga cells o pixels kung saan ang bawat cell ay kumakatawan sa isang geograpikal na rehiyon (ang laki nito ay depende sa resolusyon ng raster) habang ang halaga naman sa cell ay kumakatawan sa kondisyon o katangian ng rehiyon na nasasakupan ng cell.

<div class="col-lg-6 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/raster.png" alt="Raster"></div>

Ito ay maihahalintulad sa isang chess board kung saan ang mga parisukat ay ang mga cells/pixels at ang mga pyesa na nakatayo sa parisukat ay ang halaga ng cell/pixel na yun.

Ang raster data ay mainam gamitin sa GIS kapag ang impormasyon na nais nating ipakita o i-representa ay tuloy-tuloy (continuous) sa isang lugar at hindi madaling ipakita sa papamagitan ang punto, linya, o hugis. Halimbawa nito ay ang hugis at taas ng mga lupain, temperatura, o kaya panganib (risk). Isa rin sa pinaka-karaniwang halimbawa ng raster data ay ang mga larawan tulad ng satellite images o mga topographic maps na madalas gamitin bilang basemaps.

Upang mailagay ng GIS ang isang raster sa tamang lokasyon nito, dapat ay **```georeferenced```** ito. Ang **```georeferencing```** ay isang proseso ng pagtatakda kung saan sa mundo mahahanap ang isang raster. Karamihan sa mga modernong GIS ay may mga kakayahang gawin ito. Ang isang **```georeferenced```** na raster ay mayroong kaakibat na impormasyong ispasyal o sa madaling salita, alam ng raster ang aktwal na lokasyon (coordinates) ng mga cells nito sa tunay na mundo. Ang impormasyon na ito ay kasama ng raster data at ginagamit upang siguraduhin na kapag binuksan ang raster sa GIS, it ay lalapat sa tamang lokasyon nito sa mundo o mapa. Mahalaga rin na georeferenced ang iyong rasters kung mayroon kang mga imahe na nais mong pagtagpi-tagpiin upang makabuo ng mas malaking imahe ng isang lugar. Halimbawa ay mayroon kang mga imahe ng iba't ibang barangay sa isang munisipyo, kung maayos ang pagka-georeference sa mga imaheng ito, kapag binuksan mo sila sa GIS ay kaya nilang buuin ang imahe ng munisipyo at hindi sila magpapatong-patong sa isa't isa (na tulad ng mangyayari pag binuksan sila sa ibang applikasyon tulad ng Photoshop).

Ang **```resolusyong ispasyal```** o **```spatial resolution```** ng raster ay tumutukoy sa laki ng lugar na nasasakop ng isang pixel. Ang raster na may **```mataas na resolusyong ispasyal```** (high spatial resolution) ay kayang kumatawan sa maliliit na lugar *(hal: 1 metro kada pixel)* at maaring gamitin sa mga pag-aaral na kailangan ng mataas na detalye habang ang raster na may **```mababang resolusyong ispasyal```** (low spatial resolution) ay kumakatawan sa mas malalaking lugar *(hal: 1 km kada pixel)*.

Ang pagpili kung anong resolusyon ng raster ang dapat gamitin ay nakadepende sa iba't ibang batayan tulad ng **```storage o imbakan```**, **```bilis at lakas ng kompyuter```** na magpoproseso ng raster, at ng **```pinakamaliit na bagay o pangyayari```** na kailangang sukatin o obserbahan mula sa raster. Sapagkat ang raster ay pixel-based, **```ang raster na may mas mataas na resolusyong ispasyal ay may mas malaking file-size kumpara sa isang raster na may mababang resolusyong ispasyal```** kahit na parehong lugar, bagay, o pangyayari ang ipinapakita nila. Ito ay dahil kahit parehong lawak ng lupa ang ipinapakita ng dalawang raster, mas marami ang pixel ng may mataas na resolusyong ispasyal kaysa sa isang mababa ang resolusyong ispasyal. Bilang isang pamantayan, ang **```resolusyong ispasyal na gagamitin ay dapat na dalawang beses (2 times) o mahigit na mas mataas kaysa sa bagay o pangyayaring nais sukatin o obserbahan```** *(hal: kung nais nating obserbahan ang mga bagay na 10 metro ang laki, gagamit tayo ng raster na may 5 metrong resolusyong ispasyal)*.

Kapag ang isang kamera o sensor ay kumukuha ng larawan ng isang eksena o lugar, kinukuha nito ang impormasyon kung ano ang tugon (response) ng iba't ibang haba ng daluyong (wavelength) ng ilaw (light) o iba't ibang bahagi ng spectrum ng ilaw. Ang mga bahagi ng spectrum ng ilaw ay pwedeng hatiin sa mga bands kung saan ang isang band ay tumutukoy sa isang saklaw ng wavelengths *(hal: Bughaw ay 450-520 nm, Berde ay 520-600 nm, Pula ay 600-690 nm)*. Kapag ang isang raster ay may impormasyon sa mas higit pa sa isang band, ito ay tinatagawag na **```multi-spectral```** na imahe. Ang mga **```multi-spectral```** na imahe ay mahalaga sapagkat ang mga bands ng ilaw ay maaring gamitin sa pag-obserba ng iba't ibang bagay. Halimbawa, ang infrared band ay maaring gamitin sa pagmamapa ng tubig. Maliban dito, ang mga kombinasyon ng mga bands ay maaring gamitin sa iba't ibang uri ng pagsusuri tulad ng pagtukoy ng kalusugan ng mga puno o kagubatan. Ang magkakaibang kombinasyon ng mga bands ay nagreresulta din sa magkakaibang kulay ng imahe. Ang **```Pula-Berde-Asul```** (Red-Green-Blue or RGB) na kombinasyon ay tinatawag na **```True-color composite```** sapagkat ang kulay ng imaheng nagagawa gamit ang kombinasyon na ito ay pareho sa kulay na nakikita natin sa totoong buhay. Ang ibang mga kombinasyon ay tinuturing na **```False-color composites```** *(hal: BGR, GRB, atbp)* at mayroon silang kanya-kanyang gamit.

Ang bilang ng bands na mayroon ang isang imahe ay tinatawag na **```resolusyong ispektral```** (spectral resolution). Mas madami ang bands, mas mataas ang resolusyons ispektral. Kapag mayroon lamang isang band ang isang imahe, ito ay tinatawag na **```panchromatic```** o **```grayscale```**. Kadalasan ay mas mataas ang resolusyong ispasyal ng isang panchromatic na imahe kaysa sa multi-spectral na imahe na nagmula sa parehong sensor. Para sa mga panchromatic o grayscale na imahe, gumagamit ng false coloring upang lagyan ito ng kulay imbis na gumamit ng kumbinasyon ng mga bands. Ang panchromatic at multi-spectral na mga imahe ay pwede ding pagsamahin gamit ang prosesong tinatawag na **```pansharpening```** upang makabuo ng isang imaheng may kulay na mataas ang resolusyong ispasyal.

### Vector Data Type

Ang vector ay kumakatawan sa mga bagay o pangyayari hindi bilang mga pixels ngunit bilang mga **```punto, linya, o hugis```** (points, polylines, or polygons). Mayroon ding kaakibat na **```attribute table```** ang vector data. Ang **```attribute table```** na ito ay nagbibigay karagdagang impormasyon tungkol sa mga punto, linya, o hugis na mayroon sa vector data. Bawat hilera (row) sa attribute table ay kumakatawan sa isang hugis sa vector data habang ang mga hanay (column) sa attribute table ay ang mga **```fields o attributes```** na nagtataglay ng impormasyon tungkol sa punto, linya, o hugis.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/vector.png" alt="Vector file ng mga probinsya sa Pilipinas"></div>

**Halimbawa:** sa larawan sa taas, mayroon tayong isang vector file ng mga probinsya ng Pilipinas na binubuo ng mga hugis. Sa kanan ay makikita ang kaakibat na attribute table nito. Ang unang hilera na naka-highlight at kumakatawan sa probinsya ng Cagayan na ang hugis ay naka-highlight din sa mapa. Ang mga hanay o impormasyon na nakalagay sa attribute table ay ang ISO code ng bansa (ISO), pangalan ng bansa (Country), pangalan ng probinsya (Province), Uri (Type), Philippine Standard Geographic Code (PSGC), kita ng probinsya (Income), at populasyon ng probinsya ayon sa 2015 census (Pop2015).

Kumpara sa raster data na mainam para sa mga tuloy-tuloy (continuous) na bagay, ang vector data ay mainam gamitin upang kumatawan ng mga bagay na tiyak (discrete) tulad ng sukat ng mga lupain, mga hugis ng gusali, mga pagkakahating administratibo (barangay, munisipyo, probinsya, rehiyon, atbp), at mga indibidwal na bagay tulad ng mga daanan, ilog, lawa, atbp.

Kapag gagamitin ang punto upang kumatawan ng mga bagay, kailangang isaalang-alang ang scale (gaano ka kalayo mula sa bagay), dali ng pagproseso (mas mabilis at mas konti ang kailangan sa paggawa ng punto kaysa hugis), at ang uri ng bagay na kakatawanin *(hal: minsan ay mas maayos na gumamit ng punto sa pagkatawan ng mga poste kaysa hugis)*. Pagdating naman sa mga linya, mainam itong gamitin para sa mga bagay tulad ng mga daanan, ilog, contours, atbp. Ang mga hugis naman ay ginagamit para sa mga bagay o lugar kung saan importanteng makita o malaman ang lawak, laki, o hugis katulad ng kagubatan, mga lawa, o mga teritoryo at pagkakahating administratibo.

Minsan, kinakailangan din ng mga espesyal na alituntunin na dapat sundin ng mga vectors upang siguraduhin ang pagiging tama nito. Halimbawa, ang mga contours sa isang contour map ay hindi pwedeng magbanggaan o kaya hindi pwedeng magpatong ang nasasakupan ng dalawang barangay o ng dalawang piraso ng tituladong lupa. Para siguraduhin na sinusunod ang mga alituntunin na ito, gumagamit ang GIS ng mga tinatawag na **```topology rules```**.


## Map Projections at Coordinate Reference Systems

### Iskala (Scale)

Kapag tayo ay gumagawa ng mapa, hindi natin maiiwasan na paliitin ng mga bagay upang magkasya sila sa loob ng mapa. Dahil dito, ang sukat ng mga bagay sa mapa ay hindi pareho sa aktwal na sukat nila. Upang matugunan ito, gumagamit tayo ng **```iskala```** (map scale) upang malaman kung ano ang proporsyon sa pagitan ng sukat sa mapa at ang katumbas na aktwal na sukat. May tatlong paraan na karaniwang upang ipakita ng iskala ng mapa: gamit ang isang **```panumbasan```** (ratio scale o representative fraction), gamit ang isang **```grapikong iskala```** (graphic scale), at gamit ang **```berbal na iskala```** (verbal scale).

<div class="col-lg-6 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/scale.png"></div>

**```Panumbasan```** o **```Representative Function```** - Ito ay pinaka-madalas gamitin na iskala kung saan ipinapakita ang iskala bilang isang panumbasan (ratio). Laging 1 ang unang numero at ang pangalawang numero ay kumakatawan sa kung gaano mas malaki ang akwtal na sukat sa mundo kaysa sa sukat sa mapa. Halimbawa, sa 1:50,000 na panumbasan, ang isang yunit sa mapa ay katumbas ng 50,000 na yunit sa lupa kahit anong yunit pa ang gamitin -- ang 1 sentimetro sa mapa ay 50,000 sentimetro sa lupa, ang 1 pulgada sa mapa ay 50,000 na pulgada sa lupa, atbp.

**```Grapikong Iskala```** o **```Graphical Scale```** - Ito ay grapikal na pagpapakita ng sukat sa mapa. Isa sa mga benebisyo nito ay maari itong gamitin kahit na paliitin o palakihin ang mapa.

**```Berbal na Iskala```** o **```Verbal Scale```** - Ito ay berbal na paglalahad ng iskala sa mapa. Halimbawa: "ang 1 sintemetro ay katumbas ng 1 kilometro".

Ang isang mapa ay masasabing mayroong malaki o maliit na iskala. Bilang pamantayan, **```kapag mas malaki ang iskala ng mapa ay mas marami na detalye itong kayang ipakita```**.

**Halimbawa:** mayroon tayong mapa na kasing laki ng isang short bond paper (8.5 pulgada lapad at 11 pulgadan haba). Pwede nating imapa dito ang buong Pilipinas at sabihin nating 1:1,000,000 ang iskala nito. Sa ganitong mapa, maaring hindi natin makita ang mga detalye tulad ng mga gusali sa isang barangay. Pero kung imamapa natin sa parehong papel ang UP Campus at kunwari ay may iskala ang mapa na ito na 1:10,000, maaring maipakita natin sa mapang ito ang mga gusali at iba pang detalye sa lugar. Ang mapa ng Pilipinas ay masasabi na maliit ang iskala habang ang mapa ng UP Campus ay masasabing malaki ang iskala.

Isang paraan upang ikumpara ang iskala ng dalawang mapa na pareho ang sukat ay sa pamamagitan ng panumbasan nito. **```Ang panumbasan na mas maliit ay yung mas malaki ang denominator (o yung pangalawang numero)```** kaya sa ating halimbawa ang 1:1,000,000 ay mas maliit na iskala kaysa sa 1:10,000.

### Map Projections

Ang globo ang tradisyunal na paraan upang ilarawan ang hugis ng mundo. Subalit, kahit na kayang mapanatili ng globo ang karamihan ng mga katangian ng mundo, sila ay mahirap dalhin at magagamit lamang sa maliliit na iskala. Upang matugunan ito, ginawa ang mga **```map projections```** upang mailagay ang mga lugar sa globo sa isang mapa.

Ang **```map projections```** ay ginagamit upang ilatag ang ibabaw ng **```bilog na mundo```** o kaya ang isang bahagi nito sa isang **```patag```** (flat) na lalagyan *(hal: papel, screen ng kompyuter, mapa)*. Sa ibang salita, binabago ng map projections ang hugis ng mundo mula sa isang tatlong-dimensyunal (three-dimensional) na hugis (spheroid) patungo sa isang dalawang-dimensyunal (two-dimensional) na hugis (patag). Isang paraan upang mas mailarawan ang pangyayaring ito ay kung ihahalintulad natin ang mundo sa isang dalandan. Kapag ang dalandan ay binalatan, ang balat nito ay maaring ilatag na patag.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/dalandan.png"></div>

Ngunit dahil sa pagiging "spheroidal" o "bilugan" ang hugis ng mundo, **```imposibleng mailatag ng walang kamalian ang bawat punto sa mundo sa isang patag.```** Tingnan ang larawan ng dalandan, hindi naging perpektong patag ang kinalabasan nung binalatan ito. Ganito rin ang mangyayari kung tangkain nating balatan ang isang globo at gawing patag.

Mayroong mga suliranin na kakaharapin kapag pilit nating gawing patag ang balat ng dalandan:
* **```Pagkabanat```**(Shearing) - ang paghaba ng balat sa isa o higit pang direksyon

* **```Pagkawasak```**(Tearing) - ang paghiwa-hiwalay ng balat

* **```Pagsiksik```**(Compressing) - ang pagbungkos at pagliit ng balat

Dahil dito, **```ang bawat mapa ay may kamalian (distortion) sa mga sumusunod na katangian: hugis (angular conformity), sukat (area), distansya (distance), o direksyon (direction) ng mga bagay sa mundo```**. Ang isang map projection ay maaring perpektong maglarawan ng isang katangian kapalit ng kamalian sa ibang katangian o kaya ay gumamit ng isang kompromiso kung saan ang mali sa mga katangian ay binabalanse at pinapanatiling katangap-tangap. Sa pagpili ng map projection na gagamitin, kailangan isaalang-alang ang uri ng pagsusuri na gagawin. **Halimbawa:** kung ang nais natin ay sukatin ang distansya, mainam na gumamit ng map projection na papanatilihing tama ang sukat ng distansya sa mapa.

May iba-ibang tawag sa mga map projections depende sa katangian na pinapanatili nila:

* **```Conformal o Orthomorphic```** ang tawag sa mga map projections na pinapanatili ang katangian ng hugis (angular conformity). Madalas itong gamitin sa mga mapang pang-nabigasyon o pang-meteorolohikal. Pinapanatili nito ang hugis sa mapa *(hal: ang bilog sa ibabaw ng mundo ay mananatiling bilog pag sinalin sa mapa)* ngunit mali ang makukuhang sukat ng lawak o area dito. Pag mas malawak ang lugar, mas malaki din ang kamalian.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/conformal.png"></div>

Kung papansinin ang mapa ng **Tissot indicatrix** ng isang mapang conformal, makikita na ang **bilog ay nananatiling bilog** subalit ito ay **lumalaki habang papalayo sa ekwador**.

* **```Equal-area o Authalic```** naman ang tawag sa mga map projections na pinapanatiling tama ang proporsyon ng area o laki ng mga bagay na minamapa. Kapag kailangang panatilihin o sukatin ang lawak ng isang lugar, equal-area map projection ang nararapat gamitin. Sa ganitong uri ng map projection, kapag mas malaki ang area na sinusukat, mas eksakto din ang nakukuhang sukat.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/equal-area.png"></div>

Kung papansinin ang mapa ng **Tissot indicatrix** ng isang mapang equal-area, makikita na **hindi nanatiling bilog** ang hugis subalit nagiging parang oblong upang **mapanatili ang area** ng hugis.

* **```Equidistant```** ang mga map projections kung saan tama ang sukat ng distanya sa mga linyang nagmumula sa isa o dalawang punto sa mapa o kaya naman ay may tamang sukat ng distansya (at parehong iskala) sa isa o maraming linya (pahiga o patayo) sa mapa. Ito ay madalas gamitin sa mga mapang pang-radyo at nabigasyon. Sa katotohanan ay hindi kayang panatilihin ng kahit anong map projection ang tamang sukat ng distansya para sa lahat ng punto sa mapa kaya't ang mga equidistant na map projections ay napapanatili lang ang distansya sa mga partikular na linya o direksyon.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/equidistant.png"></div>

Kung papansinin ang mapa ng **Tissot indicatrix** ng isang mapang equidistant, makikita **pareho ang tangkad ng mga hugis** kahit na iba-iba ang **hugis at area** nila. Ibig sabihin ay napapanatili ang sukat ng distansya sa mga meridian o mula sa north pole hanggang south pole.

* **```Azimuthal```** ang mga map projections kung saan napapanatiling tama ang direksyon (azimuth) mula sa isa o dalawang punto sa mapa patungo sa lahat ng iba pang punto sa mapa. Mainam itong gamitin sa pagmamapa ng ruta ng eroplano o barko papunta sa iba't ibang paliparan o daungan.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/azimuthal.png"></div>

Kung papansinin ang mapa ng **Tissot indicatrix** ng isang mapang azimuthal, makikita na **kahit hindi pare-pareho ang hugis at area** ay puro **nakatutok ang mga bilog sa sentro ng projection** (ang meridian sa gitna).

* **```Aphylactic o Compromise```** ang mga map projections na hindi nagpapanatili ng isa sa mga katanginang nabanggit subalit mas pinipiling mapanatiling maliit ang kamalian (distortion) sa mga katangian ng mapa.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/compromise.png"></div>

Maliban sa katangiang pinapanatili ng isang map projection, maaari din hatiin ang map projectsions ayon sa **```developable```** surface na ginamagit nito. Masasabing ang isang surface ay **```developable kung maaari itong gawing patag nang walang halong distortion (pagkabaluktot o kamalian)```**. Ang mga madalas na ginagamit sa map projections ay:

* **```Silindro o Cylinder```** - ang mga meridian (longitude) at parallels (latitude) ay tuwid at nagkakasalubong sa right angle (90 degrees). Pare-pareho ang layo ng mga meridians sa isa't isa.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/cylinder.png"></div>

* **``Apa o Cone```** tuwid ang mga meridians na patungo sa isang punto sa poles. Ang mga parallel ay higis arko.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/cone.png"></div>

* **``Patag o Plane```** - ang mga meridian ay tuwid at patungo sa isang punto. Ang mga parallels ay hugis bilog imbis na arko.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/plane.png"></div>

* **```Pseudo-cylindrical```** - sa pseudo-cylindrical na map projection, ang sentral na meridan at ang mga parallels ay tuwid habang ang ibang meridian ay mas mahaba sa sentral na meridian at naka-arko palabas.

* **```Pseudo-conic```** - sa pseudo-conic na map projection, ang mga parallel ay hugis arko habang ang mg meridian ay nakakurba.

Isa pang paraan ng pag-uuri sa mga map projections ay ayon sa **```aspeto```** (aspect) nito. Ang aspeto ay tumutukoy sa kung **```paano inilalagay ang developable surface sa globo```**: **```Normal```**, **```Transverse```**, at **```Oblique```**.

<div class="col-lg-12 img-container"><img class="img-responsive post-img img-shadow" src="{{ site.baseurl }}/media/posts/2018-07-20-pagpapakilala-sa-qgis-unang-parte/aspects.png"></div>

### Coordinate Reference Systems

Ang coordinate reference system (CRS) ay tumutukoy, sa pamamagitan ng mga coordinates, kung saan sa mundo matatagpuan ang isang bagay. Ito ay maaring hatiin sa dalawang uri: ang Geographic CRS at ang Projected CRS.

Ang **```Geographic CRS```** ay gumagamit ng latitude at longitude upang tukuyin ang lokasyon ng isang bagay sa mundo. Ang mga latitude ay mga linyang pahiga na kahilera ng ekwador (na humahati sa mundo sa timog at hilagang bahagi) at hinahati ang mundo sa 180 na parte -- 90 sa hilaga at 90 sa timog. Ang longitude naman ay mga linyang patayo na perpendikular sa ekwador at nagsisimula sa mga poles. Hinahati nila ang mundo sa 360 na bahagi -- 180 sa silangan at 180 sa kanluran.

Ang **```Projected CRS```** ay gumagamit ng easting (X) at northing (Y) upang tukuyin ang lokasyon ng isang bagay sa mundo. Kumpara sa Geographic CRS, ang mga yunit na gamit sa Projected CRS ay kayang direktang masukat sa lupa tulad ng metro, talampakan, atbp kaya madalas itong gamitin para sa mga trabahong kailangang magsukat sa ganitong mga yunit.

Ang pagpili ng gagamiting CRS ay madalas nakasalalay sa lawak ng rehiyon na nais i-mapa, ang klase ng pagsusuri na gagawin, at ang datos na mayroon.

Isa sa mga pinaka-ginagamit na CRS ay ang WGS 84 Geographic Coordinates (EPSG: 4326) na siya ring ginagamit na coordinate reference system ng Global Positioning System o GPS. Sa Pilipinas, ang mga madalas gamitin na CRS ay ang PRS 92 (Philippine Reference System of 1992) at WGS84/UTM (Universal Transverse Mercator) Zone 51 N (EPSG: 32651) na parehong Projected Coordinate System.

Ang **```EPSG (European Petroleum Survey Group)```** ay isa sa mga organisasyon na may koleksyon o rehistro ng iba't ibang Coordinate Reference System sa mundo. Ang EPSG Code ay ang ginagamit nila upang tukuyin ang isang Coordinate Reference System. Ang mga CRS sa rehistro ng EPSG ay may kanya-kanyang code na gamit tulad ng 4326 para sa WGS84 at 4995 para sa PRS 92 3D Geographic. Ang mga codes na ito ay madalas din makita at gamitin sa GIS. Maaring makita ang rehistro [dito](https://www.epsg-registry.org/).

### On-the-Fly Projection

May mga pagkakataon na ang datos na mayroon tayo ay magkakaiba ang coordinate reference system.

**Halimbawa:** maaring mayroon tayong mapa ng isang munisipyo na naka PRS92 (metro) habang ang mapa naman ng panganib ng baha sa parehong munisipyo ay nasa WGS84 (degrees). Kung ang dalawang bagay na ito ay imamapa ayon lamang sa kanilang coordinates, hindi sila maglalapat sapagkat magkaiba ang CRS nila. Upang solusyunan ito, karamihan ng GIS ay may tinatawag na **```On-The-Fly Projection/Coordinate Transformation```** kung saan ang mga mapa na ipapasok sa GIS ay ilalagay sa isang Coordinate Reference System na pinili ng user kahit na iba ang CRS na gamit ng mapa. Sa pamamagitan nito, sinisigurado ng GIS na ang mga mapa ng isang lugar ay maglalapat kahit na iba ang kanilang CRS.

Ngunit dapat pa rin alalahanin na kahit nagmimistulang magkapatong ang mga mapa sa GIS dahil sa On-the-Fly Projection, sa katotohan ay hindi sila magkapatong dahil magkaiba ang CRS nila. Kaya kapag gumawa ng mga pagsusuri at gawaing ispasyal tulad ng pagkuha ng interseksyon ng dalawang mapa ay maaring hindi tama ang maging resulta.


## Mga Gamit at Aplikasyon ng GIS

Ang kagandahan at galing ng GIS ay makikita sa dami ng mga disiplina kung saan maari itong gamitin.

Hindi nakakahon ang GIS para sa mga geographikal at pang-kapaligiran na mga pag-aaral at gawain. Marami din itong gamit at maiiambag sa mga larangan tulad ng arkiyolohiya, militar, enerhiya, paggawa ng polisiya, pagpaplano ng wastong gamit ng lupa at iba pang natural na yaman, at marami pang iba.

Ako mismo ay ginamit ko ang GIS sa pagsusuri at pag-aaral ng basketball.

Madalas ngang sinasabi na: **```80% ng mga datos ay may kasamang geographikal o ispasyal na sangkap```** at ang GIS ay isang kagamitan upang makuha at magamit ng wasto ang geograpikal at ispasyal na sangkap na ito mula sa data.


## Mga Aabangan

Sana ay may ideya na kayo ngayon kung ano ang GIS at ang ibang mga konsepto na kaakibat ng GIS. Sa mga susunod na parte ng seryeng ito ay mas pagtutuunan na natin ng pansin ang QGIS -- ano ba ito, paano ito gamitin, atbp.



## Mga Batayan at Pinagkunan
[GEOG 160: Mapping Our Changing World. Department of Geography, Pennsylvania State University. _Chapter 2.3 What are Map Projections?_](https://www.e-education.psu.edu/geog160/node/1918)

[Map Projections: Mapping Definisions and Concepts. Carlos A. Furuti.](http://www.progonos.com/furuti/MapProj/Normal/CartDef/MapDef/mapDef.html)

[Mapping, Society, and Technology. Stephen Manson. _Chapter 3: Scale and Projections by Laura Matson and Malinda Kernik._](http://open.lib.umn.edu/mapping/chapter/3-scale-and-projections/)

[QGIS User Guide.](http://docs.qgis.org/testing/en/docs/user_manual)
