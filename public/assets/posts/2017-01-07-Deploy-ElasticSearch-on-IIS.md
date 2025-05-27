---
layout: post
title:  "Deploy ElasticSearch on IIS"
date:   2017-01-06
desc: "Deploy ElasticSearch on IIS to make it accessible over the internet"
keywords: "Deploy, ElasticSearch, IIS, Setup"
categories: [elasticsearch]
tags: [Deploy, ElasticSearch, IIS, Setup]
---

**Deploy elastic search on IIS.**

A brief introduction to get an idea, what to do.

1.  Deploy elastic search on the system where you want to run your
    ElasticSearch.

2.  Install Web Platform Installer 3.0 or above.

3.  Using Web Platform Installer to install (ARR) Application Routing
    Request.

4.  Create a Website in IIS with a url (say abc.com).

5.  Rewrite url (abc.com) to localhost port of ElasticSearch.

6.  Enable cors for the website ( Cross Origin Resource sharing ).


<br />

**Deploy elastic search on the system where you want to run your ElasticSearch.**

1.  Read and follow <a href="/2016/09/25/elasticsearch-installation-guide.html" target="_blank" >ElasticSearch Installation Guide</a>


**Install Web Platform Installer 3.0 or above.**

> Go to the following
> website: <http://www.microsoft.com/web/downloads/platform.aspx>
> Once you have downloaded the file called "wpilauncher.exe" simply
> click it and at one point you come at a Window with applications and
> you "Add" button on the right. In the top is a search window, search
> here for ARR you should see a window as here below:

**Using Web Platform Installer to install (ARR) Application Routing Request.**

Note: Below screens are of old version

<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/Application_Request_Routing.png" />

On this screen choose "Application Request Routing 3.0" and then click
on "Add" and then Search also for "Rewrite" and click "Add.

Now press the "Install" in the button and a window as below should
appear.

When everything is finished correctly you see the following.

<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/Web_Platform_Installer.png" />

**Create a Website in IIS with a url (say abc.com).**

Open IIS Manager and you should see a window as below.
<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/IIS_Window.png" />

Create a new website for ElasticSearch as shown below. Right click on "sites" in the left part of IIS.
<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/Setting_ElasticsSearch_Website.png" />

Manager and click "Add Website".

**Rewrite url (abc.com) to localhost port of ElasticSearch.**

<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/Url_Rewrite.png" />

Now double click on the icon "Rewrite URL" and then in the right window
click on "Add Rules(s)...", and a window should popup that looks like
this:

<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/Url_Rewrite_Reverse_Proxy.png" />

Now click on "Reverse Proxy" and then click OK in the bottom a new
window will popup as below:
<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/Url_Rewrite_Reverse_Proxy_Rule.png" />

You probably will get a warning that you are about to use ARR so please
go ahead and accept this.

To explain it in short the ip you entered "127.0.0.1" and port "9200"
this is where ElasticSearch will run under and you are basically making
tunnel to get data from that internal program to people that will
connect to your domain. If you change ElasticSearch’s port then you
of-course have to update the above reverse proxy rule.

**Start elasticsearch and put it on autostart (optional)**

Open a console and go to ElasitcSearch bin directory. Now type the
following command:

service install

You should see something like:

<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/ElasticSearch_Install_As_Service.png" />

Now type the following:

service manager

You should see the elasticsearch service manager:

<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/ES_Start_From_ServiceManager.png" />

You have to change on the tab the "Startup type" from Manual to
Automatic and then press Apply this should make Elasticsearch start
automatically on server boot.

This window contains some more options such as how much memory
Elasticsearch will use you can find this on the "Java" tab I would
suggest to make this fitting for your server if you have a servers that
will handle a huge amount of logs I would increase the "Maximum Memory
Pool: 1024" at least to a higher amount.

Before you close the window make sure to press "Start" so it actually
will run right now 

This is everything to start ElasticSearch automatically on boot to test
that it is working open a browser and go to the url "127.0.0.1:9200".

If you see a json string something like what you see below in the
picture then it means your ElasticSearch is running:
<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/Running_ES_Check.png" />

**Enable cors for the website ( Cross Origin Resource sharing ).**

In webconfig created for website in ElasticSearch folder do add custom
headers like in below image

Access-Control-Allow-Origin value should be selective, when in
production.

<img src="/static/img/blog/ElasticSearch/Deploy ElasticSearch on IIS/ES_Final_WebConfig.png" />

**References** 

[https://channel9.msdn.com/Events/MEC/2014/USX305](https://channel9.msdn.com/Events/MEC/2014/USX305)

[https://www.ulyaoth.net/resources/tutorial-install-logstash-and-kibana-on-a-windows-server.34/](https://www.ulyaoth.net/resources/tutorial-install-logstash-and-kibana-on-a-windows-server.34/)

