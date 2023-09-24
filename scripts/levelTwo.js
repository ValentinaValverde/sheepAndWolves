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
    para1.innerHTML = "Ink doesn't like being attacked by what are supposed to be docile animals. So she gives in to her primal instinct."
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

    para4.innerHTML = "Ink watches sadly as the lamb slowly dies. As the light in her eyes fades away, Apricot mutters a single word."
    newDiv.append(para4);

    setTimeout(() => {
        para5.innerHTML = "Sugar."
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


//grabbing HTML elements
const meetApricot = document.getElementById('meetApricot');
const startButt = document.getElementById('startButt');

//next
const nextOne = document.getElementById('nextOne');
const nextTwo = document.getElementById('nextTwo');
const nextThree = document.getElementById('nextThree');
const nextFour = document.getElementById('nextFour')

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');

//help
const helpOne = document.getElementById('helpOne');
const helpTwo = document.getElementById('helpTwo');
const helpThree = document.getElementById('helpThree')
const helpFour = document.getElementById('helpFour')

const help1 = document.getElementById('help1');
const help2 = document.getElementById('help2');

//nothing
const nothingOne = document.getElementById('nothingOne');
const nothing1 = document.getElementById('nothing1');
const nothing2 = document.getElementById('nothing2');

//attack
const attackOne = document.getElementById('attackOne')
const attackDivOne = document.getElementById('attackDivOne')
const nextAfterAttackOne = document.getElementById('nextAfterAttackOne')
const afterAttackOne = document.getElementById('afterAttackOne')

const attackTwo = document.getElementById('attackTwo')
const attackDivTwo = document.getElementById('attackDivTwo')
const nextAfterAttackTwo = document.getElementById('nextAfterAttackTwo')
const afterAttackTwo = document.getElementById('afterAttackTwo')

const attack1 = document.getElementById('attack1')
const attackDiv1 = document.getElementById('attackDiv1')
const nextAfterAttack1 = document.getElementById('nextAfterAttack1')
const afterAttack1 = document.getElementById('afterAttack1')

const attack2 = document.getElementById('attack2')
const attackDiv2 = document.getElementById('attackDiv2')
const nextAfterAttack2 = document.getElementById('nextAfterAttack2')
const afterAttack2 = document.getElementById('afterAttack2')

const attack3 = document.getElementById('attack3')
const attackDiv3 = document.getElementById('attackDiv3')
const nextAfterAttack3 = document.getElementById('nextAfterAttack3')
const afterAttack3 = document.getElementById('afterAttack3')

//next level
const nextLevel01 = document.getElementById('nextLevel01');
const nextLevel02 = document.getElementById('nextLevel02');
const nextLevel03 = document.getElementById('nextLevel03');
const nextLevel04 = document.getElementById('nextLevel04');
const nextLevel05 = document.getElementById('nextLevel05');
const nextLevel06 = document.getElementById('nextLevel06');
const nextLevel07 = document.getElementById('nextLevel07');

//speak
const userInput = document.getElementById('userInput');
const userInputTwo = document.getElementById('userInputTwo');
//
const userSpeak = document.getElementById('userSpeak');
const userSpeak2 = document.getElementById('userSpeak2');
const userSpeakTwo = document.getElementById('userSpeakTwo');
//
//the other one of these was just named "next" or something
const speak2 = document.getElementById('speak2');
const speakTwo = document.getElementById('speakTwo');

//try again
const tryAgain = document.getElementById('tryAgain');

//p
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

//line word num
const lineOne = document.getElementById('lineOne');
const lineTwo = document.getElementById('lineTwo');
const lineThree = document.getElementById('lineThree');
const lineFour = document.getElementById('lineFour');
const lineFive = document.getElementById('lineFive');
const lineSix = document.getElementById('lineSix');
const lineSeven = document.getElementById('lineSeven');
const lineEight = document.getElementById('lineEight');
const lineNine = document.getElementById('lineNine');
const lineTen = document.getElementById('lineTen');
const lineEleven = document.getElementById('lineEleven');
const lineElevenHalf = document.getElementById('lineElevenHalf');
const lineTwelve = document.getElementById('lineTwelve');
const lineThirteen = document.getElementById('lineThirteen');
const lineFourteen = document.getElementById('lineFourteen');
const lineFifteen = document.getElementById('lineFifteen');
const lineSixteen = document.getElementById('lineSixteen');
const lineSeventeen = document.getElementById('lineSeventeen');
const lineEighteen = document.getElementById('lineEighteen');
const lineNineteen = document.getElementById('lineNineteen');

//line num
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const line5 = document.getElementById('line5');
const line6 = document.getElementById('line6');
const line7 = document.getElementById('line7');
const line705 = document.getElementById('line705');
const line8 = document.getElementById('line8');
const line9 = document.getElementById('line9');
const line10 = document.getElementById('line10');
const line11 = document.getElementById('line11');
const line12 = document.getElementById('line12');
const line13 = document.getElementById('line13');
const line14 = document.getElementById('line14');
const line15 = document.getElementById('line15');
const line16 = document.getElementById('line16');
const line17 = document.getElementById('line17');
const line18 = document.getElementById('line18');
const line19 = document.getElementById('line19');
const line20 = document.getElementById('line20');
const line21 = document.getElementById('line21');
const line22 = document.getElementById('line22');
const line23 = document.getElementById('line23');
const line24 = document.getElementById('line24');
const line25 = document.getElementById('line25');
const line26 = document.getElementById('line26');


//button events
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

//user chooses helpOne
helpOne.addEventListener('click', () => {
    lineOne.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        lineTwo.innerHTML = Apricot.listHealth();
    }, 3000);

    setTimeout(() => {
        lineThree.innerHTML = "Apricot's eyes start to turn a dark shade of red. They almost look like drops of blood."
        showButton(helpTwo, 'hidden');
    }, 5000);
})

