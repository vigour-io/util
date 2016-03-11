'use strict'
var test = require('tape')
var isHash = require('../../is/hash')

var testCases = [
// ['object', expectedResult]
  ['1234', false], // length too short
  ['12345', true], // length minimum (correct)
  ['1234567', true], // length maximum (correct)
  ['12345678', false], // length too long
  ['asd123', true], // letters
  ['asQW12', false], // Capital letters
  ['boom$!', false], // illegal chars
  [1, false], // number
  [12345, false], // number with more digits
  [{}, false], // object
  [[1, 2, 3, 4], false], // array
  [[], false] // array
]
// isHash is just running a regexp, let's not go crazy on tests here

test('isHash', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isHash(item[0]), item[1], 'isHash(' + JSON.stringify(item[0]) + ') === ' + item[1])
  })
})
