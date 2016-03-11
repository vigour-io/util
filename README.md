[![Build Status](https://travis-ci.org/vigour-io/util.svg?branch=master)](https://travis-ci.org/vigour-io/util)

# vigour-util

This is a collection of small utility functions which can be required individually.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

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

### reference

## is

### email

Checks whether a string is a valid e-mail address.

```javascript
var isEmail = require('vigour-util/is/email')
console.log(isEmail('dev@vigour..io'))
// prints: "false"
console.log(isEmail('dev@vigour.io'))
// prints: "true"
```

### empty

### hash

### node

### number

### numberlike

### plainobj

### removed

### stream

### touch

### url

## path

### contains

## Other

### define

### descriptors

### encode

### flatten

### hash

### include

### merge

### quicksort

### regenerator

### setwithpath

### unflatten

### wrapfilter
