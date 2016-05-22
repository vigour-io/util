'use strict'
/**
 * @id define
 * @function define
 * Defines new (or modifies existing) properties (using [`Object.defineProperty`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)) on an object passed to `define` as `this`, setting `configurable: true` by default
 * @param {object} props - Properties to set
 */
var define = Object.defineProperty
module.exports = function () {
  var val
  for (let i = 0, length = arguments.length; i < length; i++) {
    val = arguments[i]
    for (let key in val) {
      let definition = val[key]
      let type = typeof definition
      if (type === 'function' || type !== 'object' || 'isBase' in definition) {
        definition = { value: definition }
      }
      definition.configurable = true
      define(this, key, definition)
    }
  }
}
