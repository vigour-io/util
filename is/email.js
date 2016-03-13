'use strict'
var email = /^([^.](?![a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+\.\.)([a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.]+[^.])|([a-zA-Z0-9]))@([A-Za-z0-9-]{1,64}\.){1,10}[a-zA-Z]{2,64}$/

/**
 * @function isEmail
 * Checks whether provided parameter looks like a valid e-mail address
 * @param {string} val - the string to process
 * @returns {boolean} `true` if `val` is a valid e-mail address, `false` otherwise
 */
module.exports = function (val) {
  return typeof val === 'string' && (
    email.test(val) && val.indexOf('@') < 65 && val.length < 255
  )
}
