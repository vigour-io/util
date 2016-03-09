'use strict'

var test = require('tape')
var isURL = require('../../is/url')

var testCases = [
// ['url',expectedResult]
  ['boom', false, 'simple string'],
  ['perdu.com', true, 'domain.ext'],
  ['http://domain.ext/path?query=string', true, 'with query string'],
  ['https://boom.com/path?query=string%20with%20spaces', true, 'with (uri encoded) spaces (%20) in query string'],
  ['https://boom.com/path?query=string%20with%20spaces#andThis', true, 'with hash']
]

test('isURL', function (t) {
  t.plan(testCases.length)
  testCases.map(function (item) {
    t.equals(isURL(item[0]), item[1])
  })
})
