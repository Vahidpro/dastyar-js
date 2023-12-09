currentWeatherContainer = document.querySelector(".temp-value");
currentWeatherIconContainer = document.querySelector(".weather-icon");

const fetchWeather = async () => {
	const res = await fetch(
		"https://api.dastyar.io/express/weather?lat=35.67194277&lng=51.42434403&lang=fa&theme=light"
	);
	const data = await res.json();
	console.log(data);

	currentWeatherContainer.innerHTML = `${data[0].current
		.toLocaleString("fa-IR")
		.slice(0, 2)}°`;

	currentWeatherIconContainer.innerHTML = `<img src="https://openweathermap.org/img/wn/${data[0].weather.icon}@2x.png"/>`;
};
fetchWeather();
