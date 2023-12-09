timeContainer = document.querySelector(".time");
persianDateContainer = document.querySelector(".persian-date");
gregorianDateContainer = document.querySelector(".gregorian-date");

const today = new Date();

function setTime() {
	let hours = today.getHours().toLocaleString("fa-IR");
	let minutes = today.getMinutes().toLocaleString("fa-IR", {
		minutes: "2-digit",
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

	console.log(year);

	gregorianDateContainer.innerHTML = `${year}/${month}/${day}`;
};

gregorianDate();
setInterval(gregorianDate, 1000);
// Test area
