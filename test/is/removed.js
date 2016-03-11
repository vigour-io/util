'use strict'
var test = require('tape')
var Base = require('vigour-base')
var isRemoved = require('../../is/removed')

var b1 = new Base()
b1.remove()

var b2 = new Base({ wrong: true })
b2.wrong.remove()

var testCases = [
// ['base', expectedResult]
  [new Base({}), false], // empty
  [new Base({ a: 'a' }), false],
  [b1, true],
  [b2.wrong, true]
]

test('isRemoved', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isRemoved(item[0]), item[1], 'isRemoved(' + item[0] + ') === ' + item[1])
  })
})
