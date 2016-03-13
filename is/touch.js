'use strict'
var isNode = require('./node')
/**
 * @function isTouch
 * Checks if we're running in a touch-enabled context
 * @returns {boolean} `true` if we're in a touch-enabled context, `false` otherwise
 */
module.exports = isNode
  ? false
  : (('ontouchstart' in global) ||
    global.DocumentTouch &&
    document instanceof global.DocumentTouch) ||
    navigator.msMaxTouchPoints ||
    false
