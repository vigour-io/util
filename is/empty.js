'use strict'
/**
 * @id isEmpty
 * @function isEmpty
 * Checks if a `Base` object is empty (*Specific to `vigour-base`*)
 * @param {object} obj - the object to check for emptiness
 * @returns {boolean} emptyBase - `true` if `obj` is considered empty, `false` otherwise
 */
module.exports = function isEmpty (obj) {
  var ret = true
  if (obj.each) {
    obj.each(function (property, key) {
      if (property.__input !== null) {
        return (ret = false)
      }
    })
  } else {
    for (var key in obj) { // eslint-disable-line
      return false
    }
  }
  return ret
}
