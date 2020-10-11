---
layout: post
title: Add Orfeo ToolBox (OTB) processing provider in QGIS
description: Orfeo ToolBox (OTB) is an open-source project for state-of-the-art remote sensing. You can harness its power in QGIS by adding it as a processing provider.
tags: [foss4g, qgis, qgis3, qgis3.14, orfeo toolbox, otb, remote sensing]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/main.png
    twitter: /img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/main.png
---

## What is Orfeo ToolBox or OTB?
>
> From [orfeo-toolbox.com](https://orfeo-toolbox.com): 
>
> "Orfeo ToolBox (OTB) is an open-source project for state-of-the-art remote sensing. Built on the shoulders of the open-source geospatial community, it can process high resolution optical, multispectral and radar images at the terabyte scale. A wide variety of applications are available: from ortho-rectification or pansharpening, all the way to classification, SAR processing, and much more!"
> 

For those who aren't familiar with Orfeo ToolBox or OTB, it's a powerful open-source remote sensing library that allows you to manipulate and process remote sensing (RS) data in several ways. If you're interested to learn what remote sensing applications OTB has to offer, the [OTB CookBook](https://www.orfeo-toolbox.org/CookBook/Applications.html) is a good place to start. OTB is cross-platform and works in Linux, macOS, Windows and is a great choice if you're looking for an application to add to your RS toolkit.

OTB's algorithms can be accessed from a variety of sources: in Monteverdi, in Python, from the command line, in C++, and even in QGIS. To access OTB's algorithms in QGIS, we need to activate OTB as a Provider under the **Processing Options**. 

## Download and Install OTB on your machine

1. Download [OTB for your operating system](https://www.orfeo-toolbox.org/download/) and follow the [installation instructions](https://www.orfeo-toolbox.org/CookBook/Installation.html). The latest version is OTB 7.2.0.
2. Note that different operating systems have different installation procedures but they mostly require extracting an archive that holds OTB.
3. Take note of the location where you installed / extracted OTB. You will need this for activating it as a processing provider in QGIS. I run a Linux machine and have it installed under **~/tools/OTB/OTB-7.2.0-Linux64**. The OTB application folder which holds the OTB applications is found in **~/tools/OTB/OTB-7.2.0-Linux64/lib/otb/applications**.

<div class="row">
<div class="col-lg-5 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-installation.png" alt="The Orfeo ToolBox installation folder on Linux"><figcaption class="figure-caption text-center">The OTB installation folder</figcaption></div>

<div class="col-lg-7 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-installation-2.png" alt="Contents of the Orfeo ToolBox installation folder"><figcaption class="figure-caption text-center">Contents of the OTB installation folder</figcaption></div>
</div>

## Activate OTB in the Processing Options

1. Go to the **Processing Options** via **Settings -> Options -> Processing Tab** from the Menu bar. You can also access this by opening the Processing Toolbox (**Processing -> Toolbox** or **CTRL + ALT + T**) and clicking the **Options** button (**wrench icon**).
2. Go to **Providers** and expand the **OTB** tab.
3. Tick the **Activate** button.
4. Set the **OTB folder**. This is the location of your OTB installation or the OTB folder that you extracted from the archive. For me, it's **~/tools/OTB/OTB-7.2.0-Linux64**. If you don't want to type the location, you can just browse and select it from the dialog.
5. Set the **OTB application folder**. As mentioned previously, this is found under **PATH_TO_OTB_INSTALLATION_FOLDER/lib/otb/applications**. Again, you can just browse and select this location.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-1.gif" alt="Open Orfeo ToolBox provider settings from QGIS menu bar"><figcaption class="figure-caption text-center">OTB provider settings from Menu bar</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-2.gif" alt="Open Orfeo ToolBox provider settings from QGIS processing toolbox"><figcaption class="figure-caption text-center">OTB provider settings from Processing Toolbox</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-providers.png" alt="Orfeo ToolBox provider options in QGIS"><figcaption class="figure-caption text-center">OTB processing provider options</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-providers-2.png" alt="Filled up Orfeo ToolBox provider options in QGIS"><figcaption class="figure-caption text-center">Filled up OTB processing provider options</figcaption></div>

## Use the OTB algorithms in QGIS
Upon successfully adding OTB as a processing provider, you should now be able to find and run OTB algorithms in QGIS either from the Processing Toolbox or searching for them using the Locator.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-pt.png" alt="Orfeo ToolBox algorithms in the QGIS processing toolbox"><figcaption class="figure-caption text-center">Orfeo ToolBox algorithms in the QGIS processing toolbox</figcaption></div>

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-11-add-orfeo-toolbox-processing-provider-qgis/otb-3.gif" alt="Orfeo ToolBox algorithms in QGIS"><figcaption class="figure-caption text-center">Orfeo ToolBox algorithms in QGIS</figcaption></div>

And that's how you add Orfeo ToolBox as a processing provider in QGIS. Like and follow BNHR on [Facebook](https://facebook.com/bnhr.xyz) and [Twitter](https://twitter.com/BNHRdotXYZ) for more #FOSS4G and #QGIS stuff. :)