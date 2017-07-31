import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../components/WeatherChart';
import GoogleMap from '../components/GoogleMap';

class WeatherListContainer extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)} 
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <WeatherChart data={temps} unit="&#8451;"/>
        </td>
        <td>
          <WeatherChart data={pressures} unit="hPa"/>
        </td>
        <td>
          <WeatherChart data={humidities} unit="%"/>
        </td>
      </tr>
    );
  }
}

function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherListContainer);