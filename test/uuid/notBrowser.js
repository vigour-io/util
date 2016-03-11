'use strict'
var test = require('tape')
var uuid = require('../../uuid')
var isHash = require('../../is/hash')

test('uuid (browser)', function (t) {
  t.plan(1)
  t.equals(isHash(uuid()), true, 'isHash(uuid()) === ' + true)
})
