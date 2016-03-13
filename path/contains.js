'use strict'
/**
 * @function pathContains
 * Checks whether a key is part of an array, allowing for prefixed keys
 * @param {array} path - the array to look in
 * @param {string} key - the key to check for
 * @returns {boolean} `true` if `key` is found in `array`, `false` otherwise
 */
module.exports = function pathContains (path, key) {
  for (var i = 0, len = path.length; i < len; i++) {
    if (path[i] === key || typeof path[i] === 'string' && path[i].indexOf(':' + key) > 0) {
      return true
    }
  }
}
