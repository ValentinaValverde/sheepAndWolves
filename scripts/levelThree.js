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

    befriendFunction(otherCharacter){
        this.health = (this.health *= 2);
        alert(`${this.name} is now friends with ${otherCharacter.name}!`);
        return this.health;
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
        super(name); //undead lamb does slightly more damage... for now
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
const Ebony = new Wolf('Ebony', 0, 100, 50);
const Vanilla = new undeadLamb('Vanilla', 50, 15);
const Winnie = new undeadLamb("Winnie", 50, 15);


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


//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!! ^
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!! ^
//THESE FUNCTIONS ARE SACRED, DO NOT TOUCH!!!! ^

//grabbing HTML elements:

const startButt = document.getElementById('startButt');

//p
const pZero = document.getElementById('pZero');
const pOne = document.getElementById('pOne');
const pTwo = document.getElementById('pTwo');
const pThree = document.getElementById('pThree');
const pFour = document.getElementById('pFour');
const pFive = document.getElementById('pFive');
const pSix = document.getElementById('pSix');
const pSeven = document.getElementById('pSeven');
const pEight = document.getElementById('pEight');
const pNine = document.getElementById('pNine');
const pTen = document.getElementById('pTen');
const pEleven = document.getElementById('pEleven');
const pTwelve = document.getElementById('pTwelve');
const pThirteen = document.getElementById('pThirteen');
const pFourteen = document.getElementById('pFourteen');
const pFifteen = document.getElementById('pFifteen');
const pSixteen = document.getElementById('pSixteen');
const pSeventeen = document.getElementById('pSeventeen');
const pEighteen = document.getElementById('pEighteen');
const pNineteen = document.getElementById('pNineteen');
const pTwenty = document.getElementById('pTwenty');

//line word num
const lineOne = document.getElementById('lineOne');
const lineTwo = document.getElementById('lineTwo');
const lineTwoHalf = document.getElementById('lineTwoHalf');
const lineThree = document.getElementById('lineThree');
const lineFour = document.getElementById('lineFour');
const lineFive = document.getElementById('lineFive');
const lineSix = document.getElementById('lineSix');
const lineSeven = document.getElementById('lineSeven');

//line num
const line0 = document.getElementById('line0')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
const line4 = document.getElementById('line4')
const line5 = document.getElementById('line5')
const line6 = document.getElementById('line6')
const line7 = document.getElementById('line7')
const line8 = document.getElementById('line8')
const line9 = document.getElementById('line9')
const line10 = document.getElementById('line10')
const line11 = document.getElementById('line11')
const line12 = document.getElementById('line12')
const line13 = document.getElementById('line13')

//next
const nextOne = document.getElementById('nextOne');
const nextTwo = document.getElementById('nextTwo');
const nextThree = document.getElementById('nextThree');
const nextFour = document.getElementById('nextFour');
const nextFive = document.getElementById('nextFive');
const nextSix = document.getElementById('nextSix');
const nextSeven = document.getElementById('nextSeven');
const nextEight = document.getElementById('nextEight');

//attack
const attack = document.getElementById('attack');
const attackOne = document.getElementById('attackOne');
const attack1 = document.getElementById('attack1');

//befriend
const befriend = document.getElementById('befriend');

//try again
const tryAgain = document.getElementById('tryAgain');

//approach
const approach = document.getElementById('approach');

//nothing
const nothing = document.getElementById('nothing');

//next level
const nextLevel01 = document.getElementById('nextLevel01');
const nextLevel02 = document.getElementById('nextLevel02');



//adding event listeners: 

startButt.addEventListener('click', () => {
    pOne.innerHTML = "Ink wanders around, wondering why Apricot said Sugar's name."
    
    setTimeout(() => {
        pTwo.innerHTML = "A sudden movement catches her attention."
        showButton(nextOne, 'hidden');
    }, 3000);
})

nextOne.addEventListener('click', () => {
    pThree.innerHTML = "Ink sees another wolf. It is twice the size of Ink, with black fur and gray eyes."
    
    setTimeout(() => {
        showButton(attack, 'hidden');
        showButton(befriend, 'hidden');
    }, 3000);
})

//user chooses attack:
attack.addEventListener('click', () => {
    pFour.innerHTML = "Ink decides to not take chances and attacks Ebony."
    pFive.innerHTML = Ebony.listHealth();

    setTimeout(() => {
        Ink.attack(Ebony);
        pSix.innerHTML = Ebony.listHealth();
        showButton(nextTwo, 'hidden');
    }, 3000);
})

nextTwo.addEventListener('click', () => {
    pSeven.innerHTML = "Ebony doesn't like being attacked, and decides to defend herself."
    pEight.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Ebony.attack(Ink);
        pNine.innerHTML = Ink.listHealth();
    }, 3000);

    setTimeout(() => {
        pTen.innerHTML = "Ebony killed Ink."
        showButton(tryAgain, 'hidden')
    }, 6000);
})

