import React from 'react';
import classes from './Result.module.css';

function Result({ data, metal }) {
  return (
    <div className={classes.result}>
      The price of {metal} is ${(data / 31).toFixed(2)} a gram.
    </div>
  );
}

export default Result;
