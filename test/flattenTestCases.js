'use strict'

module.exports = exports = {
  separator: '/',
  withSeparator: [
    [{ a: { b: { c: 'd' } } }, { 'a/b/c': 'd' }],
    [{ a: { b: { c: 'd' } }, e: 'f' }, { 'a/b/c': 'd', e: 'f' }]
  ],
  without: [
  // ['object', expectedResult]
    [{ a: { b: { c: 'd' } } }, { 'a.b.c': 'd' }],
    [{ a: { b: { c: 'd', e: 'f' } } }, { 'a.b.c': 'd', 'a.b.e': 'f' }],
    [{ a: 'b' }, { a: 'b' }]
  ]
}
