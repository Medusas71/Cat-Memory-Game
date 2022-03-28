  // Array of Cat Cards
  let cards = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"];

  // Array of Cat Cards, each cat will appear twice
  let cardArray = [
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
  for (let i = cardArray.length - 1; i > -1; --i) {

      // This is the randomise code from the web
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // Read the card at the current i position
      catNumber = cardArray[i][0];
      catPic = cardArray[i][1];
      // And swap it with the random element.
      cardArray[i][0] = cardArray[j][0];
      cardArray[i][1] = cardArray[j][1];

      cardArray[j][0] = catNumber;
      cardArray[j][1] = catPic;

      // End of the randomise code from the web

      // Populate the screen grid with the cat picture
      document.getElementById("cardNum" + i).src = cardArray[i][1];

      console.log(i + " " + cardArray[i][0]);
  };


    // borrowed from https://stackoverflow.com/questions/65485778/javascript-how-can-i-create-multiple-flip-cards-that-flip-with-an-onclick

    // Flip First Card
    // On click, turn over first card
    // Replace picture of back of card to the front
    // Add an Event Listener
    

    let firstCard, secondCard;
   
    for (let firstCard of document.querySelectorAll(".card")) {
        firstCard.addEventListener("click", () => {
            firstCard.classList.toggle("flipped");
            console.log("flipped");
        });
    };

    // https://www.youtube.com/watch?v=ZniVgo8U7ek 
    // function to compare cards

    if (firstCard.dataset.id === secondCard.dataset.id) {
        firstCard.removeEventListener("click", "flipped");
        secondCard.removeEventListener("click", "flipped");
    } else {
        setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
    }, 1500);
}



    // On click of second card
    // A. Turn Over
    // B. Compare with the first card
    // C. If same, keep both cards flipped
    // D. If not, flip cards over to back image

    
    // function compareCards() {
    //     if (cardArray[i][0] === cardArray[i][0]) {
    //         stayFlipped.removeEventListener("click");
    //     } else {
    //         cardArray.classList.toggle("flipped");
    //     };
    // }



