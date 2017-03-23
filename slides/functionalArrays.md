# Arrays

basic operations are

- Array.from
- push, pop, shift, unshift
- concat, slice, splice
- forEach
- find, indexOf
- filter, sort
- map
- reduce

+++

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

+++

# Push & Pop

adds and remove elements from array end

```javascript
var a = ['one', 'two'];
undefined
a.push('three');
3 // the array length
a
["one", "two", "three"]
a.pop()
"three"
a
["one", "two"]
```

+++

# Shift & Unshift

adds remove elements from array beginning

```javascript
var a = ['one', 'two'];
undefined
a.unshift('zero');
3 // the array length
a
["zero", "one", "two"]
a.shift()
"zero"
a
["one", "two"]
```

+++

# Concat

concatenates two arrays into a new one

```javascript
var a = [1,2];
var b = [3,4];
var c = a.concat(b);
a
[1,2]
b
[3,4]
c
[1,2,3,4]
```

+++

# Slice

extract items returning new array

```javascript
var a = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
a.slice(1)
["Orange", "Lemon", "Apple", "Mango"]
a.slice(1, 3)
["Orange", "Lemon"]
a.slice(-2)
["Apple", "Mango"]
a.slice(0, -1)
["Banana", "Orange", "Lemon", "Apple"]
a
["Banana", "Orange", "Lemon", "Apple", "Mango"]
```

+++

# Splice

```javascript
var a = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
a.splice(1, 2) // removes 2 items starting at position 1
["Orange", "Lemon"]
a
["Banana", "Apple", "Mango"]

a.splice(1, 1, 'Pomodoro', 'Cocco');
['Apple']
a
["Banana", "Pomodoro", "Cocco", "Mango"]
```

+++

# forEach

call given function on all array elements

```javascript
var a = ['Marocco', 'India', 'Ahiti']
a.forEach(function(item, index, array){
  console.log(item, index, array)
});
/*
Marocco 0 ["Marocco", "India", "Ahiti"]
India 1 ["Marocco", "India", "Ahiti"]
Ahiti 2 ["Marocco", "India", "Ahiti"]
*/
```

+++

# indexOf

find an element index in array

```javascript
var a = ['Marocco', 'India', 'Ahiti']
a.indexOf('Ahiti')
2
a[a.indexOf('Ahiti')]
'Ahiti'
```

+++

# find

find element in array based on function

```javascript
var a = ['Marocco', 'India', 'Ahiti']

a.find(function(item){
  if (item[0] === 'I') return true;
  return false;
})
"India"

a.find(function(){ return false; })
undefined
```

+++

# filter

filters elements in array returning new array

```javascript
var a = ['abba', 'babba', 'acca', 'cabba'];
a.filter(function(item){
  if (item[0] === 'a') return true;
  return false;
});
["abba", "acca"]
```

+++

# sort

sort an array based on function,
modifies original array

```javascript
var a = [47, 4, 1, -5, 9];
a.sort(function(a, b){
  if (a === b) return 0; // if items equal
  if (a > b) return -1; // if item a to the beginning
  return 1; // if item a to end of filtered array
});
[-5, 1, 4, 9, 47]

```

+++

# map

executes given function on every array item,
returning a new array of what given function returns

```javascript
var a = [1,2,3,4,5];
a.map(function(item){ return item * item; });
[1, 4, 9, 16, 25]
a
[1, 2, 3, 4, 5]
```

+++

# reduce

executes given function on every array item maintaining a memo

```javascript
var a = [1,2,3,4];
a.reduce(function(memo, item){
  return memo + item;
}, 0);
10
a
[1, 2, 3, 4]
```

+++

# Chaining

you can chain more operations

```javascript
var a = [{ name: 'fred', age: 23 }, { name: 'frank', age: 50 }, { name: 'mary', age: 33 }]
a
  .filter(function(person){ return person.age > 30 })
  .reduce(function(names, person){
    return names.concat([person.name])
  }, []);
["frank", "mary"]
```
