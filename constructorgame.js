//Hogwarts 5


//ANIMATION (thanks http://www.sitepoint.com/guide-jquery-animate-method/ for the help!)


/////



var gamestuff = {
    name: "name here",
    meters: 5000
};

function Player(options) {
    //  var options = options || {};
    this.name = options.name || "A. Person";
    this.meters = options.meters || 1;
    this.spell = new Spell({
        name: "slow",
        damage: -7
    });
    this.use = function(spell) {
        this.spell = spell;
    };
    //casting function
    this.cast = function(enemy) {
        var randomInt = Math.floor(Math.random() * 12);
        if (randomInt < 4) {
            enemy.meters = enemy.meters - this.spell.damage;
            console.log("That magic is super effective! " + enemy.name +
                " has " + enemy.meters + " to go!");
            if (enemy.meters <= 0) {
                enemy.meters = 0;
                console.log(
                    "Your made it to the end first! You wizard athleticism is unrivaled!" +
                    enemy.name);
            }
        } else {
            console.log("The spell missed" + enemy.name);
        }

    };


this.heal = function(enemy) {
    var heal = Math.floor(Math.random() * 7);
    if (heal < 7) {
        enemy.meters = enemy.meters + this.spell.damage;
        console.log("Good call on the heals " + enemy.name +
            ", your meters is now " + enemy.meters);
        if (enemy.meters <= 0) {
            enemy.meters = 0;
            console.log(
              "You made it to the end first! You wizard athleticism is unrivaled!" +
              enemy.name);
              }
            }  else {
                    console.log("oh no! Your spell failed " + enemy.name);
                }

};

}

function Spell(options) {
    this.name = options.name || "slow";
    this.damage = options.damage;
}

function Magic() {}
var harrypotter = new Player({
    meters: 5000,
    name: "Harry Potter"
});


var hermoine = new Player({
    meters: 5000,
    name: "hermoine"
});
var slowbolt = new Spell({
    damage: 2000,
    name: "slowbolt"
});
var jellylegs = new Spell({
    damage: 1500,
    name: "jellylegs"
});

var haste = new Spell({
    damage: -3000,
    name: "haste"
});

var teleport = new Spell({
    damage: 3000,
    name: "teleport"
});

harrypotter.use(teleport);
hermoine.use(slowbolt);
