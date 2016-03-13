'use strict'
var isStream = require('./stream')

/**
 * @function isPlainObj
 * Checks whether an object is a plain object
 * @param {object} obj - the object to check
 * @returns {boolean} `true` if `obj` is a plain object, `false` otherwise
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
