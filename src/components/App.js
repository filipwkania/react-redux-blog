import React, {Component} from 'react';

import SearchBarContainer from '../containers/SearchBarContainer';
import WeatherListContainer from '../containers/WeatherListContainer';

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBarContainer />
        <WeatherListContainer />
      </div>
    );
  }
};