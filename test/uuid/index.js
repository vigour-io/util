'use strict'
var test = require('tape')
var uuid = require('../../uuid/')
var isHash = require('../../is/hash')

test('uuid', function (t) {
  t.plan(4)
  t.equals(isHash(uuid()), true, 'isHash(uuid.val) === true')
  var one = uuid()
  t.equals(isHash(one), true, 'isHash(uuid.generate()) === true')
  var two = uuid()
  t.equals(isHash(two), true, 'Calling `generate` multiple times')
  t.equals(one !== two, true, 'Calling `generate` multiple times produces different ids')
})
