'use strict'

/**
 * `true` if in node context, `false` otherwise
 */
module.exports = typeof window === 'undefined'
// || window.toString() === '[object global]'
