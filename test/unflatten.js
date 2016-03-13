'use strict'
var test = require('tape')
var unflatten = require('../unflatten')

var testCases = require('./flattenTestCases')

test('unflatten (separator)', function (t) {
  t.plan(testCases.withSeparator.length)
  testCases.withSeparator.forEach(function (item) {
    t.deepEqual(unflatten(item[1], testCases.separator),
      item[0],
      'unflatten(' + JSON.stringify(item[1]) + ', \'' +
        testCases.separator + '\') === ' + JSON.stringify(item[0]))
  })
})

test('unflatten', function (t) {
  t.plan(testCases.without.length)
  testCases.without.forEach(function (item) {
    t.deepEqual(unflatten(item[1]),
      item[0],
      'unflatten(' + JSON.stringify(item[1]) + ') === ' + JSON.stringify(item[0]))
  })
})
