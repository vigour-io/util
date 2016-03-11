'use strict'
var isHash = /^[a-z\d]{5,7}$/
var isNumber = require('./number')
module.exports = (val) => !isNumber(val) && isHash.test(val)
