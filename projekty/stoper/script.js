const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

const infoBtn = document.querySelector(".info");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;

let historyList = [];

const handleStart = () => {
	clearInterval(countTime);
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			seconds = 0;
			minutes++;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 100);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;
	if (stopwatch.textContent !== "0:00") {
		time.style.visibility = "visible";

		historyList.push(stopwatch.textContent);

		clearStuff();
	}
};

const handleReset = () => {
	historyList = [];
	clearStuff();
	time.style.visibility = "hidden";
};

const handleHistory = () => {
	let i = 1;
	historyList.forEach(time => {
		const x = i++;
		const newTime = document.createElement("li");
		newTime.innerHTML = `Pomiar nr ${x} <span>${time}</span>`;
		timeList.appendChild(newTime);
	});
};

const clearStuff = () => {
	clearInterval(countTime);
	timeList.textContent = "";
	minutes = 0;
	seconds = 0;
	stopwatch.textContent = "0:00";
};

const handleModal = () => {
	modalShadow.style.display = "block";
	modalShadow.classList.toggle("modal-animation");
};
const handleModalClose = () => {
	modalShadow.style.display = "none";
	modalShadow.classList.toggle("modal-animation");
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", handleHistory);
infoBtn.addEventListener("click", handleModal);
closeModalBtn.addEventListener("click", handleModalClose);
