document.getElementById('guess').onclick = function () {
  let gotit = false;
  let guesses = 0;
  let randomNumber;

  while (gotit == false) {
    randomNumber = Math.floor(Math.random() * 11);

    if (document.getElementById('myNumber').value == randomNumber) {
      gotit = true;
    } else {
      guesses++;
    }
  }
  document.getElementById(
    'answer'
  ).innerHTML = `Cool!! I got it! It was  number ${randomNumber}.  It took me ${guesses} tries to guess your number. Not bad ha!?`;
};
