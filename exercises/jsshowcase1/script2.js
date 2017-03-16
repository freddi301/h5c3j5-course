var x = 1;
var y = 2;

function q(selector) { return document.querySelector(selector) }

var showcase = {
  "alertMessage": function alertMessage(message) {
    alert(message);
  },
  "add": function add(x, y) { return x + y; },
  "empty": function empty() { },
  "hoisting": function hoisting() {
    var y = 4;
    console.log(y,x);
    var x = 6;
    console.log(y,x);
  },
  "nomeCognome": function nomeCognome() {
    alert(nome() + ' ' + cognome());
  },
  "shadowing": function shadow() {
    var x = 5;
    console.log(x, y);
  },
  "clojure": function (x){ return function(y) { return x + y; }},
  "clojureShow": function() {
    var clojure = function (x){ return function(y) { return x + y; } };
    var x = clojure(4); q('#clojure-output-x').value = x;
    var y = x(6); q('#clojure-output-y').value = y;
    var z = clojure(3)(7); q('#clojure-output-z').value = z;
  },
  exampleObject: {
    a: 1,
    b: {
      c: [2,3,4]
    },
    "meaning of life": 42,
    array: [1, 'bye', [4, 5]],
    allTogether: {
      toys: ['teddy bear', 'ak47'],
      name: 'fred',
      age: 42,
      info: {
        hobby: 'bow shooting',
        "rpg stats": {
          class: 'barbarian',
          strength: 10,
          intelligence: 4,
          agility: 5,
          inventory: [
            { item: 'club', description: 'hurts', damage: 35 },
            { item: 'potion', description: 'restore some HP', restore: 20 }
          ]
        }
      }
    },
  },
  objectLiteral: function() {
    var o = showcase.exampleObject;
    console.log(o["meaning of life"]);
    console.log(o.hello);
    console.log(o["meaning of life"] = 420);
    console.log(o.hello = "ahoj");
    console.log(o);
    var a = o.array;
    console.log(a[0]);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[2][1]);
  },
  toJSON(o){
    return JSON.stringify(o, null, 2);
  }
}

console.table(showcase.exampleObject.allTogether.info['rpg stats'].inventory);
console.log("%cBig Red", "color: red; font-size: 50px");

function nome() { return prompt('nome'); }
function cognome() { return prompt('cognome'); }
