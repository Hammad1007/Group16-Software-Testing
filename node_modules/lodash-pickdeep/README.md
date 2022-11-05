# lodash-pickDeep
[![GitHub Latest Release](https://badge.fury.io/gh/JamesMGreene%2Flodash-pickDeep.svg)](https://github.com/JamesMGreene/lodash-pickDeep) [![Build Status](https://secure.travis-ci.org/JamesMGreene/lodash-pickDeep.svg?branch=master)](https://travis-ci.org/JamesMGreene/lodash-pickDeep) [![Coverage Status](https://coveralls.io/repos/JamesMGreene/lodash-pickDeep/badge.svg?branch=master&service=github)](https://coveralls.io/github/JamesMGreene/lodash-pickDeep?branch=master) [![Dependency Status](https://david-dm.org/JamesMGreene/lodash-pickDeep.svg?theme=shields.io)](https://david-dm.org/JamesMGreene/lodash-pickDeep) [![Dev Dependency Status](https://david-dm.org/JamesMGreene/lodash-pickDeep/dev-status.svg?theme=shields.io)](https://david-dm.org/JamesMGreene/lodash-pickDeep#info=devDependencies)

A [lodash](https://lodash.com/) mixin to add a `pickDeep` function.


## Install

```shell
$ npm install --save lodash-pickdeep
```



## Usage

#### Using it as a lodash mixin

```js
var _ = require('lodash');
var pickDeep = require('lodash-pickdeep');

_.mixin( { pickDeep: pickDeep }, { chain: true } );

_.pickDeep( { a: { b: { c: 'foo', d: 'bar', e: { f: 'baz' } } } }, [ 'a.b.c', 'a.b.e' ] );
// =>  { a: { b: { c: 'foo', e: { f: 'baz' } } } }
```


#### Using it on its own

```js
var pickDeep = require('lodash-pickdeep');

pickDeep( { a: { b: { c: 'foo', d: 'bar', e: { f: 'baz' } } } }, [ 'a.b.c', 'a.b.e' ] );
// =>  { a: { b: { c: 'foo', e: { f: 'baz' } } } }
```



## API Documentation

### `_.pickDeep(object, [props])`

Creates an object composed of the picked object properties, which may contain deep property identifiers.

#### Arguments
1. `object` *(Object)*: The source object.
2. `[props]` *(...(string|string&#91;&#93;)*: The property identifiers to pick, specified individually or in arrays.

#### Returns
*(Object)*:  Returns the new object.



## License

Copyright (c) 2016, James M. Greene (MIT License)
