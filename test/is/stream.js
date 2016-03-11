'use strict'
var test = require('tape')
var stream = require('stream')
var http = require('http')
var isStream = require('../../is/stream')

var testCases = [
// ['stream', expectedResult]
  [new stream.Readable(), true],
  [new stream.Writable(), true],
  [new stream.Duplex(), true]
]

test('isStream', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isStream(item[0]), item[1], 'isStream(' + item[0].toString() + ') === ' + item[1])
  })
})

test('isStream (super-streams)', function (t) {
  t.plan(2)
  var req = http.get('http://perdu.com', function (res) {
    t.equals(isStream(res), true, 'isStream(http.ClientResponse) === true')
  })
  t.equals(isStream(req), true, 'isStream(http.ClientRequest) === true')
  // from: https://nodejs.org/api/http.html#http_class_http_clientrequest
  // "The request implements the Writable Stream interface."
})
