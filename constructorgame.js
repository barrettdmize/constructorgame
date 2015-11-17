
// MENU START
$('.opening').on('click', function(event){
  event.preventDefault();
 $('.opening').addClass('hidden');
 $('.everything-container').removeClass('hidden');

});
setTimeout(
function()
{
window.alert("Thanks for playing! Click the buttons with your mouse and defeat the enemy!");
window.alert("You are the knights - after defeating the dragon, the corpse reanimates! Good luck!");
}, 2000);


//MONSTER-DEATH
function monsterdeath(enemy) {
  enemy = monster;
    enemy.health = 0;
    console.log(
        "Victory! Victory! Victory! " +
        enemy.name + "!" );

        $('.hero-spell-container').html("<img src='lefttorightexplosion.gif'>");

          window.alert("Click that 'ok' button and wait a few sec. YOU WIN! Thanks for playing!");
          setTimeout(
          function()
          {
          $('.monster-container').html("<lefttorightexplosion.gif'>");
        }, 2000);
      setTimeout(
      function()
      {
      $('.monster-container').html("<img src='monster-explosion.gif'>");
    }, 8000);
    setTimeout(
    function()
    {
    $('.monster-container').html("<img src='invisible600'>");
  }, 11000);
  $('.hero-spell-container').html("<img src='lefttorightexplosion.gif'>");
  setTimeout(
  function()
  {
    $('.opening').html("<img class = 'menupic' src='fistbump.png'>");
    $('.opening').fadeIn("<img src='http://www.cannotbetamed.com/wp-content/uploads/2014/10/GameoverSMB.png'>");
    $('.everything-container').addClass('hidden');
  }, 13000);
}



