---
path: "/vim-tips"
date: "2019-03-13T08:00"
title: "Vim tips"
tags: ["linux"]
description: "Less of a blog and more of a reference file, this page is a list of vim commands that I don't want to forget!"
---

Like [bash tips](/bash-tips), but for my favourite command line text editor - Vim!

Command | Description
------- | :-----------|

## Search and Replace
```
:%s/foo/bar/g #Find each foo in all lines and replace with bar
:%s/foo/bar/gc #Find each foo in all lines and ask to replace with bar
:s/foo/bar/ #Find first foo and replace with bar
:s/foo/bar/g #Find each foo in current line and replace with bar
```
