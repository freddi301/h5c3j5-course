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
- flex
- media query (responsive, chrome responsive mode)

#HSLIDE

# CSS The moving parts

- transitions
- transformations
- animations

#VSLIDE

# Transitions

```html
<style>
  div.transitionDemo {
    width: 20px; height: 20px;
    background-color: red
  }

  div.transitionDemo:hover {
    width: 40px; height: 40px;
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
    width: 40px; height: 40px;
    background-color: blue;
    transition: all 1s;
  }
</style>
<div class="transitionDemo"></div>

#VSLIDE

# Transformations

todo

#VSLIDE

# Animations

todo

#HSLIDE

TODO: cineforum non interactive

#HSLIDE

- function
- hoisting
- clojure
- object
- JSON
- console (debug, info, log, warn, error, table, inspect clear)
- DOM (get/setAttribute() appendChild())

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

# Lab

TODO: cineforum interactive

#HSLIDE

TODO:
- this, call()
- prototype chain, classes

#HSLIDE

TODO
- promise
- IIF
- js execution model
- ajax

#HSLIDE

# Frameweroks

TODO
- lodash
- bootstrap
- jquery
- react

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
