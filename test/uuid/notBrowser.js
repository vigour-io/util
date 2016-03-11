'use strict'
var test = require('tape')
var uuid = require('../../uuid/')
var isHash = require('../../is/hash')

test('uuid (not browser)', function (t) {
  t.plan(2)
  t.equals(isHash(uuid.val), true, 'isHash(uuid.val) === true')
  t.equals(isHash(uuid.generate()), true, 'isHash(uuid.generate()) === true')
})
