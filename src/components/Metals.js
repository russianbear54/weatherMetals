import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Result from './Result';
import classes from './Metals.module.css';

const Metals = () => {
  const [data, setData] = useState(null);
  const [metal, setMetal] = useState(null);

  const getMetalsDataFromAPI = (metal) => {
    metal === 'XAU' ? setMetal('gold') : setMetal('silver');

    var myHeaders = new Headers();
    myHeaders.append('x-access-token', 'goldapi-7r6qmtukhe3ni8s-io');
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(`https://www.goldapi.io/api/${metal}/USD`, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result.ask))
      .catch((error) => console.log('error', error));
  };

  const hideResult = () => {
    setData(null);
  };

  return (
    <div className={classes.main}>
      <Button
        variant="warning"
        onClick={() => {
          getMetalsDataFromAPI('XAU');
        }}
      >
        Gold Price
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          getMetalsDataFromAPI('XAG');
        }}
      >
        Silver Price
      </Button>

      {data && <Result metal={metal} data={data} onClick={hideResult} />}
    </div>
  );
};

export default Metals;
