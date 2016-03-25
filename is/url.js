'use strict'
var url = /^(((ws(s)?)|(http(s)?))\:\/\/)?[a-zA-Z0-9_-]+(\.|\:)([^\/\/])[a-zA-Z/0-9$-/:-?{#-~!"^_`\[\]]+$/
/**
 * @id isUrl
 * @function isUrl
 * Checks if a string is a valid url
 * @param {string} val - the string to check
 * @returns {boolean} valid - `true` if *val* is a valid url, `false` otherwise
 */
module.exports = function (val) {
  return typeof val === 'string' && url.test(val) || val === 'localhost'
}
