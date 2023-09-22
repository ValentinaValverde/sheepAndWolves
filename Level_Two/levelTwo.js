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

    physicalAttack(otherCharacter) {
        otherCharacter.health = (otherCharacter.health - this.healthDamage);

        setTimeout(() => {
            alert(`${this.name} physically attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.health} health.`)
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
        return otherCharacter.health + 1
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

    dying(){ //before and after this return statement in the button event, add her health before and after :)
        alert(`${this.name} is dying.`)
        return this.health - 5;
    }

}

// const Sugar = new Sheep('Sugar');
const Ink = new Wolf('Ink');
const Apricot = new undeadLamb('Apricot', 10, 15)









//grabbing buttons:
const meetApricot = document.getElementById('meetApricot');

meetApricot.addEventListener('click', () => {
    Apricot.listInfo();
})


