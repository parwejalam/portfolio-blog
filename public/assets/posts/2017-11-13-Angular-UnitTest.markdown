---
layout: post
title:  "Angular Unit Test"
date:   2017-11-13
desc: "Angular Unit Test"
keywords: "Angular Unit Test"
categories: [others]
---


### The tests

Jasmine runs the beforeEach function before each of these tests

Test a component
----------------

Test a component with an external template
------------------------------------------

Test a component with a dependency

### Always get the service from an injector

userService =
[TestBed](https://angular.io/api/core/testing/TestBed).get(UserService);

or

### Automatic change detection

import {
[ComponentFixtureAutoDetect](https://angular.io/api/core/testing/ComponentFixtureAutoDetect)
} from \'\@angular/core/testing\';

providers: \[ { provide:
[ComponentFixtureAutoDetect](https://angular.io/api/core/testing/ComponentFixtureAutoDetect),
useValue: true } \]
