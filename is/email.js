'use strict'
var email = /^[^.][a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~."]{1,64}(?!\.\.)[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~."]{1,64}[^.]@[A-Za-z0-9.-]{1,64}\.[a-zA-Z]{2,20}$/
/**
 * @function isEmail
 * Checks whether a string is a valid e-mail address
 * @param {string} val - the string to process
 * @returns {boolean} `true` if `val` is a valid e-mail address, `false` otherwise
 */
module.exports = function (val) {
  return typeof val === 'string' && email.test(val)
}

// so missing . as a start . as a last in the first segment
// missing ..// , is illegal