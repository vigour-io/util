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
  - [encode](#encode)
  - [flatten](#flatten)
  - [hash](#hash-1)
  - [include](#include)
  - [merge](#merge)
  - [quicksort](#quicksort)
  - [regenerator](#regenerator)
  - [setwithpath](#setwithpath)
  - [unflatten](#unflatten)
  - [wrapfilter](#wrapfilter)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## get

### [reference](get/reference.js)

```javascript

```

## is

### [email](is/email.js)

```javascript
var isEmail = require('vigour-util/is/email')
isEmail('dev@vigour..io') // false
isEmail('dev@vigour.io') // true
```

### [empty](is/empty.js)

```javascript
var isEmpty = require('vigour-util/is/empty')
var Base = require('vigour-base')
isEmpty(new Base({})) // true
isEmpty(new Base({ awesome: true })) // false
```

### [hash](is/hash.js)

```javascript
var isHash = require('vigour-util/is/hash')
isHash('asd654') // true
```

### [node](is/node.js)

```javascript
var isNode = require('vigour-util/is/node')
isNode() // true or false
```

### [number](is/number.js)

```javascript
var isNumber = require('vigour-util/is/number')
isNumber(2) // true
isNumber('2') // false
```

### [numberlike](is/numberlike.js)

```javascript
var isNumberLike = require('vigour-util/is/numberlike')
isNumberLike('2') // true
isNumberLike('a') // false
```

### [plainobj](is/plainobj.js)

```javascript
var isPlainObj = require('vigour/util/is/plainobj')
isPlainObj({}) // true
isPlainObj(new Base({})) // false
```

### [removed](is/removed.js)

```javascript
var isRemoved = require('vigour-util/is/removed')
var Base = require('vigour-base')
var base = new Base({ bad: true })
base.bad.remove()
isRemoved(base.bad) // true
```

### [stream](is/stream.js)

```javascript
var stream = require('stream')
var rs = new stream.Readable()
var isStream = require('vigour-util/is/stream')
isStream(rs) // true
```

### [touch](is/touch.js)

```javascript
var isTouch = require('vigour-util/is/touch')
isTouch() // false unless you're using a touch-enabled device
```

### [url](is/url.js)

```javascript
var isUrl = require('vigour-util/is/url')
isUrl('http://perdu.com') // true
isUrl('boom') // false
```

## path

### [contains](path/contains.js)

```javascript
var pathContains = require('vigour-util/path/contains')
pathContains(['a','b','c'], 'b') // true
```

## Others

### [define](define.js)

```javascript

```

### [descriptors](descriptors.js)

```javascript

```

### [encode](encode.js)

```javascript

```

### [flatten](flatten.js)

```javascript

```

### [hash](hash.js)

```javascript

```

### [include](include.js)

```javascript

```

### [merge](merge.js)

```javascript

```

### [quicksort](quicksort.js)

```javascript

```

### [regenerator](regenerator.js)

```javascript

```

### [setwithpath](setwithpath.js)

```javascript

```

### [unflatten](unflatten.js)

```javascript

```

### [wrapfilter](wrapfilter.js)

```javascript

```
