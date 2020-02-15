---
layout: post
title: My new daily driver
description: I made one of my biggest purchases/investments (of my life) last year when I finally pulled the trigger on updating my laptop.
tags: [foss, linux, sager, np8966, clevo, p960d, laptop, xps, system76, pop! os]
pinned: false
comments: true
og_type: article
---

I made one of my biggest purchases/investments (of my life) last year when I finally pulled the trigger on updating my laptop. My old one was a 6-year old entry-level NEO that I bought got P9.9k during my final year in college. She was still fairly reliable but the signs of old age were showing -- battery was busted, adapter/charger only worked if you position it perfectly, and the hard drive was disconnecting at times. Plus it was getting difficult to upgrade her since her parts were becoming obsolete -- I upgraded her RAM from 2GB to 6GB and changed her hard drive over those 6 years. I decided it was time for her to retire as my daily driver and started looking around for her successor.

# What I wanted
I had a few things on my checklist in looking for my new daily driver.
1. I didn't want it to come with a Windows OS by default (for Freedom of Choice reasons plus I was 100% sure I wasn't going to use Windows).
2. It needed to have good Linux support.
3. A good specs-to-price ratio. This laptop won't just be a daily driver but should have decent processing power as well.

# The usual suspects
Initially, I ended up looking at two main options: Dell's XPS 13 Developer Edition and System76's Oryx Pro. Both had some good pros with some cons.

The XPS 13 DE is hailed as one of the best laptops that come built-in with Linux (ships with Ubuntu LTS) plus the recent version finally moved the webcam camera to a more flattering location. It was available in the Philippines and it would have made a great daily driver. The only downside was in terms of processing power, the XPS 13 DE was just okay (or fair) so the specs-to-price ratio was somewhere along okay and fair as well.

