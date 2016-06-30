'use strict'
const test = require('tape')
const Base = require('vigour-base')
const define = require('../define')
define.call(Base.prototype, { define: define })

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
  t.plan(3)
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

  obj.render = {}
  define.call(obj.render, {
    state (number) {
      return number * 2
    }
  })

  define.call(obj, {
    extend: {
      render: {
        state (extend, number) {
          return extend(number) * 10
        }
      }
    }
  })
  t.equal(obj.render.state(100), 2000, 'nested extended "method"')
})

test('define - extend - base', (t) => {
  const b = new Base()
  b.define({
    method () {
      // never return "arguments" its a v8 hazzard!
      const len = arguments.length
      const args = new Array(len)
      for (let i = 0; i < len; i++) {
        args[i] = arguments[i]
      }
      return args
    },
    extend: {
      set (set, val, stamp) {
        this._last = val
        return set.call(this, val, stamp)
      }
    }
  })
  b.set({ field: true })
  t.equal('field' in b, true, 'set overwritten correctly for base')
  const c = new b.Constructor({
    define: {
      extend: {
        set (set, val, stamp) {
          return set.call(this, val, stamp)
        }
      }
    }
  })
  c.set({ bla: true })
  t.same(c._last, { bla: true }, 'inherits first extension')
  t.equal('bla' in c, true, 'set overwritten correctly for base')
  c.define({
    extend: {
      args: true,
      method (method) {
        const len = arguments.length
        const args = new Array(len - 1)
        for (let i = 1; i < len; i++) {
          args[i - 1] = arguments[i]
        }
        return method.apply(this, args)
      }
    }
  })
  t.same(c.method(1, 2, 3, 4, 5), [ 1, 2, 3, 4, 5 ], 'using the "args:true" flag')

  for (let i = 0; i < 10; i++) {
    extendTest(i, t)
  }
  t.end()
})

function extendTest (amount, t) {
  const b = new Base()
  const args = []
  for (let i = 0; i < amount; i++) {
    args.push('a' + i)
  }
  const fnArgs = `(${args.join(',')})`
  const fn = args.length ? new Function( //eslint-disable-line
  `return function ${fnArgs} {
    var len = arguments.length
    var args = new Array(len)
    for (var i = 0; i < len; i++) {
      args[i] = arguments[i]
    }
    return args
  }`)() : function () {}
  b.define({ method: fn })
  const c = new b.Constructor({
    define: {
      extend: {
        method (method) {
          const len = arguments.length
          if (len > 1) {
            const args = new Array(len - 1)
            for (let i = 1; i < len; i++) {
              args[i - 1] = arguments[i]
            }
            return method.apply(this, args)
          } else {
            return method.call(this)
          }
        }
      }
    }
  })
  t.same(c.method.apply(c, args), args.length ? args : void 0, `return correct for ${amount} arguments`)
}
