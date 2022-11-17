const btn = document.getElementById("rand-btn");
const tdText = document.getElementById("tod-text");
const text = document.getElementById("text-display");
const randomToD = new FileReader();

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

btn.addEventListener("click", () => {
	loadJSON("random.json", (data) => {
		const TOD = randomNumberGenerator(2) === 1 ? "Dare" : "Truth";
		const truthOrDareArray = data[TOD];
		tdText.textContent = TOD;
		text.textContent = truthOrDareArray[randomNumberGenerator(truthOrDareArray.length)];
	});
});
