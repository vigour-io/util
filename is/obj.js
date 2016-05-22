'use strict'
/**
 * @id isObj
 * @function isObj
 * Checks whether an object is an non-base object and not null
 * @param {object} obj - the object to check
 * @returns {boolean} plain - `true` if *obj* is an object (but not a base or null), `false` otherwise
 */
module.exports = function isObj (obj) {
  return obj && typeof obj === 'object' && !obj.isBase
}
