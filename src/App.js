import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
import { Dimmer, Loader } from 'semantic-ui-react';
import Autocomplete from './components/autocomplete';

async function getWeatherData(lat,long) {
  let weatherData = []
  await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        weatherData = result;
        console.log(weatherData)      
        });
        return weatherData;
}
getWeatherData(-33.87512285544149, 151.12854025396936)
// console.log(getWeatherData(-33.87512285544149, 151.12854025396936))
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        // console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
<div className="App">
<div>
  <Autocomplete></Autocomplete>
    
 </div>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Please wait..</Loader>
          </Dimmer>
       </div>
       
     )}
  
 </div>
  );
}