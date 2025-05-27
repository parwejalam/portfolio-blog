---
layout: post
title:  "Getting started with Vue"
date:   2017-10-20
desc: "Vue"
keywords: "Vue"
categories: [others]
tags: [Vue]
---

Vue
===

Getting started with Vue, requires only a js or you can use vue-cli.

The Js can be referenced from here.

\<script src=\"https://unpkg.com/vue\"\>\</script\>

The simplest example is below: Keep in mind Vue object should be created
only after the element selected is rendered. In simple words html should
be provided first then script that creates Vue object.

\<html\>

\<head\>

\<script src=\"https://unpkg.com/vue\"\>\</script\>

\</head\>

\<body\>

\<div id=\"app\"\>

{{ message }}

\</div\>

\<script\>

var app = new Vue({

el: \'\#app\',

data: {

message: \'Hello Vue!\'

}

});

\</script\>

\</body\>

\</html\>

Important Keywords
==================

v- is a prefix for directives. Some directives are listed below.

{{}} for string interpolation. Example {{ hello }}

v-bind:  bind element attributes. Examle v-bind:title=\"message\"

v-if= conditional rendering. Example v-if=\"seen\"

v-for= for looping. Example v-for=\"todo in todos\"

In above example message, seen, todos are properties inside data of Vue
like below.

new Vue({

el: \'\#app\',

data: {

message: \'Hello Vue!\'

}

v-on: for event from UI. Example v-on:click=\"reverseMessage\"

reverseMessage is a function in methods object of Vuew like below:

new Vue({

el: \'\#app\',

methods: {

reverseMessage: function () {

this.message = this.message.split(\'\').reverse().join(\'\')

}

}

});

Above is a sample App to play around.

[Composing with Components](https://vuejs.org/v2/guide/#Composing-with-Components)
==================================================================================

An example

\<ol id=\"app-6\"\>

\<!\-- Create an instance of the todo-item component \--\>

\<todo-item\>\</todo-item\>

\</ol\>

// Define a new component called todo-item

Vue.component(\'todo-item\', {

template: \'\<li\>This is a todo\</li\>\'

});

var app6 = new Vue({

el: \'\#app-6\'

});

A little dynamic example

\<div id=\"app-7\"\>

\<ol\>

\<!\--

Now we provide each todo-item with the todo object

it\'s representing, so that its content can be dynamic.

We also need to provide each component with a \"key\",

which will be explained later.

\--\>

\<todo-item v-for=\"item in groceryList\" v-bind:todo=\"item\"
v-bind:key=\"item.id\"\>

\</todo-item\>

\</ol\>

\</div\>

Vue.component(\'todo-item\', {

props: \[\'todo\'\],

template: \'\<li\>{{ todo.text }}\</li\>\'

});

var app7 = new Vue({

el: \'\#app-7\',

data: {

groceryList: \[

{ id: 0, text: \'Vegetables\' },

{ id: 1, text: \'Cheese\' },

{ id: 2, text: \'Whatever else humans are supposed to eat\' }

\]

}

})
