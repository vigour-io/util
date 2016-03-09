'use strict'
var url = /^(((ws(s)?)|(http(s)?))\:\/\/)?[a-zA-Z0-9_-]+(\.|\:)([^\/\/])[a-zA-Z/0-9$-/:-?{#-~!"^_`\[\]]+$/
module.exports = function (val) {
  return typeof val === 'string' && url.test(val) || val === 'localhost'
}
