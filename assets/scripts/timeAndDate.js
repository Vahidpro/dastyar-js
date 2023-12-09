timeContainer = document.querySelector(".time");

function setTime() {
	let date = new Date();
	let hours = date.getHours().toLocaleString("fa-IR");
	let minutes = date.getMinutes().toLocaleString("fa-IR");

	timeContainer.innerHTML = `${hours}:${minutes}`;
}

setTime();
setInterval(setTime, 1000);
