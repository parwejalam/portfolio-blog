---
layout: post
title:  "Aurelia Startup"
date:   2017-10-06
desc: "aurelia, netcore"
keywords: "aurelia, netcore"
categories: [others]
tags: [Aurelia]
icon: icon-aurelia
---

Pre Requirement
===============

1.  Install git, if not installed. On cmd run a command git --version.
    If git is installed it will show currently installed git version.

2.  Install node, if not installed. On cmd run a command node -v. If
    node is installed it will show currently installed node version.

3.  Install aurelia-cli globally, if not installed. On cmd run a command
    au. If Aurelia-cli is installed it will show you below screen.
    Otherwise, will echo a message: 'au' is not recognized as an
    internal or external command, operable program or batch file.

    ![](/static/img/blog/Aurelia/Aurelia-Startup_files/image001.jpg)

Installations:
--------------

##### Git

<https://git-scm.com/download/win>

##### Node

<https://nodejs.org/en/download/>

For windows 64 click the circled link.

![](/static/img/blog/Aurelia/Aurelia-Startup_files/image002.jpg)

##### Aurelia-cli

On cmd and run below command

``` node
npm install aurelia-cli –g
```

Note: -g is used to install Aurelia-cli globally.

Getting Started
===============

Go the project folder where you want your Aurelia app be it any folder
or inside a .Net Core project folder.

Open cmd at the location where you want to install Aurelia app. Enter
below command.

For aurelia project in .Net Core project, we do not want project folder
to be created by aurelia-cli. For the same --here is used, otherwise do
not use --here.

``` node
au new --here
```

Aurelia-cli will ask you several questions to setup project for you.

Choose them as per your requirement.

Finally, Aurelia-cli will show you list of options, you have selected
review and go ahead, restart or abort.

Below is my simple sample selection for Aurelia app 
----------------------------------------------------

when using SystemJS, Typescript, css.

![](/static/img/blog/Aurelia/Aurelia-Startup_files/image003.jpg)

You can also choose custom

![](/static/img/blog/Aurelia/Aurelia-Startup_files/image004.jpg)

When you create Aurelia-app in .net core project.

![](/static/img/blog/Aurelia/Aurelia-Startup_files/image005.jpg)

After all steps. Aurelia-cli will install all dependencies.

Use au build to the project.

Or au run to build and run the project. --watch option can be used to
sync browser with any change in project files.

Creating Asp.Net Core project
=============================

I have assumed earlier that you Asp.Net core project is already created.
But there is catch, so I am explaining it here before moving further.

![](/static/img/blog/Aurelia/Aurelia-Startup_files/image006.jpg)

![](/static/img/blog/Aurelia/Aurelia-Startup_files/image007.jpg)

Install a package Microsoft.AspNetCore.StaticFiles as per your project
target framework version number like for .NetCore 1.1 choose
Microsoft.AspNetCore.StaticFiles 1.1.

In Startup Class, there is a Configure method in this method, via
parameter app gets IApplicationBuilder.

Call below methods to allow static files access within the project and
set the default files to be used (default is index page within wwwroot
folder).

Use below lines in it.

``` cs
app.UseDefaultFiles();

app.UseStaticFiles();
```