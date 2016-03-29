'use strict'

var _set = require('lodash.set')

/**
 * @id unflatten
 * @function unflatten
 * Opposite of [`flatten`](#flatten). Unflattens an object with delimited keys
 * @param  {object} subject - Object that needs to be unflattened
 * @param  {string} [seperator] - Optional seperator sign
 * @return {object} obj - Nested Javascript object
 */

module.exports = unflatten

function unflatten (obj, separator) {
  separator = separator || '.'
  var dotSep = (separator === '.')
  var re = new RegExp(separator, 'g')
  var newObj = {}
  for (let path in obj) {
    _set(newObj, dotSep ? path : path.replace(re, '.'), obj[path])
  }
  return newObj
}
