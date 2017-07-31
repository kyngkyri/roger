var students = ["Iyayi", "Edgar", "Elijah", "Aaron", "William", 
                "Mohammadou", "Montique", "Jordan", "Faisal",
                "Bao", "Nick", "Aden", "Kevin", "Mohinur", "Chris",
                "Tahmidur", "Matt", "Jospeh", "Taseen", "Bernardo"];
var teamA  = [];
var teamB = [];
var teamC = [];
var teamD = [];
var teamE = [];
var counter = 1; // First pick goes to team A, second to B, and etc.


function removeFromList(array) {
    var randomIndex = Math.floor(Math.random() * students.length); // Generate random index

    if (counter % 5 == 0) {
        teamA.push(students[randomIndex]); // Push a random student onto Team A
    } else if (counter % 4 == 0) {
        teamB.push(students[randomIndex]); // Push a random student onto Team B
    } else if (counter % 3 == 0) {
        teamC.push(students[randomIndex]);
    } else if (counter % 2 == 0) {
        teamD.push(students[randomIndex]);
    } else {
        teamE.push(students[randomIndex]);
    }
    counter++; // Increase counter for following student

    /* Below is code to remove chosen student from list of possbilities */
    var listOne = array.slice(0,randomIndex);
    var listTwo = array.slice(randomIndex + 1);
    students = listOne.concat(listTwo);

    return students; // Return new list of candidates
}

/* Continue until all students have been assigned to a team */
while (students.length != 0) {
    removeFromList(students);
}

function printTeam(array) {
    var string = "\n";
    for(var i = 0; i < array.length; i++) {
        string += array[i]
        if (i != 9) {
            string += ", ";
        } else {
            string += "."
        }
        if (i == 8) {
            string += "and "
        }
        if (i == 4) {
            string += "\n"
        }
    }
    string += "\n"
    return string;
}

console.log("\n\n\n");
console.log("Team A members are: " + printTeam(teamA));
console.log("\n")
console.log("Team B members are: " + printTeam(teamB));
console.log("\n")
console.log("Team C members are: " + printTeam(teamC));
console.log("\n")
console.log("Team D members are: " + printTeam(teamD));
console.log("\n")
console.log("Team E members are: " + printTeam(teamE));
console.log("\nGood luck!\n\n\n\n");