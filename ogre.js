var HP = 100;
var gold = 0;
var ogresDefeated = 0;
var ogres = true;

function displayStats() {
    $('#stats').text('It works!');
}

function attack() {
    alert('You killed an ogre. You win at life!');
}

function setup() {
    $('body').append("<h1><center>Welcome to Ogre GAME</center></h1>");
    $('body').append('<div><h3>Stats</h3><p id="stats"></p></div>');
    $('body').append("<button onclick='attack()'>Attack</button>");
    $('body').append('<div id="ogre"></div>')

}

// Wait until document is ready!!!
$(document).ready(setup);

