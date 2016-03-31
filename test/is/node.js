'use strict'

var test = require('tape')
var isNode = require('../../is/node')

test('isNode', function (t) {
  t.plan(1)
  t.equals(isNode, typeof window === 'undefined', 'isNode returns `true` in node, `false` in the browser')
})
