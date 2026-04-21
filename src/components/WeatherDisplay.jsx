import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Task 7: Obtain an API key from OpenWeatherMap and paste it here
// Replace the old placeholder with your actual key
const API_KEY = "f08990952d8d27ead9002d905c97a828";

  const getWeather = async () => {
    // Task 12: Basic error handling for empty input
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      
      // Task 8 & 10: Dynamic URL using Template Literals and Axios GET request
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`
      );

      // Task 11: Extracting and setting data using useState
      setWeather(res.data);
    } catch (err) {
      // Task 12: Manage cases like invalid city names
      if (err.response?.status === 404) {
        setError("City not found. Please check the spelling.");
      } else {
        setError("API Error. Please check your Key or Connection.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Task 3: Semantic HTML Layout
    <main className="container">
      <header>
        <h1>🌤 Weather App</h1>
      </header>

      {/* Task 4: Textbox and Button for user input */}
      <section className="search-box">
        <input
          type="text"
          placeholder="Enter city (e.g. Chennai)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
        />
        <button onClick={getWeather} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </section>

      {error && <p className="error" role="alert">{error}</p>}

      {/* Task 11: Displaying extracted data */}
      {weather && (
        <article className="weather-card">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
          />
          <div className="weather-info">
            <p className="temp">🌡 {Math.round(weather.main.temp)}°C</p>
            <p className="desc">{weather.weather[0].description}</p>
            <div className="details">
              <p>💨 Wind: {weather.wind.speed} m/s</p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
            </div>
          </div>
        </article>
      )}
    </main>
  );
}

export default Weather;