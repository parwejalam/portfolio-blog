---
layout: post
title:  "Getting Started with Jekyll site"
date:   2017-01-04
desc: "Getting Started with Jekyll site"
keywords: "Jekyll"
categories: [others]
tags: [Jekyll]
---


Steps for working with Jekyll site.

- Install Node.
- Install Git.
- Install Ruby.
- Install Install the Ruby DevKit.
- Install Jekyll.

Optional Step
- Install Visual Studio Code for using as smart editor and easy version control options  (optional and there are many alternatives).


**Install Node**

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 

you can download nodejs from [here](https://nodejs.org/en/download/) and install It will provide you access node and npm commanad from cmd.


**Install Git**

Git is the version control.

you can download Git from [here](https://git-scm.com/downloads).


**Install Ruby**

Ruby is the programming language that Jekyll is written in. You’ll need to install Ruby and the corresponding DevKit, which is needed to build some of Jekyll’s dependencies as “native extensions”.

you can download Ruby from [here](http://rubyinstaller.org/downloads/)

Execute the installer and go through the steps of the installation. Make sure to check the “Add Ruby executables to your PATH” box like below.

<img src="{{ site.url }}/static/img/blog/Jekyll/AddRubyExecutableToPath.PNG" />


Jekyll has some dependencies which, out of the box, only provide raw source code. To make them into fully functional executables, you’ll probably need to install the Development Kit.

**Install the Ruby DevKit**

you can download Ruby DevKit from the same page you have [downloaded](http://rubyinstaller.org/downloads/) Ruby.

[Download](http://rubyinstaller.org/downloads/) the DevKit archive that corresponds to your Ruby installation and system architecture. The file name will begin with `DevKit-mingw`. Choose the 32bits or 64bits version depending on your system.

The download is a self-extracting archive. When you execute the file, it’ll ask you for a destination for the files. Enter a path that has no spaces in it. Recommendation something simple, like `C:\RubyDevKit\`. Click Extract and wait until the process is finished.

Next, you need to initialize the DevKit and bind it to your Ruby installation. Open your favorite command line tool and navigate to the folder you extracted the DevKit into.

```
cd C:\RubyDevKit
```

Auto-detect Ruby installations and add them to a configuration file for the next step.

```
ruby dk.rb init
```

Install the DevKit, binding it to your Ruby installation.

```
ruby dk.rb install
```

That’s it! If all went well, you now have a working Ruby installation on your machine and you can build fully functional executables using the Ruby Development Kit. Ruby includes a way to install so-called gems—software packages that you can use from the command line. Jekyll is one of them! 

**Install Jekyll**

Launch your favorite command line tool and enter the following command.

```
gem install jekyll
```

Now, you are ready to get started with Jekyll site

I suggest to get started with Jekyll, give some time to already created and popular Jekyll sites.

Clone/Download a repository which contains all the jekyll files needed to create a website such as the [jekyll-bootstrap repository](https://github.com/plusjade/jekyll-bootstrap) 

From the root folder of the repository you downloaded _config.yml file. Launch command line tool and Run below command.

```
jekyll serve
```






