const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const tab = [
	"To pewne.",
	"Zdecydowanie tak.",
	"Bez wątpienia.",
	"Możesz na to liczyć.",
	"Wygląda na to, że tak.",
	"Tak, zdecydowanie.",
	"Bardzo prawdopodobne.",
	"Szanse są dobre.",
	"Wszystko wskazuje na to, że tak.",
	"Tak.",
	"Nie.",
	"To nie wygląda dobrze.",
	"Wątpię.",
	"Nie spodziewaj się tego.",
	"Moje źródła mówią, że nie.",
	"Skoncentruj się i zapytaj ponownie.",
	"Odpowiedz mgliście, spróbuj ponownie.",
	"Nie mogę teraz przewidzieć.",
	"Nie mogę odpowiedzieć teraz.",
	"Zastanów się nad tym i zapytaj jeszcze raz.",
];

const shakeBall = () => {
	ball.classList.add("shake-animation");
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	ball.classList.remove("shake-animation");
	if (input.value !== "" && input.value.slice(-1) === "?") {
		/* lub input.value.endsWith("?")*/
		answerArr();
		error.textContent = "";
	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
		error.textContent = "Twoje pytanie, to nie do końca pytanie. (?)";
		answer.textContent = "";
	} else {
		error.textContent = "żeby uzyskać odpowiedź, musisz najpierw zadać pyanie";
		answer.textContent = "";
	}
};

const answerArr = () => {
	const randomAnswers = Math.floor(Math.random() * tab.length);
	answer.innerHTML = `<span>Odpowiedź:</span> ${tab[randomAnswers]}`;
};

ball.addEventListener("click", shakeBall);