Meanwhile, the [Oryx Pro](https://system76.com/laptops/oryx) was a different beast altogether. System76 specializes in Linux laptops, desktops, and servers. Their laptops aren't just Linux compatible, they're actually built to run Linux by default. They ship with Ubuntu or Pop! OS (System76's own OS). The specs-to-price ratio was also great. For the same amount, the Oryx Pro's configuration had more to offer than the XPS 13 DE. The downside was System76 was based in the US. If I wanted the Oryx Pro, I had to place and order and wait.

I decided to get the Oryx Pro. Getting something that was built to run Linux was too good to pass up so I went ahead and customized an Oryx Pro to my liking:
* Intel i7 9750H
* 32GB RAM
* Nvidia RTX 2060
* 500GB SSD
* 1TB SSHD
* 144Hz, 15.6" Display
* the works

# Nope
I then realized that my debit card (I don't have a credit card, don't crucity me. Hahaha.) had a purchasing limit and the Oryx Pro + shipping would exceed that. Back to the drawing board, I guess.

# When life closes one door, it opens another
It was after some research that I found out about Clevo and Sager notebooks. [Clevo](https://clevo-computer.com/en/laptops-configurator/) is a manufacturer of barebone laptops chassis (barebooks) and [Sager](https://www.sagernotebook.com/home.php) is one of manufacturers that use Clevo bodies for their laptops. Looking at it closely, the Oryx Pro's body is probably the Clevo P960D. In fact, if you look at the bodies/designs of other laptop brands like ASUS' ROG, Acer's Predator, and Dell's Alienware lines, you'll see that they also use Clevo bodies.

Upon further research, I found out that Sager had an authorized reseller here in the Philippines -- [Helix Technologies, Inc.](https://helix.com.ph/sager/). I went to their site and found what I was looking for, the Sager [NP8966](https://www.sagernotebook.com/Notebook-NP8966.html) has the same body and configurations as the Oryx Pro. It was essentially an Oryx Pro without the additional customization by System76 (e.g. firmware). It was also about around 15% cheaper for the same specs that I wanted for the Oryx Pro so I went ahead and ordered.
* Intel i7 9750H
* 32GB RAM
* Nvidia RTX 2060
* 500GB SSD
* 1TB SSHD
* 144Hz, 15.6" Display
* No OS

# My new daily driver
Initially, I was hesitant at getting a Clevo/Sager laptop. They're not "BIG NAME" brands, so to speak. How good or how bad they are depends on who you ask on the internet. However, as with most things in life, you'll never really know unless you try.

It's been six months now since I got my laptop and I've been pretty happy with it. There was a little snafu at the start when I couldn't install an OS on it but, with the help of the people at Helix, I got that sorted out quickly. Helix also replaced my laptop's top lid for free when I reported that it had a small scratch (probably from handling/delivery).

I decided to use System76's Pop! OS as my distro of choice for this laptop and I've been very happy with that decision. Aside from making my laptop feel like an Oryx Pro, Pop! OS UI & design look good and the integrated support for Nvidia graphics cards is awesome. No more tinkering with anything just to make sure your graphics card works with your OS. With Pop!, it just does. Pop! OS also gives you the option to switch between the Nvidia Graphics and the integrated Intel Graphics although you still need to restart for the switch to take place.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/dd-graphics.gif'><figcaption class='figure-caption text-center'>Easy Power and Graphics Settings</figcaption></div>

A 6-core i7 processor + 32 GB of RAM + an SSD works wonders for speed. System startup (both cold and warm boots) and application startups are blazing fast. I've done a lot of GIS/RS and dev work on this machine over the past six months and the performance has been great.

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/dd-chrome.gif'><figcaption class='figure-caption text-center'>Starting Chromium</figcaption></div>

<div class='col-lg-12 img-container'><img class='img-fluid post-img img-shadow' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/dd-search.gif'><figcaption class='figure-caption text-center'>Launcher/Search in action</figcaption></div>

Core and GPU temperatures sit at a cool 38-45° Celsius when idle or doing minimal work. At normal work load, they hit 40-60° C depending on the room's ambient temperature -- from experience working in an air-conditioned room helps keep the temperature low. The fans aren't the quietest but they're also not too loud. You can feel the heat building up on the keyboard when running CPU and GPU intensive stuff for an extended period of time. There was one time when I had an issue with my cores running max frequency all the time but I think it was more of an OS/software issue than a hardware one since it started after doing a routine update and stopped a week or so later after another routine update of my system.

Battery life could be better. I can squeeze out 3 to 4 hours on power saver mode if I'm just using the machine for internet browsing, writing documents, etc. For heavy-duty stuff, I can get 1.5 hours max before needing to plug it in.

Of course not everything's perfect. There are a few drawbacks that I've noticed -- nothing major, just some minor inconveniences. For example, for this model/body, the HDMI and Micro DisplayPort don't work with the built-in Intel Graphics. You should be using Nvidia Graphics if you want to use those 2 ports. Also, as with most Linux distros, Bluetooth is just okay -- upgrading the version of bluez makes things more stable but there are still times I need to restart the bluetooth to get my devices to connect. I've also haven't gotten the multi-color backlight to work -- it stays blue all the time.

All in all, I'm perfectly happy with my daily driver. I was able to buy a laptop that didn't have Windows pre-installed which was really nice plus I got a good specs-to-price ratio for it. I wasn't able to get one with integrated Linux support but aside from the XPS DE line, I don't think there are vendors in the Philippines that have that. I could've just gotten a similar gaming laptop with similar specs from ASUS' ROG, Acer's Predator, or even Dell's Alienware lines but it would've cost me around 10%-20% more plus the trouble of removing Windows (and a lot of the optimizations they do for Windows) on the laptop. There's still room for improvement on this laptop -- it has support for up to 64GB of RAM and RTX 2080 (not really worth it in my opinion) -- which I'm pretty sure I will in the future but right now, *we good*.

<div id='dailyDriverCarousel' class='carousel slide' data-ride='carousel'>
  <div class='carousel-inner'>
    <div class='carousel-item active'>
      <img class='d-block w-100' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/about-pc.png' alt='About PC'>
    </div>
    <div class='carousel-item'>
      <img class='d-block w-100' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/neofetch.png' alt='Neofetch'>
    </div>
    <div class='carousel-item'>
      <img class='d-block w-100' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/i7z.png' alt='i7z'>
    </div>
    <div class='carousel-item'>
      <img class='d-block w-100' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/desktops.png' alt='Desktops and apps'>
    </div>
    <div class='carousel-item'>
      <img class='d-block w-100' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/toplid.webp' alt='Top lid'>
    </div>
    <div class='carousel-item'>
      <img class='d-block w-100' src='{{ site.baseurl }}/assets/img/posts/2020-02-15-my-new-daily-driver-laptop/kb-blue.webp' alt='Backlit keyboard-blue'>
    </div>
  </div>
  <a class='carousel-control-prev' href='#dailyDriverCarousel' role='button' data-slide='prev'>
    <span class='carousel-control-prev-icon' aria-hidden='true'></span>
    <span class='sr-only'>Previous</span>
  </a>
  <a class='carousel-control-next' href='#dailyDriverCarousel' role='button' data-slide='next'>
    <span class='carousel-control-next-icon' aria-hidden='true'></span>
    <span class='sr-only'>Next</span>
  </a>
</div>
<br>
