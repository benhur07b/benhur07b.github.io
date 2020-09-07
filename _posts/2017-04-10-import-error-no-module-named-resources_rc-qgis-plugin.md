---
layout: post
title: "ImportError - No module named resources_rc (QGIS Plugin Development) [SOLVED]"
description: Here is the the simplest solution I've found for this annoying little problem when creating QGIS Plugins.
tags: [qgis, foss4g, python]
pinned: false
comments: true
og_type: article
image:
  facebook: /assets/img/site/BNHR-bg.png
  twitter: /assets/img/site/BNHR-bg.png
---

If you did not create your QGIS plugin using the latest version of *QGIS Plugin Builder*, you might find yourself encountering this error when running your plugin in QGIS specially if you have a resources file for images/logos that you included in your plugin.

```python
ImportError: No module named resources_rc
```

This error seems to stem from the fact that when you have resources in your GUI from *resource.qrc*, the following lines are added to your ```.ui``` files:

```
<resources>
  <include location="resources.qrc" \>
</resources>
```

[One of the solutions](https://gis.stackexchange.com/a/155599/45041) for this issue is by removing the said line in the ```.ui``` files and replacing them with:

```
<resources \>
```

then compiling the ```.ui``` files to ```.py``` files using ```pyuic```.

However, my simpler solution involves just one command. Since python is looking for a resources_rc module, all I did was compile my resources.qrc to resources_rc.py instread of resources.py.

```shell
pyrcc resources.qrc -o resources_rc.py
```

And viola, my plugins worked and the images I added to the GUIs were all present.
