import axios from "axios";
import React, { useEffect, useState } from "react";

const Left = ({ weatherInfo }) => {
  const [img, setImg] = useState(null);

  const fetchImage = async () => {
    const res = await fetch(
      `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`
    );
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    if (weatherInfo.weather[0].icon) {
      fetchImage();
    }
  }, []);

  return (
    <div className="column">
      <div>
        {weatherInfo.name}, {weatherInfo.sys.country}
      </div>
      <div>{weatherInfo.dt}</div>
      <div className="row card-responsive">
        <div className="column">
          <img src={img} alt={weatherInfo.weather[0].main || ""} />
        </div>
        <div className="column">
          {weatherInfo.main.temp ? (
            <div className="degree">{weatherInfo.main.temp}&deg;</div>
          ) : null}
          {weatherInfo.weather[0].main ? (
            <div>{weatherInfo.weather[0].main}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Left;
