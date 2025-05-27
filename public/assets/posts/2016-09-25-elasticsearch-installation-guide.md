---
layout: post
title:  "Elastic Search installation guide"
date:   2016-09-25
desc: "ElasticSearch installation guide"
keywords: "elastic search"
categories: [elasticsearch]
tags: [setup]
---    

Steps to getting started with ElasticSearch.

* [Download](http://www.oracle.com/technetwork/java/javase/downloads/index.html) and install the Java SE (Standard Edition) version. Ignore the EE (Enterprise Edition) and ME (Micros Edition).
    * Set the JAVA_HOME environmental variable
        * Go to the drive where your windows is installed (generally it is c:\ drive) in "my computer".
        * Now go to "program files" folder and then go inside "java" folder( for a 64 bit OS, if the "JAVA" folder is not found, consider looking in "Program Files(x86)" folder). -->Look for a JAVA JDK installation folder. If you don't have it, then download java jdk and install the latest.
        * Copy the path name(e.g.C:\Program Files\Java\jdk1.8.0_05) or just write it down on paper.
        * Now go to your desktop; right click on "my computer" icon; go to properties; go to "Advanced System Settings"; click on "Environment Variables"; click "new" in "System Variables".
        * Now, in "Variable Name" write "JAVA_HOME" and in the "Variable Value" area, put in the path of the JDK installation folder(e.g. C:\Program Files\Java\jdk1.8.0_05). 
        * Click "OK" and again "OK" and "OK" again.
        * To confirm java is setup correctly, you can open cmd and type "java -v". this command will present you install java version info, other error saying java is not recognized as an internal or external command.
    
    
*	[Download](https://www.elastic.co/products/elasticsearch) and unzip ElasticSearch latest version.  
    * Run bin/ElasticSearch.bat by double clicking it, or
    * Run it via command line, go to bin directory and write ElasticSearch.bat or ElasticSearch
    * optionally you can use -f command to run elasticsearch in forground or -d to run ElasticSearch in background as a daemon. -f is default.
      
Congratulations you have succesfully installed elasticsearch. Now you are ready to interact with your elasticsearch.

By default elasticsearch uses localhost:9200 path, you can see it in the console, if you have run elasticsearch from the elasticsearch.bat as a forground. 
Later i will tell you to run ElasticSearch as a service and configure other options of elasticsearch.

ElasticSearch provide a wonderful tool Kibana. Kibana is an open source data visualization platform that allows you to interact with your data through stunning, powerful graphics. From histograms to geomaps, Kibana brings your data to life with visuals that can be combined into custom dashboards that help you share insights from your data far and wide.

* [Download](https://www.elastic.co/products/kibana) and install kibana.
     * Stop the elasticsearch and run.
     * Unzip and optionally go into \config\kibana.yml and set the elasticsearch.url. The default is localhost:9200
     * Run bin\kibana.bat
     * Open your web browser to http://localhost:5601


Kibana can be loaded with many plugins to use elasticsearch very easy. Sense is a Kibana app.
* Stop Kibana by hitting ctrl-c in the Kibana dos window
* go to kibana root directory in cmd and type: /bin/kibana plugin --install elastic/sense
* restart Kibana by running kibana.bat.
 
This time when you will open http://localhost:5601, you will find square grid icon in the top menu. Click it, it will open all plugins list installed in Kibana.


