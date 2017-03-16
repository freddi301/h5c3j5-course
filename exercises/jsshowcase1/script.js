var showcase = {
  "alertMessage": function alertMessage(message) {
    alert(message);
  },
  add: function add (x, y) {
    return x + y;
  },
  nestedObject: {
  a: 1,
  b: {
    c: [2,3,4]
  }
}
}

showcase.alertMessage('a piacere');
showcase.add(4,5);
console.dir(showcase.nestedObject);
