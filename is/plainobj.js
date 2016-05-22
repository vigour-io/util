'use strict'
var isBuffer = require('is-buffer')
var isStream = require('is-stream')

/**
 * @id isPlainObj
 * @function isPlainObj
 * Checks whether an object is a plain object (excludes streams, buffers, base and null) (*Compatible with `vigour-base`*)
 * @param {object} obj - the object to check
 * @returns {boolean} plain - `true` if *obj* is a plain object, `false` otherwise
 */
module.exports = function isPlainObj (obj) {
  return (
    obj && typeof obj === 'object' &&
    !obj.isBase &&
    !isBuffer(obj) &&
    !isStream(obj)
  )
}
