import React from 'react';
import classes from './Result.module.css';

function Result({ location, temperature, onClick, metal, data }) {
  return (
    <div onClick={onClick} className={classes.result}>
      <h1 className={classes.h1}>Click this box to close.</h1>
      <div className={classes.content}>
        {metal ? (
          <p>
            The price of {metal} is ${(data / 31).toFixed(2)} a gram.
          </p>
        ) : (
          <p>
            `The temperature in {location} is {temperature} F.`
          </p>
        )}
      </div>
    </div>
  );
}

export default Result;
