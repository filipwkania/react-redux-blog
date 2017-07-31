import axios from 'axios';

const API_KEY = require('../../API.js').getKey();
const WEATHER_URI = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&units=metric&q=`;

export const actionTypes = {
  FETCH_WEATHER: 'FETCH_WEATHER'
}

export function fetchWeather(city) {
  const URL = `${WEATHER_URI}${city}`;
  const request = axios.get(URL);

  return {
    type: actionTypes.FETCH_WEATHER,
    payload: request
  };
}