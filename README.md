# ember-anchor

[![Build Status](https://travis-ci.org/truenorth/ember-anchor.svg?branch=master)](https://travis-ci.org/truenorth/ember-anchor)
[![Dependency Status](https://david-dm.org/truenorth/ember-anchor.svg)](https://david-dm.org/truenorth/ember-anchor)
[![devDependency Status](https://david-dm.org/truenorth/ember-anchor/dev-status.svg)](https://david-dm.org/truenorth/ember-anchor#info=devDependencies)
![NPM Version](https://img.shields.io/npm/v/ember-anchor.svg)
[![Code Climate](https://codeclimate.com/github/truenorth/ember-anchor/badges/gpa.svg)](https://codeclimate.com/github/truenorth/ember-anchor)

## Use

On your controller, add a mixin that allows us to use a queryParam like a #hash


**app/controllers/index.js**

```js
import Ember from 'ember';
import ControllerSupport from 'ember-anchor/mixins/controller-support';

export default Ember.Controller.extend(ControllerSupport, {

});
```

And on your view, add a mixin that scrolls the page to the appropriate position, based on a queryParam, and in response to queryParam changes

**app/views/index.js**


```js
import Ember from 'ember';
import ViewSupport from 'ember-anchor/mixins/view-support';

export default Ember.View.extend(ViewSupport, {

});

```
Now, in your template, you may build links with a queryParam, and add "anchors" to arbitrary elements in the page, which can be scrolled to.

```hbs

{{link-to 'Go to First' 'index'
  (query-params anchor='first') }}
{{link-to 'Go to Second' 'index'
  (query-params anchor='second') }}
{{link-to 'Go to Third' 'index'
  (query-params anchor='third') }}



<h5 data-anchor='first'></h5>
<h5 data-anchor='second'></h5>
<h5 data-anchor='third'></h5>

```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
