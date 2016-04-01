'use strict'

var Module = require('module')
var assert = require('assert')
var process = require('process')
var fs = require('fs')
var isNode = require('./is/node')

var originalRequire = require

if (isNode) { // else let browserify (or similar) do it
  var require = function require (path) {
    assert(typeof path === 'string', 'path must be a string')
    assert(path, 'missing path')
    var next = () => {
      return Module.prototype.require.next.apply(this, arguments)
    }
    // This is dirty but probably the best solution for now
    if (path === 'package.json') {
      var pckg = fs.readFileSync(process.cwd() + '/package.json')
      return JSON.parse(pckg.toString())
    }
    if (/scratch/.test(path)) {
      return {}
    }
    if (/\.less/.test(path)) {
      return {}
    }
    if (/\.css/.test(path)) {
      return {}
    }
    return next(path)
  }
  require.next = Module.prototype.require
  module.exports = enhanceRequire
} else {
  module.exports = enhanceRequireMock
}

function enhanceRequire (options) {
  Module.prototype.require = require
}
enhanceRequire.restore = function restoreRequire () {
  Module.prototype.require = originalRequire
}

function enhanceRequireMock (options) {
  // Do nothing
}
enhanceRequireMock.restore = function restoreRequireMock () {
  // Do nothing
}
