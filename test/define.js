'use strict'

var test = require('tape')
var Base = require('vigour-base')
var define = require('../define')

test('define', function (t) {
  t.plan(6)
  var subject = {}
  var value = 'v'
  var fn = function () {}
  var base = new Base()
  var set = function (val) {
    t.equal(val, value, 'value is the same')
  }
  var extras = [
    { one: true },
    { three: fn },
    {
      four: {
        get: fn,
        set: set
      }
    },
    {
      a: base,
      b: fn
    }
  ]

  define.apply(subject, extras)
  equal('two', void 0)
  equal('three', { value: fn })
  equal('four', { get: fn, set: set })
  equal('a', { value: base })
  equal('b', { value: fn })
  // Let's trigger the setter test
  subject.four = value

  function equal (field, val) {
    var descriptor
    if (val !== void 0) {
      descriptor = {
        configurable: true,
        enumerable: false
      }
      if (val.value && !val.hasOwnProperty('writable')) {
        descriptor.writable = false
      }
      if (val) {
        for (let i in val) {
          descriptor[i] = val[i]
        }
      }
    }
    t.deepLooseEqual(
      Object.getOwnPropertyDescriptor(subject, field), descriptor,
      '"' + field + '" is defined correctly'
    )
  }
})
