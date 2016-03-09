'use strict'
var isHash = /^[a-z\d]{5,7}$/
module.exports = (val) => isHash.test(val)
