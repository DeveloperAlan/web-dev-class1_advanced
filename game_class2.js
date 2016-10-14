class Game {
  constructor(name, multiplayer, genre, friends) {
    this.name = name;
    this.multiplayer = multiplayer;
    this.genre = genre;
    this.friends = friends;
  }

  printsGameName() {
    console.log("The name of the game is: " + this.name)
  }
}

class Shooter extends Game {
  constructor(name, multiplayer, friends, numGuns, types) {
    super(name, multiplayer, friends);
    this.genre = "Shooter"
    this.numGuns = numGuns;
    this.types = types;
  }

  exclaimGame() {
    console.log("I am a shooting game!");
  }

  printsGameName() {
    super.printsGameName();
    console.log("This game is also a shooting game");
  }
}

var Halo = new Shooter("Halo", true, 100, 26, 12);
var Overwatch = new Shooter("Overwatch", true, 10000, 22, 22);

// Halo.exclaimGame();
// Overwatch.exclaimGame();

Halo.printsGameName();
