'use strict'

const newCharacter = document.getElementById('newCharacter');

class Character {
    constructor(name, selfEsteem = 50, health = 50, healthDamage, esteemDamage) {
        this.name = name;
        this.selfEsteem = selfEsteem;
        this.health = health;
        this.healthDamage = healthDamage;
        this.esteemDamage = esteemDamage;
    }

    attack(otherCharacter) {
        otherCharacter.health = (otherCharacter.health - this.healthDamage);
        alert(`${this.name} attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.health} health.`)
        return otherCharacter.health;
    }

    listHealth() {
        return `${this.name} has ${this.health} health.`;
    }

    listSelfEsteem() {
        return `${this.name} has ${this.selfEsteem} self esteem.`
    }
}

class Wolf extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health = 100, healthDamage = 25, esteemDamage = 10);
    }

    help(otherCharacter){
        alert(`Ink helped ${otherCharacter.name}. ${otherCharacter.name} now has ${otherCharacter.health = 100} health.`)
        otherCharacter.health = (otherCharacter.health = 100)
        return (otherCharacter.health);
    }


}

class Sheep extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health = 100, healthDamage = 15, esteemDamage = 0);
    }

    taunt(otherCharacter) {
        return `Hello again, ${otherCharacter.name}. Oh, I see you have a friend. Do you want to meet mine?`
    }

    esteemAttack(otherCharacter){
        alert(`${this.name} verbally attacked ${otherCharacter.name}! ${otherCharacter.name} still has ${otherCharacter.selfEsteem} self esteem.`)
        otherCharacter.selfEsteem = (otherCharacter.selfEsteem - this.esteemDamage);
        return (otherCharacter.selfEsteem);
    }
}

class undeadLamb extends Sheep{
    constructor(name, health, healthDamage) {
        super(name);
        this.health = health;
        this.healthDamage = healthDamage;
    }

    speak(){
        return "Thank you.";
    }
}

const Sugar = new Sheep('Sugar');
const Ink = new Wolf('Ink');
const Ebony = new Wolf('Ebony');
const Apricot = new undeadLamb('Apricot', 50, 10);
const Vanilla = new undeadLamb('Vanilla', 50, 10);
const Winnie = new undeadLamb("Winnie", 50, 10);

let herdArray = [Apricot, Vanilla, Winnie]


//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!!!
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!!
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!! 
//creating a function to show button
function showButton(button, classHidden){
    button.classList.toggle(classHidden);
}

function randomizeCharacter(){
    const randomize = herdArray[Math.floor(Math.random() * herdArray.length)];
    return (randomize.name);
}

function removeFromArray(characterToRemove){
    herdArray = herdArray.filter(characterToRemove);
    return (herdArray);
}

//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!! ^
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!! ^
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!!! ^


console.log(herdArray);

console.log(removeFromArray(Vanilla));

console.log(randomizeCharacter());


//grabbing HTML elements:
const startButt = document.getElementById('startButt');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p07 = document.getElementById('p07');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');
const p101 = document.getElementById('p101');
const p11 = document.getElementById('p11');
const p12 = document.getElementById('p12');
const p13 = document.getElementById('p13');
const p14 = document.getElementById('p14');
const p15 = document.getElementById('p15');
const p16 = document.getElementById('p16');
const p17 = document.getElementById('p17');
const p18 = document.getElementById('p18');
const p19 = document.getElementById('p19');
const p20 = document.getElementById('p20');
const p21 = document.getElementById('p21');
const p22 = document.getElementById('p22');
const p23 = document.getElementById('p23');
const p24 = document.getElementById('p24');
const p25 = document.getElementById('p25');
const p26 = document.getElementById('p26');
const p27 = document.getElementById('p27');
const p28 = document.getElementById('p28');
const p29 = document.getElementById('p29');
const p30 = document.getElementById('p30');
const p31 = document.getElementById('p31');
const p32 = document.getElementById('p32');
const p33 = document.getElementById('p33');
const p34 = document.getElementById('p34');
const p35 = document.getElementById('p35');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');
const next4 = document.getElementById('next4');
const next5 = document.getElementById('next5');

const nothing1 = document.getElementById('nothing1');

const attack1 = document.getElementById('attack1');
const attack2 = document.getElementById('attack2');
const attack3 = document.getElementById('attack3');
const attack4 = document.getElementById('attack4');
const attack5 = document.getElementById('attack5');
const attack6 = document.getElementById('attack6');

const help1 = document.getElementById('help1');
const help2 = document.getElementById('help2');
const help3 = document.getElementById('help3');
const help4 = document.getElementById('help4');


//event listeners:

startButt.addEventListener('click', () => {
    p1.innerHTML = "One day, Ebony and Ink wander upon the pasture that Ink had first encountered Sugar."

    setTimeout(() => {
        p2.innerHTML = "There is a shadow, it is Sugar, and Sugar taunts."
        p3.innerHTML = Sugar.taunt();
    }, 3000);

    setTimeout(() => {
        p4.innerHTML = "Apricot, Vanilla, and Winnie appear behind Sugar."
        showButton(nothing1, 'hidden');
        showButton(attack1, 'hidden');
    }, 6000);
})

//user chooses nothing 1:
nothing1.addEventListener('click', () => {
    p4.innerHTML = "Sugar decides to pull out an old move and attack Ink's esteem."
    p5.innerHTML = Ink.listSelfEsteem();

    setTimeout(() => {
        Sugar.esteemAttack(Ink);
        p6.innerHTML = Ink.listHealth();
    }, 3000);

    setTimeout(() => {
        p7.innerHTML = "It seems as though Ink is much less vulnerable when she has a friend."
        showButton(next1, 'hidden');
    }, 5000);
})

//user chooses attack1
attack1.addEventListener('click', () => {
    p07.innerHTML = "Ink attacks Sugar"
    p8.innerHTML = Sugar.listHealth();

    setTimeout(() => {
        Ink.attack(Sugar);
        p9.innerHTML = Sugar.listHealth();
        showButton(next2, 'hidden');
    }, 3000);
})

next2.addEventListener('click', () => {
    p10.innerHTML = "Herd defends Sugar."
    p101.innerHTML = randomizeCharacter();

    setTimeout(() => {
        showButton(help1, 'hidden');
        showButton(attack2, 'hidden');
    }, 3000);
})

//user chooses help1:
help1.addEventListener('click', () => {
    p11.innerHTML = "Ink decides to be kind."
    p12.innerHTML =     //list the health of the randomized character here

    setTimeout(() => {
        Ink.help()    //list the name of the randomized character here
        p13.innerHTML =  ""   //list the health of the randomized character here
    }, 3000);

    setTimeout(() => {
        p14.innerHTML = "Sheep is fully healed and runs away (happily)"
        removeFromArray();     //remove the name of the randmized character
        showButton(next3, 'hidden');
    }, 6000);
})