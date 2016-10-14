class Person {
  constructor(name, eyeColor) {
    this.name = name;
    this.eyeColor = eyeColor;
  }

  speak() {
    console.log("Hi");
  }
}

var Hazel = new Person("Hazel", "brown");
var Eric = new Person("Eric", "brown");

// Hazel.speak();

class Student extends Person{
  constructor(name, eyeColor, school) {
    super(name, eyeColor)
    this.school = school;
  }

  learn() {
    console.log("I am learning");
  }
}

var Eric = new Student("Eric", "Brown", "North Sydney Boys");

Eric.speak();
Eric.learn();
console.log(Eric.school);
// Hazel.learn();