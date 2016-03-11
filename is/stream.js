'use strict'
var stream = require('stream')
var Writable = stream.Writable
var Duplex = stream.Duplex
var Readable = stream.Readable

module.exports = exports = function (val) {
  return val && (
    val instanceof Duplex ||
    val instanceof Readable ||
    val instanceof Writable
  )
}

exports.readable = function (val) {
  return val && (
    val instanceof Readable || val instanceof Duplex
  )
}

exports.writable = function (val) {
  return val && (
    val instanceof Writable || val instanceof Duplex
  )
}
