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
  ['hello\ world', true], // escaped spaces
  ['hey(ho', false], // (
  ['hey\(ho', true], // escaped (
  ['hey,ho', false], // ,
  ['hey\,ho', true], // escaped ,
  ['hey:ho', false], // ;
  ['hey\:ho', true], // escaped ;
  ['hey;ho', false], // ;
  ['hey\;ho', true], // escaped ;
  ['hey<ho', false], // <
  ['hey\<ho', true], // escaped <
  ['hey@ho', false], // @
  ['hey\@ho', true], // escaped @
  ['hey[ho', false], // [
  ['hey\[ho', true], // escaped [
  ['hey\ho', false], // [
  ['hey\\ho', true], // escaped [
  ['hey(comment)ho', true], // comment
  ['(comment)heyho', true], // leading comment
  ['heyho(comment)', true], // trailing comment
  ['hey."Jude"', true], // quoted parts
  ['hey"Jude"', false], // quoted parts
  // unicode
  ['💩', true],
  // Let's mix things up
  ['"very.unusual.@.unusual.com"@example.com', true],
  ['"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"', true]
]

var domainParts = [
  ['normal.com', false], // missing `@`
  ['@normal.com', true], // normal
  ['@hey(comment)ho.com', true], // comments
  ['@(comment)heyho.com', true], // leading comments
  ['@heyho(comment).com', true], // trailing comments
  ['@aA1-.com', true], // legal special chars
  ['@oo$oo.com', false], // illegal special chars
  ['@' + makeChars(63) + '.' + makeChars(63) + '.com', true], // label length
  ['@' + makeChars(64) + '.' + makeChars(64) + '.com', false], // label length (too long)
  ['@' + makeChars(253), true], // total length
  ['@' + makeChars(254), true], // total length (too long)
  ['@[192.168.2.1]', true], // ip
  ['@[IPv6:2001:db8::1]', true] // ipv6
]

test('isEmail', function (t) {
  t.plan(localParts.length * domainParts.length)
  localParts.forEach(function (localPart) {
    domainParts.forEach(function (domainPart) {
      t.equals(
        isEmail(localPart[0] + domainPart[0]),
        localPart[1] && domainPart[1],
        'isEmail(' + truncate(localPart[0] + domainPart[0], 50) + ') === ' + (localPart[1] && domainPart[1]).toString()
      )
    })
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
