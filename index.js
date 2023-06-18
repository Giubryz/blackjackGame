let btnFirstCard = document.getElementById("fstCard");
let btnSecondCard = document.getElementById("scnCard");

function cardRandomizer(min = 1, max = 12){
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand*difference);
    rand = rand + min;
    return rand;
}

let firstCard = cardRandomizer();
let secondCard = cardRandomizer();
let sum = firstCard + secondCard;

function hasBlackJack(){
    if (sum <= 20) {
        alert("Do you want to draw a new card?")
    } else if (sum === 21) {
        alert("BlackJack!")
    hasBlackJack = true
    } else {
        alert("You lost")
    }
}

hasBlackJack();

console.log(firstCard, secondCard, sum)