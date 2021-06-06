import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const KEY = 'a7d617b1c2d84d80a2a204315212204';
const WeatherForm = () => {
  const [gotWeather, setGotWeather] = useState(false);
  const [location, setLocation] = useState();
  const [temperature, setTemperature] = useState();
  const areaInputRef = useRef();

  const getWeatherData = async (area) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${area}&aqi=no`);
    if (response.ok) {
      setGotWeather(true);
    }
    const data = await response.json();
    setLocation(data.location.name);
    setTemperature(data.current.temp_f);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredData = areaInputRef.current.value;
    getWeatherData(enteredData);
    setGotWeather(true);
    e.target.reset();
  };

  const tapHandler = () => {
    setGotWeather(false);
  };

  const dispStyles = {
    backgroundImage: 'url("https://static.sciencelearn.org.nz/images/images/000/003/176/full/FIR_ITV_RuralFireRisk_Weather_CloudySky_123RF_901534.jpg?1522314128")',
    backgroundRepeat: 'no-repeat',
    height: 1000,
    width: 1000,
    margin: 5,
  };

  return (
    <div style={dispStyles}>
      <form onSubmit={submitHandler}>
        <label>
          Check Weather
          <input type="text" name="weatherlocation" placeholder="Enter City or Zip Code" ref={areaInputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {gotWeather && <div onClick={tapHandler}>{`The temperature in ${location} is ${temperature} F`}</div>}
    </div>
  );
};

export default WeatherForm;