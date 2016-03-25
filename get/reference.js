'use strict'
/**
 * @id get.reference
 * @function getReference
 * Get's the referenced object (*Specific to `vigour-base`*)
 * @param {object} obj - the reference we want to follow
 * @returns {object} ref - The referenced object or `undefined`
 */
module.exports = function (obj) {
  var referenced = obj.__input
  if (referenced &&
    referenced._base_version &&
    referenced.__input !== null) {
    return referenced
  }
}
