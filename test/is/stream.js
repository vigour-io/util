'use strict'
var test = require('tape')
var stream = require('stream')
var isStream = require('../../is/stream')

var testCases = [
// ['stream', expectedResult]
  [new stream.Readable(), true, 'new stream.Readable()'],
  [new stream.Writable(), true, 'new stream.Writable()'],
  [new stream.Duplex(), true, 'new stream.Duplex()']
]

test('isStream', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isStream(item[0]), item[1], 'isStream(' + item[2] + ') === ' + item[1])
  })
})

var readableCases = [
  [new stream.Readable(), true, 'new stream.Readable()'],
  [new stream.Writable(), false, 'new stream.Writable()'],
  [new stream.Duplex(), true, 'new stream.Duplex()']
]

test('isStream.readable', function (t) {
  t.plan(readableCases.length)
  readableCases.forEach(function (item) {
    t.equals(isStream.readable(item[0]), item[1], 'isStream.readable(' + item[2] + ') === ' + item[1])
  })
})

var writableCases = [
  [new stream.Readable(), false, 'new stream.Readable()'],
  [new stream.Writable(), true, 'new stream.Writable()'],
  [new stream.Duplex(), true, 'new stream.Duplex()']
]

test('isStream.writable', function (t) {
  t.plan(writableCases.length)
  writableCases.forEach(function (item) {
    t.equals(isStream.writable(item[0]), item[1], 'isStream.writable(' + item[2] + ') === ' + item[1])
  })
})
