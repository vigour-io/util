'use strict'
var hash = require('../hash')

/**
 * @function uuid.generate
 * Generates a unique ID
 * @returns {string} A unique ID
 */
exports.generate = function () {
  var rand = ~~(Math.random() * 10000)
  var stamp = Date.now()
  return hash(
    'b-' +
    stamp +
    '-' +
    rand +
    '-' + window.navigator.userAgent +
    '-' + window.navigator.userLanguage +
    window.navigator.language
  )
}

/**
 * exports.val is a unique ID
 */
exports.val = exports.generate()
