'use strict'
var email = /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.]{1,64}@[A-Za-z0-9.-]{1,64}\.[a-zA-Z]{2,20}$/
module.exports = function (val) {
  return typeof val === 'string' && email.test(val)
}
