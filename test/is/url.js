'use strict'
var test = require('tape')
var isURL = require('../../is/url')

var testCases = [
// ['url',expectedResult]
  ['string', false],
  ['domain.ext', true],
  ['http://domain.ext/path?query=string', true],
  ['https://domain.ext/path?query=string%20with%20spaces', true],
  ['https://domain.ext/path#withHash', true],
  ['http://domain.ext/path?query=string#withHash', true],
  ['localhost', true],
  ['localhost:8080', true],
  ['192.11.222.444', true],
  ['2001:0db8:0000:0042:0000:8a2e:0370:7334', true]
]

test('isURL', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isURL(item[0]), item[1], item[0])
  })
})
