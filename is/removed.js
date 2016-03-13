'use strict'
/**
 * @function isRemoved
 * Checks if a property has been removed
 * @param {Base} base - the property to check
 * @returns {boolean} `true` if `base` has been removed, `false` otherwise
 */
module.exports = function isRemoved (base) {
  if (base === null) {
    return true
  }
  for (var key in base) {
    // use each for this one
    if (base.hasOwnProperty(key)) {
      // temp fix -- should become configurable
      // this thing is only used in tests however
      if (base[key] !== null &&
        key !== 'key' &&
        key !== 'lastStamp' &&
        key !== '_parent' &&
        key !== '_uid'
      ) {
        return false
      }
    }
  }
  if (base.__input !== null) {
    return false
  }
  return true
}
