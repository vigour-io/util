'use strict'
module.exports = function (obj) {
  var referenced = obj._input
  if (referenced &&
    referenced._base_version &&
    referenced._input !== null) {
    return referenced
  }
}
