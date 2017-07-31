function Car(color, weight) {
    this.color = color;
    this.weight = weight;
}

var jeep = new Car("black", 1);



function Player(team, position, number) {
    this.team = team;
    this.position = position;
    this.number = number;
    
    this.sayTeam = function() {
        console.log("My number is " + this.team)
    }

    this.sayPosition = function() {
        console.log("My number is " + this.position)
    }

    this.sayNumber = function() {
        console.log("My number is " + this.number)
    }
}

var jamesHarden = new Player("Rockets", "Point Guard", 13);
console.log(jamesHarden.sayTeam)
console.log(jamesHarden.sayPosition)
jamesHarden.sayPosition;
jamesHarden.sayNumber;



function Person(ethnicity, race, nationality) {
    this.ethnicity = ethnicity;
    this.nationality = nationality;
    this.race = race;
}

var jordan = new Person("Asian", "African-Americanan", "American");





