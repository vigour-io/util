'use strict'
const perf = require('vigour-performance')
const Base = require('vigour-base')
const amount = 1e6

function vanilla () {
  const a = new Base()
  const _set = a.set
  Object.defineProperty(a, 'set', {
    value () {
      return _set.apply(this, arguments)
    }
  })
  for (let i = 0; i < amount; i++) {
    a.set(i)
  }
}

function extend () {
  const a = new Base({
    define: {
      extend (set, val, stamp) {
        return set.call(this, val, stamp)
      }
    }
  })
  for (let i = 0; i < amount; i++) {
    a.set(i)
  }
}

perf(extend, vanilla)