tryAgain.addEventListener('click', () => {
    window.location.reload();
})
//END OF ROUTE attack

//user chooses befriend:
befriend.addEventListener('click', () => {
    pEleven.innerHTML = "Ink approaches Ebony carefully, and they become friends"
    pTwelve.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Ink.befriendFunction(Ebony);
        pThirteen.innerHTML = Ink.listHealth();
    }, 3000);

    setTimeout(() => {
        pFourteen.innerHTML = "It seems as though having a friend is healthy for Ink."
        showButton(nextThree, 'hidden');
    }, 6000);
})

nextThree.addEventListener('click', () => {
    pFifteen.innerHTML = "Ebony and Ink explore the forest together, until one night they are awakened by a strange noise. They get up to investigate."

    setTimeout(() => {
        pSixteen.innerHTML = "Two sheep appear in the shadows."
        showButton(approach, 'hidden');
    }, 3000);
})

approach.addEventListener('click', () => {
    pSeventeen.innerHTML = "As Ink gets closer, she realizes that they look a lot like Apricot did."

    setTimeout(() => {
        pEighteen.innerHTML = "They are connected by a red string wrapped around their necks."
    }, 3000);

    setTimeout(() => {
        pNineteen.innerHTML = "Their eyes are completely black. There is no life in them."
    }, 6000);

    setTimeout(() => {
        pTwenty.innerHTML = "Ebony starts to growl."
        showButton(attackOne, 'hidden');
        showButton(nothing, 'hidden');
    }, 9000);
})

//user chooses attackOne:
attackOne.addEventListener('click', () => {
    lineZero.innerHTML = "Ink decides to attack one of the sheep."
    lineOne.innerHTML = Vanilla.listHealth();

    setTimeout(() => {
        Ink.attack(Vanilla);
        lineTwoHalf.innerHTML = Vanilla.listHealth();
    }, 200);

    setTimeout(() => {
        lineTwo.innerHTML = "Vanilla is dead. Winnie, who is still attached to her, stands unnaturally still."
        showButton(nextFour, 'hidden');
    }, 5000);
})

nextFour.addEventListener('click', () => {
    lineThree.innerHTML = "Ebony decides to attack the other sheep, Winnie."
    lineFour.innerHTML = Winnie.listHealth();

    setTimeout(() => {
        Ebony.attack(Winnie);
        lineFive.innerHTML = Winnie.listHealth();
        showButton(nextFive, 'hidden');
    }, 2000);
})

nextFive.addEventListener('click', () => {
    lineSix.innerHTML = "Ink and Ebony stand over the two fallen sheep and realize something strange."

    setTimeout(() => {
        lineSeven.innerHTML = "The sheep's blood had tasted like sugar."
    }, 3000);

    setTimeout(() => {
        showButton(nextLevel01, 'hidden');
    }, 6000);
})
//END OF ROUTE attackOne ^


//user chooses nothing:
nothing.addEventListener('click', () => {
    line0.innerHTML = "Vanilla,one of the sheep, suddenly attacks Ink."
    line1.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Vanilla.attack(Ink);
        line2.innerHTML = Ink.listHealth();
        showButton(nextSix, 'hidden');
    }, 3000);
})

nextSix.addEventListener('click', () => {
    line3.innerHTML = "Ebony defends Ink and attacks Vanilla."
    line4.innerHTML = Vanilla.listHealth();

    setTimeout(() => {
        Ebony.attack(Vanilla);
        line5.innerHTML = Vanilla.listHealth();
        showButton(nextSeven, 'hidden');
    }, 3000);
})

nextSeven.addEventListener('click', () => {
    line6.innerHTML = "Winnie, the other sheep, takes this as an opportunity to attack Ink."
    line7.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Winnie.attack(Ink);
        line8.innerHTML = Ink.listHealth();
        showButton(attack1, 'hidden');
    }, 3000);
})

attack1.addEventListener('click', () => {
    line9.innerHTML = "Tired of being attacked, Ink finally defends herself."
    line10.innerHTML = Winnie.listHealth();

    setTimeout(() => {
        Ink.attack(Winnie);
        line11.innerHTML = Winnie.listHealth();
        showButton(nextEight, 'hidden');
    }, 3000);
})

nextEight.addEventListener('click', () => {
    line12.innerHTML = "Ink and Ebony stand over the two fallen sheep and realize something strange."

    setTimeout(() => {
        line13.innerHTML = "The sheep's blood had tasted like sugar."
    }, 3000);

    setTimeout(() => {
        showButton(nextLevel02, 'hidden');
    }, 6000);
})