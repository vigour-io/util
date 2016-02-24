'use strict'
module.exports = function isEmpty (obj) {
  var found
  if (obj.each) {
    obj.each(function (property, key) {
      // **TODO** remove this if(property guard!)
      if (property && property.__input !== null) {
        return (found = true)
      }
    })
  } else {
    for (var key in obj) { // eslint-disable-line
      return false
    }
  }
  return !found
}
