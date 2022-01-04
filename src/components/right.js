import React from "react";
import RightSubComponent from "./right-sub-comp";

export default function Right({ weatherInfo }) {
  return (
    <div className="column">
      <div className="hrline">
        <div className="cards">
          {weatherInfo.main.temp_max ? (
            <RightSubComponent
              data={`${weatherInfo.main.temp_max}`}
              label={"High"}
            />
          ) : null}
          {weatherInfo.wind.speed ? (
            <RightSubComponent
              data={`${weatherInfo.wind.speed} mph`}
              label={"Wind"}
            />
          ) : null}
          {weatherInfo.sys.sunrise ? (
            <RightSubComponent
              data={`${weatherInfo.sys.sunrise}`}
              label={"Sunrise"}
            />
          ) : null}
          {weatherInfo.main.temp_min ? (
            <RightSubComponent
              data={`${weatherInfo.main.temp_min}`}
              label={"Low"}
            />
          ) : null}
          {weatherInfo.clouds.all ? (
            <RightSubComponent
              data={`${weatherInfo.clouds.all} %`}
              label={"Rain"}
            />
          ) : null}
          {weatherInfo.sys.sunset ? (
            <RightSubComponent
              data={`${weatherInfo.sys.sunset}`}
              label={"Sunset"}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
