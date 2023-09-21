'use strict'


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
        return characterSection.appendChild(characterInfo);
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


class Wolf extends Character {
    constructor(name, selfEsteem, health, healthDamage, esteemDamage) {
        super(name, selfEsteem, health, healthDamage = 50, esteemDamage = 10);
    }

    announce(otherCharacter) {
        return `"Well hello there, ${otherCharacter.name}," said ${this.name}. "I don't want to eat you. I'm not even hungry. Just lonely."`
    }
}



const Sugar = new Sheep('Sugar');
const Ink = new Wolf('Ink');


//meet Sugar Button:
const meetSugar = document.getElementById('meetSugar');
meetSugar.addEventListener('click', () => {
    Sugar.listInfo();
})

//meet Ink Button:
const meetInk = document.getElementById('meetInk');
meetInk.addEventListener('click', () => {
    Ink.listInfo();
})

//list of Clarifications:

//Wolves:
//health damage is -50 (instant kill)
//esteem damage is -10

//Sheep:
//health damage is -10
//esteem damage is -20