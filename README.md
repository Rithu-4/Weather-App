
# 🌦️ Weather Report Application

A responsive weather web app built using **React** that allows users to search and view real-time weather information for any city.

---

## 🚀 Live Features

* 🔍 Search weather by city name
* 🌡️ Displays temperature, humidity, and weather conditions
* ⚡ Real-time data using Weather API
* 📱 Fully responsive (Mobile, Tablet, Desktop)
* ❌ Error handling for invalid city names

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite / CRA)
* **HTTP Client:** Axios
* **Styling:** CSS / Tailwind CSS
* **API:** OpenWeatherMap

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Navigate to project folder:

```bash
cd weather-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

*(or `npm start` if using Create React App)*

---

## 🔑 API Setup

1. Go to OpenWeatherMap
2. Create a free account and get your API key
3. Replace your API key in the code:

```javascript
const API_KEY = "your_api_key_here";
```

4. Example API URL:

```javascript
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
```

## ⚠️ Error Handling

* Shows message if city is not found
* Handles API request failures gracefully

---

## 📚 What I Learned

* Working with APIs in React
* Using Axios for HTTP requests
* Managing state using useState
* Building responsive UI with Flexbox/Grid
* Handling errors in real-world apps

---

## 🎯 Future Improvements

* Add weather icons 🌤️
* Add loading spinner ⏳
* Show 5-day forecast 📅
* Use geolocation 📍

---

## 🙌 Acknowledgements

* OpenWeatherMap API for weather data

---


---

