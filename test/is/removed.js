'use strict'
var test = require('tape')
var Base = require('vigour-base')
var isRemoved = require('../../is/removed')

var testCases = [
// ['base', expectedResult]
  [new Base({}), true], // empty
  [new Base({ a: 'a' }), false]
]

test('isRemoved', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isRemoved(item[0]), item[1], 'isRemoved(' + item[0] + ') === ' + item[1])
  })
})
