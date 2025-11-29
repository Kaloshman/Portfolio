const username = document.querySelector("#username");
const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const clearBtn = document.querySelector(".clear-btn");
const sendBtn = document.querySelector(".send-btn");
const popup = document.querySelector(".popup");

const showError = (input, msg) => {
	// argument INPUT przechowuje nasze INPUTy
	//argument MSG przechowuje placegolder

	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".error-text");

	formBox.classList.add("error");
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove("error");
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText} musi zawierać ${min} znaków`
		);
	}
};

const checkPass = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, "Hasła nie są takie same");
	}
};

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i;
	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, "E-mail jest niepoprawny");
	}
};

const checkError = () => {
	const AllInputs = document.querySelectorAll(".form-box");
	let errorCount = 0;

	AllInputs.forEach(el => {
		if (el.classList.contains("error")) {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		popup.classList.add("show-popup");
	}
	console.log(errorCount);
};

// argument INPUT z funkcji "checkForm" przechowuje tablicę z naszymi inputami
// argument EL odnosi się do każdej zniennej, która umieściliśmy w tablicy

sendBtn.addEventListener("click", e => {
	e.preventDefault();
	checkForm([username, pass1, pass2, email]);
	checkLength(username, 3);
	checkLength(pass1, 8);
	checkPass(pass1, pass2);
	checkMail(email);
	checkError();
});

clearBtn.addEventListener("click", e => {
	e.preventDefault();

	[username, pass1, pass2, email].forEach(el => {
		el.value = "";
		clearError(el);
	});
});
