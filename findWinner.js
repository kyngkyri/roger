
// Declare an array with two Cool Nick entries to increase his odds
var people = ["Chris", "Will", "Cool Nick", "Edgar", "Faisal", "Cool Nick"];

// Function to get random number
function getRandomWinner(index) {
    // Returns a random number
    return Math.floor(Math.random() * index);
} 

// Prints out a random name based to the function
console.log(people[getRandomWinner(people.length)]);