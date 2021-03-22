import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const refresh = () => {
  window.location.reload();
}


const WeatherCard = ({weatherData}) => (
 
  <div className="main">
    <h1></h1>

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('Do MMMM YYYY')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperature: {Math.round(weatherData.main.temp)}&deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity}%</p>  
        <p className="wind">Wind: {weatherData.wind.deg}&deg; at {Math.round(weatherData.wind.speed)* 3.6}km/h Gust: {Math.round(weatherData.wind.gust)* 3.6}</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="rain">Rain: {weatherData.rain['1h']}mm</p>
        
      </div>
      <div className="flex">
        <p className="sunrise-sunset">Last updated: {new Date(weatherData.dt * 1000).toLocaleTimeString('en-IN')}</p>
    </div>
  </div>
)

export default WeatherCard;




