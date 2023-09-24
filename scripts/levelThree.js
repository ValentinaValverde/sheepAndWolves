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

        alert(`${this.name} attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.health} health.`)
        return otherCharacter.health;
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

    help(otherCharacter){
        alert(`Ink helped ${otherCharacter.name}. ${otherCharacter.name} now has ${otherCharacter.health + 1} health.`)
        otherCharacter.health = (otherCharacter.health + 1)
        return (otherCharacter.health);
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


//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!!!
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!!
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!! 
//creating a function to show button
function showButton(button, classHidden){
    button.classList.toggle(classHidden);
}

//had to create another bc it errored out (cannot read classList???)
function showButton01(button, classHidden){
    button.classList.toggle(classHidden);
}

//instruction for use:
//create a new div in html
//grab it in js
//pass it in as an argument
//same goes for the next button.

function attackRoute(newDiv, nextButton){
    //creating new elements to put in the DOM
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');

    //putting something in the new elements:
    para1.innerHTML = "..."
    para2.innerHTML = Apricot.listHealth();

    //appending the elements to a div so it shows up on the page
    newDiv.append(para1);
    newDiv.append(para2);

    setTimeout(() => {
        Ink.attack(Apricot); //shows alert
        para3.innerHTML = Apricot.listHealth();
        newDiv.append(para3); 
        showButton(nextButton, 'hidden')
        newDiv.append(nextButton);
    }, 3000);
}

//this function is used after the nextButton (from attackRoute function) is clicked.
function afterAttack (newDiv, nextLevel) {
    const para4 = document.createElement('p');
    const para5 = document.createElement('p');

    para4.innerHTML = "..."
    newDiv.append(para4);

    setTimeout(() => {
        para5.innerHTML = "..."
        para5.style.color = '#c44900';
        newDiv.append(para5);
    }, 4000);

    setTimeout(() => {
        showButton(nextLevel, 'hidden')
        newDiv.append(nextLevel);
    }, 6000);
}
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!! ^
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!! ^
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!!! ^