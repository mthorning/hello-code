---
path: "/git-tips"
date: "2019-03-13T08:00"
title: "Git tips"
tags: ["git", "reference"]
description: "A reference page for Git commands"
---

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

<br />

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

<br />

## Resetting
```
git reset # unstage all files
git reset --hard # unstage all files and delete changes
git reset <file> # unstage one file
git reset HEAD~2 # remove the last two commits and unstage all changes from those commits
git reset HEAD~2 --hard # as above but all changes will be deleted
```
