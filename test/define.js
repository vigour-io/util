'use strict'
const test = require('tape')
const Base = require('vigour-base')
const define = require('../define')

test('define', (t) => {
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

test('define - extend', (t) => {
  t.plan(2)
  var obj = {}
  define.call(obj, {
    method (number) {
      return number * 2
    }
  })

  define.call(obj, {
    extend: {
      method (extend, number) {
        return extend(number) * 10
      }
    }
  })
  t.equal(obj.method(100), 2000, 'extended "method"')

  try {
    define.call(obj, {
      extend: { method: true }
    })
  } catch (e) {
    t.equal(
      e.message,
      'Expect function for extension "method"',
      'throws error on incorrect type'
    )
  }
})
