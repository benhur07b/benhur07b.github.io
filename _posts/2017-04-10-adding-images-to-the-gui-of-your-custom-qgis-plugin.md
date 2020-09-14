---
layout: post
title: "Adding images to the GUI of your custom QGIS 2.X plugin with Qt Designer"
description: Who wouldn't want to put a logo or a cute kitten image on their QGIS plugin?
tags: [qgis, foss4g, python]
pinned: false
comments: true
og_type: article
image:
  facebook: /img/site/images/BNHR-bg.webp
  twitter: /img/site/images/BNHR-bg.webp
---

Sometimes we want or need to add images to our custom QGIS plugins, here's how you do it.

*It's highly suggested that you use images that are already in the size that you want them to be in your plugin*

## Add the images you want to your resources.qrc file
Make sure that resources.qrc is located in the root folder of your plugin.
```
<RCC>
    <qresource prefix="plugins/name-of-plugin" >
        <file>location/of/file1.png</file>
        <file>location/of/file2.png</file>
    </qresource>
</RCC>
```

## Add the resources.qrc file to your GUI
Go to the **Resource Browser** located at the bottom right part of Qt Designer and click Edit Resources.
<img class="img-fluid" src="{{ site.assets }}/img/posts/2017-04-10-adding-images-to-the-gui-of-your-custom-qgis-plugin/img-000.png" alt="Qt Designed Edit Resources QGIS plugin">

Click **Open Resource File** and select the resources.qrc file you created.<br>
<img class="img-fluid" src="{{ site.assets }}/img/posts/2017-04-10-adding-images-to-the-gui-of-your-custom-qgis-plugin/img-002.png" alt="Qt Designer add resources.qrc file QGIS plugin">

If there are no errors, you should be able to see the resources(images) that you added in the resources.qrc file. Click **OK**.
<img class="img-fluid" src="{{ site.assets }}/img/posts/2017-04-10-adding-images-to-the-gui-of-your-custom-qgis-plugin/img-004.png" alt="Qt Designer resources added QGIS plugin">

## Use Labels to hold the images in your GUI
Add a Label widget. Delete the text.

On the **Property Editor**, go to **QLabel** -> **pixmap** and select **Select Resource**.
<img class="img-fluid" src="{{ site.assets }}/img/posts/2017-04-10-adding-images-to-the-gui-of-your-custom-qgis-plugin/img-004.png" alt="Add image as label in QGIS plugin GUI Qt Designer">

Select the image you want to add and edit the size of the Label on your GUI.
<img class="img-fluid" src="{{ site.assets }}/img/posts/2017-04-10-adding-images-to-the-gui-of-your-custom-qgis-plugin/img-005.png" alt="Image added as label in QGIS plugin GUI Qt Designer">


## Compile your resources.qrc to resources_rc.py
```shell
pyrcc resources.qrc -o resources_rc.py
```

If you want to know why we compile it to resources_rc.py, check [here]({{ site.baseurl }}/2017/04/10/import-error-no-module-named-resources_rc-qgis-plugin.html).

## Compile your *.ui files to *.py files
```shell
sudo python /usr/lib/python2.7/dist-packages/qgis/PyQt/uic/pyuic.py name-of-file.ui -o name-of-file.py
```

After this, you should be able to see the images you added in your GUI the next time you run your plugin in QGIS.
