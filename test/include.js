'use strict'

var test = require('tape')
var include = require('../include')

test('include from object', function (t) {
  t.plan(1)
  
  var target = ['existing']
  var thing = { w: 1, y: 'teta', existing: 'existing' }

  include(target, thing)
  t.deepEqual(target, ['existing', 1, 'teta'], 'include from object')
})

test('include from array', function (t) {
  t.plan(1)
  
  var target = ['existing']
  var thing = [1, 'teta', 'existing']

  var teta = include(target, thing)
  t.deepEqual(target, ['existing', 1, 'teta'], 'include from array')
})

test('include item', function (t) {
  t.plan(2)

  var target = ['existing']
  var thing = 'teta'

  var teta = include(target, thing)
  t.deepEqual(target, ['existing', 'teta'], 'include nonexisting item')

  include(target, thing)
  t.deepEqual(target, ['existing', 'teta'], 'include existing item')  
})
