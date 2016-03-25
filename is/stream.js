'use strict'
var stream = require('stream')
var Writable = stream.Writable
var Duplex = stream.Duplex
var Readable = stream.Readable

/**
 * @id isStream
 * @function isStream
 * Checks whether provided argument is a stream
 * @param {object} val - the object to check
 * @returns {boolean} stream - `true` if `val` is a stream, `false` otherwise
 */
module.exports = exports = function (val) {
  return val && typeof val === 'object' && (
    exports.writable(val) ||
    exports.readable(val)
  )
}

/**
 * @id isStream.readable
 * @function isStream.readable
 * Checks whether provided argument is a readable stream
 * @param {object} val - the object to check
 * @returns {boolean} readable - `true` if `val` is a readable stream, `false` otherwise
 */
exports.readable = function (val) {
  return val && (
    val instanceof Readable ||
    val instanceof Duplex ||
    (
      val.readable === true &&
      typeof val.push === 'function' &&
      typeof val.on === 'function'
    )
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
  return val && (
    (val instanceof Writable) ||
    (val instanceof Duplex) ||
    (
      val.writable === true &&
      typeof val.pipe === 'function' &&
      typeof val.on === 'function'
    )
  )
}
