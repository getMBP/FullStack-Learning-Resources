
Head in git
https://stackoverflow.com/questions/2304087/what-is-head-in-git


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1(release/learn-git)
$ cd .git

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1/.git (GIT_DIR!)
$ cat HEAD
ref: refs/heads/release/phase1Branch

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1/.git (GIT_DIR!)
$ cd refs/heads

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1/.git/refs/heads (GIT_DIR!)
$ ls -la
total 1
drwxr-xr-x 1 DeenJ 1049089  0 Sep 25 09:11 ./
drwxr-xr-x 1 DeenJ 1049089  0 Sep 13 16:41 ../
drwxr-xr-x 1 DeenJ 1049089  0 Sep 13 16:53 feature/
-rw-r--r-- 1 DeenJ 1049089 41 Sep 13 16:41 master
drwxr-xr-x 1 DeenJ 1049089  0 Sep 25 13:07 release/

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1/.git/refs/heads (GIT_DIR!)
$ cat master
9f5ab48105ace8bb7f8751d42491615bb7dac9c1

This commit points to last commit at master

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1/.git/refs/heads (GIT_DIR!)
$ cat release/phase1Branch
c40063b9d84e447046575c7ff628672ca9a8fafd

This commit points to last commit at phase1Branch

Viewing changes in indexed stage vs working repo with diff
  
DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/phase1Branch
Your branch is up to date with 'origin/release/phase1Branch'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git diff
diff --git a/package.json b/package.json
index 13284ec..ffc29aa 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "Game1",
-  "version": "2.0.1",
+  "version": "2.0.2",
   "description": "",
   "private": true,
   "repository": {

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$

Viewing only staged changes
Git add package.json

$ git status
On branch release/phase1Branch
Your branch is up to date with 'origin/release/phase1Branch'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   package.json


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1(release/learn-git)
$ git diff --staged
diff --git a/package.json b/package.json
index 13284ec..ffc29aa 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "Game1",
-  "version": "2.0.1",
+  "version": "2.0.2",
   "description": "",
   "private": true,
   "repository": {


Deleting files
 DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Untracked files:
  (use "git add <file>..." to include in what will be committed)

        toDelete.txt

nothing added to commit but untracked files present (use "git add" to track)

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git add toDelete.txt

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   toDelete.txt


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git commit -m "to delete"
[release/learn-git 369d91c] to delete
 1 file changed, 1 insertion(+)
 create mode 100644 toDelete.txt

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git rm toDelete.txt
rm 'toDelete.txt'

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        deleted:    toDelete.txt


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git commit -m "dlete a file"
[release/learn-git 4033cc1] dlete a file
 1 file changed, 1 deletion(-)
 delete mode 100644 toDelete.txt

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
nothing to commit, working tree clean

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$

Moving and renaming files


Writing commit messages
     Git add -m “message”

Log Commit
Git log
Git log -n
Git log –since =date
Git log –until =date
Git log –author = name
Git log –grep =”searchcriteria text”
$ git log --pretty=oneline

$ git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit

git show 4388eab (to see the changes in commit file)


Amending commits
         

Find history of file changed

git log --name-status --follow package.json
      
 Undoing working directory changes
   
Git checkout – file

Ex : git checkout package.json

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git checkout package.json

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
nothing to commit, working tree clean



Unstaging files
https://git-scm.com/docs/git-reset#git-reset-Resetasinglefileintheindex

Git reset HEAD file 

Ex : $ git reset HEAD package.json


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   package.json


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git reset HEAD package.json
Unstaged changes after reset:
M       package.json


Amending commits
   Only last commit is amendable
    One can amend the commit message or file
Package.json has changed from ver 2.0.1 to 2.0.2
I want to amend my last commit package.json file from v2.0.2 to 2.0.3

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git add package.json

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   package.json


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git commit --amend -m "update commit message2"
[release/learn-git 676be02] update commit message2
 Date: Tue Sep 25 15:54:02 2018 +0200
 1 file changed, 1 insertion(+), 1 deletion(-)

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
nothing to commit, working tree clean


Retrieving old versions
         The current branch is pointing at commit 676be02 , which we want to revert
         (release/learn-git)> 676be02 > c40063b

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git checkout c40063b -- package.json

i.e change the package.json to same as it was at the time of c40063b

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   package.json


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git diff --staged
diff --git a/package.json b/package.json
index 94a7c4f..13284ec 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "Game1",
-  "version": "2.0.3",
+  "version": "2.0.1",
   "description": "",
   "private": true,
   "repository": {

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git commit -m "this commit reverts commit 676be02"
[release/learn-git fd75764] this commit reverts commit 676be02
 1 file changed, 1 insertion(+), 1 deletion(-)


Reverting a commit

Put git in exact opposite changes of last commit but retain commit history


Commit fc08381 has package.json changed to 2.0.2

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git revert fc08381
[release/learn-git 4388eab] this Revert "commit test"
 1 file changed, 1 insertion(+), 1 deletion(-)

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git log
commit 4388eabde23943b84050c65897f65ede5562d14e (HEAD -> release/learn-git)
Author: Deen john <deen.john@derivco.co.za>
Date:   Tue Sep 25 16:46:39 2018 +0200

    this Revert "commit test"

    This reverts commit fc08381f5d35c73e44fcad0ccd9fbcb0fbbc8d3c.

commit fc08381f5d35c73e44fcad0ccd9fbcb0fbbc8d3c
Author: Deen john <deen.john@derivco.co.za>
Date:   Tue Sep 25 16:42:49 2018 +0200

    commit test

https://stackoverflow.com/questions/17563726/how-to-see-the-changes-in-a-git-commit

$ git show --color --pretty=format:%b $COMMIT
This reverts commit fc08381f5d35c73e44fcad0ccd9fbcb0fbbc8d3c.

diff --git a/package.json b/package.json
index ffc29aa..13284ec 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "Game1",
-  "version": "2.0.2",
+  "version": "2.0.1",
   "description": "",
   "private": true,
   "repository": {




Removing an unpushed commit

 --soft (safest option)
-Doesn’t change staging index or working dir

$ git reset --soft c40063b (package.json updated to v2.0.2 by commit c40063b)
Soft reset puts the last commit changes to staging index

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git diff --staged
diff --git a/package.json b/package.json
index 13284ec..ffc29aa 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "Game1",
-  "version": "2.0.1",
+  "version": "2.0.2",
   "description": "",
   "private": true,
   "repository": {


We can move the head back to same last commit too (keep last commit id save somewhere)

Git revert –commit id

--mixed
   	-Changes staging index to match repo
 	- doesn’t change working dir
        	All changes goes to working directory
      	 Current commit is 12eee5b

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git reset --mixed c40063b
Unstaged changes after reset:
M       package.json

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   package.json

no changes added to commit (use "git add" and/or "git commit -a")





We can move the head back to same last commit too (keep last commit id save somewhere)

DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git reset --mixed 12eee5bd


--hard
          -changes staging index and working dir to match repo


DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git reset --hard c40063b
HEAD is now at c40063b fix for Mobile - an 'unable to load game' error on load yet game loads in background Defect ID: 368028


        
DeenJ@FPRICBROM1 MINJ /d/GitRepos/design1 (release/learn-git)
$ git status
On branch release/learn-git
nothing to commit, working tree clean


You can still go back to lost commit , the commit from where you reset.





