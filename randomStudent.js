var candidates = ["Mohammadou", "Nick", "Jazz", "Bernardo", "Aden", "Aaron", "Iyayi"];

var randomIndex = Math.floor(Math.random() * candidates.length) // Random index 2
var firstWinner = candidates[randomIndex]; // First winner

var list1 = candidates.slice(0,randomIndex - 1); // First half of list without the random name
var list2 = candidates.slice(randomIndex + 1); // Second half of that list
var listy = list1.concat(list2); // Combine the two halfs together

var randomIndex2 = Math.floor(Math.random() * listy.length) // Random index for new list
var secondWinner = listy[randomIndex2]; // Second winner

console.log("\n\n\n"); // Empty space
console.log("The first winner is " + firstWinner + "!");
console.log("\n") // Empty line
console.log("The second winner is " + secondWinner + "!");
console.log("\n\n\n"); // Empty space