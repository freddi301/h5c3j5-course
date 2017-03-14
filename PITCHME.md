# HTML5
# CSS3
# JavaScript ES5

---

# The tools

Browser - [Chrome](https://www.google.it/chrome/browser/desktop/)

Text Editor - [Atom](https://atom.io/)

Versioning - [Git](https://git-scm.com/)

---

# HTML

Markup language

Declarative

[WikiPedia](https://en.wikipedia.org/wiki/HTML)

+++

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

+++

HTML is not a rigid format, it allows errors and incomplete information

HTML4 is supported on every browser, HTML5 support vary by browser and behaviour may change also.

+++

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

+++

![Layout](http://www.developer.com/imagesvr_ce/3977/Figure01.png)

+++

# [HTML5 features](https://code.tutsplus.com/tutorials/28-html5-features-tips-and-techniques-you-must-know--net-13520)

## Showcase
- [http://html5gallery.com/](http://html5gallery.com/)
- [http://html5-showcase.com/](http://html5-showcase.com/)

---

# CSS (Cascading Style Sheet)

Allows to change appearance of html elements

Declarative

[WikiPedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

+++

# Inline Style

```html
<p style="color: red">Lorem Ispum</p>
```

+++

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

+++

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

+++

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

+++

Not all browser supports css and behave consistently

You have to use [normalize.css](https://necolas.github.io/normalize.css/)

and add [prefixes](https://autoprefixer.github.io/) for transitions for example

---

# JavaScript

- scripting
- interpreted
- dynamically typed
- language that run on every browser

[WikiPedia](https://en.wikipedia.org/wiki/JavaScript)

+++

# in dev console

Chrome -> options -> dev tools -> console

```javascript
alert("hello world")
```

+++

# html inline

```html
<button onclick="alert('hello')"></button>
```

+++

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

+++

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

+++

Not every browser supports every feature of javascript

You might need to use

- [shims](https://github.com/es-shims/es5-shim)
- [polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill)
- [transpilers](https://babeljs.io/)

+++

# Books

- [JavaScript Allonge](https://leanpub.com/javascriptallongesix/read)
- [JavaScript The Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
- [YDKJS](https://github.com/getify/You-Dont-Know-JS)

---

# Compatibility Recap

when using html5, css3, javascript >= 5 features

always check that they work on all target browsers

[can i use](http://caniuse.com/) is a good reference

---

# HTML Tags

+++

# Heading

```html
<h1>Heading 1</h1>
```
<h1>Heading 1</h1>

```html
<h3>Heading 3</h3>
```
<h3>Heading 3</h3>

+++

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

+++

# SPAN

```html
<p>Hello<span style="color: red">red</span></p>
```

<p>Hello<span style="color: red">red</span></p>

+++

# New line & Horizontal rule

```html
<p>text on<br>new line</p>
<hr>
<p>separated by horizontal rule</p>
```

<p>text on<br>new line</p>
<hr>
<p>separated by horizontal rule</p>

+++

# Image

```html
<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" style="width: 100px"/>
```

<img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" style="width: 100px"/>

+++

# DIV

the most used element for dividing content and layout purposes

```html
<div>
  more content here
</div>
```

+++

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

+++

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

+++

# List recap

`<ol>` = ordered list

`<ul>` = unordered list

`<li>` = list item

+++

# Anchor

better know as link

```html
<a href="https://github.com/freddi301">my page</a>
```

<a href="https://github.com/freddi301">my page</a>

+++

# Anchor target

opens link on a named tag

```html
<a href="#" target="tab2">link2</a>
<a href="#" target="tab3">link3</a>
```

<a href="#" target="tab2">link2</a>
<a href="#" target="tab3">link3</a>

+++

# Anchor target

always open link in a new tab

```html
<a href="#" target="_blank">link</a>
```

<a href="#" target="_blank">link_</a>

+++

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

+++

# pre

maintains spacing

```html
<pre>
  Space preserving
  text
</pre>
```

<pre>
  Space preserving
  text
</pre>

+++

# code

used for code snippets

```html
<pre>
  <code>
    function helloWorld() {
      console.log('hello world!');
    }
  </code>
</pre>
```

<pre>
  <code>
    function helloWorld() {
      console.log('hello world!');
    }
  </code>
</pre>

+++

# checkbox

```html
<form>
  <fieldset>
    <legend>Known languages</legend><br>
    <input type="checkbox" name="html" value="html"/>html<br />
    <input type="checkbox" name="css" value="css"/>css<br />
    <input type="checkbox" name="javascript" value="javascript"/>JavaScript
  </fieldset>
</form>
```

<form>
  <fieldset>
    <legend>Known languages</legend><br>
    <input type="checkbox" name="html" value="html"/>html<br />
    <input type="checkbox" name="css" value="css"/>css<br />
    <input type="checkbox" name="javascript" value="javascript"/>JavaScript
  </fieldset>
</form>

+++

# radio

```html
<form>
  <fieldset>
    <legend>Known Languages</legend>
    <input type="radio" name="linguaggio" value="html"/>html<br />
    <input type="radio" name="linguaggio" value="css"/>css<br />
    <input type="radio" name="linguaggio" value="javascript"/>JavaScript
  </fieldset>
</form>
```

<form>
  <fieldset>
    <legend>Known Languages</legend>
    <input type="radio" name="linguaggio" value="html"/>html<br />
    <input type="radio" name="linguaggio" value="css"/>css<br />
    <input type="radio" name="linguaggio" value="javascript"/>JavaScript
  </fieldset>
</form>

+++

# select

```html
<form>
  <select>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <optgroup label="JavaScript">
      <option value="es2015">es2015</option>
      <option value="es2016">es2016</option>
    </optgroup>
  </select>
</form>
```

<form>
  <select>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <optgroup label="JavaScript">
      <option value="es2015">es2015</option>
      <option value="es2016">es2016</option>
    </optgroup>
  </select>
</form>

+++

# table

```html
<style>
  table { border-collapse: collapse; }
  table, th, td { border: 1px solid white; padding: 5px; }
</style>
<table>
  <caption>table demo</caption>
  <thead>
    <tr><th>name</th><th>age</th><th>more info</th></tr>
  </thead>
  <tbody>
    <tr><td>fred</td><td>42</td><td>developer</td></tr>
    <tr><td colspan="2">old ted</td><td rowspan="2">teacher</td></tr>
    <tr><td>ned</td><td>42</td></tr>
  </tbody>
  <tfoot>
    <tr><td>name</td><td>age</td><td>more info</td></tr>
  </tfoot>
</table>
```
<style>
  table { border-collapse: collapse; }
  table, th, td { border: 1px solid white; padding: 5px; }
</style>
<table>
  <caption>table demo</caption>
  <thead>
    <tr><th>name</th><th>age</th><th>more info</th></tr>
  </thead>
  <tbody>
    <tr><td>fred</td><td>42</td><td>developer</td></tr>
    <tr><td colspan="2">old ted</td><td rowspan="2">teacher</td></tr>
    <tr><td>ned</td><td>42</td></tr>
  </tbody>
  <tfoot>
    <tr><td>name</td><td>age</td><td>more info</td></tr>
  </tfoot>
</table>

---

# CSS Selectors

All CSS rules are in form
```css
slecetor {
  property: value
}
```

The most specific rules applies

+++

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

+++

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

+++

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

+++

combined selectors
```css
nav>a.home:hover { background-color: "blue"; }
```

override properties (if do not want to write too specific selector)
```css
a { background-color: red !important; }
```

+++

in javascript you can select elements by css selector

get the first one
```javascript
document.querySelector("p#theText")
```

get all
```javascript
document.querySelectorAll("p.highlight")
```

+++

[reccomended](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

[new in CSS3](http://tutorialzine.com/2013/10/12-awesome-css3-features-you-can-finally-use/)

[reference](https://www.w3schools.com/cssref/css_selectors.asp)

---

# Box Model

```html
<div style="margin: 20px; border: 5px solid blue; padding: 20px;">
  hello
</div>
```

<div style="margin: 20px; border: 5px solid blue; padding: 20px;">
  hello
</div>

![box model](/examples/boxmodel.png)

+++

# box sizing

### { box-sizing: content-box }
Default. The width and height properties (and min/max properties) includes only the content. Border, padding, or margin are not included

### { box-sizing: border-box }
The width and height properties (and min/max properties) includes content, padding and border, but not the margin

---

# display

the CSS **display** attribute rules the all the elements layout

every tag has it's own initial display attribute

the display attribute can be altered, every tag can appear as any else

+++

# `{ display: none; }`

the element won't be displayed

```html
<p>
  Lorem
  <div style="display: none;">
    Carpe Diem
  </div>
  Ipsum
</p>
```

<p>
  Lorem
  <div style="display: none;">
    Carpe Diem
  </div>
  Ipsum
</p>

+++

# `{ display: inline; }`

the element will be inline with text, like a `<span>`

```html
<p>
  Lorem
  <div style="display: inline;">
    Carpe Diem
  </div>
  Ipsum
</p>
```

<p>
  Lorem
  <div style="display: inline;">
    Carpe Diem
  </div>
  Ipsum
</p>

+++

# `{ display: block; }`

the element will take all the horizontal space, like a `<div>`

```html
<p>
  Lorem
  <span style="display: block;">
    Carpe Diem
  </span>
  Ipsum
</p>
```

<p>
  Lorem
  <span style="display: block;">
    Carpe Diem
  </span>
  Ipsum
</p>

+++

# `{ display: inline-block; }`

the element will have a rectangular shape but won't take all horizontal space

```html
<p>
  Lorem
  <span style="display: inline-block;">
    Carpe Diem
  </span>
  Ipsum
</p>
```

<p>
  Lorem
  <span style="display: inline-block;">
    Carpe Diem
  </span>
  Ipsum
</p>

+++

# References

be sure to skim all the possible values

[w3schools](https://www.w3schools.com/cssref/pr_class_display.asp)
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
[css-tricks](https://css-tricks.com/almanac/properties/d/display/)

---

# display: flex

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

---

# border-radius + box-shadow + gradients

```html
<style>
  div.showcase-br-bs-gr {
    border-radius: 25px;
    box-shadow: 10px 10px 5px #888888;
    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    padding: 1em;
  }
</style>
<div class="showcase-br-bs-gr">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat, metus dapibus lobortis aliquam, nunc erat consectetur lacus, nec euismod ipsum massa sit amet mauris
</div>
```
<style>
  div.showcase-br-bs-gr {
    border-radius: 25px;
    box-shadow: 10px 10px 5px #888888;
    background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    padding: 1em;
  }
</style>
<div class="showcase-br-bs-gr">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat, metus dapibus lobortis aliquam, nunc erat consectetur lacus, nec euismod ipsum massa sit amet mauris
</div>

---

# CSS units

the most used length units are:
- percentile `100%`
- pixels `100px`

other useful units:
- cm `2cm` centimeters
- em `2em` Relative to the font-size of the element (2em means 2 times the size of the current font)

[Reference](https://www.w3schools.com/cssref/css_units.asp)

---

# position

```css
selector { position: static; }
```

is default one, it is positioned according to the normal flow of the page

+++

# position: relative

An element with position: relative; is positioned relative to its normal position.

Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

```html
<div style="position: relative; top: 50px; left: 50px; background-color: orange;">
  relative position element
</div>
```

<div style="position: relative; top: 50px; left: 50px; background-color: orange;">
  relative position element
</div>

+++

# position: fixed

An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

```html
<div style="position: fixed; top: 0px; left: 0px; background-color: orange;">
  fixed position element
</div>
```

<div style="position: fixed; top: 0px; left: 0px; background-color: orange;">
  fixed position element
</div>

+++

# position: absolute

An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

```html
<div style="position: absolute; top: 50px; left: 50px; background-color: orange;">
  absolute position element
</div>
```

<div style="position: absolute; top: 50px; left: 50px; background-color: orange;">
  absolute position element
</div>

---

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

+++

# Responsive

test in browser the responsiveness of your CSS

![](https://developers.google.com/web/tools/chrome-devtools/device-mode/imgs/device-mode-initial-view.png)

+++

# Mobile responsive

mobile browsers needs

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

because they simulate a desktop width screen

[more info](https://css-tricks.com/snippets/html/responsive-meta-tag/)

---

# CSS The moving parts

- transitions
- transformations
- animations

+++

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

+++

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

+++

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

---

# LAB

Create a non-interactive single page "Moovie Database" site

---

# function

```javascript
function alertMessage(message) {
  alert(message);
}
alertMessage('hello');
```

+++

# function return

```javascript
function add(x, y) { return x + y; }
alert(add(2,3));

function empty() {}
alert(empty())
```

+++

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

+++

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

+++

# shadowing

```javascript
var x = 'upper x';
var y = "upper y";
function shadow(x) { return x + ' - ' + y }
console.log(x + ' - ' + y);
console.log(shadow('inner x'));
```

+++

# function expressions

```javascript
var anonFunc = function() { return 0; }
var nameFunc = function name () { return 'i have a name'; }
console.log(anonFunc, anonFunc(), anonFunc.name);
console.log(nameFunc, nameFunc(), nameFunc.name);
```

+++

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

---

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

+++

# JSON

is the most used information exchange format

```javascript
JSON.stringify({a: 2, b: [1, 'c']});

JSON.parse('{"a": 2, "b": [1, "c"]}');
```

[formal definition](http://www.json.org/json-en.html)

---

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

+++

# console debugging utils

```javascript
console.assert(1 == 2) // will throw an error if argument is false
console.trace({ a: 5 }) // same as console.log but report line code
console.count('a'); console.count('b'); console.count('a'); // will count how many times a string appears
console.time('event1'); console.timeEnd('event1'); // display time passed
console.group('more log'); console.log(1); console.log('hello'); console.groupEnd('more log');
```

+++

# console display utils

```javascript
console.dir({ x: 6 });
console.table([
  { name: 'foo', age: 33 },
  { name: 'bar', age: 66 }
]);
console.log("%cBig Red", "color: red; font-size: 50px");
```

---

# alert confirm prompt

these functions block javascript execution

they are not reccomended, but are handy for prototyping

```javascript
alert('some message');
```

```javascript
var isConfirmed = confirm('confirm this message');
isConfirmed == true // if user pressed OK
isConfirmed == false // otherwise
```

```javascript
var name = prompt('type yout name', 'no name typed in');
name == null // if user pressed Cancel
name == '' // if user pressed OK without writing
name == 'text user typed in'
```

---?include=slides/DOM.md

---

TODO:
- listeners
- onclick
- addEventListener
- event bubbling

---

todo:
- input
- form (submit, action)
- validating form

---

# Debugger

set breakpoints and inspect code step by step

![debugger](https://developers.google.com/web/tools/chrome-devtools/javascript/imgs/get-started-watch-expression.png)

---

TODO:
- this, call()
- prototype chain, classes

---

# Introspection

TODO:
- typeof
- instanceof
- Object.keys
- Object.getOwnPropertyNames

---

TODO
- store data on html elements
- store data in html dataset

---

# Lab

TODO: cineforum interactive

---

# HTML5 more features

TODO:
- open Tags
- autoclose Tags
- no "" in attribute
- attribute default value
- <style>
- <script>
- <meta charset="utf-8">
- <canvas> + examples
- <video>
- <audio>
- geolocation
- drag & drop
- new tag meanings
- accessibility, aria tags
- web worker

---

TODO
- falsy/truthy table
- logical operators
- promise
- IIF
- js execution model
- ajax
- simulate slow network/network issues

---

TODO
- location, history, window, navigator

---

# Frameweroks

TODO
- lodash
- bootstrap
- jquery
- react
- CSS preprocessors
- HTML preprocessors

---

# Git

TODO
- git init
- git add
- git commit
- git checkout

+++

TODO
- git checkout -b
- git merge
- git rebase -i HEAD~3

+++

TODO
- git clone
- git remote add
- git push
- git pull
- github fork (pull request)
