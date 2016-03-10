'use strict'
var test = require('tape')
var isHash = require('../../is/hash')

var testCases = [
// ['object', expectedResult]
  ['1234', false], // length too short
  ['123456', true], // length correct
  ['12345678', false], // length too long
  ['asQW12', true],
  ['boom$!', false] // illegal chars
]
// isHash is just running a regexp, let's not go crazy on tests here

test('isHash', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isHash(item[0]), item[1], 'isHash(' + item[0] + ') === ' + item[1])
  })
})
