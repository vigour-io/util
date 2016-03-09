'use strict'
var isNode = require('./node')
module.exports = isNode
  ? false
  : (('ontouchstart' in global) ||
    global.DocumentTouch &&
    document instanceof global.DocumentTouch) ||
    navigator.msMaxTouchPoints ||
    false
