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

  printsMultiplayer() {
    if (this.multiplayer == "No") {
      console.log("This game does not have multiplayer");
    } else {
      console.log("This game does have multiplayer");
    }
  }
}

var game1 = new Game("Mario", "No", "Adventure", 1000);
var game2 = new Game("Mario", "No", "Adventure", 1000);
var game3 = new Game("Mario", "No", "Adventure", 1000);
var game4 = new Game("Mario", "No", "Adventure", 1000);
var game5 = new Game("Mario", "No", "Adventure", 1000);
var game6 = new Game("Mario", "No", "Adventure", 1000);
var game7 = new Game("Mario", "No", "Adventure", 1000);
var game8 = new Game("Mario", "No", "Adventure", 1000);
var game9 = new Game("Mario", "No", "Adventure", 1000);
var game10 = new Game("Mario", "No", "Adventure", 1000);

game1.printsGameName();
game2.printsGameName();
game3.printsGameName();
game4.printsGameName();
game5.printsGameName();
game6.printsGameName();
game7.printsGameName();
game8.printsGameName();
game9.printsGameName();
game10.printsGameName();
