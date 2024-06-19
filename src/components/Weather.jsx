import{ useEffect, useRef, useState } from "react";
import "./Weather.css";
import { FaLocationDot, FaWind, FaTemperatureArrowUp, FaTemperatureArrowDown } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { LuSunrise, LuSunset } from "react-icons/lu";
const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log(data);
      // //  const icon = allIcons[data.weather[0].icon] || MdSunny;
      // //  console.log(icon);
      setWeatherData({
        description : data.weather[0].description,
        humidity: data.main.humidity,
        feels_like: data.main.feels_like,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon,
        country: data.sys.country,
        temp_max: Math.floor(data.main.temp_max),
        temp_min: Math.floor(data.main.temp_min),
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
      });
    } catch (error) {
      console.log(error);
      setWeatherData(false);
      console.error("Error in fetching weather data")
    }
  };
    useEffect(() => {
    search("New Delhi");
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search" />
        <FaLocationDot
          className="custom-icon"
          onClick={() => {
            search(inputRef.current.value);
          }}
        />
      </div>
      {weatherData?<>
        <div className="icon-wrapper">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="Image can't be loaded"
          className="weather-icon"
        />
      </div>
      <p className="weather-description">{weatherData.description}</p>
      <p className="temperature">{weatherData.temperature}°C</p>
      <p className="location">
        {weatherData.location},{weatherData.country}
      </p>
      <div className="weather-data">
        <div className="col">
          <FaTemperatureArrowUp className="show-logo" />
          <div>
            <p>{weatherData.temp_max}°C</p>
            <span>Maximum</span>
          </div>
        </div>
        <div className="col">
          <FaTemperatureArrowDown className="show-logo" />
          <div>
            <p>{Math.floor(weatherData.temp_min)}°C</p>
            <span>Minimum</span>
          </div>
        </div>
      </div>
      <div className="weather-data">
        <div className="col">
          <LuSunrise className="show-logo" />
          <div>
            <p>{new Date(weatherData.sunrise * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
            <span>Sunrise</span>
          </div>
        </div>
        <div className="col">
          <LuSunset className="show-logo" />
          <div>
            <p>{new Date(weatherData.sunset * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
            <span>Sunset</span>
          </div>
        </div>
      </div>
      <div className="weather-data">
        <div className="col">
          <WiHumidity className="show-logo" />
          <div>
            <p>{weatherData.humidity}</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <FaWind  className="show-logo" />
          <div>
            <p>{Math.floor(weatherData.feels_like)}°C</p>
            <span>Wind</span>
          </div>
        </div>
      </div>
      </>:<>
      </>}
      
    </div>
  );
};

export default Weather;
