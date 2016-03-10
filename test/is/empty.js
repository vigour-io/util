'use strict'
var test = require('tape')
var Base = require('vigour-base')
var isEmpty = require('../../is/empty')

var testCases = [
// ['object', expectedResult]
  [new Base({}), true],
  [new Base({ a: 'a' }), false],
  [new Base({ a: { val: null } }), false]
]

console.log(testCases)

test('isEmpty', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isEmpty(item[0]), item[1], 'isEmpty(' + item[0] + ') === ' + item[1])
  })
})
