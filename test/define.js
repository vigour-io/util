'use strict'

var test = require('tape')
var Base = require('vigour-base')
var define = require('../define')

test('define', function (t) {
  t.plan(5)

  var subject = {}
  var value = 'v'
  var extras = [
    { one: true, two: new Base() },
    { three: function () {} },
    {
      four: {
        get () { },
        set (val) { t.equal(val, value, 'value is the same') }
      }
    }
  ]

  define.apply(subject, extras)
  t.equals(Object.getOwnPropertyDescriptor(subject, 'one').configurable, true)
  t.equals(Object.getOwnPropertyDescriptor(subject, 'two').configurable, true)
  t.equals(Object.getOwnPropertyDescriptor(subject, 'three').configurable, true)
  t.equals(Object.getOwnPropertyDescriptor(subject, 'four').configurable, true)
  // Let's trigger the setter test
  subject.four = value
})
