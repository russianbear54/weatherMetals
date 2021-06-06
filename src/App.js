import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Metals from './components/Metals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import WeatherForm from './components/WeatherForm';
import Container from 'react-bootstrap/Container';

function App() {
  const [toggle, setToggle] = useState(false);
  const [choice, setChoice] = useState('');

  const weatherPick = () => {
    setChoice('weather');
  };
  const metalsPick = () => {
    setChoice('metals');
  };

  const containerStyle = { display: 'flex', width: '50rem', height: '5rem', justifyContent: 'center' };

  return (
    <>
      <div style={containerStyle}>
        <Button variant="dark" onClick={weatherPick}>
          Check Weather
        </Button>
        <Button variant="light" onClick={metalsPick}>
          Check Metals
        </Button>
      </div>
      {choice === 'metals' ? <Metals /> : <WeatherForm />}
    </>
  );
}

export default App;
