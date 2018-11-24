# ember-anchor

[![Build Status](https://travis-ci.org/mike-north/ember-anchor.svg?branch=master)](https://travis-ci.org/mike-north/ember-anchor)
![NPM Version](https://img.shields.io/npm/v/ember-anchor.svg)
[![Code Climate](https://codeclimate.com/github/mike-north/ember-anchor/badges/gpa.svg)](https://codeclimate.com/github/mike-north/ember-anchor)

## Recommended Use

The easiest way to use ember-anchor is to setup a controller with a queryParam, and bind it to the `{{ember-anchor}}` component. 

Add this component to the template corresponding to the controller or route where your queryParams may live, passing in the queryParam to be used as your "anchor" param, to the component as property `a`.

##### app/templates/application.hbs
```hbs
{{ember-anchor a=anc}}
```

On your controller, add a mixin that allows us to use a queryParam like a #hash.

##### app/controllers/application.js
```js
import Ember from 'ember';
import ControllerSupport from 'ember-anchor/mixins/controller-support';

export default Ember.Controller.extend(ControllerSupport, {
  queryParams: ['anc'],
  anc: 'first'
});
```

Now you may build links with a queryParam, and add "anchors" to arbitrary elements in the page, which can be scrolled to.

##### app/templates/index.hbs
```hbs

{{link-to 'Go to First' 'index'
  (query-params anc='first') }}
{{link-to 'Go to Second' 'index'
  (query-params anc='second') }}
{{link-to 'Go to Third' 'index'
  (query-params anc='third') }}



<h5 data-anchor='first'></h5>
<h5 data-anchor='second'></h5>
<h5 data-anchor='third'></h5>

```

## Legacy Use (With Ember.View)

And on your view, add a mixin that scrolls the page to the appropriate position, based on a queryParam, and in response to queryParam changes

##### app/views/index.js
```js
import Ember from 'ember';
import ViewSupport from 'ember-anchor/mixins/view-support';

export default Ember.View.extend(ViewSupport, {

});

```

Build links in the same way as described above

## Advanced Configuration

### One View

You can customize the queryParam used for anchors on a single view, by overriding the `anchorQueryParam` property on both the controller and view

##### app/controllers/customized.js
```js
import Ember from 'ember';
import ControllerSupport from 'ember-anchor/mixins/controller-support';

export default Ember.Controller.extend(ControllerSupport, {
  anchorQueryParam: 'custom',
  queryParams: ['custom'],
  custom: 'first'
});

```

##### app/views/customized.js
```js
import Ember from 'ember';
import ViewSupport from 'ember-anchor/mixins/view-support';

export default Ember.View.extend(ViewSupport, {
  anchorQueryParam: 'custom'
});

```

You should then build your links, and add your `data-*` attributes as follows

```handlebars
<!-- Build your link /?custom=first -->
{{link-to 'Go to First' 'index'
  (query-params custom='first') }}

<!-- Will be scrolled into view, when above link is clicked -->
<h5 data-custom='first'></h5>

```

### Application Wide

If you wish to use a different queryParam other than `anchor`, as the application-wide default you can configure this addon as follows

**app/configure/environment.js**

```js
var ENV = {
  ...
  emberAnchor: {
    anchorQueryParam: 'a'
  },
  ...
};
...
return ENV;

```

You should then build your links, and add your `data-*` attributes as follows

```handlebars
<!-- Build your link /?a=first -->
{{link-to 'Go to First' 'index'
  (query-params a='first') }}

<!-- Will be scrolled into view, when above link is clicked -->
<h5 data-a='first'></h5>

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

![Analytics](https://ga-beacon.appspot.com/UA-66610985-1/mike-north/ember-anchor/readme)
