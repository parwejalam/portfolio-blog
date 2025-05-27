---
layout: post
title:  "Aurelia Breeze Server Startup"
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

Web API 2.x Project

Install packages
----------------

1.  Breeze.Server.ContextProvider.EF6

2.  Breeze.Server.WebApi2

Breeze controller example
-------------------------

``` cs
/// <summary>

/// Api that exposes data from breeze client

/// </summary>

[BreezeController]

[Route("breeze/[controller]")]

public class TodoesController : Controller

{

readonly EFContextProvider<MyDbContext> _contextProvider =

new EFContextProvider<MyDbContext>();

// ~/breeze/todoes/Metadata

[HttpGet]

public string Metadata()

{

return _contextProvider.Metadata();

}

// ~/breeze/todoes/Todoes

// ~/breeze/todoes/Todoes?$filter=IsArchived eq
false&$orderby=CreatedAt

[HttpGet]

public IQueryable<TodoItem> Todoes()

{

return _contextProvider.Context.TodoItems;

}

// ~/breeze/todoes/SaveChanges

[HttpPost]

public SaveResult SaveChanges(JObject saveBundle)

{

return _contextProvider.SaveChanges(saveBundle);

}

}
```

References
==========

1.  <http://breeze.github.io/doc-net/nuget-packages.html>


