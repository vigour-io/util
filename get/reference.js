'use strict'
/**
 * @function getReference
 * Get's the referenced object
 * @param {object} obj - the reference we want to follow
 * @returns {object} The referenced object or undefined
 */
module.exports = function (obj) {
  var referenced = obj.__input
  if (referenced &&
    referenced._base_version &&
    referenced.__input !== null) {
    return referenced
  }
}
