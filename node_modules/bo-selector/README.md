# bo-selector

A CSS selector parser based on [jison](http://zaach.github.io/jison/)

[![Build Status](https://secure.travis-ci.org/featurist/bo-selector.png?branch=master)](http://travis-ci.org/featurist/bo-selector)

### Example

```js
var parser = require('./bo-selector').parser;
var ast = parser.parse(".a[b = c], c[d]:e:f(g *:h:i[j]:k), :l > m[n ~= 'o']");
console.log(require('util').inspect(ast, false, null));
```

...generates:

```js
{ type: 'selector_list',
  selectors:
   [ { type: 'constraint_list',
       constraints:
        [ { type: 'class', name: 'a' },
          { type: 'attribute_equals', name: 'b', value: 'c' } ] },
     { type: 'element',
       name: 'c',
       constraints:
        [ { type: 'has_attribute', name: 'd' },
          { type: 'pseudo_class', name: 'e' },
          { type: 'pseudo_func',
            func:
             { type: 'function',
               name: 'f',
               args:
                { type: 'selector_list',
                  selectors:
                   [ { type: 'combinator_selector',
                       left: { type: 'element', name: 'g', constraints: [] },
                       right:
                        { type: 'element',
                          name: '*',
                          constraints:
                           [ { type: 'pseudo_class', name: 'h' },
                             { type: 'pseudo_class', name: 'i' },
                             { type: 'has_attribute', name: 'j' },
                             { type: 'pseudo_class', name: 'k' } ] },
                       combinator: 'descendant' } ] } } } ] },
     { type: 'combinator_selector',
       left:
        { type: 'constraint_list',
          constraints: [ { type: 'pseudo_class', name: 'l' } ] },
       right:
        { type: 'element',
          name: 'm',
          constraints: [ { type: 'attribute_contains_word', name: 'n', value: 'o' } ] },
       combinator: 'child' } ] }
```

### Bo?

[Craig David - Bo' Selecta Ruined My Life](http://www.youtube.com/watch?v=gpOA8AMZG8M)

### License

BSD