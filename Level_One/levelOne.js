'use strict'

class Character {
    constructor(name, selfEsteem = 50, health = 50, healthDamage, esteemDamage) {
        this.name = name;
        this.selfEsteem = selfEsteem;
        this.health = health;
        this.healthDamage = healthDamage;
        this.esteemDamage = esteemDamage;
    }

    greet() {
        return `Hello User, I am ${this.name}.`
    }

    listInfo() {
        const characterInfo = document.createElement('p');
        characterInfo.innerHTML = `This character's name is ${this.name}. They have ${this.selfEsteem} self esteem and ${this.health} health. They can do ${this.healthDamage} health damage and ${this.esteemDamage} damage to the self esteem. They are pleased to meet you!`
        return characterSection.appendChild(characterInfo);
    }

    //attack types:
    verbalAttack(otherCharacter) {
        otherCharacter.selfEsteem = (otherCharacter.selfEsteem - this.esteemDamage);

        setTimeout(() => {
            alert(`${this.name} verbally attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.selfEsteem} self esteem.`)
            return otherCharacter.selfEsteem;
        }, 3000);

    }

    physicalAttack(otherCharacter) {
        otherCharacter.health = (otherCharacter.health - this.healthDamage);

        setTimeout(() => {
            alert(`${this.name} physically attacked ${otherCharacter.name}! Now ${otherCharacter.name} only has ${otherCharacter.health} health.`)
            return otherCharacter.health;
        }, 3000);
    }

    //listing:
    listSelfEsteem() {
        return `${this.name} has ${this.selfEsteem} self esteem.`
    }

