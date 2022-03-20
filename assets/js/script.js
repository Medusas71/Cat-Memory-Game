$(document).ready(function() {
  // Array of Cat Cards
  let Cards = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"];

  // Array of Cat Cards, each cat will appear twice
  let CardArray = [
      ["cat1", "assets/images/cat1.jpg"],
      ["cat1", "assets/images/cat1.jpg"],
      ["cat2", "assets/images/cat2.jpg"],
      ["cat2", "assets/images/cat2.jpg"],
      ["cat3", "assets/images/cat3.jpg"],
      ["cat3", "assets/images/cat3.jpg"],
      ["cat4", "assets/images/cat4.jpg"],
      ["cat4", "assets/images/cat4.jpg"],
      ["cat5", "assets/images/cat5.jpg"],
      ["cat5", "assets/images/cat5.jpg"],
      ["cat6", "assets/images/cat6.jpg"],
      ["cat6", "assets/images/cat6.jpg"]
  ];

  // Randomize (shuffle) the Cards
  for (let i = CardArray.length - 1; i > -1; --i) {

      // This is the randomise code from the web
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // Read the card at the current i position
      CatNumber = CardArray[i][0];
      CatPic = CardArray[i][1];
      // And swap it with the random element.
      CardArray[i][0] = CardArray[j][0];
      CardArray[i][1] = CardArray[j][1];

      CardArray[j][0] = CatNumber;
      CardArray[j][1] = CatPic;

      // End of the randomise code from the web

      // Populate the screen grid with the cat picture
      document.getElementById("CardNum" + i).src = CardArray[i][1];

      console.log(i + " " + CardArray[i][0]);
  }});

 // borrowed from https://stackoverflow.com/questions/65485778/javascript-how-can-i-create-multiple-flip-cards-that-flip-with-an-onclick

    // Flip Card

    for (let firstCard of document.querySelectorAll(".card")) {
      firstCard.addEventListener("click", () => {
          firstCard.classList.toggle("flipped");
          console.log("flipped");
      });
  };

// On click of second card
// A. Turn Over
// B. Compare with the first card
// C. If same, keep both cards flipped
// D. If not, flip cards over to back image

// RLM Get all the elements that have the class name"card"
const secondCard = document.getElementsByClassName("card");

// RLM Add the addEventListener to each card
NumOfCards = secondCard.length;

for (i = 0; i < NumOfCards; i++) {
    secondCard[i].addEventListener("onclick", flipCard);
}


function flipCard() {
    card.classList.toggle("flipCard");
}

//secondCard(flipCard);

if (secondCard === firstCard) {
    //then stay flipped
} else {
    //flip both cards back over
}

secondCard(stayFlipped);


//https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
// Upon starting the game, the timer needs to start counting down

var timeleft = 90;
var downloadTimer = setInterval(function() {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
    } else {
        document.getElementById("countdown").innerHTML = timeleft + "seconds remaining";
    }
    timeleft -= 1;
}, 1000);