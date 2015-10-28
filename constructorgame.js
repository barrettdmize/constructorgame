var gamestuff = {
    name: "name here",
    stamina: 5000
};

function Player(options) {
    //  var options = options || {};
    this.name = options.name || "A. Person";
    this.stamina = options.stamina || 100;
    this.spell = new Spell({
        name: "slow",
        damage: 7
    });
    this.use = function(spell) {
        this.spell = spell;
    };
    //attacking function
    this.attack = function(enemy) {
        var randomInt = Math.floor(Math.random() * 15);
        if (randomInt < 7) {
            enemy.stamina = enemy.stamina - this.spell.damage;
            console.log("That magic got you " + enemy.name +
                ", your stamina is now " + enemy.stamina);
            if (enemy.stamina <= 0) {
                enemy.stamina = 0;
                console.log(
                    "Your out of running juice! Better luck next time " +
                    enemy.name);
            }
        } else {
            console.log("You got lucky! Keep it up! " + enemy.name);
        }

    };


this.heal = function(enemy) {
    var heal = Math.floor(Math.random() * 7);
    if (heal < 7) {
        enemy.stamina = enemy.stamina + this.spell.damage;
        console.log("Good call on the heals " + enemy.name +
            ", your stamina is now " + enemy.stamina);
        if (enemy.stamina <= 0) {
            enemy.stamina = 0;
            console.log(
                "Your out of running juice! Better luck next time " +
                enemy.name);
              }
            }  else {
                    console.log("oh no! Heal failed for " + enemy.name);
                }

};

}

function Spell(options) {
    this.name = options.name || "slow";
    this.damage = options.damage;
}

function Magic() {}
var harrypotter = new Player({
    stamina: 7000,
    name: "Harry Potter"
});


var merlin = new Player({
    stamina: 6000,
    name: "Merlin"
});
var slowbolt = new Spell({
    damage: 2000,
    name: "slowbolt"
});
var jellylegs = new Spell({
    damage: 1500,
    name: "jellylegs"
});

var refreshment = new Spell({
    damage: 3000,
    name: "powerbar"
});

harrypotter.use(jellylegs);
Merlin.use(slowbolt);
