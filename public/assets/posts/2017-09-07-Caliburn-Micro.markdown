---
layout: post
title:  "Caliburn Micro"
date:   2017-09-07
desc: "Caliburn Micro"
keywords: "Caliburn Micro"
categories: [others]
tags: [Caliburn Micro, Caliburn]
---

Features
========

1.  Bind view model properties to your view based on convention

2.  Apply methods between your view and view model automatically with
    parameters and guard methods

3.  Decouple view models with built in composition patterns and event
    aggregation

Getting Started
===============

Install-Package Caliburn.Micro -Version 3.1.0

Or

dotnet add package Caliburn.Micro \--version 3.1.0

Superb Action conventions
=========================

\$source -\> for self xaml element.

cal:Message.Attach="" -\> for binding method, or property.

These conventions are based on x:Name. So, if you have a method called
"Save" on your ViewModel and a Button named "Save" in your UI, we will
automatically create an EventTrigger for the "Click" event and assign an
ActionMessage for the "Save" method. Furthermore, we will inspect the
method's signature and properly construct the ActionMessage parameters.
This mechanism can be turned off or customized. You can even change or
add conventions for different controls. For example, you could make the
convention event for Button "MouseMove" instead of "Click" if you really
wanted.

Note: ViewModel method automatically binds to view control with same
name. For calling a method from different control, you may use
cal:Message.Attach="" -\> for binding method, or property.

Can prefix on MethodName -\> will disable/enable control that calls
Method.
