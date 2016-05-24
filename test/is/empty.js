'use strict'
const test = require('tape')
const Base = require('vigour-base')
const isEmpty = require('../../is/empty')
const testCases = [
// ['object', expectedResult]
  [{}, true],
  [{ a: true }, false],
  [new Base({}), true],
  [new Base({ a: 'a' }), false],
  [new Base({ a: { val: null } }), true],
  [new Base({ a: { val: void 0 } }), false],
  [new Base({ properties: { shawn: true }, shawn: {} }), true]
]

test('isEmpty - base', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isEmpty(item[0]), item[1], 'isEmpty(' + item[0] + ') === ' + item[1])
  })
})
