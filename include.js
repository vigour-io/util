'use strict'

/**
 * @id include
 * @function include
 * Distinctly adds one or multiple items (in an object or array) to a target array. Doesn't duplicate items.
 * @param {Array} target - target array
 * @param thing - the thing to be included in the array. If object or array, it will go through it and add all values to the target array.
 * @returns {Array} included - Array representing the included items (duplicates removed)
 */
var include = module.exports = function include (target, thing) {
  return typeof thing === 'object'
    ? includeList(target, thing)
    : includeItem(target, thing)
}

var includeList = include.list = function includeList (target, list) {
  var result = false
  for (let i in list) {
    var included = includeItem(target, list[i])
    if (included) {
      if (!result) {
        result = [included]
      } else {
        result.push(included)
      }
    }
  }
  return result
}

var isIncluded = include.isIncluded = function isIncluded (target, item) {
  for (let j = target.length - 1; j >= 0; j--) {
    if (target[j] === item) {
      return true
    }
  }
}

var includeItem = include.item = function includeItem (target, item) {
  return !isIncluded(target, item) && target.push(item)
}
