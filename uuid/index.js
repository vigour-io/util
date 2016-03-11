'use strict'
var hash = require('../hash')
var rand = ~~(Math.random() * 10000)
var stamp = Date.now()
exports.generate = function () {
  return hash('n-' + process.pid + '-' + stamp + '-' + rand)
}
exports.val = exports.generate()
