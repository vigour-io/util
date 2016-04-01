'use strict'

var Module = require('module')
var assert = require('assert')
var process = require('process')
var fs = require('fs')
var isNode = require('./is/node')
var _isFunction = require('lodash.isfunction')
var _isRegExp = require('lodash.isRegExp')
var _isString = require('lodash.isString')

var originalRequire = require

if (isNode) { // else let browserify (or similar) do it
  module.exports = enhanceRequire
} else {
  module.exports = enhanceRequireMock
}

/**
 * @id require.enhanceRequire
 * @function enhanceRequire
 * In node, modifies the behaviour of `require` so that it ignores paths containing `.css`, `.less`, `.scss`, `.sass`, and any other paths indicated via the `exclude` option.
 * Outside of node (browserify, webpack, etc.), this function does nothing.
 * @param {object} options - Options to further define the behaviour of `require`:
 * - + {*boolean*} **options.package** : set to `true` to convert `require('package.json')` to `JSON.parse(require(process.cwd() + '/package.json'))`
 * - + {*boolean|string|function*} **options.exclude** : additional paths to exclude. If a function is provided, `require` will exclude paths for which the function returns `true`
 */
function enhanceRequire (_options) {
  var options = _options || {}
  var require = function require (path) {
    assert(typeof path === 'string', 'path must be a string')
    assert(path, 'missing path')
    var next = () => {
      return Module.prototype.require.next.apply(this, arguments)
    }
    // This is dirty but probably the best solution for now
    if (options.package && path === 'package.json') {
      var pckg = fs.readFileSync(process.cwd() + '/package.json')
      return JSON.parse(pckg.toString())
    }
    if (options.exclude) {
      if (_isFunction(options.exclude) && options.exclude(path)) {
        return {}
      } else if (_isRegExp(options.exclude) && options.exclude.test(path)) {
        return {}
      } else if (_isString(options.exclude) && path.indexOf(options.exclude) !== -1) {
        return {}
      }
    }
    if (/\.less/.test(path)) {
      return {}
    }
    if (/\.css/.test(path)) {
      return {}
    }
    if (/\.scss/.test(path)) {
      return {}
    }
    if (/\.sass/.test(path)) {
      return {}
    }
    return next(path)
  }
  require.next = Module.prototype.require
  Module.prototype.require = require
}
/**
 * @id require.restore
 * @function restore
 * Restores the original behaviour or `require`
 */
enhanceRequire.restore = function restoreRequire () {
  Module.prototype.require = originalRequire
}

function enhanceRequireMock (options) {
  // Do nothing
}
enhanceRequireMock.restore = function restoreRequireMock () {
  // Do nothing
}
