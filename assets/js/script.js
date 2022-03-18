let array = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"];

// Randomize array in-place using Durstenfeld shuffle algorithm - see README.md https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
// shuffle the cards
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {

      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];

      array[j] = temp;
  }
return array;
console.log(shuffleArray);
}

// borrowed from https://stackoverflow.com/questions/65485778/javascript-how-can-i-create-multiple-flip-cards-that-flip-with-an-onclick

// Flip Card

for (let firstCard of document.querySelectorAll(".card")) {  
  firstCard.addEventListener("click", () => {
      firstCard.classList.toggle("flipped");
      console.log("flipped");
    });
}

// for (let secondCard of document.querySelectorAll(".card")) {
//     secondCard.addEventListener("click", () => {
//       secondCard.classList.toggle("flipped");
//       if (firstCard === secondCard) {disable === "click";
//       } else {firstCard != secondCard.classList.toggle("flipped");
//       }};
// }

// On click of second card
// A. Turn Over
// B. Compare with the first card
// C. If same, keep both cards flipped
// D. If not, flip cards over to back image

const secondCard = document.getElementsByClassName("card");

card.addEventListener("onclick", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}

secondCard(flipCard);

if (secondCard === firstCard) {
    //then stay flipped
} else {
    //flip both cards back over
} 

secondCard(stayFlipped);


// Need to be able to stop the user from clicking more than 2 cards in each go and click each card



// https://www.w3schools.com/jsref/met_element_removeeventlistener.asp
// Remove Event Listener if cards match

function cardsMatch() {
  firstCard.removeEventListener("click", "flipped");
  secondCard.removeEventListener("click", "flipped");
}

//https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
// Upon starting the game, the timer needs to start counting down

var timeleft = 90;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

//Upon each click, the moves need to increase



//once a pair is found, the pairs need to increase

// once all pairs are found need a modal to say pawulations (insert paw)

// if 2 cards are different then flip both cards back over