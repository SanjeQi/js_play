makeBox = function () {
  const randomTimer = function () {
    //random number between 1 and 5001
    let random = Math.floor(Math.random() * 5001);
    console.log(random);
    return random;
  };

  setTimeout(function () {
    document.getElementById('box_1').style.display = 'block';
  }, randomTimer());
};

document.getElementById('box_1').onclick = function () {
  this.style.display = 'none';
  makeBox();
};

makeBox();
