// Define global variables
let flag = false; // Flag for checking the toggle button state
const apiKey = 'f2e339554c7b35f1118c3b534c55f9d0'; 

// DOM elements
const CheckReverse = document.getElementById("flexSwitchCheckReverse");
const indicate = document.getElementById("switch");
const form = document.getElementById("form-sub");
const cityNameElement = document.getElementById("city-name");
const cityWeatherElement = document.getElementById("city-weather");
const cityTempElement = document.getElementById("city-temp");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-Speed");
const weatherDescriptionElement = document.getElementById("weather-Description");
const imgElement = document.querySelector("img");
const locationInput = document.getElementById("location");

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        performSearch();
    });

    CheckReverse.addEventListener("change", toggleTemperatureUnit);

    // Simulate a button click
    document.getElementById("btn").click();
});

// Function to toggle temperature unit
function toggleTemperatureUnit() {
    flag = CheckReverse.checked;
    if (flag) {
        indicate.innerText = "°F";
    } else {
        indicate.innerText = "°C";
    }
}

// Function to perform weather search
function performSearch() {
    const location = encodeURIComponent(locationInput.value);
    cityNameElement.textContent = "Searching ...";
    cityTempElement.textContent = "";
    imgElement.setAttribute("src", "");
    cityWeatherElement.textContent = "";

    // Fetch location coordinates from OpenStreetMap
    fetchLocationCoordinates(location)
        .then((coordinates) => {
            const { lat, lon } = coordinates;
            return fetchWeatherData(lat, lon);
        })
        .then((weatherData) => {
            formatSearchResults(weatherData);
        })
        .catch((error) => {
            handleSearchError(error);
        });
}

// Function to fetch location coordinates from OpenStreetMap
function fetchLocationCoordinates(location) {
    const osmUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${location}`;
    return fetch(osmUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                return {
                    lat: data[0].lat,
                    lon: data[0].lon,
                };
            } else {
                throw new Error("Location not found");
            }
        });
}

// Function to fetch weather data from OpenWeatherMap
function fetchWeatherData(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    return fetch(weatherUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Weather data not found");
            }
            return response.json();
        });
}

// Function to handle search errors
function handleSearchError(errorMessage) {
    console.error(errorMessage);
    cityNameElement.textContent = `Please try again, ${errorMessage}`;
}

// Function to format and display search results
function formatSearchResults(weatherData) {
    const city_name = `${weatherData.name}, ${weatherData.sys.country}`;
    const city_weather = weatherData.weather[0].main;
    const city_temp_celsius = weatherData.main.temp;
    const imgurl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
    const humidity = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;
    const weatherDescription = weatherData.weather[0].description;

    let city_temp;

    if (flag) {
        city_temp = `${celsiusToFahrenheit(city_temp_celsius)}°F`;
    } else {
        city_temp = `${city_temp_celsius}°C`;
    }

    imgElement.setAttribute("src", imgurl);
    cityNameElement.innerHTML = `Weather in <span>${city_name}</span>`;
    cityWeatherElement.textContent = `Condition: ${city_weather}`;
    cityTempElement.innerHTML = `Temperature: </br> <span>${city_temp}</span>`;
    humidityElement.innerHTML = `Humidity: </br> <span>${humidity}%</span>`;
    windSpeedElement.innerHTML = `Wind speed: </br> <span>${windSpeed}m/s</span>`;
    weatherDescriptionElement.textContent = `Description: ${weatherDescription}`;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
