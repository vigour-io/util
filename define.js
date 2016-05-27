'use strict'
/**
 * @id define
 * @function define
 * Defines new (or modifies existing) properties (using [`Object.defineProperty`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)) on an object passed to `define` as `this`, setting `configurable: true` by default
 * @param {object} props - Properties to set
 */
module.exports = define

function define () {
  var val
  for (let i = 0, length = arguments.length; i < length; i++) {
    val = arguments[i]
    for (let key in val) {
      let definition = val[key]
      let type = typeof definition
      if (key === 'extend' && type === 'object') {
        extend(this, definition)
      } else {
        if (type === 'function' || type !== 'object' || 'isBase' in definition) {
          definition = { value: definition }
        } else {
          if ('val' in definition) {
            definition.value = definition.val
            delete definition.val
          }
        }
        if (definition.writable && 'value' in definition) {
          this[key] = definition.value
        } else {
          definition.configurable = true
          Object.defineProperty(this, key, definition)
        }
      }
    }
  }
}

function extend (target, val) {
  // support deep
  for (let key in val) {
    if (typeof val[key] !== 'function') {
      throw new Error(`Expect function for extension "${key}"`)
    }
    val[key] = (target.define || define)
      .call(target, { [key]: createExtension(val[key], target[key]) })
  }
}

function createExtension (val, target) {
  return function extension () {
    const len = arguments.length
    const args = new Array(len + 1)
    // optimize by checking arguments.length, make an option with variable arguments
    // default just ignores those (so its fast)
    args[0] = target
    for (let i = 0; i < len; i++) {
      args[i + 1] = arguments[i]
    }
    return val.apply(this, args)
  }
}
