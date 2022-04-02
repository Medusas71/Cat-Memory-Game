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

    // https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
    // Generate random number - see Testing.md 
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // Read the card at the current i position
    catNumber = cardArray[i][0];
    catPic = cardArray[i][1];

    // And swap it with the random element.
    cardArray[i][0] = cardArray[j][0];
    cardArray[i][1] = cardArray[j][1];

    cardArray[j][0] = catNumber;
    cardArray[j][1] = catPic;

    // Populate the screen grid with the cat picture
    document.getElementById("cardNum" + i).src = cardArray[i][1];
    console.log(i + " " + cardArray[i][0]);
};

// https://stackoverflow.com/questions/65485778/javascript-how-can-i-create-multiple-flip-cards-that-flip-with-an-onclick
// Code from stack overflow - see Testing.md  

// Flip First Card
// On click, turn over first card
// Replace picture of back of card to the front
// Add an Event Listener

for (let card of document.querySelectorAll(".card")) {
    // Add event listener to each card
    card.addEventListener("click", card.fn = function fn() {
        /* Function to call when a card is clicked on. */
        cardSelected(card);
    }, false);
};

/* Function that is called when a card is clicked.  
It flips the card (toggle) and then checks for a match. */

const cardSelected = function(card) {
    // Flip the card
    card.classList.toggle("flipped");
    console.log("flipped" + card);
    cardFlipped(card);
}

// Keep track of the number of cards flipped
let flippedCounter = 0;
let firstCard, secondCard = null;
let firstCatCardId, secondCatCardId, catCardId = "";
let timerStarted = false;

// This is called when a card is flipped
function cardFlipped(card) {
    console.log("timerStarted = " + timerStarted);
    // Increase the card flipped counter
    flippedCounter++;

    // Get the image (cat pic) for the card that was clicked
    catCardImg = (card.getElementsByClassName("card-front")[0].src).slice();

    // Get the id for the card that has been clicked
    catCardId = (card.getAttribute("id")).slice();

    console.log("image = " + catCardImg);
    console.log("Flipped Counter = " + flippedCounter);
    console.log("id_of_cat_card = " + (card.getAttribute("id")).slice());

    if (flippedCounter === 1) {
        // Remember first card by taking a copy of its id
        firstCatCardId = (card.getAttribute("id")).slice();
        // Don't allow the first card to be clicked again
        card.removeEventListener("click", card.fn, false);
        // If the timer hasn't started yet, start it
        if (timerStarted === false) {
            startTimer();
            timerStarted = true;
        }
    } else if (flippedCounter === 2) {
        secondCatCardId = (card.getAttribute("id")).slice();
        // Remove the event listener so cards can't be re-clicked
        card.removeEventListener('click', card.fn, false);
        if (document.getElementById(firstCatCardId.slice()).getElementsByClassName("card-front")[0].src === document.getElementById(secondCatCardId.slice()).getElementsByClassName("card-front")[0].src) {
            console.log("Cards Match!");
            // Reset counter to restart matching
            flippedCounter = 0;
        } else {
            console.log("Cards Don't Match!");
        }
    } else if (flippedCounter === 3) {
        // Flip the first 2 cards face down
        document.getElementById(firstCatCardId).classList.toggle("flipped");
        document.getElementById(secondCatCardId).classList.toggle("flipped");
        card.removeEventListener("click", card.fn, false);

        console.log("firstCatCardId = " + firstCatCardId + "  secondCatCardId = " + secondCatCardId);

        let firstCardId = firstCatCardId.slice();

        document.getElementById(firstCardId).addEventListener("click", document.getElementById(firstCardId).fn = function fn() {
           cardSelected(document.getElementById(firstCardId));
        }, false);

        let secondCardId = secondCatCardId.slice();
        document.getElementById(secondCardId).addEventListener("click", document.getElementById(secondCardId).fn = function fn() {
            cardSelected(document.getElementById(secondCardId));
        }, false);

        // Remember card just clicked as the first card
        firstCatCardId = card.getAttribute("id");
        flippedCounter = 1;

        // Don't allow the card to be clicked on again
        card.removeEventListener("click", document.getElementById(secondCatCardId.fn, false));
    }
}

//https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
// Upon starting the game, the timer needs to start counting down
// Function for timer
function startTimer() {
    let timeleft = 60;
    let downloadTimer = setInterval(function() {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds";
        }
        timeleft -= 1;
    }, 1000);
    let timer = setTimeout(function() { })
    }

