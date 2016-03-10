'use strict'
var test = require('tape')
var Base = require('vigour-base')
var isPlainObj = require('../../is/plainobj')

var testCases = [
// ['object', expectedResult]
  [{}, true],
  [{ a: 'a' }, true],
  [new Base({}), false],
  [[], false],
  [['a'], false],
  [function () {}, false]
]

test('isPlainObj', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isPlainObj(item[0]), item[1], 'isPlainObj(' + item[0].toString() + ') === ' + item[1])
  })
})
