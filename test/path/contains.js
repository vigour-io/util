'use strict'
var test = require('tape')
var pathContains = require('../../path/contains')

var testCases = [
// [path, key, expectedResult]
  [['a'], 'a', true],
  [['a', 'b'], 'b', true],
  [['a', 'b', 'special:c'], 'c', true]
]

test('pathContains', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(pathContains(item[0], item[1]), item[2], 'pathContains(' + item[0] + ', ' + item[1] + ') === ' + item[2])
  })
})
