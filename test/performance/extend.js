'use strict'
const perf = require('vigour-performance')
const Base = require('vigour-base')
const amount = 1e6

function vanilla () {
  const a = new Base({
    define: {
      method (val) {
        return val
      }
    }
  })
  const method = a.method
  Object.defineProperty(a, 'method', {
    value (val) {
      return method.call(this, val)
    }
  })
  for (let i = 0; i < amount; i++) {
    a.set(i)
  }
}

function extend () {
  const a = new Base({
    define: {
      method (val) {
        return val
      }
    }
  })
  a.define({
    extend: {
      method (method, val) {
        return method.call(this, val)
      }
    }
  })
  for (let i = 0; i < amount; i++) {
    a.method(i)
  }
}

perf(extend, vanilla)
