'use strict'

/**
 * @id isNode
 * @function isNode
 * @returns runningInNode - `true` if in node context, `false` otherwise
 */
module.exports = typeof window === 'undefined'
// || window.toString() === '[object global]'
