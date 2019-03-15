---
path: "/git-tips"
date: "2019-03-13T08:00"
title: "Git tips"
tags: ["linux"]
description: "Less of a blog and more of a reference file, this page is a list of git commands that I don't want to forget!"
---

Like [bash tips](/bash-tips) but for git!

Command | Description
------- | :-----------|

## Stash

```
git stash
git stash list
git stash pop
git stash apply stash@{1}
git show stash@{0}:<file_name> # shows the full file as if stash was applied
git stash clear
git checkout stash -- components/Form/Form.test.js
```