helpTwo.addEventListener('click', () => {
    lineFour.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        lineFive.innerHTML = Apricot.listHealth();
    }, 3000);

    setTimeout(() => {
        lineSix.innerHTML = "The lamb starts to shake violently."
        lineSeven.innerHTML = Ink.listHealth();
    }, 6000);

    setTimeout(() => {
        Apricot.attack(Ink);
        lineEight.innerHTML = Ink.listHealth();
        lineNine.innerHTML = "Apricot seems to be a little stronger than Sugar was."
    }, 8000);

    setTimeout(() => {
        showButton(userInputTwo, 'hidden')
        showButton(speakTwo, 'hidden')
    }, 11000);
})

speakTwo.addEventListener('click', () => {
    userSpeakTwo.innerHTML = `Confused and hurt, Ink says, "${userInputTwo.value}"`
    lineTen.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        lineEleven.innerHTML = Ink.listHealth();
        showButton(helpThree, 'hidden');
        showButton(attackOne, 'hidden');
    }, 3000);
})

//attackOne route:
attackOne.addEventListener('click', () => {
    attackRoute(attackDivOne, nextAfterAttack1);
})

nextAfterAttack1.addEventListener('click', () => {
    afterAttack(afterAttackOne, nextLevel01);
})

//helpThree route:
helpThree.addEventListener('click', () => {
    lineElevenHalf.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        lineTwelve.innerHTML = Apricot.listHealth();
        showButton(nextFour, 'hidden');
    }, 3000);
})

nextFour.addEventListener('click', () => {
    lineThirteen.innerHTML = "Apricot doesn't look like she wants to attack, but she does so anyway."
    lineFourteen.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        lineFifteen.innerHTML = Ink.listHealth();
        showButton(helpFour, 'hidden');
        showButton(attackTwo, 'hidden');
    }, 3000);
})

//attackTwo route:
attackTwo.addEventListener('click', () => {
    attackRoute(attackDivTwo, nextAfterAttackTwo);
})

nextAfterAttackTwo.addEventListener('click', () => {
    afterAttack(afterAttackTwo, nextLevel02);
})

//helpFour route:
helpFour.addEventListener('click', () => {
    lineSixteen.innerHTML = "The only thing Ink wanted to do was help."
    lineSeventeen.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        lineEighteen.innerHTML = Ink.listHealth();
    }, 3000);

    setTimeout(() => {
        lineNineteen.innerHTML = "But alas, the wolf was too forgiving."
        showButton(tryAgain, 'hidden')
    }, 5000);
})

