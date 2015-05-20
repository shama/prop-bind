# prop-bind
Create a property that changes value base another property

[![build status](https://secure.travis-ci.org/shama/prop-bind.svg)](https://travis-ci.org/shama/prop-bind)
[![NPM version](https://badge.fury.io/js/prop-bind.svg)](https://badge.fury.io/js/prop-bind)
[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/shama.svg)](https://saucelabs.com/u/shama)

## example
Create an element and bind the prop:

```js
var propBind = require('prop-bind')

function MyButton (el) {
  propBind(this, 'className', ':my-button checked:is-checked:not-checked')
  this.checked = false
}
```

Then when the element is used:

```js
var button = new MyButton()
console.log(button.className) // = 'my-button not-checked'

button.checked = true
console.log(button.className) // = 'my-button is-checked'
```

## api

### `propBind(object, property, binding)`

* `object` - The object that contains the properties.
* `property` - The name of the property to create.
* `binding` - The string to create the bindings.

The `binding` is space separated and the syntax can be:

* `':raw-string'` - Values starting with `:` are treated as raw strings.
* `'property'` - Will switch between `'property'` and `''`.
* `'property:on:off'` - Will switch between `'on'` and `'off'` whether `property` is `true` or `false`.
* `'property::off'` - Will switch between `''` and `'off'` whether `property` is `true` or `false`.

# license
(c) 2015 Kyle Robinson Young. MIT License
