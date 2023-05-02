const inputField = document.querySelector(".field #password");
const inputCField = document.querySelector(".field #cPassword");
const eyeIcon = document.querySelector(".field .i-eye");
const eyeCIcon = document.querySelector(".field .i-ceye");

const number = document.getElementById("number");
const special = document.getElementById("special");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const length = document.getElementById("length");

function checkPassword(data) {
	const Anumber = new RegExp("(?=.*[0-9])");
	const Aspecial = new RegExp("(?=.*[^a-zA-Z0-9])");
	const Auppercase = new RegExp("(?=.*[A-Z])");
	const Alowercase = new RegExp("(?=.*[a-z])");
	const Alength = new RegExp("(?=.{8,})");

	if (Anumber.test(data)) {
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
	}

	if (Aspecial.test(data)) {
		special.classList.add("valid");
	} else {
		special.classList.remove("valid");
	}

	if (Auppercase.test(data)) {
		uppercase.classList.add("valid");
	} else {
		uppercase.classList.remove("valid");
	}

	if (Alowercase.test(data)) {
		lowercase.classList.add("valid");
	} else {
		lowercase.classList.remove("valid");
	}

	if (Alength.test(data)) {
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
	}
}

// const requermentList = document.querySelectorAll(".requermentList li");
// const requerments = [
// 	{ RegExp: /.{8}/, index: 0 },
// 	{ RegExp: /[0-9]/, index: 1 },
// 	{ RegExp: /[A-Z]/, index: 2 },
// 	{ RegExp: /[a-z]/, index: 3 },
// 	{ RegExp: /^[0-9A-Za--z]/, index: 4 },
// ];

eyeIcon.addEventListener("click", () => {
	inputField.type = inputField.type === "password" ? "text" : "password";

	eyeIcon.className = `fa-solid i-eye fa-eye${
		inputField.type === "password" ? " " : "-slash"
	}`;
});

eyeCIcon.addEventListener("click", () => {
	inputCField.type = inputCField.type === "password" ? "text" : "password";

	eyeCIcon.className = `fa-solid i-ceye fa-eye${
		inputCField.type === "password" ? " " : "-slash"
	}`;
});

// inputField.addEventListener("keyup", (e) => {
// 	requerments.forEach((item) => {
// 		const isValid = item.RegExp.test(e.target.value);
// 		const requermentList = requermentList[item.index];

// 		if (isValid) {
// 			requermentList.firstElementChild.className = "fa-regular fa-square";
// 		} else {
// 			requermentList.firstElementChild.className = "fa-solid fa-square-check";
// 		}
// 	});
// });
