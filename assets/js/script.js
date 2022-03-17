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

// My flip card
  for (let firstCard of document.querySelectorAll(".card")) {  
    firstCard.addEventListener("click", () => {
        firstCard.classList.toggle("flipped");
        console.log("flipped");
      });
}



// function (compareCards) {
//   let matches = firstCard.dataset.id === secondCard.dataset.id;
//   return matches ? matchedCards() : unmatchedCards()
// }

// borrowed from https://stackoverflow.com/questions/51558543/how-to-compare-if-two-cards-has-matched-using-jquery

// compare two class selected
// if ($('.selected').length == 2) {
//   // first and last data is same data value = match
//   if ($('.selected').first().data('card-id') == $('.selected').last().data('card-id')) {
//     alert("Card Match");
//   } else {
//     alert("Card not match");
//   }
// }
