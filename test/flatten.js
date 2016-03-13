'use strict'
var test = require('tape')
var flatten = require('../flatten')

var testCases = [
// ['object', expectedResult]
  [{ a: { b: { c: 'd' } } }, { 'a.b.c': 'd' }],
  [{ a: { b: { c: 'd', e: 'f' } } }, { 'a.b.c': 'd', 'a.b.e': 'f' }],
  [{ a: 'b' }, { a: 'b' }]
]

test('flatten', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.deepEqual(flatten(item[0]), item[1], 'flatten(' + JSON.stringify(item[0]) + ') === ' + JSON.stringify(item[1]))
  })
})

test('flatten (separator)', function (t) {
  t.plan(1)
  var input = { a: { b: { c: 'd' } } }
  var separator = '/'
  var expected = { 'a/b/c': 'd' }
  t.deepEqual(flatten(input, separator), expected, 'flatten(' + JSON.stringify(input) + ', \'' + separator + '\') === ' + JSON.stringify(expected))
})
