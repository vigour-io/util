'use strict'
var hash = require('../hash')

/**
 * @id uuid.generate_browser
 * @function uuid.generate
 * Generates a unique ID
 * @returns {string} id - A unique ID
 */
exports.generate = function () {
  var rand = (Math.random() * 10000) | 0
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
 * @id uuid.val_browser
 * @property val
 * a unique ID generated on `require`
 */
exports.val = exports.generate()
