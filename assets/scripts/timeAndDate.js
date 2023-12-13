const timeContainer = document.querySelector(".time");
const persianDateContainer = document.querySelector(".persian-date");
const gregorianDateContainer = document.querySelector(".gregorian-date");
const islamicDateContainer = document.querySelector(".islamic-date");

function setTime() {
	let today = new Date();
	let hours = today.getHours().toLocaleString("fa-IR");
	let minutes = today.getMinutes().toLocaleString("fa-IR", {
		minimumIntegerDigits: 2,
	});

	console.log(hours, minutes);

	timeContainer.innerHTML = `${hours}:${minutes}`;
}

function setPersianDate() {
	let today = new Date();
	const options = {
		calendar: "persian",
		month: "long",
		day: "numeric",
	};

	const persianDate = new Intl.DateTimeFormat("fa-IR", options).format(today);

	persianDateContainer.innerHTML = `${persianDate}`;
}

setTime();
setInterval(setTime, 1000);

setPersianDate();
// setInterval(setPersianDate, 1000);

const gregorianDate = () => {
	let today = new Date();
	const day = today.getDate().toLocaleString("fa-IR");
	const month = today.toLocaleString("en-US", { month: "short" });
	const year = today.getFullYear().toLocaleString("fa-IR", {
		minimumIntegerDigits: 4,
		useGrouping: false,
	});

	gregorianDateContainer.innerHTML = `${year}/${month}/${day}`;
};

gregorianDate();
// setInterval(gregorianDate, 1000);

const islamicDate = () => {
	let today = new Date();
	const day = today.toLocaleString("ar-SA", {
		day: "numeric",
	});
	const month = today.toLocaleString("ar-SA", { month: "short" });
	const year = today
		.toLocaleString("ar-SA", {
			calendar: "islamic-umalqura",
			year: "numeric",
		})
		.slice(0, 4);

	islamicDateContainer.innerHTML = `${year}/${month}/${day}`;
};

islamicDate();
// setInterval(islamicDate, 1000);
