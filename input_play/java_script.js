document.getElementById('btn').onclick = function () {
  // Generate a random number from 1 to 10
  let x = Math.random();
  x = x * 11;
  x = Math.floor(x);

  //  Check if the number put in by user is equal to the random number generated
  if (document.getElementById('answer').value == x) {
    alert(`Correct Guess. I was holding up ${x}`);
  } else {
    alert(`Wrong!!!!  Guess Again. I was holding up ${x} `);
  }
};
