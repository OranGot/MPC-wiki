# Setting up your workspace #

This guide walks you through the initial setup phase of the repository on your machine. This only needs to be done once. Afterward, you will be able to write and modify code, suggesting changes to the github!

**This is a team project!!** Join [the discord](https://discord.gg/Jea7Sh5YCb) server to work with others, discuss how to improve the website, and ask questions! If you have trouble during this setup process, ask for help in the server.

**Summary of the setup process below for experienced users:** Install VSCode and Fork the repository. To view the project, you can right click the index.html, select copy path, and paste it into your browser. **All these steps are explained in great detail below:**

<img width="684" alt="copy path" src="docs\resources\copy_path.png">

## Step 1: Download VSCode ##

This guide will use VSCode, but you may use any other editor with source control features.

[Go here](https://code.visualstudio.com/) to download and install VSCode. Be sure you have Visual Studio **Code**, and not Visual Studio (they are **not** the same).

## Step 3: Forking the repository ##

Go to the [repository's home page](https://github.com/OranGot/MPC-wiki), then click "Fork"! You will need a github account.
<img width="818" alt="fork repo" src="docs\resources\fork_repo.png">

On the next page, click "Create Fork".

Next, open VSCode, and click "Clone Git Repository..."

<!---
needs more images
-->

Click "Clone from GitHub".


Then click "Allow" to sign in with your github account, and, in the browser window that opened, click "Open Visual Studio Code.app".

The fork you just created should be at or near the top of the list, click on it! Be sure it has your github username on it! If it says "MPC-wiki", **don't** click that one as it is the main repository, which you don't have write access to.

<!---
image of the wrong repository when cloning
-->

Choose a location on your machine to store the repository. Then when prompted whether to open the cloned repository, click "Open".

### **You are all set up now to start developing!** 🥳 ###

Let's move on to learn how to suggest changes to the repository! Or, skip right to the [Conclusion](#conclusion).

## Making changes ##

### Making a new branch ###

Bofore you start making changes to the repository, make sure to create a new branch. You can create a new branch by going to the source control tab on the left...

<img width="887" alt="source control tab" src="docs\resources\source_control_tab.png">

...presing on the left panel 3 dots>Branch>Create Branch... name the branch after what you working, example: "page prison the Pyramid"

<img width="887" alt="source control" src="docs\resources\create_branch.png">

### Commiting ###

After you have made some changes to the code, you can push those changes to your personal fork by going to the Source Control tab.

<img width="887" alt="source control tab" src="docs\resources\source_control_tab.png">

Only changes you "stage" will be sent to your fork! You can stage specific changes, or you can stage all your changes. Then click "Commit".

<img width="928" alt="Stage changes" src="docs\resources\stage_changes.png">

Enter a brief commit message, then click the checkmark in the top-right corner.

<img width="928" alt="commit message" src="docs\resources\commit_message.png">

Now click "Sync Changes" back in the top-left!

If you now visit the fork you created on your own github account, the changes you made should now be found there as well!

### Pull request ###

Next, let's suggest this change to the official MPC-wiki repository by creating a "Pull Request"!

On the home page of the fork you created ON YOUR GITHUB account, click on "Pull Requests"

<img width="816" alt="26 copy" src="">

Now click "New pull request", followed by "Create pull request"! Your changes will be reviewed soon and either be accepted, rejected, or commented on!