---
path: "/git-tips"
date: "2019-03-13T08:00"
title: "Git tips"
tags: ["linux"]
description: "Less of a blog and more of a reference file, this page is a list of git commands that I don't want to forget!"
---

Like [bash tips](/bash-tips) but for git!

## Branching
```
git branch -a # lists all branches, including those on the remote
git branch -d <branch> # delete branch locally (use -D to force delete)
git push origin --delete <branch> # delete a branch on the remote
```

<br />

## Committing
```
git commit . -m "<commit message>" # adds all and then commits with message
git commit -v # opens text editor for commit message and also shows which files have changed with a diff
```

## Stashing

```
git stash # stash changes
git stash --keep-index # stash unstaged changes only
git stash list # show a list of stashes
git stash pop # apply stash at top of the list
git stash apply stash@{1} # apply changes from stash no.1
git show stash@{0}:<file_name> # shows the full file as if stash was applied
git stash clear # clear the stash
git checkout stash -- components/Form/Form.test.js # checkout one file from stash
```
