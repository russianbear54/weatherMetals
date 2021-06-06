import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function Result({ data, metal, onClick }) {
  return (
    <Jumbotron onClick={onClick}>
      <Container>
        The price of {metal} is ${(data / 31).toFixed(2)} a gram.
      </Container>
    </Jumbotron>
  );
}

export default Result;
