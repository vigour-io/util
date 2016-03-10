'use strict'
var test = require('tape')
var isEmail = require('../../is/email')

// The following test cases are based on https://en.wikipedia.org/wiki/Email_address#Syntax
var localParts = [
// ['email', expectedResult]
  [makeChars(64) + '', true], // length
  [makeChars(65) + '', false], // length
  ["aA10!#$%&'*+-/=?^_`{|}~", true], // allowed special chars
  // restricted special chars
  ['.boo', false], // leading periods in local-part
  ['boo.', false], // trailing periods in local-part
  ['boo..boo', false], // consecutive dots
  ['hello world', false], // spaces
  ['hey(ho', false], // (
  ['hey,ho', false], // ,
  ['hey:ho', false], // ;
  ['hey;ho', false], // ;
  ['hey<ho', false], // <
  ['hey@ho', false], // @
  ['hey[ho', false], // [
  ['hey."Jude"', true], // quoted parts
  ['hey"Jude"', false], // quoted parts
  // unicode
  ['💩', true],
  // Let's mix things up
  ['"very.unusual.@.unusual.com"@example.com', false],
  ['"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"', false]
].map(function (item) {
  item[0] += '@vigour.io'
  return item
})

var domainParts = [
  ['normal.com', false], // missing `@`
  ['@normal.com', true], // normal
  ['@hey(comment)ho.com', true], // comments
  ['@(comment)heyho.com', true], // leading comments
  ['@heyho(comment).com', true], // trailing comments
  ['@aA1-.com', true], // legal special chars
  ['@oo$oo.com', false], // illegal special chars
  ['@' + makeChars(64) + '.' + makeChars(63) + '.com', true], // label length
  ['@' + makeChars(65) + '.' + makeChars(64) + '.com', false], // label length (too long)
  ['@' + makeChars(254), true], // total length
  ['@' + makeChars(255), true], // total length (too long)
  ['@[192.168.2.1]', false], // ip
  ['@[IPv6:2001:db8::1]', false] // ipv6
].map(function (item) {
  item[0] = 'a' + item[0]
  return item
})

test('isEmail', function (t) {
  t.plan(localParts.length + domainParts.length)
  localParts.forEach(function (localPart) {
    t.equals(
      isEmail(localPart[0]),
      localPart[1],
      'isEmail(' + truncate(localPart[0], 50) + ') === ' + (localPart[1]).toString()
    )
  })
  domainParts.forEach(function (domainPart) {
    t.equals(
      isEmail(domainPart[0]),
      domainPart[1],
      'isEmail(' + truncate(domainPart[0], 50) + ') === ' + (domainPart[1]).toString()
    )
  })
})

function makeChars (nb) {
  var str = ''
  while (nb > 0) {
    str += 'a'
    nb -= 1
  }
  return str
}

function truncate (msg, max) {
  if (msg.length > max) {
    return msg.slice(0, max) + '...'
  } else {
    return msg
  }
}
