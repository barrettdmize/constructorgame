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
    //instigating Attack function
    this.instigateAttack = function(enemy) {
        var randomInt = Math.floor(Math.random() * 20);
        if (randomInt < 12) {
            console.log("HEALTH",enemy.health);
            console.log('DAMAGE',this.spell.damage);
            enemy.health = parseInt(enemy.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero1.health = parseInt(hero1.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero2.health = parseInt(hero2.health) - parseInt(this.spell.damage);
            var string = "That attack is super effective! ";
            $('.battle-logue').html(string.concat(enemy.name).concat(" has ").concat(enemy.health.toString()).concat("!"));
            if (enemy.health <= 0) {
                enemy.health = 0;
                console.log(
                    "Victory! Game over " +
                    enemy.name + "!" );

            }
        } else {
          $('.battle-logue').html("The attack missed " + enemy.name);
            console.log("The attack missed" + enemy.name);
        }

    };

    //instigating  healing function
    this.instigateHealing = function(enemy) {
        var randomInt = Math.floor(Math.random() * 20);
        if (randomInt < 12) {
            console.log("HEALTH",enemy.health);
            console.log('DAMAGE',this.spell.damage);
            // enemy.health = parseInt(enemy.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            this.use(heal);
            hero1.health = parseInt(hero1.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero2.health = parseInt(hero2.health) - parseInt(this.spell.damage);
            this.use(heavyblow);
            var string = "That attack is super effective! ";
            $('.battle-logue').html(string.concat(enemy.name).concat(" has ").concat(enemy.health.toString()).concat("!"));
            if (enemy.health <= 0) {
                enemy.health = 0;
                console.log(
                    "Victory! Game over " +
                    enemy.name + "!" );

            }
        } else {
          $('.battle-logue').html("The attack missed " + enemy.name);
            console.log("The attack missed" + enemy.name);
        }

    };

    //instigating firebolt function
    this.instigateFriebolt = function(enemy) {
        var randomInt = Math.floor(Math.random() * 20);
        if (randomInt < 12) {
            console.log("HEALTH",enemy.health);
            console.log('DAMAGE',this.spell.damage);
            this.use(firebolt);
            enemy.health = parseInt(enemy.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero1.health = parseInt(hero1.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero2.health = parseInt(hero2.health) - parseInt(this.spell.damage);
            this.use(heavyblow);
            var string = "Nice Healz bro! ";
            $('.battle-logue').html(string.concat(hero2.name).concat(" has ").concat(hero2.health.toString()).concat("!"));
            if (enemy.health <= 0) {
                enemy.health = 0;
                console.log(
                    "Victory! Game over " +
                    enemy.name + "!" );

            }
        } else {
          $('.battle-logue').html("The attack missed " + enemy.name);
            console.log("The attack missed" + enemy.name);
        }

    };

    //instigating lightning bolt function
    this.instigateLightningBolt = function(enemy) {
        var randomInt = Math.floor(Math.random() * 20);
        if (randomInt < 12) {
            console.log("HEALTH",enemy.health);
            console.log('DAMAGE',this.spell.damage);
            this.use(lightningbolt);
            enemy.health = parseInt(enemy.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero1.health = parseInt(hero1.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero2.health = parseInt(hero2.health) - parseInt(this.spell.damage);
            this.use(heavyblow);
            var string = "That attack is not bad - electricity isn't that great against bones ";
            $('.battle-logue').html(string.concat(enemy.name).concat(" has ").concat(enemy.health.toString()).concat("!"));
            if (enemy.health <= 0) {
                enemy.health = 0;
                console.log(
                    "Victory! Game over " +
                    enemy.name + "!" );

            }
        } else {
          $('.battle-logue').html("The attack missed " + enemy.name);
            console.log("The attack missed" + enemy.name);
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
var firebolt = new Spell({
    damage: 6000,
    name: "firebolt"
});

var lightningbolt = new Spell({
    damage: 6000,
    name: "lightningbolt"
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
setTimeout(
function()
{
$('.hero1-container').addClass('active');
}, 2000);
  hero2.instigateAttack(monster);
  setTimeout(
  function()
  {
  $('.monster-container').html("<img src='monsterattacking.gif'>");
}, 4000);
  setTimeout(
  function()
  {
  $('.monsterfireball-container').html("<img src='monsterfireball.gif'>");
}, 4000);
setTimeout(
function()
{
$('.monsterfireball-container').html("<img src='http://i54.tinypic.com/2e0pcsi.png'>");
}, 6500);
setTimeout(
function()
{
$('.monster-container').html("<img src='monsterflying.gif'>");
}, 5000);
  setTimeout(
  function()
  {
  $('.hero2-container').removeClass('active');
  $('.hero2-container').removeClass("<img src='attack-animation-hero2.gif'>");
}, 3000);

});
//ATTACK ANIMATION HERO EN



//instigate heal ANIMATION HERO
$('.magic-button').on('click', function(event){
  event.preventDefault();
  $('.hero2-container').html("<img src='casting-animation-hero2.gif'>");
  setTimeout(
  function()
  {

$('.hero2-container').append("<img src='http://1.bp.blogspot.com/-vjmr766vOMI/ULCEnMbPirI/AAAAAAAAAO0/tXhqCde7lk8/s1600/ankh.gif'>");
}, 500);
setTimeout(
function()
{

  $('.hero2-container').html("<img src='default-animation-hero2.gif'>");
}, 1500);
setTimeout(
function()
{
$('.monster-container').html("<img src='monsterattacking.gif'>");
}, 4000);
setTimeout(
function()
{
$('.monster-container').html("<img src='monsterflying.gif'>");
}, 5000);

});

//instigate ANIMATION HERO end


//Putting the console log into the DIV
