import logo from "./logo.svg";
import "./App.css";
import Left from "./components/left";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Right from "./components/right";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=6.9271&lon=79.8612&units=metric&appid=a4db93f301bf11ae2567680102dd31d7"
      )
      .then((response) => {
        console.log("Data", response.data);
        setWeatherInfo(response.data);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div className="App">
      {weatherInfo !== null ? (
        <div className="main-dev">
          <Left weatherInfo={weatherInfo} />
          <Right weatherInfo={weatherInfo} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
