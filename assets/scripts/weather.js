currentWeatherContainer = document.querySelector(".temp-value");
currentWeatherIconContainer = document.querySelector(".weather-icon");
weatherDescriptionContainer = document.querySelector(".description-title");
weatherDescriptionEmojiContainer = document.querySelector(".description-emoji");
maxTempContainer = document.querySelector(".max-temp-value");
minTempContainer = document.querySelector(".min-temp-value");

const fetchWeather = async () => {
	try {
		// const res = await fetch(
		// 	"https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light"
		// );
		const data = await res.json();
		console.log(data);

		currentWeatherContainer.innerHTML = `${data[0].current
			.toLocaleString("fa-IR")
			.slice(0, 2)}°`;

		currentWeatherIconContainer.innerHTML = `<img src="https://openweathermap.org/img/wn/${data[0].weather.icon}@2x.png"/>`;

		weatherDescriptionContainer.innerHTML = data[0].customDescription.text;

		weatherDescriptionEmojiContainer.innerHTML = data[0].customDescription.emoji;

		maxTempContainer.innerHTML = `${data[0].max
			.toLocaleString("fa-IR")
			.slice(0, 2)}°`;
		minTempContainer.innerHTML = `${data[0].min
			.toLocaleString("fa-IR")
			.slice(0, 2)}°`;
	} catch (error) {
		throw new Error(error);
	}
};
fetchWeather();
