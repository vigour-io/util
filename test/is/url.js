'use strict'

var test = require('tape')
var isURL = require('../../is/url')

var testCases = [
// ['url',expectedResult]
  ['boom', false],
  ['perdu.com', true],
  ['http://domain.ext/path?query=string', true],
  ['https://boom.com/path?query=string%20with%20spaces', true],
  ['https://boom.com/path?query=string%20with%20spaces#andThis', true]
]

test('isURL', function (t) {
  t.plan(testCases.length)
  testCases.map(function (item) {
    t.equals(isURL(item[0]), item[1])
  })
})
