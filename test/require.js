'use strict'

var test = require('tape')
var isNode = require('../is/node')

test('require', function (t) {
  t.plan(3)
  var enhanceRequire = require('../require')
  var count = 0
  try {
    require('./_files/styles.less')
  } catch (e) {
    count += 1
  }
  t.equals(count, isNode ? 1 : 0, "`require('vigour-util/require')` shouldn't have any effect")
  enhanceRequire()
  count = 0
  try {
    require('./_files/styles.less')
    require('./_files/styles.css')
    require('./_files/scratch/this-should-be-ignored')
  } catch (e) {
    count += 1
  }
  t.equals(count, 0, "`require('vigour-util/require')()` makes `require` ignore styles and scratch")
  enhanceRequire.restore()
  count = 0
  try {
    require('./_files/styles.less')
  } catch (e) {
    count += 1
  }
  t.equals(count, isNode ? 1 : 0, "`require('vigour-util/require').restore()` should restore the original `require`")
})
