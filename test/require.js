'use strict'

var test = require('tape')
var isNode = require('../is/node')

test('require', function (t) {
  t.plan(9)
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
  } catch (e) {
    count += 1
  }
  t.equals(count, 0, 'makes `require` ignore styles')

  enhanceRequire({
    exclude: '/scratch/'
  })
  count = 0
  try {
    require('./_files/scratch/this-should-be-ignored')
  } catch (e) {
    count += 1
  }
  t.equals(count, 0, 'makes `require` ignore excluded string')

  enhanceRequire({
    exclude: /\/scratch\//
  })
  count = 0
  try {
    require('./_files/scratch/this-should-be-ignored')
  } catch (e) {
    count += 1
  }
  t.equals(count, 0, 'makes `require` ignore excluded regexp')

  enhanceRequire({
    exclude: function exclude (item) {
      return item.indexOf('/scratch/') !== -1
    }
  })
  count = 0
  try {
    require('./_files/scratch/this-should-be-ignored')
  } catch (e) {
    count += 1
  }
  t.equals(count, 0, 'makes `require` ignore excluded paths')

  enhanceRequire({
    map: {'package.json': { isPackage: true }}
  })

  try {
    var pkg = require('package.json')
    t.ok(pkg.isPackage, 'should require the mapped object')
  } catch (e) {
    t.fail('crashed when requiring mapped object')
  }

  enhanceRequire.restore()
  count = 0
  try {
    require('./_files/styles.less')
  } catch (e) {
    count += 1
  }
  t.equals(count, isNode ? 1 : 0, "`require('vigour-util/require').restore()` should restore the original `require`")

  enhanceRequire({
    exclude: [
      'scratch',
      /nooo/,
      function (item) {
        return item.indexOf('naaay') !== -1
      }
    ]
  })
  count = 0
  try {
    require('./_files/scratch/this-should-be-ignored')
    require('./_files/nooo/this-should-be-ignored')
    require('./_files/naaay/this-should-be-ignored')
  } catch (e) {
    count += 1
  }
  t.equals(count, 0, 'should accept an array of ignores')
  enhanceRequire.restore()

  count = 0
  try {
    require('path')
  } catch (e) {
    console.log('e', e.stack)
    count += 1
  }
  t.equals(count, 0, "`require('vigour-util/require').restore()` should restore `require`s default behaviour")
})
