---
path: "/goodbye-windows"
date: "2019-03-24T08:30:00"
title: "Goodbye Windows!"
tags: ["linux"]
description: "I finally switch my home computer's OS from Windows to Linux."
---

I've always used Windows computers, I used them at work before I moved into the tech industry for their office programs, I used them at home for making music and editing photos and they're what I learned to code on. When I interviewed for my first job as a UI developer I sat a desk-test where I was required to write JavaScript on an Apple iMac. It was the first time I had ever used a Mac, everything was familiar yet slightly different, it didn't help my interview nerves! 

At the same time that I was starting my new job I decided to treat myself to a new laptop for use at home. I considered getting an Apple computer because I was now using one at work, but I still wasn't very familiar with the OS and the amount of money Apple were asking for for a comparatively low spec seemed completely unreasonable. I opted to stick with Windows because, for the same amount of money or less, I could get a better processor and nearly twice as much RAM.

As time went on I became more at-home on the Mac. I learned more about how to use the command line, both on the Mac and in Linux virtual machines and became unhappy with my decision to purchase a Windows machine. I tried various terminal emulators, settling in the end for Git Bash which was the closest I could find to the shells I was using at work. I toyed with the idea of selling my laptop and purchasing a Mac but I knew I would lose a lot of money in doing so and I still wasn't overly enamoured with the Mac range of laptops.

I decided to switch to Linux so I installed Ubuntu onto my computer and fired it up. I already knew what to expect from the command line and I had seen pictures online of the Ubuntu Desktop; I wasn't particularly impressed when I first opened it up though. The display seemed to lack resolution, it was nowhere near as crisp as OSX or Windows and the mouse cursor seemed disconnected with the motions applied to the touchpad, as if there was more latency than I was used to. I figured it was to be expected, Ubuntu is free after all! I switched back to Windows and looked for a different solution.

It was around this time that I first heard about WSL ([Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about)). WSL is a Linux filesystem upon which your Windows filesystem is mounted as if it were a physical drive (I don't think this is how it works under the bonnet but it's how it appears when you are using it). You are able to download different Linux distributions from the Microsoft store, and you can install more than one. Because it's a subsystem you need to install everything you want to use from the commandline again, even if you already have it installed on Windows.