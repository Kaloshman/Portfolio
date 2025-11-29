// const search = document.querySelector(".search");
// const li = document.querySelectorAll("li");
// const fun1 = e => {
// 	const text = e.target.value.toLowerCase();

// 	li.forEach(el => {
// 		const task = el.textContent;
// 		if (task.toLowerCase().indexOf(text) !== -1) {
// 			el.style.display = "block";
// 		} else {
// 			el.style.display = "none";
// 		}
// 	});
// };
// search.addEventListener("keyup", fun1);

const input = document.querySelector(".search");
const li = document.querySelectorAll("li");

const showText = e => {
	const text = e.target.value.toLowerCase();

	li.forEach(el => {
		const task = el.textContent;
		if (task.toLowerCase().indexOf(text)) {
			el.style.display = "none";
		} else {
			el.style.display = "block";
		}
	});
};
input.addEventListener("keyup", showText);
