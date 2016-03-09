'use strict'

/**
 * Converts seconds to time format like `hh:mm:ss`
 * @param {number} val - Seconds amount
 * @returns {string} Formatted time
 */

module.exports = function (val) {
  var h = Math.floor(val / 3600)
  var m = Math.floor(val % 3600 / 60)
  var s = val % 60
  return `${h>10?h:'0'+h}:${m>10?m:'0'+m}:${s>10?s:'0'+s}`
}
