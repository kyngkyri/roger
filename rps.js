var choices = ["rock", "scissors","paper"];
// var player2 = ["rock", "scissors", "paper"];
/* Choices */
var randomChoice = Math.floor(Math.random() * 3);

var p1Choice = choices[2]; // Rock
var p2Choice = choices[randomChoice]; // Paper

if (p1Choice === p2Choice) {
    console.log("It's a tie!"); 
} else if (p1Choice === "scissors") { // if p1 is scissors
    if (p2Choice === "rock") {
        console.log("Player one loses");
        console.log("Rock beats scissors");
    } else {
        console.log("Player one wins");
        console.log("Scissors beats paper");
    }
} else if (p1Choice === "rock") {
    if (p2Choice === "scissors") {
        console.log("Player one wins");
        console.log("Player two loses");
    } else {
        console.log("Player one loses");
        console.log("Player two wins");
    }
} else if (p1Choice === "paper") {
    if (p2Choice === "scissors") {
        console.log("Player one loses");
        console.log("Player two wins");
    } else {
        console.log("PLayer one wins");
        console.log("Player two loses");
    }
}