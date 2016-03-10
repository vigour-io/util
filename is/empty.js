'use strict'
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
