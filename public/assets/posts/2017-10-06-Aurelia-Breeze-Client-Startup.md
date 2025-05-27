---
layout: post
title:  "Aurelia Breeze Client Startup"
date:   2017-10-06
desc: "aurelia, breeze"
keywords: "aurelia, breeze"
categories: [others]
tags: [Aurelia]
icon: icon-aurelia
---



Getting Started
===============

Pre Requisites
--------------

Aurelia Setup project

Dependencies
------------

-   [aurelia-binding](https://github.com/aurelia/binding)

-   [aurelia-dependency-injection](https://github.com/aurelia/dependency-injection)

-   [aurelia-fetch-client](https://github.com/aurelia/fetch-client)

-   [breeze](http://www.getbreezenow.com/breezejs)

Installs
--------
``` node
npm install aurelia-fetch-client --save

npm install aurelia-breeze --save
```

Update aurelia.json for path of above installs
----------------------------------------------

``` json
{

"name": "breeze-client",

"path": "../node_modules/breeze-client",

"main": "breeze.base.debug.js",

"exports": "breeze",

"resources": [

"breeze.modelLibrary.backingStore.js",

"breeze.dataService.webApi.js",

"breeze.dataService.odata.js",

"breeze.ajax.jQuery.js",

"breeze.uriBuilder.json.js",

"breeze.uriBuilder.odata.js"

]

},

{

"name": "aurelia-breeze",

"path": "../node_modules/aurelia-breeze/dist/amd",

"main": "index"

},

{

"name": "aurelia-fetch-client",

"path": "../node_modules/aurelia-fetch-client/dist/amd",

"main": "aurelia-fetch-client"

}
```

Register aurelia-breeze plugin with Aurelia
-------------------------------------------

``` ts
import 'breeze-client/breeze.modelLibrary.backingStore';

import 'breeze-client/breeze.dataService.webApi';

import 'breeze-client/breeze.uriBuilder.json';

export function configure(aurelia) {

aurelia.use

.standardConfiguration()

.plugin('aurelia-breeze'); // <--------<<

aurelia.start().then(a =&gt; a.setRoot());

}
```

Bingo!!! You are ready to use breeze in your Aurelia application.

Error
=====

If you will use breeze.debug.js. It contains all adapters and will give
you below error due to occurrence of multiple annonymous define.

To reomove error use breeze.base.debug.js

![](/static/img/blog/Aurelia/aurelia-breeze-client-startup/1.png)

Now breeze.base.debug.js needs backingStore adapter and you will see
below error.

Provide breeze-client/modelLibrary.backingStore.js via import in main.ts

![](/static/img/blog/Aurelia/aurelia-breeze-client-startup/2.png)

Voila, Errors are gone.

References
==========

-   <http://breeze.github.io/doc-js/>

-   <https://github.com/jdanyow/aurelia-breeze>

-   <https://github.com/Breeze/breeze.bridge.angular/issues/6>


