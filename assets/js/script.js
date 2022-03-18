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

// https://stackoverflow.com/questions/56265599/trying-to-compare-classes-of-different-elements
//check for 2 matching squares
function checkIfMatches() {

  let elements = document.getElementsByClassName(".card")
  let first = elements[0].getElementsByTagName('i')[0]
  let second = elements[1].getElementsByTagName('i')[0]
  let matches = first.classList.length === second.classList.length
  first.classList.forEach(entry => matches = matches && second.classList.contains(entry))
  console.log(matches)
  
  // matches ? disable() : unflip();

}

checkIfMatches()

// https://www.w3schools.com/jsref/met_element_removeeventlistener.asp
// Remove Event Listener if cards match

function cardsMatch() {
  firstCard.removeEventListener("click", "flipped");
  secondCard.removeEventListener("click", "flipped");
}

