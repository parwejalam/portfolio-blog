---
layout: post
title:  "Aurelia view life cycle"
date:   2017-12-06
desc: "Aurelia view life cycle"
keywords: "Aurelia"
categories: [others]
tags: [Aurelia]
icon: icon-aurelia
---


Life Cycle of Aurelia View (ViewMOdel)
======================================

Below are life cycle hooks of a Aurelia view. These are arranged as per their calling sequence by the framework.

activate
--------

This method is called early in the lifecycle after constructor.

It’s a parameter less function, should be used when need to read data from route. Explore via debugging in which case you use this method effectively.

created
-------

It has two parameters:

owningView, myView

owningView is View that contains the view(myView) is created. These object contains very rich data, use debugger to explore both. Can be used for various purposes.

bind
----

This method happens after binding occurs, but before the DOM attachment.
This is where the DataBinding engine binds the contents of the View.

It has two parameters:

bindingContext, overrideContext

attached
--------

This method gets called when the View is attached to the DOM. Here is where you will do your DOM manipulation.

deactivate
----------

This method could be used effectively to do something when moving from this view to another view. This can be also used to prevent from going to next view or ask user before moving to another view.

detached
--------

This method is called when the View is detached from the DOM. If you registered events in the attached method, you would probably unbind them in here. This is your chance to free up some memory and clean the slate.

unbind
------

This method is called when the DataBinding engine is unbound from the View.
