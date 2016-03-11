'use strict'
var stream = require('stream')
var Writable = stream.Writable
var Duplex = stream.Duplex
var Readable = stream.Readable

module.exports = exports = function (val) {
  return val && typeof val === 'object' && (
    exports.writable(val) ||
    exports.readable(val)
  )
}

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
