
4 + 3
7

var x;
undefined

x = 6
6

var y;

x = y = 6
6
x === 6 && y === 6
(x === 6) && (y === 6)

x + 6
12

x + y
12

x + (y = 5)
11


var z = 5;
undefined

z
5

var z;
z = 5;


function f(x) {}
undefined

f
function f(x) {}

var f = function (x) {}
undefined

f
function (x){}


function g() {}
undefined

g()
undefined

function g() { return; }
undefined

g()
undefined

var g = function() { return 'ciao' }

g()
'ciao'

var g = function (x) { return 'ciao' }

g()


var g = function (x) { return 2 * x; }

g(4)
8

g()
NaN

var h = 4;
undefined

g(h)
8

var j = function (p, r) { return p + r; }

//j(.......) === 7
j(4, 3)
7

var t = 5

j(t)
NaN

j(t, 9)
14

var add = function (q) {
  return function (z) {
    return z + q;
  }
}

var u = 4;

add(u)

add(4)

(function (q) {
  return function (z) {
    return z + q;
  }
})(4) // q = 4

// q = 4
function (z) {
  return z + q;
}

add(u)(4)

(// q = 4
function (z) {
  return z + q;
})(4)

4 + 4

8


var g1 = function (x) {
  return function () {
    return x * 2;
  }
}

g1(4.5)()

function (x) {
  return function () {
    return x * 2;
  }
} (4.5) ()

function () { //x = 4.5
  return x * 2;
}()

x*2 // x = 4.5

4.5*2
9


var a = function (x) {
  var doppio = x * 2;
  var meta = x / 2;
  return doppio + meta;
}

a(8)

function (x) {
  var doppio = x * 2;
  var meta = x / 2;
  return doppio + meta;
}(8)

// x = 8
var doppio = x * 2;
var meta = x / 2;
return doppio + meta;

var doppio = 8 * 2;
var meta = 8 / 2;
return doppio + meta;

var doppio = 16;
var meta = 4;
return doppio + meta;

16 + 4
20

var e = function (x) {
  return document.createElement(x);
}

e('p')

function (x) {
  return document.createElement(x);
}('p')

// x = 'p'
document.createElement(x);

document.createElement('p');

// <p></p>
