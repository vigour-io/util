'use strict'
var test = require('tape')
var Base = require('vigour-base')
var getReference = require('../../get/reference')

var a = new Base({})
var b = new Base(a)

test('getReference', function (t) {
  t.plan(2)
  t.equals(getReference(b), a, 'getReference(b) === a')
  t.equals(getReference(a), undefined, 'getReference(a) === undefined')
})
