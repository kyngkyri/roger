function setup(){
    createCanvas(600,500);
}

var x = 100;
var xIncrement = 12;
var yIncrement = 6;
var y = 100;
var s = 100; // Size

function draw(){
    background(100);
    ellipse(x,y,s);
    x += xIncrement;
    y += yIncrement;

    if (x >= 500 || x <= 50) {
        // Change direction
        xIncrement = -xIncrement;
    }

    if (y >= 450 || y <= 50) {
        yIncrement = -yIncrement;
    }

}