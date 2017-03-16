# DOM

DOM is acronym for Document Object Model

DOM is an JavaScript API to manipulate HTML elements and other browser features

+++

# document.getElementById

```html
<div id="id1">
</div>
```

```javascript
var e = document.getElementById("id1");
console.log(e);
```

# document.getElementsByClass

```html
<div class="class1">
</div>
<div class="class1">
</div>
```

```javascript
var elements = document.getElementsByClass("class1");
console.log(elements);
```

+++

# document.createElement

you can create html elements in javascript

```javascript
var div = document.createElement('div')
console.log(div);
```

is same as

```html
<div></div>
```

+++

# get/setAttribute

you can read and set html attributes

```html
<div id="id1" class="class1"></div>
```

```javascript
var div = document.getElementById('id1');
div.getAttribute('class') // 'class1'
div.setAttribute('class', 'another-class')
div.getAttribute('class') // 'another-class'
```

will modify the element to

```html
<div id="id1" class="another-class"></div>
```

+++

# innerText

you can set the text content of an element

```html
<div id="div1">hello</div>
```

```javascript
var div = document.querySelector('#div1');
div.innerText = 'bye'
```

results in

```html
<div id="div1">bye</div>
```

+++

# innerHTML

you can set the html content of an element

```html
<div id="div1">hello</div>
```

```javascript
var div = document.querySelector('#div1');
div.innerHTML = '<p>bye</p>'
```

results in

```html
<div id="div1">
  <p>bye</p>
</div>
```

+++

# style

there is a shortcut to set style properties

```html
<div id="div2"></div>
```

```javascript
var div = document.getElementById('div2');
div.style.width = '200px';
div.style.height = '200px';
div.style['background-color'] = 'red';
```

results in

```html
<div id="div2" style="width: 200px; height: 200px; background-color: red;"></div>
```

+++

# appendChild

```javascript
function e(tagname) { return document.createElement(tagname); }
var div = e('div');
var p = e('p');
p.innerText = 'hello';
div.appendChild(p);
```

results in

```html
<div>
  <p>hello</p>
</div>
```

to add the element to page

```javascript
document.body.appendChild(div);
```

+++

# children childNodes

there two read-only values to get child elements

```html
<div id="div4">
  <h1>title</h1>
  <p>paragraph</p>
  text node
</div>
```

children return all contained elements

childNodes returns also text nodes

```javascript
var div = document.getElementById('div4');
console.log(div.children);
console.log(div.childNodes);
```

+++

# removeChild

```html
<div>
  <p id="paragraph1">hello</p>
</div>
```

```javascript
var p = document.getElementById('paragraph1');
p.parentElement.removeChild(p)
```

```html
<div>
</div>
```

+++

# replaceChild

```html
<div>
  <p id="paragraph1">hello</p>
</div>
```

```javascript
var oldP = document.getElementById('paragraph1');
var newImg = document.createElement('img');
newImg.src = "https://d3pl14o4ufnhvd.cloudfront.net/v2/uploads/0a76a70d-fe42-4aa8-98d9-23f9dc88ea06/22e5e59004f5bac6c38b4c88a2e40009806480e2_original.png";
oldP.parentElement.replaceChild(newImg, oldP);
```

```html
<div>
  <img src="https://d3pl14o4ufnhvd.cloudfront.net/v2/uploads/0a76a70d-fe42-4aa8-98d9-23f9dc88ea06/22e5e59004f5bac6c38b4c88a2e40009806480e2_original.png"/>
</div>
```

+++

# add/removeEventListener

```html
<input id="clickButton" type="button" />
```

```javascript
var button = document.getElementById("clickButton");
function buttonClicked() { alert("hello"); }
button.addEventListener('click', buttonClicked);
button.removeEventListener('click', buttonClicked);
```
