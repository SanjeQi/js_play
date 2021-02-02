let newText = document.getElementById('myInput').value;

document.getElementById('styleChanger').onclick = function () {
  newText = document.getElementById('myInput').value;
  document.getElementById('firstDiv').innerHTML = newText;
};
