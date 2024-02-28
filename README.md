## Weather App

The Weather App is a web application that provides users with up-to-date weather information for a specified location. It leverages the OpenWeatherMap API and the OpenStreetMap Nominatim API to retrieve current weather data and location coordinates using AJAX for asynchronous data fetching.

## Preview
#### With °F
![image](https://github.com/subhadip-kundu/Weather-application-using-api-and-ajax/assets/124190254/e7dd989a-4382-4ff3-834e-b6fa91c20c8b)
#### With °C
![image](https://github.com/subhadip-kundu/Weather-application-using-api-and-ajax/assets/124190254/0134e3b6-8099-4561-b02a-f0268da4a499)


### How It Works

1. **Search for Weather Information**: Users can input the name of a location they are interested in (e.g., a city or town) into the search input field provided on the app's interface.

2. **Retrieve Location Coordinates (OpenStreetMap Nominatim API with AJAX)**: When the user initiates a search, the app sends an AJAX request to the [OpenStreetMap Nominatim API](https://nominatim.openstreetmap.org) to obtain location coordinates (latitude and longitude) for the specified location. This asynchronous request allows the app to fetch location data without reloading the page.

3. **Fetch Weather Data (OpenWeatherMap API with AJAX)**: After obtaining the coordinates, the app sends another AJAX request, this time to the [OpenWeatherMap API](https://openweathermap.org/api), providing the latitude, longitude, and an API key. This asynchronous request retrieves weather data without interrupting the user's interaction with the app.

4. **Display Weather Information**: Once the weather data is successfully retrieved from the OpenWeatherMap API, the app formats and displays it to the user.

   - **City Name**: The name of the location, including the country (e.g., "Paris, France").
   - **Weather Condition**: A brief description of the current weather condition (e.g., "Clear," "Rain," "Clouds").
   - **Temperature**: The current temperature, which can be displayed in either Celsius (°C) or Fahrenheit (°F) based on the user's preference.
   - **Humidity**: The percentage of humidity in the air.
   - **Wind Speed**: The speed of the wind in meters per second (m/s).
   - **Weather Description**: A more detailed description of the weather conditions (e.g., "Partly cloudy skies").

5. **Temperature Unit Toggle**: Users have the option to toggle between Celsius and Fahrenheit temperature units. This feature is implemented using JavaScript and HTML.

6. **Error Handling**: The app is designed to handle errors gracefully. If a location cannot be found or weather data retrieval encounters an issue, an error message is displayed to the user.

### Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **AJAX Library**: AJAX for asynchronous data fetching
- **APIs**:
   - [OpenWeatherMap API](https://openweathermap.org/api) for weather data.
   - [OpenStreetMap Nominatim API](https://nominatim.openstreetmap.org) for location coordinates.
- **Version Control**: Git and GitHub

The Weather App provides a straightforward and user-friendly way for individuals to access weather information quickly and efficiently for any location of their choice. Whether planning a trip or just curious about the current weather, users can rely on this app to get the latest weather updates with seamless, asynchronous data fetching using AJAX.
