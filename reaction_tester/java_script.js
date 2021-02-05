let clickedTime, createdTime, reactionTime;

function getRandomColor() {
  let letters = '123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }

  return color;
}

function getRandomShape() {
  let randomNumber = Math.floor(Math.random() * 51);
  let percentage = randomNumber.toString() + '%';

  return percentage;
}
getRandomShape();

function makeBox() {
  //random number between 1 and 5001
  let time = Math.random() * 5001;

  setTimeout(function () {
    let top = Math.random() * 500;
    let left = Math.random() * 600;

    document.getElementById('box').style.top = top + 'px';
    document.getElementById('box').style.left = left + 'px';

    document.getElementById('box').style.display = 'block';
    document.getElementById('box').style.backgroundColor = getRandomColor();
    document.getElementById('box').style.borderRadius = getRandomShape();

    createdTime = Date.now();
  }, time);
}

document.getElementById('box').onclick = function () {
  clickedTime = Date.now();
  this.style.display = 'none';
  reactionTime = (clickedTime - createdTime) / 1000;

  document.getElementById('time').innerHTML = `${reactionTime}s`;
  makeBox();
};

makeBox();
