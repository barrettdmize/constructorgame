  //Hogwarts 5


//MONSTER ANIMATION





/////



var gamestuff = {
    name: "name here",
    health: 5000
};

function Player(options) {
    //  var options = options || {};
    this.name = options.name || "A. Person";
    this.health = options.health || 1;
    this.spell = new Spell({
        name: "strike",
        damage: -7
    });
    this.use = function(spell) {
        this.spell = spell;
    };
    //casting function
    this.cast = function(enemy) {
        var randomInt = Math.floor(Math.random() * 12);
        if (randomInt < 2) {
            enemy.health = enemy.health - this.spell.damage;
            console.log("That attack is super effective! " + enemy.name +
                " has " + enemy.health+"!");
            if (enemy.health <= 0) {
                enemy.health = 0;
                console.log(
                    "You are dead! Game over" +
                    enemy.name + "!" );
            }
        } else {
            console.log("The spell missed" + enemy.name);
        }

    };







}

function Spell(options) {
    this.name = options.name || "strike";
    this.damage = options.damage;
}

function Magic() {}
var hero1 = new Player({
    health: 8000,
    name: "Sword Hero"
});

var monster = new Player({
    health: 50000,
    name: "Evil Monster"
});


var hero2 = new Player({
    health: 8000,
    name: "Axe Hero"
});
var strike = new Spell({
    damage: 2000,
    name: "strike"
});
var jab = new Spell({
    damage: 1500,
    name: "jab"
});

var heal = new Spell({
    damage: -10000,
    name: "heal"
});

var heavyblow = new Spell({
    damage: 3000,
    name: "heavyblow"
});

var firebreath = new Spell({
    damage: 1000,
    name: "firebreath"
});

hero1.use(heavyblow);
hero2.use(strike);
monster.use(firebreath);

//ATTACK ANIMATION HERO
$('.attack-button').on('click', function(event){
  event.preventDefault();
  $('.hero2-container').html("<img src='attack-animation-hero2.gif'>");
  $('.hero2-container').addClass('active');
  setTimeout(
  function()
  {
  $('.hero2-container').html("<img src='default-animation-hero2.gif'>");
  }, 2000);
  hero2.cast(strike);
});
//ATTACK ANIMATION HERO END



//CAST ANIMATION HERO
$('.magic-button').on('click', function(event){
  event.preventDefault();
  $('.hero2-container').html("<img src='casting-animation-hero2.gif'>");
  setTimeout(
  function()
  {
  $('.hero2-container').html("<img src='default-animation-hero2.gif'>");
}, 1200);

});

//CAST ANIMATION HERO end