    listHealth() {
        return `${this.name} has ${this.health} health.`;
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

//list of Clarifications:

//Wolves:
//health damage is -50 (instant kill)
//esteem damage is -10

//Sheep:
//health damage is -10
//esteem damage is -20

const Sugar = new Sheep('Sugar');
const Ink = new Wolf('Ink');




//grabbing my button:
const startButt = document.getElementById('startButt');
const nextOne = document.getElementById('nextOne');
const responseButtOne = document.getElementById('responseButtOne');
const nextTwo = document.getElementById('nextTwo');

const verbAttackOne = document.getElementById('verbAttackOne');
const physAttackOne = document.getElementById('physAttackOne');
const nothingOne = document.getElementById('nothingOne');

const nextThree = document.getElementById('nextThree');

const physAttackTwo = document.getElementById('physAttackTwo');
const nothingTwo = document.getElementById('nothingTwo');

const nextFour = document.getElementById('nextFour');
const nextLevel = document.getElementById('nextLevel');

const killSugar = document.getElementById('killSugar');
const nextFive = document.getElementById('nextFive');
const nextLevel02 = document.getElementById('nextLevel02');

const nextSix = document.getElementById('nextSix');
const nextLevel03 = document.getElementById('nextLevel03');

//grabbing HTML elements:
const sheepTaunt = document.getElementById('sheepTaunt');
const wolfAnnounce = document.getElementById('wolfAnnounce');
const sheepResponse = document.getElementById('sheepResponse');
const inkEsteemBefore = document.getElementById('inkEsteemBefore');
const inkEsteemAfter = document.getElementById('inkEsteemAfter');

const pOne = document.getElementById('pOne');
const pTwo = document.getElementById('pTwo');
const pThree = document.getElementById('pThree');
const pFour = document.getElementById('pFour');

const pFourHalf = document.getElementById('pFourHalf');
const pFive = document.getElementById('pFive');
const pSix = document.getElementById('pSix');

const pSixHalf = document.querySelector('#pSixHalf');
const pSeven = document.getElementById('pSeven');
const pEight = document.getElementById('pEight');

const pNine = document.getElementById('pNine');
const pTen = document.getElementById('pTen');

const pElevenHalf = document.getElementById('pElevenHalf');
const pEleven = document.getElementById('pEleven');
const pTwelve = document.getElementById('pTwelve');

const pThirteen = document.getElementById('pThirteen');
const pFourteen = document.getElementById('pFourteen');

const fallenFoe = document.getElementById('fallenFoe');
const wantedFriend = document.getElementById('wantedFriend');




//creating a function to show button
function showButton(button, classHidden){
    button.classList.toggle(classHidden);
}
//had to create another bc it errored out on line 176 (cannot read classList). I guess I used it too many times?
function showButton01(button, classHidden){
    button.classList.toggle(classHidden);
}


//button events:
startButt.addEventListener('click', ()=>{
    startingDialogue.innerHTML = "Once upon a time, there was a beautiful sheep named Sugar, and a grotesque wolf named Ink."
    nextDialogue.innerHTML = "One day, the wolf was lonely, so she went to visit the sheep. But when she got to their pasture, Sugar was the only one there."
    showButton(nextOne, 'hidden');
});

nextOne.addEventListener('click', () => {
    sheepTaunt.innerHTML = Sugar.taunt(Ink);
    showButton(responseButtOne, 'hidden');
})

responseButtOne.addEventListener('click', () => {
    wolfAnnounce.innerHTML = Ink.announce(Sugar);
    showButton(nextTwo, 'hidden');
})

nextTwo.addEventListener('click', () => {
    sheepResponse.innerHTML = "Sugar, seeing that the Wolf was sad, started to verablly attack her."
    
    //Self Esteem Before
    inkEsteemBefore.innerHTML = Ink.listSelfEsteem();

    //Sugar attacks self esteem
    Sugar.verbalAttack(Ink);

    //Self Esteem After (and show options)
    setTimeout(() => {
        inkEsteemAfter.innerHTML = Ink.listSelfEsteem();
        showButton(verbAttackOne, 'hidden');
        showButton(physAttackOne, 'hidden');
        // showButton(nothingOne, 'hidden'); //I'm tired, might work on later
    }, 5000);
})

// nothingOne.addEventListener('click', () => {
//     pOne.innerHTML = "Ink, just wanting a friend, says nothing. Sugar takes this as an opportunity to attack Ink again."
//     pTwo.innerHTML = Ink.listSelfEsteem();

//     Sugar.verbalAttack(Ink);

//     setTimeout(() => {
//         pEight.innerHTML = Ink.listSelfEsteem();
//         showButton(killSugar, 'hidden01'); 
//     }, 5000);
// })






//physical attack route:
physAttackOne.addEventListener('click', () => {
    pOne.innerHTML = "Ink decides that she doesn't want to listen to Sugar say mean things anymore, and decides to physically attack him."
    pTwo.innerHTML = Sugar.listHealth();

    Ink.physicalAttack(Sugar);

    setTimeout(() => {
        pThree.innerHTML = Sugar.listHealth();
        showButton(nextSix, 'hidden01'); //next
    }, 5000);
})

nextSix.addEventListener('click', () => {
    fallenFoe.innerHTML = "Ink stood over her fallen foe, both sad and upset and still lonely, and said.."
    setTimeout(() => {
        wantedFriend.innerHTML = "All I wanted was a friend."
    }, 3000);

    setTimeout(() => {
        showButton(nextLevel03, 'hidden01');
    }, 6000);
})
//end physical attack route:



//verbal attack route:
verbAttackOne.addEventListener('click', () => {
    //appear at same time:
    pOne.innerHTML = "Ink, who was slightly upset, tried to defend herself."
    pTwo.innerHTML = Sugar.listSelfEsteem();

    //attack happens:
    Ink.verbalAttack(Sugar);

    setTimeout(() => {
        pThree.innerHTML = Sugar.listSelfEsteem();
        pFour.innerHTML = "But alas, it didn't seem to be as effective on Sugar."
        showButton01(nextThree, 'hidden01');
    }, 4000);
})

nextThree.addEventListener('click', () => {
        //Self Esteem Before
        pFourHalf.innerHTML = "So Sugar decided to attack again, saying mean, nasty things to ward off the sad wolf."
        pFive.innerHTML = Ink.listSelfEsteem();

        //Sugar attacks self esteem
        Sugar.verbalAttack(Ink);
    
        //Self Esteem After (and show options)
        setTimeout(() => {
            pSix.innerHTML = Ink.listSelfEsteem();
            showButton(physAttackTwo, 'hidden'); //physical attack
            showButton(nothingTwo, 'hidden'); //nothing
        }, 5000);
})

//physical attack under verbal attack (stems from nextThree):
physAttackTwo.addEventListener('click', () => {
    pSixHalf.innerHTML = "Sugar was being cruel, and all Ink had wanted was some company. So she did what any other wolf would so, and-"
    pSeven.innerHTML = Sugar.listHealth();

    Ink.physicalAttack(Sugar);

    setTimeout(() => {
        pEight.innerHTML = Sugar.listHealth();
        showButton(nextFour, 'hidden01'); 
    }, 5000);
})

nextFour.addEventListener('click', () => {
    pNine.innerHTML = "Ink stood over her fallen foe, both sad and upset and still lonely, and said.."
    setTimeout(() => {
        pTen.innerHTML = "I became exactly what you wanted me to be."
    }, 3000);

    setTimeout(() => {
        showButton(nextLevel, 'hidden01');
    }, 6000);
})

//nothing under verbal attack (stems from nextThree):
nothingTwo.addEventListener('click', () => {
    pSixHalf.innerHTML = "Ink, just wanting a friend, says nothing. Sugar takes this as an opportunity to attack Ink again."
    pSeven.innerHTML = Ink.listHealth();

    Sugar.physicalAttack(Ink);

    setTimeout(() => {
        pEight.innerHTML = Ink.listHealth();
        showButton(killSugar, 'hidden01'); 
    }, 5000);
})

killSugar.addEventListener('click', () => {
    pElevenHalf.innerHTML = "Ink almost laughs because this is ridiculous. She was lonely and she had come for a friend, and all Sugar had done was insult her and now bite her. So Ink did what any other wolf would have done and-"
    pEleven.innerHTML = Sugar.listHealth();

    Ink.physicalAttack(Sugar);

    setTimeout(() => {
        pTwelve.innerHTML = Sugar.listHealth();
        showButton(nextFive, 'hidden01'); //next button
    }, 5000);
})

nextFive.addEventListener('click', () => {
    pThirteen.innerHTML = "Ink stood over her fallen foe, both sad and upset and still lonely, and said.."
    setTimeout(() => {
        pFourteen.innerHTML = "I became exactly what you wanted me to be."
    }, 3000);

    setTimeout(() => {
        showButton(nextLevel02, 'hidden01');
    }, 6000);
})
//end entire verbal attack route





//generic event listener:
// button.addEventListener('click', () => {

// })


// generic timeout:
// setTimeout(() => {
    
// }, timeout);


