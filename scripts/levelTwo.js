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

const helpOne = document.getElementById('helpOne');
const nothingOne = document.getElementById('nothingOne');

const helpTwo = document.getElementById('helpTwo');
const nextFour = document.getElementById('nextFour');
const nextFive = document.getElementById('nextFive');

const helpThree = document.getElementById('helpThree');
const attackOne = document.getElementById('attackOne');

const nextSix = document.getElementById('nextSix');
const nextLevelOne = document.getElementById('nextLevelOne');

const tryAgain = document.getElementById('tryAgain');

const nextSeven = document.getElementById('nextSeven');
const nextLevelTwo = document.getElementById('nextLevelTwo');

const helpSix = document.getElementById('helpSix')

const help01 = document.getElementById('help01');
const help02 = document.getElementById('help02');

const attack01 = document.getElementById('attack01');
const attack02 = document.getElementById('attack02');

const next01 = document.getElementById('next01');
const next02 = document.getElementById('next02');

const nextLevel01 = document.getElementById('nextLevel01');
const nextLevel02 = document.getElementById('nextLevel02');




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

const pA = document.getElementById('pA');
const pB = document.getElementById('pB');
const pC = document.getElementById('pC');
const pD = document.getElementById('pD');
const pE = document.getElementById('pE');
const pF = document.getElementById('pF');
const pG = document.getElementById('pG');
const pH = document.getElementById('pH');
const pI = document.getElementById('pI');
const pJ = document.getElementById('pJ');
const pK = document.getElementById('pK');
const pL = document.getElementById('pL');
const pM = document.getElementById('pM');
const pN = document.getElementById('pN');
const pO = document.getElementById('pO');
const pP = document.getElementById('pP');
const pQ = document.getElementById('pQ');

const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para3 = document.getElementById('para3');
const para4 = document.getElementById('para4');
const para5 = document.getElementById('para5');
const para6 = document.getElementById('para6');

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')
const p5 = document.getElementById('p5')
const p6 = document.getElementById('p6')
const p7 = document.getElementById('p7')
const p8 = document.getElementById('p8')
const p9 = document.getElementById('p9')
const p10 = document.getElementById('p10')
const p11 = document.getElementById('p11')








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
    }, 6000);

    setTimeout(() => {
        showButton01(userInput, 'hidden');
        showButton(nextThree, 'hidden');
    }, 10000);
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
//user selects nothingOne after nextThree
nothingOne.addEventListener('click', () => {
    p1.innerHTML = "Apricot comes a little closer and-"
    p2.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        p3.innerHTML = Ink.listHealth();
        showButton(help01, 'hidden'); //continue this as well :)
        showButton(attack01, 'hidden');
    }, 3000);
})

//user chooses help01 after nothingOne
help01.addEventListener('click', () => {
    p4.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        p5.innerHTML = Apricot.listHealth();
        p6.innerHTML = "Apricot's eyes start to turn a dark shade of red. They almost looks like blood."
        showButton(help02, 'hidden');
        showButton(attack02, 'hidden');
    }, 3000);
})

//attack02 is selected after help01
attack02.addEventListener('click', () => {
    p7.innerHTML = "Ink doesn't like being attacked by what are supposed to be docile animals. So she gives in to her primal instinct."
    p8.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.attack(Apricot);
        p9.innerHTML = Apricot.listHealth();
        showButton(next02, 'hidden');
    }, 3000);
})

next02.addEventListener('click', () => {
    p10.innerHTML = "Ink watches sadly as the lamb slowly dies. As the light in it's eyes is fading, Apricot mutters a single word."

    setTimeout(() => {
        p11.innerHTML = "Sugar.";
    }, 5000);

    setTimeout(() => {
        showButton(nextLevel02, 'hidden');
    }, 8000);
})






//user chooses attack01 after nothingOne
attack01.addEventListener('click', () => {
    p4.innerHTML = "Ink doesn't like being attacked by what are supposed to be docile animals. So she gives in to her primal instinct."
    p5.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.attack(Apricot);
        p6.innerHTML = Apricot.listHealth();
        showButton(next01, 'hidden');
    }, 3000);
})

