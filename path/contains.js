'use strict'
module.exports = function pathContains (path, key) {
  for (var i = 0, len = path.length; i < len; i++) {
    if (path[i] === key || typeof path[i] === 'string' && path[i].indexOf(':' + key) > 0) {
      return true
    }
  }
}
