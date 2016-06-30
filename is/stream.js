'use strict'
var isStream = require('is-stream')
/**
 * @id isStream
 * @function isStream
 * Checks whether provided argument is a stream
 * @param {object} val - the object to check
 * @returns {boolean} stream - `true` if `val` is a stream, `false` otherwise
 */
exports = module.exports = isStream

/**
 * @id isStream.readable
 * @function isStream.readable
 * Checks whether provided argument is a readable stream
 * @param {object} val - the object to check
 * @returns {boolean} readable - `true` if `val` is a readable stream, `false` otherwise
 */
exports.readable = function (val) {
  return isStream(val) && (
    val.readable === true &&
    typeof val.push === 'function' &&
    typeof val.on === 'function'
  )
}

/**
 * @id isStream.writable
 * @function isStream.writable
 * Checks whether provided argument is a writable stream
 * @param {object} val - the object to check
 * @returns {boolean} writable - `true` if `val` is a writable stream, `false` otherwise
 */
exports.writable = function (val) {
  return isStream(val) && (
    val.writable === true &&
    typeof val.pipe === 'function' &&
    typeof val.on === 'function'
  )
}
