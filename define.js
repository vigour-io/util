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
  var many
  if ('args' in val) {
    many = true
    delete val.args
  }
  for (let key in val) {
    let type = typeof val[key]
    if (type === 'object') {
      let value = {}
      let obj = val[key]
      for (let i in obj) {
        value[i] = createExtension(obj[i], target[key][i], many)
      }
      val[key] = (target.define || define).call(target, { [key]: { value } })
    } else if (type !== 'function') {
      throw new Error(`Expect function for extension "${key}"`)
    } else {
      val[key] = (target.define || define)
      .call(target, { [key]: createExtension(val[key], target[key], many) })
    }
  }
}

function genOptmized (val, target, len) {
  const types = [
    function (a) {
      return val.call(this, target, a)
    },
    function (a, b) {
      return val.call(this, target, a, b)
    },
    function (a, b, c) {
      return val.call(this, target, a, b, c)
    },
    function (a, b, c, d) {
      return val.call(this, target, a, b, c, d)
    },
    function (a, b, c, d, e) {
      return val.call(this, target, a, b, c, d, e)
    },
    function (a, b, c, d, e, f) {
      return val.call(this, target, a, b, c, d, e, f)
    },
    function (a, b, c, d, e, f, g) {
      return val.call(this, target, a, b, c, d, e, f, g)
    },
    function (a, b, c, d, e, f, g, h) {
      return val.call(this, target, a, b, c, d, e, f, g, h)
    }
  ]
  return types[len]
}

function createExtension (val, target, many) {
  var ret
  if (!many) {
    const len = target.length - 1
    if (len > 8) {
      many = true
    } else {
      ret = genOptmized(val, target, len)
    }
  }
  if (many) {
    ret = function () {
      const len = arguments.length
      const args = new Array(len + 1)
      args[0] = target
      for (let i = 0; i < len; i++) {
        args[i + 1] = arguments[i]
      }
      return val.apply(this, args)
    }
  }
  // Object.defineProperty(ret, 'name', { value: target.name })
  return ret
}
