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
  console.log(percentage);
  return percentage;
}
getRandomShape();

function makeBox() {
  //random number between 1 and 5001
  let time = Math.random() * 5001;

  setTimeout(function () {
    let top = Math.random() * 300;
    let left = Math.random() * 600;
    console.log(top, left);
    document.getElementById('box_1').style.top = top + 'px';
    document.getElementById('box_1').style.left = left + 'px';

    document.getElementById('box_1').style.display = 'block';
    document.getElementById('box_1').style.backgroundColor = getRandomColor();
    document.getElementById('box_1').style.borderRadius = getRandomShape();

    createdTime = Date.now();
    console.log('createdTime', createdTime);
  }, time);
}

document.getElementById('box_1').onclick = function () {
  clickedTime = Date.now();
  this.style.display = 'none';
  reactionTime = (clickedTime - createdTime) / 1000;
  console.log(reactionTime);
  document.getElementById('time').innerHTML = `${reactionTime}s`;
  makeBox();
};

makeBox();
