import React from "react";
import "./Weather.css";
import { FaMapLocationDot, FaWind } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <FaMapLocationDot class="custom-icon" />
      </div>
      <div className="icon-wrapper">
        <MdSunny className="gradient-sunny" />
      </div>
      <p className="temperature">46°C</p>
      <p className="location">Ghaziabad</p>
      <div className="weather-data">
        <div className="col">
          <WiHumidity className="show-logo" />
          <div>
            <p>91%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <FaWind className="show-logo"/>
          <div>
            <p>3.6 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
