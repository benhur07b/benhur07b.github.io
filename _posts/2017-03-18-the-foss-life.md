---
layout: post
title: The FOSS Life
description: You don't need to be a programmer to get into Free and Open-Source Software (FOSS) and you don't need to give up a lot of functionalites when switching from Windows/macOS to GNU/Linux.
tags: [foss]
comments: true
pinned: true
og_type: article
---
> "I didn't choose the FOSS life, the FOSS life chose me"
>
> -- <cite>me (or someone funnier than me)</cite>

I encountered my very first computer (my aunt's) when I was 10 years old. Its specs can't be considered much by today's standards but back then I thought it was awesome. It had 128MB of RAM, 20GB of disk space, and ran on Windows 98. There I learned Microsoft Office with the help of Clippy and discovered the joy that was Microsoft Paint.

A few years later, my cousin got his own PC: 512MB of RAM and 80GB of disk space running on Windows XP. This was the computer that introduced me to the internet and torrent sites (because of Naruto and anime) -- all in the glory of the 56K dial-up speeds of the time. I fondly remember staying up till the wee hours of the morning just to take advantage of the off-peak hours promos of dial-up cards (you know, the ones that gave you free and unlimited browsing from 12MN to 6AM). Unbeknownst to me, this was actually training for all the all-nighters I would pull in college.

In high-school, I learned some very basic programming using Visual, well, Basic. I also got my own computer during my graduating year: 512MB RAM, 80GB disk space, Windows XP. This led to more sleepless nights and some PC Master Race gaming with NBA Live, Sacred, Neverwinter Nights, etc.

During the second semester of my freshman year in college, I got my own laptop which I needed for my Introduction to Programming class. The computers in the lab were all using Fedora but because I didn't know any better, I had mine with Windows XP which I upgraded to Vista (**WTF was I thinking?!?!**) and eventually downgraded back to XP after a few weeks. I had a few more laptops during my college years. The last one, before my current laptop, had 4GB RAM, 500MB of disk space, and ran on Windows 7.

For the majority of my computer-knowing life, I've almost exclusively used only Windows and Microsoft products. I've heard about Linux and FOSS (Free and Open Source Software) before but never really got into it. Most of the tools I needed and knew were Windows-based -- Office suites, games, RS/GIS software, etc. It took an overheated laptop during the semester that I was doing my undergraduate thesis to get me started on my journey with FOSS.

As I was entering my final semester in college, my trusty laptop of 3 years died because of an overheating processor. I had to find a replacement fast because I was going to do my undergraduate research project that upcoming semester. I also needed to find one that was within my student budget. I couldn't bear ask my parents for more money because I should have already graduated a few years earlier if everything went according to plan (*quality education takes time*). I ended up settling for an entry-level, budget-model laptop: 2GB of RAM, 500GB of disk-space, 2 cores at 1.60GHz, and an Ubuntu 12.04 (Precise Pangolin) OS. I bought it for less than PhP 10,000. I planned on installing Windows as my OS but decided on giving this Ubuntu thing a try -- a decision that I would not regret.

Fast-forward four years later and I'm still using that same laptop. It now has 6GB of RAM (thanks to my previous laptop) but it's still sporting just 500GB of disk-space and 2 cores at 1.60GHz. Its specs might be outdated but it still gets the job done and probably runs faster than most Windows laptop of the same age and specs. One of the reasons for this is because I've come to embrace FOSS not just as a matter of necessity (*since most of the software I grew up with aren't available on Linux*) but as a matter of choice. Whenever I need new software, I always try to find out first if there's a FOSS alternative to it. If there's none, I try to find out if it is distributed for Linux. My last two alternatives are to use Wine or boot into my Windows VM which I rarely do except for very special instances (_**I'm looking at you eBIRForms**_).

Linux and FOSS have a lot of advantages (and also disadvantages) over proprietary software which I won't go into details here but if the reason why you're hesitant of trying Linux and FOSS is because you think won't be able to do the stuff you're accustomed to doing on a Windows PC or Mac then fear not because that's not the case most of the time. Except for very special instances, a Linux machine can be drop-in replacement for a Windows PC or Mac. Let me show you some examples.

(*NOTA BENE: The list below is reflective of my preferences and what I personally use. It does not mean that what I list down is the best option. The beauty with FOSS is that you are not tied down to any single piece of software. You have the freedom to try and test different ones to find out which is best for you.*)

### Operating System
**What you might be familiar with:**
* Windows 8 or Windows 10
* macOS

**What you can use instead:**
* This is a trick question. There'a a multitude of FOSS Operating Systems out there that you can try like FreeBSD, Linux (or GNU/Linux), and the countless [distros](https://distrowatch.com/) in between. Want something classic? There's [Debian](https://www.debian.org/). Want a challenge? Try [Arch](https://www.archlinux.org/). How about something easier for newbies? There's always [Ubuntu](https://www.ubuntu.com/) and [Linux Mint](https://linuxmint.com/). Into penetration testing and hacking? [Kali Linux](https://www.kali.org/) is what you need. Want some privacy? Give [Tails](https://tails.boum.org/) a spin. Whatever specific thing you need in an OS, there's probably a distro out there for you.

Personally, I'm using [Xubuntu](https://xubuntu.org/) and [OSGEO-Live](https://live.osgeo.org/).

### Office Suite
**What you might be familiar with:**
* Microsoft Office
* Office365

**What you can use instead:**
* [LibreOffice](https://www.libreoffice.org/)
* [WPS Office](https://www.wps.com/)

I've almost exclusively used LibreOffice and its predecessor OpenOffice for the past 8 years. It's dependable and does what you expect from a modern office suite. I don't have the same amount of experience with WPS but I've heard good things about it and it boasts of being the "Most Compatible Free Office Suite".

### Geographic Information System (GIS)
**What you might be familiar with:**
* ArcGIS

**What you can use instead:**
* [QGIS](http://www.qgis.org/en/site/)
* [GRASS GIS](https://grass.osgeo.org/)
* [SAGA GIS](www.saga-gis.org/)

These are also available in Windows and Mac but most of the development (especially for QGIS and GRASS) is made on Linux. Thus, the Linux versions are usually more updated and stable than their Windows or Mac counterparts.

### Simple Drawing and Image Manipulation
**What you might be familiar with:**
* Paint

**What you can use instead:**
* [Pinta](https://pinta-project.com/)

It actually came as a surprise when I found out that most of the distros I tried did not have a simple drawing application ala Microsoft Paint on Windows. Then I found Pinta. Pinta is probably the best drop-in replacement for Paint out there.

### A bit more Complex Image Manipulation
**What you might be familiar with:**
* Photoshop

**What you can use instead:**
* [GIMP (GNU Image Manipulation Program)](https://www.gimp.org/)

Okay, vanilla GIMP is probably no match for Photoshop but the beauty with GIMP is that you can always write your own or use other people's scripts if you need something not in vanilla GIMP. I used GIMP during my [brief scanlation career](http://www.mangareader.net/hell-teacher-nube/38).

### PDF Manipulation
**What you might be familiar with:**
* Adobe Acrobat
* Foxit Reader

**What you can use instead:**
* [LibreOffice](https://www.libreoffice.org/)
* [PDF Chain](http://pdfchain.sourceforge.net/)

You can edit pdfs (forms, letters, etc.) using LibreOffice (via Draw) if they were exported/saved directly from documents and not simply scanned. PDF-Chain, meanwhile, gives you the ability to combine or split pdfs among other things.

### Video Conferencing and Messaging Apps
**What you might be familiar with:**
* Skype
* Viber

**What you can use instead:**
* [Skype for Linux](https://www.skype.com/en/download-skype/skype-for-linux/)
* [Viber for Linux](https://www.viber.com/en/products/linux)

These, technically, are not FOSS alternatives. There's a lot of other video conferencing and messaging softwares out there available for Linux. However, since most people (especially those not using Linux) already use Skype and Viber, Skype for Linux and Viber for Linux are valid options especially if most of your contacts are already using them. There's been some issues with Skype for Linux over the years but hopefully their last update solved most of them.

Both Skype and Viber for Linux are available as .rpm or .deb.

### Games
**What you might be familiar with:**
* ALL THE GAMES MADE FOR WINDOWS AND PC

**What you can use instead:**
* [Steam on Linux](http://store.steampowered.com/linux)
* [PlayDeb](http://www.playdeb.net/welcome/) (If you're using 'buntu)
* [Wine](https://www.winehq.org/)

Truth be told, Windows still has the edge on Linux when it comes to Gaming but that doesn't mean you can play on Linux. Steam has been a godsend and I've been able to play a lot more games natively on Linux (Dota2 for example) and not rely on Wine or a Windows VM. For Ubuntu users, PlayDeb is a good resource to start looking for Linux games.

<br>

That's it for now. There's a lot of other things that I might add here in the future. I'll probably make posts on how to install the software above on your Linux machine too.

<br>
