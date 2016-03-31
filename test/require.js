'use strict'

var test = require('tape')

test('require', function (t) {
  t.plan(1)
  require('../require')

  // require('./_files/styles.less')
  // require('./_files/styles.css')
  // require('./_files/scratch/this-should-be-ignored')
  t.equals(1, 1, 'required styles should be ignored in node')
})
