---
layout: post
title:  "Angular to remember"
date:   2017-11-13
desc: "Angular to remember"
keywords: "Angular to remember"
categories: [others]
---

Modules
=======

-   Modules can be loaded eagerly when the application starts. They can
    also be *lazy loaded* asynchronously by the router.

An NgModule is a class decorated
with @[NgModule](https://angular.io/api/core/NgModule) metadata. The
metadata do the following:

-   Declare which components, directives, and pipes belong to the
    module.

-   Make some of those classes public so that other component templates
    can use them.

-   Import other modules with the components, directives, and pipes
    needed by the components in *this* module.

-   Provide services at the application level that any application
    component can use.

**Supports both JIT and AOT**

Compile just-in-time (JIT)

Compile ahead-of-time (AOT)

Service providers
=================

Modules are a great way to provide services for all of the module\'s
components.

The [Dependency
Injection](https://angular.io/guide/dependency-injection) page describes
the Angular hierarchical dependency-injection system and how to
configure that system
with [providers](https://angular.io/guide/dependency-injection#providers) at
different levels of the application\'s component tree.

A module can add providers to the application\'s root dependency
injector, making those services available everywhere in the application.

Miscellaneous
=============

For any class, directive, component name clash use as in import like
below.

import { HighlightDirective as ContactHighlightDirective } from
./contact/highlight.directive\';

@[Component](https://angular.io/api/core/Component) () -\> Make a class
Component

@[Injectable](https://angular.io/api/core/Injectable) () -\> Make a
class Inject-able in other class constructor, must be add in providers.

@[Input](https://angular.io/api/core/Input)() -\> Make a
