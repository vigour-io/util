'use strict'

var Module = require('module')
var assert = require('assert')
var process = require('process')
var fs = require('fs')
var isNode = require('./is/node')
var _isArray = require('lodash.isarray')
var _isFunction = require('lodash.isfunction')
var _isRegExp = require('lodash.isregexp')
var _isString = require('lodash.isstring')

var originalRequire

if (isNode) {
  originalRequire = Module.prototype.require
  module.exports = enhanceRequire
} else { // let browserify (or similar) do it
  module.exports = enhanceRequireMock
}

/**
 * @id require.enhanceRequire
 * @function enhanceRequire
 * In node, modifies the behaviour of `require` so that it ignores paths containing `.css`, `.less`, `.scss`, `.sass`, and any other paths indicated via the `exclude` option.
 * Outside of node (browserify, webpack, etc.), this function does nothing.
 * @param {object} [options] - Options to further define the behaviour of `require`:
 * - + {*boolean*} **options.package** : set to `true` to convert `require('package.json')` to `JSON.parse(require(process.cwd() + '/package.json'))`
 * - + {*string|regexp|function|array*} **options.exclude** : paths containing the specified string, or matching the specified regexp, or for which specified function returns `true`, will be excluded. If an array is provided, each element is treated exactly the same as `options.exclude` and only paths which aren't excluded by any item will be `require`d.
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
    if (exclude(options.exclude, path, next)) {
      return {}
    } else {
      return next(path)
    }
  }
  require.next = Module.prototype.require
  Module.prototype.require = require
}

function exclude (options_exclude, path) {
  if (options_exclude) {
    if (_isArray(options_exclude)) {
      let excludeIt = false
      let len = options_exclude.length
      for (let i = 0; i < len && !excludeIt; i += 1) {
        if (exclude(options_exclude[i], path)) {
          excludeIt = true
        }
      }
      if (excludeIt) {
        return true
      }
    } else if (_isFunction(options_exclude) && options_exclude(path)) {
      return true
    } else if (_isRegExp(options_exclude) && options_exclude.test(path)) {
      return true
    } else if (_isString(options_exclude) && path.indexOf(options_exclude) !== -1) {
      return true
    }
  }
  if (/\.less/.test(path)) {
    return true
  }
  if (/\.css/.test(path)) {
    return true
  }
  if (/\.scss/.test(path)) {
    return true
  }
  if (/\.sass/.test(path)) {
    return true
  }
  return false
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
