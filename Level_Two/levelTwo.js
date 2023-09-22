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

    listInfo() {
        const characterInfo = document.createElement('p');
        characterInfo.innerHTML = `This character's name is ${this.name}. They have ${this.selfEsteem} self esteem and ${this.health} health. They can do ${this.healthDamage} health damage and ${this.esteemDamage} damage to the self esteem. They are pleased to meet you!`
        return newCharacter.appendChild(characterInfo);
    }

    attack(otherCharacter) {
        otherCharacter.health = (otherCharacter.health - this.healthDamage);

        setTimeout(() => {
            alert(`${this.name} attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.health} health.`)
            return otherCharacter.health;
        }, 3000);
    }

    listHealth() {
        return `${this.name} has ${this.health} health.`;
    }
}


class Wolf extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health, healthDamage = 50, esteemDamage = 10);
    }

    announce(otherCharacter) {
        return `Hi there, are you okay?`
    }

    help(otherCharacter){ //edit this hehehe
        return (otherCharacter.health + 1);
    }

    healthRestored(){
        alert (`${this.name}'s health has been restored. She now has ${this.health} health.`)
    }
}


class Sheep extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health, healthDamage = 10, esteemDamage = 20);
    }

    taunt(otherCharacter) {
        return `"Look who it is!" said ${this.name}. "It's ${otherCharacter.name}! Oh boy, I'm so scared right now, are you going to eat me? HAHAHA!! I'd like to see you try."`
    }
}


class undeadLamb extends Sheep{
    constructor(name, health, healthDamage) {
        super(name); //undead lamb does slightly more damage.
        this.health = health;
        this.healthDamage = healthDamage;
    }

    listInfo() {
        const characterInfo = document.createElement('p');
        characterInfo.innerHTML = `This character's name is ${this.name}. They have ${this.health} health and can do ${this.healthDamage} health damage. They are pleased to meet you!`
        return newCharacter.appendChild(characterInfo);
    }

    speak(){
        return "Sugar";
    }

    dying(){
        alert(`${this.name} is dying.`)
        this.health = (this.health -5);
        return this.health;
    }
}

// const Sugar = new Sheep('Sugar');
const Ink = new Wolf('Ink');
const Apricot = new undeadLamb('Apricot', 10, 15)

//creating a function to show button
function showButton(button, classHidden){
    button.classList.toggle(classHidden);
}

//had to create another bc it errored out (cannot read classList???)
function showButton01(button, classHidden){
    button.classList.toggle(classHidden);
}











//grabbing buttons:
const meetApricot = document.getElementById('meetApricot');
const startButt = document.getElementById('startButt');
const nextOne = document.getElementById('nextOne');
const nextTwo = document.getElementById('nextTwo');
const nextThree = document.getElementById('nextThree');
const nextFour = document.getElementById('nextFour');

const helpOne = document.getElementById('helpOne');
const nothingOne = document.getElementById('nothingOne');




//grabbing HTML elements
const pOne = document.getElementById('pOne');
const pTwo = document.getElementById('pTwo');
const pThree = document.getElementById('pThree');
const pFour = document.getElementById('pFour');
const pFive = document.getElementById('pFive');
const pSix = document.getElementById('pSix');
const pSeven = document.getElementById('pSeven');

const userInput = document.getElementById('userInput');
const userSpeak = document.getElementById('userSpeak');

const pEight = document.getElementById('pEight');
const pNine = document.getElementById('pNine');
const pTen = document.getElementById('pTen');




meetApricot.addEventListener('click', () => {
    Apricot.listInfo();
})

startButt.addEventListener('click', () => {
    pOne.innerHTML = "Ink wanders into the woods, blood matted on her coat, and rests under a tree."
    setTimeout(() => {
        Ink.healthRestored();
        pTwo.innerHTML = Ink.listHealth();
        showButton(nextOne, 'hidden');
    }, 3000);
})

nextOne.addEventListener('click', () => {
    pThree.innerHTML = "A strange noise wakes her up at midnight. Curious, she gets up to look for the source."
    setTimeout(() => {
        pFour.innerHTML = "She finds a clearing and sees a small figure standing at the center."
        showButton(nextTwo, 'hidden');
    }, 3000);
})

nextTwo.addEventListener('click', () => {
    pFive.innerHTML = "Ink approaches and finds that it is a small, frail lamb."
    
    setTimeout(() => {
        pSix.innerHTML = "There is blood on its coat, and it's shivering. Large chunks of wool are absent from its body."
    }, 3000);

    setTimeout(() => {
        pSeven.innerHTML = "Its eyes are completely black. There's something unnatural about it."
        showButton01(userInput, 'hidden');
        showButton(nextThree, 'hidden');
    }, 6000);
})


nextThree.addEventListener('click', () => {
    userSpeak.innerHTML = `Ink says, "${userInput.value}"`;

    setTimeout(() => {
        pEight.innerHTML = "Apricot says nothing but gets a little closer."
        pNine.innerHTML = Apricot.listHealth();
    }, 3000);

    setTimeout(() => {
        Apricot.dying();
        pTen.innerHTML = Apricot.listHealth(); 
        showButton01(helpOne, 'hidden');
        showButton01(nothingOne, 'hidden');
    }, 5000);

})

//After this, we start branching into different options and pathways. Mess starts here.


