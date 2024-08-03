const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('search');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weather-info');

searchButton.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        
        const { name, main, weather } = data;
        weatherInfo.innerHTML = `
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${main.temp} °C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Pressure: ${main.pressure} hPa</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
