//I want to make a function that you can give a number
// as an input, and give me a random number, between 0 and that input
// Give the function input 5, you will get a random number from 0 to 5

function coolNick(number) {
    // Want to use input as the range
    var randomNumber = Math.random() * number;
    var result = Math.floor(randomNumber);
    return result;
}
console.log(coolNick(10000));

