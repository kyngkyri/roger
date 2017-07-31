var prompt = require('prompt-sync')();

var state = prompt("How stuck are you? ");

if (state == "stuck") {
    console.log("Google it");
} else if (state == "still stuck") {
    console.log("Ask a friend");
} else {
    console.log("Ask a teacher!")
}


