'use strict'
var hash = require('../hash')

/**
 * @id uuid.generate
 * @function uuid.generate
 * Generates a unique ID
 * @returns {string} id - A unique ID
 */
exports.generate = function () {
  var rand = ~~(Math.random() * 10000)
  var stamp = Date.now()
  return hash('n-' + process.pid + '-' + stamp + '-' + rand)
}
/**
 * @id uuid.val
 * @property val
 * A process-specific unique ID, generated on `require`
 */
exports.val = exports.generate()
