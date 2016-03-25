'use strict'
var isStream = require('./stream')

/**
 * @id isPlainObj
 * @function isPlainObj
 * Checks whether an object is a plain object (*Compatible with `vigour-base`*)
 * @param {object} obj - the object to check
 * @returns {boolean} plain - `true` if *obj* is a plain object, `false` otherwise
 */
module.exports = function isPlainObj (obj) {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    !obj._base_version &&
    !(obj instanceof Buffer) &&
    !(isStream(obj))
  )
}
