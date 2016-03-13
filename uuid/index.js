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
  return hash('n-' + process.pid + '-' + stamp + '-' + rand)
}
/**
 * exports.val is a unique ID
 */
exports.val = exports.generate()
