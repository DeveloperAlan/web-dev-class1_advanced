function Person (height, eyeColor) {
    this.height = height;
    this.eyeColor = eyeColor;
}

Person.prototype.speak = function() {
  console.log("Hi");
}

var Hazel = new Person(160, "brown");
var Eric = new Person(190, "brown");

Hazel.speak();

//Do not copy after this line unless you have v6
class Person { //Class - Template (think of this as a mould)
  constructor(height, eyeColor) {
    this.height = height;
    this.eyeColor = eyeColor;
  }
  // ^^^ A method called at the moment an object is instantiated

  speak() {
    console.log("Hi");
  }
}

var Hazel = new Person(160, "brown");
// ^^^ Object: An instance of a class.
var Eric = new Person(190, "brown");
// ^^^ Object: An instance of a class.



Hazel.speak();
Eric.speak();
//Executing a object method