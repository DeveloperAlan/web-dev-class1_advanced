// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

function Person (height, eyeColor, pants, shirts) {
    this.height = height;
    this.eyeColor = eyeColor;
    this.pants = pants;
    this.shirts = shirts;
}

Person.prototype.speak = function() {
  console.log("Hi");
}

var Hazel = new Person(160, "brown");
var Eric = new Person(190, "brown");
var Kevin = new Person(180, "brown");
var Leo = new Person(120, "brown");

Hazel.speak();

console.log(Hazel.height)

// rl.question("What is your height? ", function(answer) {
//   Hazel.height = answer;
//   console.log(Hazel.height);
// })

