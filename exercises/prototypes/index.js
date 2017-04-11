function Animal (kind) {
  this.kind = kind;
}

Animal.prototype.sound = function(){ return 'i\'m an animal' }

function Mammal() {
  Animal.call(this, 'mammal');
}

Mammal.prototype = new Animal();

var o = { x: 8 }

Object.create(o, { y: { value: 6 } })




// java like

class Animal {
  constructor(kind) {
    this.kind = kind;
  }
  sound() {
    console.log('i\'m an animal')
  }
}

class Mammal extends Animal {
  constructor(species) {
    super('mammal');
    this.species = species;
  }
  sound() {
    console.log('i\'m a mammal')
  }
}

class SettersGetters {
  constructor() {
    this.__count = 0;
  }
  get count(){ return this.__count }
  set count(n){ this.__count++ }
}
