
// copied from https://stackoverflow.com/questions/65485778/javascript-how-can-i-create-multiple-flip-cards-that-flip-with-an-onclick
// Flip card
for (const frontOrBack of document.querySelectorAll('.card *')) {
    frontOrBack.addEventListener('click', () => {
      frontOrBack.parentElement.classList.toggle('flipped');
      console.log('flipped');
    });
  }

