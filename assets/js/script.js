// Array of Cat Cards, each cat will appear twice
// Object destructuring - sourced from the web - see Readme.md credits
const gameLevels = {
    level1: {
        cardArray: [

            ["cat1", "assets/images/cat1.jpg", "A calico cat poking out its tongue, card number 1"],
            ["cat1", "assets/images/cat1.jpg", "A calico cat poking out its tongue, card number 2"],
            ["cat2", "assets/images/cat2.jpg", "A fluffy tabby cat poking out its tongue, card number 1"],
            ["cat2", "assets/images/cat2.jpg", "A fluffy tabby cat poking out its tongue, card number 2"],
            ["cat3", "assets/images/cat3.jpg", "A black and white cat poking out its tongue, card number 1"],
            ["cat3", "assets/images/cat3.jpg", "A black and white cat poking out its tongue, card number 2"],
            ["cat4", "assets/images/cat4.jpg", "A tabby cat wearing small sunglasses, card number 1"],
            ["cat4", "assets/images/cat4.jpg", "A tabby cat wearing small sunglasses, card number 2"],
            ["cat5", "assets/images/cat5.jpg", "A tabby cat wearing large sunglasses, card number 1" ],
            ["cat5", "assets/images/cat5.jpg", "A tabby cat wearing large sunglasses, card number 2"],
            ["cat6", "assets/images/cat6.jpg", "A british shorthair cat wearing sunglasses, card number 1"],
            ["cat6", "assets/images/cat6.jpg", "A british shorthair cat wearing sunglasses, card number 2"]
        ],
        timer: 60,
        winningTitle: "Pawulations"
    },
    level2: {
        cardArray: [
            ["cat1", "assets/images/cat1.jpg", "A calico cat poking out its tongue, card number 1"],
            ["cat1", "assets/images/cat1.jpg", "A calico cat poking out its tongue, card number 2"],
            ["cat2", "assets/images/cat2.jpg", "A fluffy tabby cat poking out its tongue, card number 1"],
            ["cat2", "assets/images/cat2.jpg", "A fluffy tabby cat poking out its tongue, card number 2"],
            ["cat3", "assets/images/cat3.jpg", "A black and white cat poking out its tongue, card number 1"],
            ["cat3", "assets/images/cat3.jpg", "A black and white cat poking out its tongue, card number 2"],
            ["cat4", "assets/images/cat4.jpg", "A tabby cat wearing small sunglasses, card number 1"],
            ["cat4", "assets/images/cat4.jpg", "A tabby cat wearing small sunglasses, card number 2"],
            ["cat5", "assets/images/cat5.jpg", "A tabby cat wearing large sunglasses, card number 1"],
            ["cat5", "assets/images/cat5.jpg", "A tabby cat wearing large sunglasses, card number 2"],
            ["cat6", "assets/images/cat6.jpg", "A british shorthair cat wearing sunglasses, card number 1"],
            ["cat6", "assets/images/cat6.jpg", "A british shorthair cat wearing sunglasses, card number 2"],
            ["cat7", "assets/images/cat7.jpg", "A black and white cat yawning, card number 1"],
            ["cat7", "assets/images/cat7.jpg", "A black and white cat yawning, card number 2"],
            ["cat8", "assets/images/cat8.jpg", "A tabby cat yawning, card number 1"],
            ["cat8", "assets/images/cat8.jpg", "A tabby cat yawning, card number 2"]
        ],
        timer: 90,
        winningTitle: "Pawsome Work"
    }
};

const currentLevel = document.querySelector("main").id;
const {
    cardArray,
    timer,
    winningTitle
} = gameLevels[currentLevel];
const totalCards = cardArray.length;

// Randomize (shuffle) the Cards - sourced from the web - see Readme.md credits
for (let i = cardArray.length - 1; i > -1; --i) {

    // Generate random number
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // Read the card at the current i position
    let catNumber = cardArray[i][0];
    let catPic = cardArray[i][1];

    // And swap it with the random element.
    cardArray[i][0] = cardArray[j][0];
    cardArray[i][1] = cardArray[j][1];

    cardArray[j][0] = catNumber;
    cardArray[j][1] = catPic;

    // Populate the screen grid with the cat picture
    document.getElementById("cardNum" + i).src = cardArray[i][1];
    document.getElementById("cardNum" + i).altText = cardArray[i][2];
}

// Create multiple flip cards that flip with click - Sourced from the web - see Readme.md credits
for (let card of document.querySelectorAll(".card")) {
    // Add event listener to each card
    card.addEventListener("click", card.fn = function fn() {
        // Used when a card is clicked.
        cardSelected(card);
    }, false);
}

