timeContainer = document.querySelector(".time");
persianDateContainer = document.querySelector(".persian-date");
gregorianDateContainer = document.querySelector(".gregorian-date");
islamicDateContainer = document.querySelector(".islamic-date");

const today = new Date();

function setTime() {
	let hours = today.getHours().toLocaleString("fa-IR");
	let minutes = today.getMinutes().toLocaleString("fa-IR", {
		minimumIntegerDigits: 2,
	});

	timeContainer.innerHTML = `${hours}:${minutes}`;
}

function setPersianDate() {
	const options = {
		calendar: "persian",
		month: "long",
		day: "numeric",
	};

	const persianDate = new Intl.DateTimeFormat("fa-IR", options).format(today);

	persianDateContainer.innerHTML = `${persianDate}`;
}

setPersianDate();
setInterval(setPersianDate, 1000);

setTime();
setInterval(setTime, 1000);

const gregorianDate = () => {
	const day = today.getDate().toLocaleString("fa-IR");
	const month = today.toLocaleString("en-US", { month: "short" });
	const year = today.getFullYear().toLocaleString("fa-IR", {
		minimumIntegerDigits: 4,
		useGrouping: false,
	});

	gregorianDateContainer.innerHTML = `${year}/${month}/${day}`;
};

gregorianDate();
setInterval(gregorianDate, 1000);

const islamicDate = () => {
	const day = today.toLocaleString("ar-SA", {
		day: "numeric",
	});
	const month = today.toLocaleString("ar-SA", { month: "short" });
	const year = today
		.toLocaleString("ar-SA", {
			year: "numeric",
			calendar: "islamic-umalqura",
		})
		.slice(0, 4);

	islamicDateContainer.innerHTML = `${year}/${month}/${day}`;
};

islamicDate();
setInterval(islamicDate, 1000);
