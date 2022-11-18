const randBtn = document.getElementById("rand-btn");
const dareBtn = document.getElementById("dare-btn");
const truthBtn = document.getElementById("truth-btn");
const tdText = document.getElementById("tod-text");
const text = document.getElementById("text-display");
const randomToD = new FileReader();
let truthOrDareArray, truthOrDareData;

function randomNumberGenerator(number) {
  return Math.floor(Math.random() * number);
}

function loadJSON(path, success, error) {
  const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
			} else {
        if (error) error(xhr);
			}
		}
	};
	xhr.open("GET", path, true);
	xhr.send();
}

loadJSON("random.json", (data) => {
  truthOrDareData = data;
});  

truthBtn.onclick = () => (truthOrDare("Truth"));
dareBtn.onclick = () => (truthOrDare("Dare"));
randBtn.onclick = () => (truthOrDare(randomNumberGenerator(2) === 1 ? "Dare" : "Truth"));

function truthOrDare(TOD) {
  truthOrDareArray = truthOrDareData[TOD];
  tdText.textContent = TOD;
  text.textContent = truthOrDareArray[randomNumberGenerator(truthOrDareArray.length)];
}

