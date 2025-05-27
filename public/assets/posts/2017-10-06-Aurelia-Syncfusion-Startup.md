---
layout: post
title:  "Aurelia Syncfusion Bridge"
date:   2017-10-06
desc: "aurelia, netcore"
keywords: "aurelia, netcore"
categories: [others]
tags: [Aurelia]
icon: icon-aurelia
---

Aurelia Syncfusion Bridge
=========================

Aurelia-Syncfusion-Bridge includes wrappers for
Syncfusion-JavaScript widget’s, which act as the interface for
both [Aurelia](http://aurelia.io/) frameworks and Syncfusion JavaScript
widgets. This bridge is a structured, configurable collection of
JavaScript classes which wrap Syncfusion JavaScript controls, presenting
them in the form of Aurelia components.

The Syncfusion Aurelia components are named with prefix ej to avoid
conflicting with other library component and offers the following
features.

-   Properties

-   Two-way binding

-   Event binding

-   Templates

Properties
----------

All the properties of Syncfusion JavaScript widget are defined as
attributes for particular Aurelia component, so you can easily set value
to widget properties, simply by prefixing property name with e- in
component markup.

The allowPaging property of ejGrid widget can be defined as like the
below code example.

```
<ej-grid e-data-source.bind="gridData"
e-allow-paging="true"></ej-grid>
```

NOTE

The gridData will be loaded from Aurelia view-model.

Two-way binding
---------------

Two-way binding observes the property in model and updates the UI
automatically. The Syncfusion Aurelia component supports two-way binding
for all the interactive properties. For ex., value property in input
components, dataSource in Grids etc.

The dataSource property of ejGrid widget can be defined as two-way
bindable property like the below code example.

```
<ej-grid e-data-source.two-way="gridData"
e-allow-paging="true"></ej-grid>
```

Event binding
-------------

Events can be bound to the components using the concern event name
attribute with prefix e-on-.

The recordClick event of ejGrid widget can be bound to Aurelia component
as like below code example.

```
<ej-grid e-data-source.two-way="gridData" e-allow-paging="true"
e-on-record-click.delegate="recordClick($event.detail)">
</ej-grid>
```

Templates
---------

Aurelia framework’s template engine and syntaxes can be used within all
template supported Syncfusion Aurelia components.

The ejGrid widget’s column template can be rendered as like the below
code example.

```
<ej-grid e-data-source.two-way="gridData" e-allow-paging=true
e-on-record-click.delegate="recordClick($event.detail)">
<ej-column e-field="EmployeeImage" e-header-text="Employee Image"
<ej-template> <div><img
src="images/grid/Employees/${EmployeeID}.png" />
</div> </ej-template> </ej-column>
<ej-column e-field="EmployeeID" e-header-text="Employee
ID"></ej-column> <ej-column e-field="FirstName"
e-header-text="First Name"></ej-column> <ej-column
e-field="LastName" e-header-text="Last Name"></ej-column>
</ej-grid>
```

Getting Started
===============

Pre Requisites
--------------

Aurelia setup project.

Installs 
---------

``` node
npm install syncfusion-javascript --save

npm install aurelia-syncfusion-bridge –save

npm install jquery --save

npm install jquery-validation --save
```

Update aurelia_project/aurelia.json
------------------------------------

In build.bundles with name: vendor-bundle.js under dependencies array
add these if not already added.

``` json
"jquery",

"jquery-validation",

{

"name": "aurelia-syncfusion-bridge",

"path": "../node_modules/aurelia-syncfusion-bridge/dist/amd",

"main": "index",

"resources": [

"**/*.js"

]

},

{

"name": "syncfusion-javascript",

"path": "../node_modules/syncfusion-javascript/",

"main": false,

"resources": [

"Content/ej/web/ej.widgets.core.bootstrap.min.css",

"Content/ej/web/bootstrap-theme/ej.theme.min.css",

"Content/ej/web/responsive-css/ej.responsive.css"

]

},

{

"name": "jsrender",

"path": "../node_modules/jsrender/",

"main": "jsrender"

},
```

Also, in build add ‘copyFiles’ instruction to where these files are
required.

``` json
"copyFiles": {

"node_modules/syncfusion-javascript/Content/ej/web/common-images/**/*":
"wwwroot/common-images",

"node_modules/syncfusion-javascript/Content/ej/web/bootstrap-theme/images/**":
"wwwroot/images"

},
```

Add Syncfusion-bridge as plugin
-------------------------------

In main.ts register installed plugin to use.

``` ts
export function configure(aurelia: Aurelia) {

aurelia.use

.standardConfiguration()

.plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll())
.feature('resources');
```

> You are ready to get started with Syncfusion controls