next01.addEventListener('click', () => {
    p7.innerHTML = "Ink watches sadly as the lamb slowly dies. As the light in it's eyes is fading, Apricot mutters a single word."

    setTimeout(() => {
        p8.innerHTML = "Sugar.";
    }, 5000);

    setTimeout(() => {
        showButton(nextLevel01, 'hidden');
    }, 8000);
})













//user selects help01 after nextThree
helpOne.addEventListener('click', () => {
    pA.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        pB.innerHTML = Apricot.listHealth();
        pC.innerHTML = "Apricot's eyes start to turn a dark shade of red. They almost looks like blood."
        showButton(helpTwo, 'hidden');
    }, 3000);
})

helpTwo.addEventListener('click', () => {
    pD.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        pE.innerHTML = Apricot.listHealth();
        pF.innerHTML = "The lamb starts to shake violently."
    }, 3000);

    setTimeout(() => {
        pG.innerHTML = Ink.listHealth();
    }, 8000);

    setTimeout(() => {
        Apricot.attack(Ink);
        pH.innerHTML = Ink.listHealth();
        pI.innerHTML = "Apricot seems to be a little stronger than Sugar was."
        showButton(nextFour, 'hidden');
    }, 12000);
})

nextFour.addEventListener('click', () => {
    pJ.innerHTML = "Ink, confused and hurt, says, “Why are you attacking me? I am trying to help you.”"
    showButton(nextFive, 'hidden');
})

nextFive.addEventListener('click', () => {
    pK.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        pL.innerHTML = Ink.listHealth();
        showButton(attackOne, 'hidden');
        showButton(helpThree, 'hidden');
    }, 2000);
})

//user selected "help" after nextFive button
helpThree.addEventListener('click', () => {
    pM.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        pN.innerHTML = Apricot.listHealth();
    }, 3000);

    setTimeout(() => {
        pO.innerHTML = "Apricot doesn't look like she wants to attack Ink, but she does so anyway."
    }, 5000);

    setTimeout(() => {
        pP.innerHTML = Ink.listHealth();
        setTimeout(() => {
            Apricot.attack(Ink);
            pQ.innerHTML = Ink.listHealth();
        }, 3000);
    }, 8000);

    setTimeout(() => {
        showButton(helpFour, 'hidden');
        showButton(attackTwo, 'hidden');
    }, 12000);
})

//user selects attackTwo after helpThree (damnnnnn)
attackTwo.addEventListener('click', () => {
    para1.innerHTML = "Ink doesn't like being attacked by what are supposed to be docile animals. So she gives in to her primal instinct."
    para2.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.attack(Apricot);
        para3.innerHTML = Apricot.listHealth();
        showButton(nextSeven, 'hidden');
    }, 3000);
})

nextSeven.addEventListener('click', () => {
    para5.innerHTML = "Ink watches sadly as the lamb slowly dies. As the light in it's eyes is fading, Apricot mutters a single word."

    setTimeout(() => {
        para6.innerHTML = "Sugar.";
    }, 5000);

    setTimeout(() => {
        showButton(nextLevelTwo, 'hidden');
    }, 8000);
})


//user selected helpFour after helpThree
helpFour.addEventListener('click', () => {
    para1.innerHTML = "The only thing Ink wanted was to help."
    para2.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        para3.innerHTML = Ink.listHealth();
    }, 3000);

    setTimeout(() => {
        para4.innerHTML = "But alas, the wolf was too forgiving."
        showButton(tryAgain, 'hidden');
    }, 6000);
})

tryAgain.addEventListener('click', () => {
    window.location.reload();
})

//user selected "attack" after nextFive button
attackOne.addEventListener('click', () => {
    pM.innerHTML = "Ink doesn't like being attacked by what are supposed to be docile animals. So she gives in to her primal instinct."
    pN.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.attack(Apricot);
        pO.innerHTML = Apricot.listHealth();
        showButton(nextSix, 'hidden');
    }, 3000);
})

nextSix.addEventListener('click', () => {
    pP.innerHTML = "Ink watches sadly as the lamb slowly dies. As the light in it's eyes is fading, Apricot mutters a single word."

    setTimeout(() => {
        pQ.innerHTML = "Sugar.";
    }, 5000);

    setTimeout(() => {
        showButton(nextLevelOne, 'hidden');
    }, 8000);
})

