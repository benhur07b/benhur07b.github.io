---
layout: post
title: "Make a gif from a video using ffmpeg and ImageMagick on Linux"
description: Here's how you can convert a video or parts of a video into a gif using ffmpeg and ImageMagick on Linux.
tags: [gif, ffmpeg, imagemagick, linux]
pinned: false
comments: true
og_type: article
image:
  facebook: /assets/img/site/BNHR_bg_default.webp
  twitter: /assets/img/site/BNHR_bg_default.webp
---

## Method 1
This method extracts intermediate frames from the  video that will be used to create the gif. The output folder where the frames will be saved should already exist.

### Step 1: Extract frames
```shell
ffmpeg -i <input.mp4> -r 10 <path-to-output-folder>/frame-%03d.png
```
### Step 2: Convert the frames to a gif
```shell
convert -delay -10 loop 0 -layers Optimize <path-to-output-folder>/*.png <output.gif>
```

## Method 2
This method option forgoes the intermediate frames by piping the outputs of the ffmpeg extraction directly to the convert command.

```shell
ffmpeg -i <input.mp4>  -r 10 -f image2pipe -vcodec ppm - | convert -delay 10 -loop 0 -layers Optimize - <output.gif>
```

## Useful ffmpeg and convert options
You can check the **help** or **man** pages of ffmpeg and convert for more details about the available options but here are a few that I've found to be the most useful.

### ffmpeg
* **-ss** : start time offset; specify the time of the video to start extracting the frames/creating the gif
* **-t** : duration; specify the length of gif to create
* **-r** : set the frame rate; I make this equal to -delay option in convert
* **-vf scale=n:-1:flags=lanczos** : I add this to the ffmpeg command when I want to force the gif to be a different resolution than the source video while keeping the quality high, n = frame width

### convert
* **-delay** : specify the pause between frames; I make this equal to -r option in ffmpeg
* **- layers Optimize -** : optimizes the resulting gif; greatly reduces file size especially if the frames have a lot of similar images (e.g. background doesn't change).

## Skip the first 10 seconds of the video and make a 5 second gif
Add **-ss 10** and **-t 5** to the ffmpeg command.

Using method 2:
```shell
ffmpeg -ss 0 -t 25 -i <input.mp4> -r 10 -f image2pipe -vcodec ppm - | convert -delay 10 -loop 0 -layers Optimize - <output.gif>
```

## Force gif to a different resolution than the video source
Add **-vf scale=n:-1:flags=lanczos** to the ffmpeg command where **n is the width** you want for the output gif.

Using method 2 and assuming I want a gif with a width of 1080 pixels:
```shell
ffmpeg -i <input.mp4> -vf scale=1080:-1:flags=lanczos -r 10 -f image2pipe -vcodec ppm - | convert -delay 10 -loop 0 -layers Optimize - <output.gif>
```