tryAgain.addEventListener('click', () => {
    window.location.reload();
})
//END OF ROUTE helpOne!


//user chooses nothingOne
nothingOne.addEventListener('click', () => {
    line1.innerHTML = "Apricot comes a little closer and-"
    line2.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        line3.innerHTML = Ink.listHealth();
        showButton(help1, 'hidden');
        showButton(attack1, 'hidden');
    }, 3000);   
})

//user chooses attack1:
attack1.addEventListener('click', () => {
    attackRoute(attackDiv1, nextAfterAttack1);
})

nextAfterAttack1.addEventListener('click', () => {
    afterAttack(afterAttack1, nextLevel03);
})

//user chooses help1:
help1.addEventListener('click', () => {
    line4.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        line5.innerHTML = Apricot.listHealth();
        showButton(next1, 'hidden');
    }, 3000);
})

next1.addEventListener('click', () => {
    line6.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Apricot.dying();
        line7.innerHTML = Apricot.listHealth();
    }, 3000);

    setTimeout(() => {
        line705.innerHTML = "Apricot doesn't look like she wants to attack, but she does so anyway."
        line8.innerHTML = Ink.listHealth();
    }, 6000);

    setTimeout(() => {
        Apricot.attack(Ink);
        line9.innerHTML = Ink.listHealth();
        showButton(help2, 'hidden');
        showButton(nothing1, 'hidden');
        showButton(attack2, 'hidden');
    }, 9000);
})

//user chooses attack2:
attack2.addEventListener('click', () => {
    attackRoute(attackDiv2, nextAfterAttack2);
})

nextAfterAttack2.addEventListener('click', () => {
    afterAttack(afterAttack2, nextLevel04);
});

//user chooses nothing1:
nothing1.addEventListener('click', () => {
    line10.innerHTML= "Apricot, trembling and clearly exhausted, attacks Ink for the final time."
    line11.innerHTML = Ink.listHealth();

    setTimeout(() => {
        Apricot.attack(Ink);
        line12.innerHTML = Ink.listHealth();
        showButton(next2, 'hidden');
    }, 3000);
})

next2.addEventListener('click', () => {
    line13.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Apricot.dying();
        line14.innerHTML = Apricot.listHealth();
    }, 3000);

    setTimeout(() => {
        line15.innerHTML = "Ink watches sadly as the lamb slowly dies. As the light in her eyes fades away, Apricot mutters a single word."
    }, 6000);

    setTimeout(() => {
        line16.innerHTML = "Sugar."
    }, 9000);

    setTimeout(() => {
        showButton(nextLevel05, 'hidden');
    }, 11000);
})

//user chooses help2
help2.addEventListener('click', () => {
    line17.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Ink.help(Apricot);
        line18.innerHTML = Apricot.listHealth();
    }, 3000);

    setTimeout(() => {
        line19.innerHTML = "Apricot starts to shake violently."
        line20.innerHTML = Ink.listHealth();
    }, 6000);

    setTimeout(() => {
        Apricot.attack(Ink);
        line21.innerHTML = Ink.listHealth();
        showButton(nothing2, 'hidden');
        showButton(attack3, 'hidden');
    }, 9000);
})

//user chooses attack3:
attack3.addEventListener('click', () => {
    attackRoute(attackDiv3, nextAfterAttack3)
})

nextAfterAttack3.addEventListener('click', () => {
    afterAttack(afterAttack3, nextLevel06);
})

//user chooses nothing2:
nothing2.addEventListener('click', () => {
    line22.innerHTML = "Apricot, trembling and clearly exhausted, collapses on the forest floor."
    line23.innerHTML = Apricot.listHealth();

    setTimeout(() => {
        Apricot.dying();
        line24.innerHTML = Apricot.listHealth();
        showButton(next3, 'hidden');
    }, 5000);
})

next3.addEventListener('click', () => {
    setTimeout(() => {
        line25.innerHTML = "Ink watches sadly as the lamb slowly dies. As the light in her eyes fades away, Apricot mutters a single word."
    }, 6000);

    setTimeout(() => {
        line26.innerHTML = "Sugar."
    }, 9000);

    setTimeout(() => {
        showButton(nextLevel07, 'hidden');
    }, 11000);
})