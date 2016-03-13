[![Build Status](https://travis-ci.org/vigour-io/util.svg?branch=master)](https://travis-ci.org/vigour-io/util)

# vigour-util

```sh
npm install vigour-util
```

This is a collection of small utility functions which can be required individually.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [get](#get)
  - [reference](#reference)
- [is](#is)
  - [email](#email)
  - [empty](#empty)
  - [hash](#hash)
  - [node](#node)
  - [number](#number)
  - [numberlike](#numberlike)
  - [plainobj](#plainobj)
  - [removed](#removed)
  - [stream](#stream)
  - [touch](#touch)
  - [url](#url)
- [path](#path)
  - [contains](#contains)
- [Others](#others)
  - [define](#define)
  - [descriptors](#descriptors)
  - [flatten](#flatten)
  - [hash](#hash-1)
  - [include](#include)
  - [merge](#merge)
  - [regenerator](#regenerator)
  - [setwithpath](#setwithpath)
  - [unflatten](#unflatten)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## get

### [reference](get/reference.js)

(*Specific to `vigour-base`*) Get's the referenced object
```javascript
var Base = require('vigour-base')
var getReference = require('../../get/reference')

var a = new Base({})
var b = new Base(a)
getReference(b) // a
```

## is

### [email](is/email.js)
Checks whether provided parameter looks like a valid e-mail address
```javascript
var isEmail = require('vigour-util/is/email')
isEmail('dev@vigour..io') // false
isEmail('dev@vigour.io') // true
```

### [empty](is/empty.js)
(*Specific to `vigour-base`*) Checks if a `Base` object is empty
```javascript
var isEmpty = require('vigour-util/is/empty')
var Base = require('vigour-base')
isEmpty(new Base({})) // true
isEmpty(new Base({ awesome: true })) // false
```

### [hash](is/hash.js)
Checks is a string looks like a hash generated by the [`hash`](#hash) utility
```javascript
var isHash = require('vigour-util/is/hash')
isHash('asd654') // true
```

### [node](is/node.js)
Check whether we're running in `node`
```javascript
var isNode = require('vigour-util/is/node')
isNode() // true or false
```

### [number](is/number.js)
Alias for [`lodash.isfinite`](https://www.npmjs.com/package/lodash.isfinite)
```javascript
var isNumber = require('vigour-util/is/number')
isNumber(2) // true
isNumber('2') // false
```

### [numberlike](is/numberlike.js)
Checks whether provided parameter looks like a number
```javascript
var isNumberLike = require('vigour-util/is/numberlike')
isNumberLike('2') // true
isNumberLike('a') // false
```

### [plainobj](is/plainobj.js)
Checks whether an object is a plain object. (*Compatible with `vigour-base`*)
```javascript
var isPlainObj = require('vigour/util/is/plainobj')
isPlainObj({}) // true
isPlainObj(new Base({})) // false
```

### [removed](is/removed.js)
(*Specific to `vigour-base`*) Checks if a property has been removed
```javascript
var isRemoved = require('vigour-util/is/removed')
var Base = require('vigour-base')
var base = new Base({ bad: true })
base.bad.remove()
isRemoved(base.bad) // true
```

### [stream](is/stream.js)
Checks whether provided argument is a stream
```javascript
var stream = require('stream')
var rs = new stream.Readable()
var isStream = require('vigour-util/is/stream')
isStream(rs) // true
```

#### [stream.readable](is/stream.js)
Checks whether provided argument is a readable stream
```javascript
var stream = require('stream')
var rs = new stream.Readable()
var isStream = require('vigour-util/is/stream')
isStream.readable(rs) // true
```

#### [stream.writable](is/stream.js)
Checks whether provided argument is a writable stream
```javascript
var stream = require('stream')
var rs = new stream.Readable()
var isStream = require('vigour-util/is/stream')
isStream.writable(rs) // false
```

### [touch](is/touch.js)
Checks if we're running in a touch-enabled context
```javascript
var isTouch = require('vigour-util/is/touch')
isTouch() // false unless you're using a touch-enabled device
```

### [url](is/url.js)
Checks if a string is a valid url
```javascript
var isUrl = require('vigour-util/is/url')
isUrl('http://perdu.com') // true
isUrl('boom') // false
```

## path

### [contains](path/contains.js)
Checks whether a key is part of an array, allowing for prefixed keys
```javascript
var pathContains = require('vigour-util/path/contains')
pathContains(['a','awesome:b','c'], 'b') // true
```

## Others

### [define](define.js)
Defines new or modifies existing properties (using [`Object.defineProperty`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)) on an object, setting `configurable: true` by default.
```javascript
var define = require('vigour-util/define')
var subject = {}
var props = [
  { one: true },
  { two: function () {
      console.log('do nothing')
    }
  }
]
define.apply(subject, props)
```

### [descriptors](descriptors.js)
Like [`Object.getOwnPropertyDescriptor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), but goes along the prototype chain and get's the descriptors for all properties.
```javascript
var descriptors = require('vigour-util/descriptors')
descriptors({ a: 'a', b: 'b' })
/*
  {
    a: {
      value: 'a',
      writable: true,
      enumerable: true,
      configurable: true
    },
    b: {
      value: 'a',
      writable: true,
      enumerable: true,
      configurable: true
    }
  }
*/
```

### [flatten](flatten.js)
Transforms a deep object into an object of single depth where keys are a path and values are leafs or the original object.
```javascript
var flatten = require('vigour-util/flatten')
flatten({ a: { b: 'c', d: 'e' } }) // { 'a.b': 'c', 'a.d': 'e'}
flatten({ a: { b: 'c', d: 'e' } }, '/') // { 'a/b': 'c', 'a/d': 'e'}
```

### [hash](hash.js)
Hashing utility optimized for speed, not collision avoidance. Produces alpha-numeric hashes between 5 and 7 characters long inclusively.
```javascript
var hash = require('vigour-util')
hash('Any sting in the world!!!') // '16hck72'
```

### [include](include.js)

```javascript

```

### [merge](merge.js)
***Deprecated***: consider using [`lodash.merge`](https://www.npmjs.com/package/lodash.merge)
```javascript
var merge = require('vigour-util/merge')
merge({ a: { b: 'b' } }, { a: { c: 'c' } }) // { a: { b: 'b', c: 'c' } }
```

### [regenerator](regenerator.js)
Like Babel's regenerator, but much more compact. Brought to you by Facebook, but bundled in `vigour-util` for ease-of-use.

### [setwithpath](setwithpath.js)
***Deprecated***: consider using [`lodash.set`](https://www.npmjs.com/package/lodash.set)

### [unflatten](unflatten.js)
Opposite of [`flatten`](#flatten)
```javascript
var unflatten = require('vigour-util')
unflatten({
  'a.b.c': 'd'
})
/*
{
  a: {
    b: {
      c: 'd'
    }
  }
}
*/
```
