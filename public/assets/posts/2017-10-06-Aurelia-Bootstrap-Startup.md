---
layout: post
title:  "Aurelia Bootstrap Startup"
date:   2017-10-06
desc: "aurelia"
keywords: "aurelia"
categories: [others]
tags: [Aurelia]
icon: icon-aurelia
---


Getting Started
===============

Pre Requisites
--------------

Aurelia Setup project

Installs
--------

``` node
npm install bootstrap --save

npm install aurelia-bootstrap --save

npm install velocity-animate --save

npm install tether --save
```

Update aurelia.json for path of above installs
----------------------------------------------

``` json
"velocity-animate",

"tether",

{

"name": "aurelia-bootstrap",

"path": "../node_modules/aurelia-bootstrap/dist/amd",

"main": "index",

"resources": [

"**/*.html"

]

},

{

"name": "bootstrap",

"path": "../node_modules/bootstrap-v4-dev/dist/",

"main": false,

"resources": [

"**/*.css"

]

}

```

Register bootstrap plugin with Aurelia
--------------------------------------

Aurelia-bootstrap supports both Bootstrap 3 and 4. to use the version 4.
You need to explicity say Aurelia to use bootstrap version 4 like below.

``` ts
export function configure(aurelia: Aurelia) {

aurelia.use

.standardConfiguration()

.plugin('aurelia-bootstrap', plugin => plugin.options.version = 4)

.feature('resources');
```

Bingo!!! You are ready to use bootstrap in your Aurelia application.

Using Bootstrap Renderer for faciliating validation errors
==========================================================

Add BootstrapFormValidationRender in ValidationController and object to
validate. Then validate using validate method. Also, on html must
specify the field you want to validate.

``` ts
constructor(private controller: ValidationController) {

log.debug("constructor called");

this.controller.addRenderer(new BootstrapFormValidationRenderer());

this.controller.addObject(objectToValidate, getValidationRules());

}

function getValidationRules(){

return ValidationRules.ensure<FormField, any>(x => x.value)

.required().when(x => x.validation && x.validation.required)

.email().when(x => x.validation && x.validation.email)

.maxLength(this.validation.maxLength).when(x => x.validation &&
x.validation.maxLength && typeof x.value == "string")

.minLength(this.validation.maxLength).when(x => x.validation &&
x.validation.minLength && typeof x.value == "string")

.rules;

}

save() {

this.controller.validate()

.then(result => {

if (result.valid) {

}

});

}

<input type=”text” value.bind="formField.value & validate" />

```

Below is a BootstrapFormValidationRender a class.

``` ts
import {

ValidationRenderer,

RenderInstruction,

ValidateResult

} from 'aurelia-validation';

export class BootstrapFormValidationRenderer {

render(instruction: RenderInstruction) {

for (let { result, elements } of instruction.unrender) {

for (let element of elements) {

this.remove(element, result);

}

}

for (let { result, elements } of instruction.render) {

for (let element of elements) {

this.add(element, result);

}

}

}

add(element: Element, result: ValidateResult) {

if (result.valid) {

return;

}

const formGroup = element.closest('.form-group');

if (!formGroup) {

return;

}

// add the has-danger class to the enclosing form-group div

formGroup.classList.add('has-danger');

// add help-block

const message = document.createElement('div');

message.className = 'form-control-feedback';

message.textContent = result.message;

message.id = 'validation-message-${result.id}';

formGroup.lastElementChild.appendChild(message);

}

remove(element: Element, result: ValidateResult) {

if (result.valid) {

return;

}

const formGroup = element.closest('.form-group');

if (!formGroup) {

return;

}

// remove help-block

const message =
formGroup.lastElementChild.querySelector('\#validation-message-${result.id}');

if (message) {

formGroup.lastElementChild.removeChild(message);

// remove the has-danger class from the enclosing form-group div

if
(formGroup.lastElementChild.querySelectorAll('.form-control-feedback').length
=== 0) {

formGroup.classList.remove('has-danger');

}

}

}

}
```

That’s it. You can run your project and enjoy client side validation.
