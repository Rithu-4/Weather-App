
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

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

 f710c615afd4b2c9c9a633a3f8c97b5ea45435cb
