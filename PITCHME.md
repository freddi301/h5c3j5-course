# HTML5
# CSS3
# JavaScript ES5

#HSLIDE

# The tools

Browser - [Chrome](https://www.google.it/chrome/browser/desktop/)

Text Editor - [Atom](https://atom.io/)

Versioning - [Git](https://git-scm.com/)

#HSLIDE

# HTML

Markup language

Declarative

[WikiPedia](https://en.wikipedia.org/wiki/HTML)

#VSLIDE

## HTML4

[index.html](https://github.com/freddi301/h5c3j5-course/blob/master/examples/html4base.html)

```html
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello</h1>
    <div>
      <p>some paragraph text</p>
    </div>
  </body>
</html>
```

#VSLIDE

HTML is not a rigid format, it allows errors and incomplete information

HTML4 is supported on every browser, HTML5 support vary by browser and behaviour may change also.

#VSLIDE

## [HTML5](http://www.developer.com/lang/understanding-the-proper-way-to-lay-out-a-page-with-html5.html)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sample HTML5 Layout</title>
</head>
<body>
  <header>
    <h1>This is page heading</h1>
  </header>
  <section>
    <article>
      <h1>This is article heading</h1>
      <p>
        Hello world! Hello world! Hello world!
        Hello world! Hello world! Hello world!
      </p>
    </article>
  </section>
</body>
</html>
```

#VSLIDE

![Layout](http://www.developer.com/imagesvr_ce/3977/Figure01.png)

#VSLIDE

# [HTML5 features](https://code.tutsplus.com/tutorials/28-html5-features-tips-and-techniques-you-must-know--net-13520)

## Showcase
- [http://html5gallery.com/](http://html5gallery.com/)
- [http://html5-showcase.com/](http://html5-showcase.com/)

#HSLIDE

# CSS (Cascading Style Sheet)

Allows to change appearance of html elements

Declarative

[WikiPedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

#VSLIDE

# Inline Style

```html
<p style="color: red">Lorem Ispum</p>
```

#VSLIDE

# Included in html

```html
<html>
  <head>
    <style>
      p { color: red; }
    </style>
  </head>
  <body>
    <p>Lorem Ispum</p>
  </body>
</html>
```

#VSLIDE

# [Separate File](https://github.com/freddi301/h5c3j5-course/blob/master/examples/includeCss)

index.html
```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <p>Lorem Ispum</p>
  </body>
</html>
```

style.css
```css
p { color: red }
```

#VSLIDE

# CSS include

index.html
```html
<html>
  <head>
    <style>
      @import url("style.css");
    </style>
  </head>
  <body>
    <p>Lorem Ispum</p>
  </body>
</html>
```

style.css
```css
p { color: red }
```

#VSLIDE

Not all browser supports css and behave consistently

You have to use [normalize.css](https://necolas.github.io/normalize.css/)

and add [prefixes](https://autoprefixer.github.io/) for transitions for example

#HSLIDE

# JavaScript

- scripting
- interpreted
- dynamically typed
- language that run on every browser

[WikiPedia](https://en.wikipedia.org/wiki/JavaScript)

#VSLIDE

# in dev console

Chrome -> options -> dev tools -> console

```javascript
alert("hello world")
```

#VSLIDE

# html inline

```html
<button onclick="alert('hello')"></button>
```

#VSLIDE

# html tag

```html
<html>
  <head>
    <script>
      alert("hello")
    </script>
  </head>
</html>
```

#VSLIDE

# external script

index.html
```html
<html>
  <head>
    <script type="text/javascript" src="script.js"></script>
  </head>
</html>
```

script.js
```javascript
alert("hello")
```

#VSLIDE

Not every browser supports every feature of javascript

You might need to use

- [shims](https://github.com/es-shims/es5-shim)
- [polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill)
- [transpilers](https://babeljs.io/)

#VSLIDE

# Books

- [JavaScript Allonge](https://leanpub.com/javascriptallongesix/read)
- [JavaScript The Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
- [YDKJS](https://github.com/getify/You-Dont-Know-JS)

#HSLIDE

# Compatibility Recap

when using html5, css3, javascript >= 5 features

always check that they work on all target browsers

[can i use](http://caniuse.com/) is a good reference

#HSLIDE

# HTML Tags

#VSLIDE

# Heading

```html
<h1>Heading 1</h1>
```
<h1>Heading 1</h1>

```html
<h3>Heading 3</h3>
```
<h3>Heading 3</h3>

#VSLIDE

# Paragraph

```html
<p>
  Paragraph 1
</p>
<p>
  Paragraph 2
</p>
```

<p>
  Paragraph 1
</p>
<p>
  Paragraph 2
</p>

#VSLIDE

# SPAN

```html
<p>Hello<span style="color: red">red</span></p>
```

<p>Hello<span style="color: red">red</span></p>

#VSLIDE

# New line & Horizontal rule

```html
<p>text on<br>new line</p>
<hr>
<p>separated by horizontal rule</p>
```

<p>text on<br>new line</p>
<hr>
<p>separated by horizontal rule</p>

#VSLIDE

# Image

```html
<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" style="width: 100px"/>
```

<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" style="width: 100px"/>

#VSLIDE

# DIV

the most used element for dividing content and layout purposes

```html
<div>
  more content here
</div>
```

#VSLIDE

# Unordered list

```html
<ul>
  <li>item</li>
  <li>item</li>
</ul>
```

<ul>
  <li>item</li>
  <li>item</li>
</ul>

#VSLIDE

# Ordered list

```html
<ol>
  <li>item</li>
  <li>item</li>
</ol>
```

<ol>
  <li>item</li>
  <li>item</li>
</ol>

#VSLIDE

# List recap

`<ol>` = ordered list

`<ul>` = unordered list

`<li>` = list item

#VSLIDE

# Anchor

better know as link

```html
<a href="https://github.com/freddi301">my page</a>
```

<a href="https://github.com/freddi301">my page</a>

#VSLIDE

# Anchor target

opens link on a named tag

```html
<a href="#" target="tab2">link2</a>
<a href="#" target="tab3">link3</a>
```

<a href="#" target="tab2">link2</a>
<a href="#" target="tab3">link3</a>

#VSLIDE

# Anchor target

always open link in a new tab

```html
<a href="#" target="_blank">link</a>
```

<a href="#" target="_blank">link_</a>

#VSLIDE

# Anchor href

absolute
```html
<a href="https://github.com/freddi301">https://github.com/freddi301</a>
```

relative
```html
<a href="favicon.ico">https://gitpitch.com/freddi301/h5c3j5-course/master/favicon.ico</a>
```

page anchor (you can link to an element with specific id in a page)
```html
<a href="https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy#Original_radio_series">42</a>
```

<a href="https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy#Original_radio_series">42</a>

#HSLIDE

# CSS Selectors

All CSS rules are in form
```css
slecetor {
  property: value
}
```

The most specific rules applies

#VSLIDE

element selector
```css
p { color: red }
```
```html
<p>hello</p>
```

class selector
```css
.paragraph { color: blue }
```
```html
<p class="paragraph">hello</p>
```

id selector
```css
#par { color: red }
```
```html
<p id="par">hello</p>
```

#VSLIDE

multiple selector
```css
p, h1 { color: red }
```
```html
<h1>Heading</h1>
<p>hello</p>
```

child selector
```css
div p { color: blue }
```
```html
<div><section>
    <p >hello</p>
</section></div>
```

direct child selector
```css
div>p { color: blue }
```
```html
<div>
  <p >hello</p>
</div>
```

#VSLIDE

attribute selector
```css
[target=_blank] { font-size: 30px }
```
```html
<a href="#" target="_blank">link</a>
```

state selector
```css
p:hover { background-color: yellow }
```
```html
<p>move mouse here</p>
```

add content selector
```css
p::after {
    content: "thiw will appear after every <p> element";
}
```
```html
<p>mLorem ipsum</p>
```

#VSLIDE

combined selectors
```css
nav>a.home:hover { background-color: "blue"; }
```

override properties (if do not want to write too specific selector)
```css
a { background-color: red !important; }
```

#VSLIDE

in javascript you can select elements by css selector

get the first one
```javascript
document.querySelector("p#theText")
```

get all
```javascript
document.querySelectorAll("p.highlight")
```

#VSLIDE

[reccomended](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

[new in CSS3](http://tutorialzine.com/2013/10/12-awesome-css3-features-you-can-finally-use/)

[reference](https://www.w3schools.com/cssref/css_selectors.asp)

#HSLIDE

TODO
- box model
- table
- display

#HSLIDE

# flex

CSS3 feature, allows subdividing space and [lot more](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

```html
<style>
  div.flexContainer { display: flex; }
  div.flex-1 { flex-grow: 1 }
  div.flex-2 { flex-grow: 2 }
  div[class^="flex-"] { height: 20px; }
</style>
<div class="flexContainer">
  <div class="flex-1" style="background-color: yellow"></div>
  <div class="flex-2" style="background-color: orange"></div>
  <div class="flex-1" style="background-color: red"></div>
</div>
```

<style>
  div.flexContainer { display: flex; }
  div.flex-1 { flex-grow: 1 }
  div.flex-2 { flex-grow: 2 }
  div[class^="flex-"] { height: 20px; }
</style>
<div class="flexContainer">
  <div class="flex-1" style="background-color: yellow"></div>
  <div class="flex-2" style="background-color: orange"></div>
  <div class="flex-1" style="background-color: red"></div>
</div>

#HSLIDE

# Media query

```html
<style>
 .mediaQueryDemo {
   background-color: purple;
   display: inline-block;
   height: 20px;
 }
@media (min-width: 400px) {
  .mediaQueryDemo { width: 50%; }
}
 @media (min-width: 800px) {
  .mediaQueryDemo { width: 25%; }
}
</style>
<div class="mediaQueryDemo"></div>
<div class="mediaQueryDemo"></div>
<div class="mediaQueryDemo"></div>
<div class="mediaQueryDemo"></div>
```

<style>
 .mediaQueryDemo {
   background-color: purple;
   display: inline-block;
   height: 20px;
 }
@media (min-width: 400px) {
  .mediaQueryDemo { width: 49%; }
}
 @media (min-width: 800px) {
  .mediaQueryDemo { width: 24%; }
}
</style>
<div class="mediaQueryDemo"></div>
<div class="mediaQueryDemo"></div>
<div class="mediaQueryDemo"></div>
<div class="mediaQueryDemo"></div>

#VSLIDE

# Responsive

test in browser the responsiveness of your CSS

![](https://developers.google.com/web/tools/chrome-devtools/device-mode/imgs/device-mode-initial-view.png)

#VSLIDE

# Mobile responsive

mobile browsers needs

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

because they simulate a desktop width screen

[more info](https://css-tricks.com/snippets/html/responsive-meta-tag/)

#HSLIDE

# CSS The moving parts

- transitions
- transformations
- animations

#VSLIDE

# [Transitions](http://codepen.io/anon/pen/gmmQVO)

```html
<style>
  div.transitionDemo {
    width: 20px; height: 20px;
    background-color: red
  }

  div.transitionDemo:hover {
    width: 100%; height: 40px;
    background-color: blue;
    transition: all 1s;
  }
</style>
<div class="transitionDemo"></div>
```

<style>
  div.transitionDemo {
    width: 20px; height: 20px;
    background-color: red
  }

  div.transitionDemo:hover {
    width: 100%; height: 40px;
    background-color: blue;
    transition: all 1s;
}
  }
</style>
<div class="transitionDemo"></div>

#VSLIDE

# Transformations

```html
<style>
  div.transformDemo {
    width: 20px; height: 20px;
    background-color: red;
    transform: translate(0px, -50px) rotate(45deg);
  }
</style>
<div class="transformDemo"></div>
```

<style>
  div.transformDemo {
    width: 20px; height: 20px;
    background-color: red;
    transform: translate(0px, -50px) rotate(45deg);
  }
</style>
<div class="transformDemo"></div>

#VSLIDE

# [Animations](http://codepen.io/anon/pen/ZeeVXo)

```html
<style>
  @keyframes example {
    0%   {background-color:red; left:0px; top:0px; transform: rotate(360deg);}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
  }
  div.animationDemo {
    width: 20px;
    height: 20px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
</style>
<div class="animationDemo"></div>
```

<style>
  @keyframes example {
    0%   {background-color:red; left:0px; top:0px; transform: rotate(360deg);}
    25%  {background-color:yellow; left:200px; top:0px;}
    50%  {background-color:blue; left:200px; top:200px;}
    75%  {background-color:green; left:0px; top:200px;}
    100% {background-color:red; left:0px; top:0px;}
  }
  div.animationDemo {
    width: 20px;
    height: 20px;
    position: relative;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
</style>
<div class="animationDemo"></div>

#HSLIDE

TODO: cineforum non interactive

#HSLIDE

# function

```javascript
function alertMessage(message) {
  alert(message);
}
alertMessage('hello');
```

#VSLIDE

# function return

```javascript
function add(x, y) { return x + y; }
alert(add(2,3));

function empty() {}
alert(empty())
```

#VSLIDE

# hoisting

```javascript
function awesome(x) {
  var double = x * 2;
  console.log(double);
  var half = x / 2;
  return double + half;
}
```

same as

```javascript
function awesome(x) {
  var double, half;
  double = x * 2;
  console.log(double);
  half = x / 2;
  return double + half;
}
```

#VSLIDE

# function hoisting

```javascript
function a() { return 'a' + b(); }
function b() { return 'b'; }
console.log(a, b);
```

same as

```javascript
var a, b;
a = function () { return 'a' + b(); }
b = function () { return 'b'; }
console.log(a, b);
```

#VSLIDE

# shadowing

```javascript
var x = 'upper x';
var y = "upper y";
function shadow(x) { return x + ' - ' + y }
console.log(x + ' - ' + y);
console.log(shadow('inner x'));
```

#VSLIDE

# function expressions

```javascript
var anonFunc = function() { return 0; }
var nameFunc = function name () { return 'i have a name'; }
console.log(anonFunc, anonFunc(), anonFunc.name);
console.log(nameFunc, nameFunc(), nameFunc.name);
```

#VSLIDE

# clojure

```javascript
function clojure(x) {
  return function (y) { return x + y; }
}
var cx = clojure(4); console.log(cx);
var cy = cx(6); console.log(cy);
var cy2 = cx(4); console.log(cy2);
console.log(clojure(2)(3));
```

#HSLIDE

# object literal

```javascript
var obj = {
  a: 1,
  b: {
    c: [2,3,4]
  }
};
console.log(obj.a);
console.log(obj.b.c[0]);
```

#VSLIDE

# JSON

is the most used information exchange format

```javascript
JSON.stringify({a: 2, b: [1, 'c']});

JSON.parse('{"a": 2, "b": [1, "c"]}');
```

[formal definition](http://www.json.org/json-en.html)

#HSLIDE

# console.log

use to log information or errors to console, in severity order

```javascript
console.debug('debugging info such as intermediate result');
console.info('some ordinary event occurred');
console.log('this should be read by a developer');
console.warn('some expected but unwanted error occurred');
console.error('some fatal error occurred');
console.clear(); // clear console;
```

#VSLIDE

# console debugging utils

```javascript
console.assert(1 == 2) // will throw an error if argument is false
console.trace({ a: 5 }) // same as console.log but report line code
console.count('a'); console.count('b'); console.count('a'); // will count how many times a string appears
console.time('event1'); console.timeEnd('event1'); // display time passed
console.group('more log'); console.log(1); console.log('hello'); console.groupEnd('more log');
```

#VSLIDE

# console display utils

```javascript
console.dir({ x: 6 });
console.table([
  { name: 'foo', age: 33 },
  { name: 'bar', age: 66 }
]);
console.log("%cBig Red", "color: red; font-size: 50px");
```

#HSLIDE

- DOM (get/setAttribute() appendChild() style.prop, getById/class, createElement, appp/replace/removeChild)

#HSLIDE

TODO:
- listeners
- onclick
- addEventListener
- event bubbling

#HSLIDE

todo:
- input
- form (submit, action)
- validating form

#HSLIDE

# Debugger

set breakpoints and inspect code step by step

![debugger](https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/get-started-watch-expression.png)

#HSLIDE

TODO:
- this, call()
- prototype chain, classes

#HSLIDE

# Introspection

TODO:
- Object.keys
- Object.getOwnPropertyNames

#HSLIDE

TODO
- store data on html elements
- store data in html dataset

# Lab

TODO: cineforum interactive

#HSLIDE

TODO
- falsy/truthy table
- logical operators
- promise
- IIF
- js execution model
- ajax
- simulate slow network/network issues

#HSLIDE

# Frameweroks

TODO
- lodash
- bootstrap
- jquery
- react
- CSS preprocessors
- HTML preprocessors

#HSLIDE

# Git

TODO
- git init
- git add
- git commit
- git checkout

#VSLIDE

TODO
- git checkout -b
- git merge
- git rebase -i HEAD~3

#VSLIDE

TODO
- git clone
- git remote add
- git push
- git pull
- github fork (pull request)
