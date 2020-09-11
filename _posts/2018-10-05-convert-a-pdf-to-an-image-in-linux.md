---
layout: post
title: "Convert a PDF to an Image (PNG, JPG, etc) in Linux using ImageMagick"
description: Learn how to convert a PDF file into an Image in Linux using ImageMagick's convert funtion.
tags: [linux, foss, imagemagick]
pinned: false
comments: true
og_type: article
image:
    facebook: /assets/img/site/BNHR-bg.png
    twitter: /assets/img/site/BNHR-bg.png
---

I recently encountered a problem printing a PDF file where parts of the file weren't being printed by my printer. I tried multiple times but got the same result -- a part of my PDF wasn't being printed (as if it was being censored). I thought that the problem was with my printer not reading my PDF correctly since it was being read correctly by my document/PDF viewer. Instead of finding out what was wrong with my printer or the PDF, I had this idea of just converting the PDF into an image and then printing the image afterwards.

A cursory Google search led me to a very simple command to convert a PDF into an Image in Linux using the [convert](https://imagemagick.org/script/convert.php) command of ImageMagick.

>
>```shell
>convert -density 300 -trim <input-pdf>.pdf -quality 100 <output-image>.png
>```
>

So I opened up my terminal, went to the directory holding my single page PDF file, ran the command, and got myself a PNG file that I then printed. Viola! The parts that weren't being printed before when I was printing the PDF were now printed perfectly.
