---
layout: post
title: Using Custom Splash Screens in QGIS
description: QGIS is one of the most customizable GIS out there (being FOSS ensures that) but did you know that you can also easily customize its splash screen? Read on to learn how.
tags: [foss4g, qgis, qgis3, qgis3.14]
pinned: false
comments: true
og_type: article
image:
    facebook: /assets/img/posts/2020-09-05-custom-splash-screen-qgis/main.webp
    twitter: /assets/img/posts/2020-09-05-custom-splash-screen-qgis/main.webp
---
<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-09-05-custom-splash-screen-qgis/main.webp'><figcaption class='figure-caption text-center'>QGIS with custom splash screen</figcaption></div>

QGIS is easily one of the most customizable GIS out there. You can customize the look and feel of the GUI from the theme, visible toolbars and panels, font used, and even add hats to the QGIS logo but did you know that you can also customize the splash screen that shows when QGIS starts up? Yup. With just a few steps, you can have QGIS running a custom splash screen similar to the image above. Here's what you need to do:

## Activate Interface Customization
**THIS IS VERY IMPORTANT**. You need to activate Interface Customization in order for the custom splash screen to work. To do this:
1. Go to the Interface Customization dialog via **Settings -> Interface Customization** in the Menu bar.
2. Check/tick **[x] Enable Customization**.
3. Click **OK**.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-09-05-custom-splash-screen-qgis/enable-custom.gif'><figcaption class='figure-caption text-center'>Enable Interface Customization in QGIS</figcaption></div>

## Edit the QGISCUSTOMIZATION3.ini file
Activating Interface Customization will create a **QGISCUSTOMIZATION3.ini** file under the **QGIS** folder of the current active profile. You can locate this file by opening the **Active Profile Folder** via **Settings -> User Profiles -> Open Active Profile Folder** in the Menu bar. If a **QGISCUSTOMIZATION3.ini** does not exist, that usually means that Interface Customization is not activated for the User Profile. 

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-09-05-custom-splash-screen-qgis/custom-ini.gif'><figcaption class='figure-caption text-center'>Find the QGISCUSTOMIZATION3.ini</figcaption></div>

Add the following line under [Customization] in the QGISCUSTOMIZATION3.ini file:
```shell
splashpath=/path/to/custom/splash/
```

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-09-05-custom-splash-screen-qgis/custom-ini.png'><figcaption class='figure-caption text-center'>Edit the QGISCUSTOMIZATION3.ini</figcaption></div>

Save the QGISCUSTOMIZATION3.ini file.

The **/path/to/custom/splash/** is the path to the **folder/directory** that holds the custom splash screen. Take not that it's the path to the folder/directory and not to the file itself. The example above is for a UNIX/Linux system. For **Windows** use a **double backslash (\\\\)** for the path. For example: **C:\\\\Users\\\\Me\\\\Pictures\\\\**.

**NOTE:** Interface Customization is activated in a per-User Profile basis which means that the customizations you did for one profile will not appear in another profile. So if you want to apply a custom splash screen to all user profiles, you need to activate Interface Customization and edit the file of each User Profile. I think you can also just copy-paste the QGISCUSTOMIZATION3.ini files as long as Interface Customization is activated.

**NOTE:** To be safe, make a backup of the QGISCUSTOMIZATION3.ini file before editing it.

## Create a Custom Splash Screen
The custom splash screen should be:
1. Located in the specified path in the QGISCUSTOMIZATON3.ini file.
2. **600x300 pixels** in size.
3. Named **splash.png** (PNG format is required)

If you did everything right, QGIS should be able to see a custom splash screen the next time you open QGIS. Have fun!

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-09-05-custom-splash-screen-qgis/custom-splash-0.gif'><figcaption class='figure-caption text-center'>Running QGIS with a custom splash screen</figcaption></div>

<br>
Hat-tip to [Totò Fiandaca](twitter.com/totofiandaca) for the original post [here](https://pigrecoinfinito.com/2020/08/02/personalizzare-lo-splashscreen-di-qgis/).