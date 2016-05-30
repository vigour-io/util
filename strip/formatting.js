'use strict'
module.exports = function (val) {
  return val.replace(/\n *?([^ ]|$)/g, '$1')
}
