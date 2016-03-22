'use strict'

var test = require('tape')
var isNode = require('../../is/node')

test('isNode', function (t) {
  t.plan(1)
  t.equals(isNode, true, 'isNode returns true in node')
})
