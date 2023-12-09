timeContainer = document.querySelector(".time");
persianDateContainer = document.querySelector(".persian-date");

function setTime() {
	let date = new Date();
	let hours = date.getHours().toLocaleString("fa-IR");
	let minutes = date.getMinutes().toLocaleString("fa-IR", {
		minutes: "2-digit",
	});

	timeContainer.innerHTML = `${hours}:${minutes}`;
}

function setPersianDate() {
	const today = new Date();

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

// Test area
