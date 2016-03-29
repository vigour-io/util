'use strict'
var isNumber = require('lodash.isfinite')

/**
 * @id isNumber
 * @function isNumber
 * This just calls `lodash.isfinite` internally. See [those docs](https://lodash.com/docs#isFinite)
 * @param {any} value - The value to check
 * @returns {boolean} finiteNumber - Returns `true` if *value* is a finite number, `false` otherwise
 */
module.exports = isNumber
