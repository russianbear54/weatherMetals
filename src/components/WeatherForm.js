import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './WeatherForm.module.css';
import Result from './Result';

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

  return (
    <div className={classes.main}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label>
          Check Weather
          <input type='text' name='weatherlocation' placeholder='Enter City or Zip Code' ref={areaInputRef} />
        </label>
        <input type='submit' value='Submit' />
      </form>
      {gotWeather && <Result location={location} temperature={temperature} onClick={tapHandler} />}
    </div>
  );
};

export default WeatherForm;
