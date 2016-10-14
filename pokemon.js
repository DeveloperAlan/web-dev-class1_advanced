class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  whoPokemon() {
    console.log("Who's that Pokemon?");
    console.log("It's " + this.name);
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, strength, weakness) {
    super(name);
    this.type = "Water";
    this.strength = strength;
    this.weakness = weakness
  }

  strengthWeak () {
    console.log("Strength: " + this.strength);
    console.log("Weakness: " + this.weakness);
  }
}

class FirePokemon extends Pokemon {
  constructor(name, strength, weakness) {
    super(name);
    this.type = "Fire";
    this.strength = strength;
    this.weakness = weakness
  }

  strengthWeak () {
    console.log("Strength: " + this.strength);
    console.log("Weakness: " + this.weakness);
  }
}

var Squirtle = new WaterPokemon("Squirtle", "water", "fire");
var Charmander = new WaterPokemon("Charmander", "fire", "water");

Charmander.whoPokemon();
Charmander.strengthWeak();
console.log("\n");
Squirtle.whoPokemon();
Squirtle.strengthWeak();