// It flips the card (toggle) and then checks for a match.
const cardSelected = function (card) {
    // Flip the card
    card.classList.toggle("flipped");
    cardFlipped(card);
};

// Keep track of the number of cards flipped
let flippedCounter = 0;
let firstCatCardId, secondCatCardId, catCardId = "";
let timerStarted = false;
let moves = 0;

// Keep track of the pairs found
let pairs = 0;

// This is called when a card is flipped
function cardFlipped(card) {
    increaseMoves();
    // Increase the card flipped counter
    flippedCounter++;

    // Get the id for the card that has been clicked
    catCardId = (card.getAttribute("id")).slice();

    if (flippedCounter === 1) {
        // Remember first card by taking a copy of its id
        firstCatCardId = (card.getAttribute("id")).slice(); // Don't allow the first card to be clicked again
        card.removeEventListener("click", card.fn, false);
        // If the timer hasn't started yet, start it
        if (timerStarted === false) {
            startTimer();
            timerStarted = true;
        }
    } else if (flippedCounter === 2) {
        secondCatCardId = (card.getAttribute("id")).slice();

        const firstCatCardElement = document.getElementById(firstCatCardId);
        const firstCatCardFrontElement = firstCatCardElement.getElementsByClassName("card-front")[0];
        const secondCatCardElement = document.getElementById(secondCatCardId);

        const secondCatCardFrontElement = secondCatCardElement.getElementsByClassName("card-front")[0];
        
        // Remove the event listener so cards can't be re-clicked
        // Looks for a matching card
        card.removeEventListener("click", card.fn, false);
        if (firstCatCardFrontElement.src === secondCatCardFrontElement.src) {
            // Reset counter to restart matching
            flippedCounter = 0;
            // Increase pairs
            increasePairs();
        }    
    } else if (flippedCounter === 3) {
        // Flip the first 2 cards face down
        document.getElementById(firstCatCardId).classList.toggle("flipped");
        document.getElementById(secondCatCardId).classList.toggle("flipped");
        card.removeEventListener("click", card.fn, false);

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

        // Don't allow the card to be clicked again
        card.removeEventListener("click", document.getElementById(secondCatCardId.fn, false));
    }
}

let downloadTimer;

// Upon starting the game, the timer needs to start counting down
// Function for timer - Sourced from the web - see Readme.md credits
function startTimer() {
    let timeleft = timer;
    const gameOverText = "Game Over";
    const gameOverMessage = "Time has run out - sorry you lose!";
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            stopTimer();
            endGame(gameOverText, gameOverMessage);
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " sec";
        }
        timeleft -= 1;
    }, 1000);
}

// Once all matches are found the timer needs to stop counting down
// Function to stop timer
function stopTimer() {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
}

// Function to increase pairs once a pair is found
function increasePairs() {
    pairs++;
    document.getElementById("pairs").innerHTML = pairs;
    if (pairs === totalCards / 2) {
        stopTimer();
        const gameOverHeader = winningTitle;
        const gameOverMessage = "You have found all the cards &#128570;";
        endGame(gameOverHeader, gameOverMessage);
    }
}

// Function to increase moves
function increaseMoves() {
    moves++;
    document.getElementById("moves").innerHTML = moves;
}

// Function for End Game
function endGame(title, message) {
    const timeOverModal = document.createElement("div");
    let nextLevelLink = "";
    if (title === "Pawulations") {
        nextLevelLink = '<a class="button" href="level2.html">Next Level</a>';
    }
    timeOverModal.innerHTML = `
        <div class="modal fade" id="timeOverModal" tabindex="-1" role="dialog" aria-labelledby="timeOverModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content modal-color modal-border">
                    <div class="modal-header">
                        <h5 class="modal-title text-align" id="timeOverModalLabel">${title} &#128062;</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            <b>${message}</b>
                        </p>
                    </div>
                    <div class="modal-footer">
                        ${nextLevelLink}
                        <a class="button" href="index.html">Close</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    const mainElement = document.getElementsByTagName("main").item(0);
    mainElement.appendChild(timeOverModal);

    // Launch the modal programmatically - Sourced from the web - see Readme.md credits
    const timeOverModalElement = new bootstrap.Modal(document.getElementById("timeOverModal"), {});    
    timeOverModalElement.show();
}

let restartButton = document.getElementById("restart");

restartButton.addEventListener("click", restartGame);

// Function to restart Game   
function restartGame() {
    window.location.reload();
}