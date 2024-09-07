import './App.css';
import { useState } from 'react';
import Prays from './component/Prays';
import Form from './component/Form';

function App() {
  const [info, setInfo] = useState({
    fajr: '',
    Sunrise: '',
    Dhuhr: '',
    Asr: '',
    Maghrib: '',
    Isha: '',
    error: 'Please Enter Data'
  });

  const getPrays = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const date = e.target.elements.date.value;
    
    if (city && country) {
      try {
        const api = await fetch(`https://api.aladhan.com/v1/timingsByAddress/${date}?address=${city},${country}&method=8`);
        const data = await api.json();
        
        setInfo({
          fajr: data.data.timings.Fajr,
          Sunrise: data.data.timings.Sunrise,
          Dhuhr: data.data.timings.Dhuhr,
          Asr: data.data.timings.Asr,
          Maghrib: data.data.timings.Maghrib,
          Isha: data.data.timings.Isha,
          error: ''
        });
      } catch (error) {
        setInfo({
          fajr: '',
          Sunrise: '',
          Dhuhr: '',
          Asr: '',
          Maghrib: '',
          Isha: '',
          error: 'Error fetching data'
        });
      }
    } else {
      setInfo({
        fajr: '',
        Sunrise: '',
        Dhuhr: '',
        Asr: '',
        Maghrib: '',
        Isha: '',
        error: 'Please Enter Data'
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <Form getPrays={getPrays} />
        <Prays
          fajr={info.fajr}
          Sunrise={info.Sunrise}
          Dhuhr={info.Dhuhr}
          Asr={info.Asr}
          Maghrib={info.Maghrib}
          Isha={info.Isha}
          error={info.error}
        />
      </div>
    </div>
  );
}

export default App;
