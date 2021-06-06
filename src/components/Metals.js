import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Result from './Result';

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
    <div style={{ backgroundImage: 'url("https://www.etftrends.com/wp-content/uploads/2020/08/Precious-Metals-ETFs-Slump-As-Investors-Dump-Gold-And-Silver.jpg")', backgroundRepeat: 'no-repeat', height: 800, width: 800 }}>
      <Container>
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
      </Container>
      {data && <Result metal={metal} data={data} onClick={hideResult} />}
    </div>
  );
};

export default Metals;
