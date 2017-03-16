# Arrays

basic operations are

- Array.from
- push, pop, shift, unshift
- concat, slice
- forEach
- map
- reduce

---

# Array.from

not all array-like structures are real arrays in javavascript

```javascript
typeof document.querySelectorAll('*') === 'object';
var elementArray = Array.from(document.querySelectorAll('*'));
```

on older browsers Array.from is done

```javascript
Array.prototype.slice.call(Array.prototype, document.querySelectorAll('*'));
```

TODO
