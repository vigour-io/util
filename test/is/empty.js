'use strict'
var test = require('tape')
var Base = require('vigour-base')
var isEmpty = require('../../is/empty')

var testCases = [
// ['object', expectedResult]
  [new Base({}), true],
  [new Base({ a: 'a' }), false],
  [new Base({ a: { val: null } }), true],
  [new Base({ a: { val: void 0 } }), false],
  [new Base({ properties: { shawn: true }, shawn: {} }), true]
]

test('isEmpty', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isEmpty(item[0]), item[1], 'isEmpty(' + item[0] + ') === ' + item[1])
  })
})