//Hero-DEATH
function herodeath() {
  hero1.health = 0;
        $('.opening').html("<img class = 'menupic' src='http://www.cannotbetamed.com/wp-content/uploads/2014/10/GameoverSMB.png'>");
        $('.opening').fadeIn("<img src='http://www.cannotbetamed.com/wp-content/uploads/2014/10/GameoverSMB.png'>");
        $('.everything-container').addClass('hidden');
        setTimeout(
        function()
        {
        window.alert("Refresh the webpage to play again!");
        window.alert("You will need pay attention to your health. Attack and heal is such a way so the enemy dies and you do not! Good luck!");
      }, 3000);
}











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
        if (randomInt < 19) {
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
            $('.battle-logue').append(string.concat(hero1.name).concat(" has ").concat(hero1.health.toString()).concat("!"));
            $('.battle-logue').append(string.concat(hero2.name).concat(" has ").concat(hero2.health.toString()).concat("!"));
            if (hero1.health <= 0) {
                herodeath();

            }


            if (enemy.health <= 0) {
                monsterdeath();



            }
        } else {
          $('.battle-logue').html("The attack missed " + enemy.name);
            console.log("The attack missed" + enemy.name);
        }

    };

    //instigating  healing function
    this.instigateHealing = function(enemy) {
        var randomInt = Math.floor(Math.random() * 20);
        if (randomInt < 19) {
            console.log("HEALTH",enemy.health);
            console.log('DAMAGE',this.spell.damage);
            // enemy.health = parseInt(enemy.health) - parseInt(this.spell.damage);
            // console.log("HEALTH",hero1.health);
            // console.log('DAMAGE',hero1.spell.damage);
            this.use(heal);
            hero1.health = parseInt(hero1.health) - parseInt(this.spell.damage);
            console.log("HEALTH",hero1.health);
            console.log('DAMAGE',hero1.spell.damage);
            hero2.health = parseInt(hero2.health) - parseInt(this.spell.damage);
            this.use(heavyblow);
            var string = "That attack is super effective! ";
            $('.battle-logue').html(string.concat(hero1.name).concat(" has ").concat(hero1.health.toString()).concat("!"));
            $('.battle-logue').append(string.concat(hero2.name).concat(" has ").concat(hero2.health.toString()).concat("!"));
            if (hero1.health <= 0) {
                herodeath();

            }
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
    this.instigateFirebolt = function(enemy) {
        var randomInt = Math.floor(Math.random() * 20);
        if (randomInt < 19) {
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
            var string = "Firebolt doesn't work against bones! No damage done to enemy! ";
            $('.battle-logue').html(string.concat(hero1.name).concat(" has ").concat(hero1.health.toString()).concat("!"));
            $('.battle-logue').append(string.concat(hero2.name).concat(" has ").concat(hero2.health.toString()).concat("!"));
            if (hero1.health <= 0) {
                herodeath();
            }
            if (enemy.health <= 0) {
                enemy.health = 0;
                monsterdeath();
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
        if (randomInt < 19) {
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
            var string = "Electicity is not very effective";
            $('.battle-logue').html(string.concat(enemy.name).concat(" has ").concat(enemy.health.toString()).concat("!"));
            $('.battle-logue').append(string.concat(hero1.name).concat(" has ").concat(hero1.health.toString()).concat("!"));
            $('.battle-logue').append(string.concat(hero2.name).concat(" has ").concat(hero2.health.toString()).concat("!"));
            if (hero1.health <= 0) {
                herodeath();
            }
            if (enemy.health <= 0) {
                enemy.health = 0;
                monsterdeath();
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
    health: 10000,
    name: "Sword Hero"
});

var monster = new Player({
    health: 25000,
    name: "Evil Monster"
});


var hero2 = new Player({
    health: 10000,
    name: "Axe Hero"
});
var strike = new Spell({
    damage: 2000,
    name: "strike"
});
var firebolt = new Spell({
    damage: 0,
    name: "firebolt"
});

var lightningbolt = new Spell({
    damage: 3000,
    name: "lightningbolt"
});

var heal = new Spell({
    damage: -9000,
    name: "heal"
});

var heavyblow = new Spell({
    damage: 5000,
    name: "heavyblow"
});

var firebreath = new Spell({
    damage: 3000,
    name: "firebreath"
});

hero1.use(heavyblow);
hero2.use(strike);
monster.use(firebreath);

//ATTACK ANIMATION HEROS AND MONSTER

$('.attack-button').on('click', function(event){
  event.preventDefault();
    hero2.instigateAttack(monster);
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
$('.hero1-container').html("<img src='attack-animation-hero1.gif'>");
$('.hero1-container').addClass('active');
}, 2000);
setTimeout(
function()
{
$('.hero1-container').html("<img src='default-animation-hero1.gif'>");
}, 4000);
  setTimeout(
  function()
  {
  $('.monster-container').html("<img src='monsterattacking.gif'>");
}, 5000);
  setTimeout(
  function()
  {
  $('.monsterfireball-container').html("<img src='monsterfireball.gif'>");
}, 5500);
setTimeout(
function()
{
$('.monsterfireball-container').html("<img src='http://i54.tinypic.com/2e0pcsi.png'>");
}, 7500);
setTimeout(
function()
{
$('.monster-container').html("<img src='monsterflying.gif'>");
}, 6500);
  setTimeout(
  function()
  {
  $('.hero2-container').removeClass('active');
  $('.hero2-container').removeClass("<img src='attack-animation-hero2.gif'>");
}, 3000);

});
//ATTACK ANIMATION HERO AND MONSTER END



//instigate heal ANIMATION HERO
$('.heal-button').on('click', function(event){
  event.preventDefault();
  hero2.instigateHealing(hero1);
  $('.hero2-container').html("<img src='casting-animation-hero2.gif'>");
  setTimeout( function() {
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
$('.monsterfireball-container').html("<img src='monsterfireball.gif'>");
}, 5000);
setTimeout(
function()
{
$('.monsterfireball-container').html("<img src='http://i54.tinypic.com/2e0pcsi.png'>");
}, 5500);
setTimeout(
function()
{
$('.monster-container').html("<img src='monsterflying.gif'>");
}, 5000);

});

//instigate firebolt ANIMATION HERO
$('.fire-button').on('click', function(event){
  event.preventDefault();
 hero2.instigateFirebolt(monster);
  $('.hero2-container').html("<img src='casting-animation-hero2.gif'>");
  setTimeout(
  function()
  {

$('.hero-spell-container').html("<img src='http://37.media.tumblr.com/724c09187c88f59c67cb304eec89adaf/tumblr_mrxr653qLz1rqazauo2_r1_500.gif'>");
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
$('.monsterfireball-container').html("<img src='monsterfireball.gif'>");
}, 5000);
setTimeout(
function()
{
  $('.monsterfireball-container').html("<img src='http://i54.tinypic.com/2e0pcsi.png'>");
}, 6500);
  setTimeout(
  function()
  {
$('.hero-spell-container').html("<img src='http://i54.tinypic.com/2e0pcsi.png'>");
}, 2000);
setTimeout(
function()
{
$('.monster-container').html("<img src='monsterflying.gif'>");
}, 5000);

});

//instigate lightningbolt ANIMATION HERO
$('.lightning-button').on('click', function(event){
  event.preventDefault();
    hero2.instigateLightningBolt(monster);
  $('.hero2-container').html("<img src='casting-animation-hero2.gif'>");
  setTimeout(
  function()
  {

$('.hero-spell-container').html("<img src='http://vignette1.wikia.nocookie.net/mugen/images/4/42/LIGHTNING.gif/revision/latest?cb=20130606220544'>");
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
$('.monsterfireball-container').html("<img src='monsterfireball.gif'>");
}, 5000);
setTimeout(
function()
{
  $('.monsterfireball-container').html("<img src='http://i54.tinypic.com/2e0pcsi.png'>");
}, 6500);
  setTimeout(
  function()
  {
$('.hero-spell-container').html("<img src='http://i54.tinypic.com/2e0pcsi.png'>");
}, 2000);
setTimeout(
function()
{
$('.monster-container').html("<img src='monsterflying.gif'>");
}, 5000);

});



//instigate ANIMATION HERO end


//Putting the console log into the DIV
