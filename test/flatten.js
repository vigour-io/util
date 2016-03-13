'use strict'
var test = require('tape')
var flatten = require('../flatten')

var testCases = require('./flattenTestCases')

test('flatten (separator)', function (t) {
  t.plan(testCases.withSeparator.length)
  testCases.withSeparator.forEach(function (item) {
    t.deepEqual(flatten(item[0], testCases.separator),
      item[1],
      'flatten(' + JSON.stringify(item[0]) + ', \'' +
        testCases.separator + '\') === ' + JSON.stringify(item[1]))
  })
})

test('flatten', function (t) {
  t.plan(testCases.without.length)
  testCases.without.forEach(function (item) {
    t.deepEqual(flatten(item[0]),
      item[1],
      'flatten(' + JSON.stringify(item[0]) + ') === ' + JSON.stringify(item[1]))
  })
})
