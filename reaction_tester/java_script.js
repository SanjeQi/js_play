let clickedTime, createdTime, reactionTime;

function makeBox() {
  //random number between 1 and 5001
  let time = Math.random() * 5001;

  setTimeout(function () {
    document.getElementById('box_1').style.display = 'block';
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
