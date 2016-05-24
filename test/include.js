'use strict'
const test = require('tape')
const include = require('../include')

test('include from object', function (t) {
  t.plan(1)
  const target = ['existing']
  const thing = { w: 1, y: 'teta', existing: 'existing' }
  include(target, thing)
  t.deepEqual(target, ['existing', 1, 'teta'], 'include from object')
})

test('include from array', function (t) {
  t.plan(1)
  const target = ['existing']
  const thing = [1, 'teta', 'existing']
  const teta = include(target, thing) // eslint-disable-line
  t.deepEqual(target, ['existing', 1, 'teta'], 'include from array')
})

test('include item', function (t) {
  t.plan(2)
  const target = ['existing']
  const thing = 'teta'
  const teta = include(target, thing) // eslint-disable-line
  t.deepEqual(target, ['existing', 'teta'], 'include nonexisting item')
  include(target, thing)
  t.deepEqual(target, ['existing', 'teta'], 'include existing item')
})
