import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Metals from './components/Metals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import WeatherForm from './components/WeatherForm';

function App() {
  const [choice, setChoice] = useState('');

  const weatherPick = () => {
    setChoice('weather');
  };
  const metalsPick = () => {
    setChoice('metals');
  };

  return (
    <>
      <div className='App'>
        <Button variant='dark' size='lg' active onClick={weatherPick}>
          Check Weather
        </Button>
        <Button variant='light' size='lg' active onClick={metalsPick}>
          Check Metals
        </Button>
      </div>
      {choice === 'metals' ? <Metals /> : <WeatherForm />}
    </>
  );
}

export default App;
