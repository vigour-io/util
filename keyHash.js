'use strict'
// convertes strings to numbers (very simple hash)
module.exports = function keyHash (key) {
  var hash = 0
  for (let i = 0, len = key.length; i < len; i++) {
    hash = ((hash << 5) + hash) + key.charCodeAt(i)
    hash |= 0
  }
  return hash
}
