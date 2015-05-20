var propBind = require('../index.js')

var test = require('tape')
var BaseElement = require('base-element')
var document = require('global/document')

test(':my-button checked:is-checked:not-checked', function (t) {
  t.plan(2)

  setUp(function (fixture) {
    function Button () {
      BaseElement.call(this, fixture)
      propBind(this, 'className', ':my-button checked:is-checked:not-checked')
      this.checked = false
    }
    Button.prototype = Object.create(BaseElement.prototype)

    var button = new Button()
    t.equal(button.className, 'my-button not-checked')

    button.checked = true
    t.equal(button.className, 'my-button is-checked')

    tearDown(t.end)
  })
})

test(':my-button checked', function (t) {
  t.plan(2)

  setUp(function (fixture) {
    function Button () {
      BaseElement.call(this, fixture)
      propBind(this, 'className', ':my-button checked')
      this.checked = false
    }
    Button.prototype = Object.create(BaseElement.prototype)

    var button = new Button()
    t.equal(button.className, 'my-button')

    button.checked = true
    t.equal(button.className, 'my-button checked')

    tearDown(t.end)
  })
})

test(':my-button checked::unchecked', function (t) {
  t.plan(2)

  setUp(function (fixture) {
    function Button () {
      BaseElement.call(this, fixture)
      propBind(this, 'className', ':my-button checked::unchecked')
      this.checked = false
    }
    Button.prototype = Object.create(BaseElement.prototype)

    var button = new Button()
    t.equal(button.className, 'my-button unchecked')

    button.checked = true
    t.equal(button.className, 'my-button')

    tearDown(t.end)
  })
})

function setUp (cb) {
  var fixture = document.createElement('div')
  fixture.setAttribute('id', 'fixture')
  document.body.appendChild(fixture)
  cb(fixture)
}

function tearDown (cb) {
  var fixture = document.getElementById('fixture')
  if (fixture) fixture.parentNode.removeChild(fixture)
  cb()
}
