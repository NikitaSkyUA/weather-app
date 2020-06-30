import React from 'react';
import PropTypes from 'prop-types';

//Styles
import styles from './WeatherList.module';

const WeatherList = ({ list }) => {
  return (
    <ul>
      {list.map( item => {
        return (
          <li key={item.place_name} className={styles.weatherListItem}>
            <div className={styles.weatherListItemTop}>
              <h4>{item.place_name}</h4>
              <span>last update: {item.datetime} </span>
            </div>
            <div>
              <span>temperature : {item.temperature_min} - {item.temperature_max}</span>
              <span>precipitation : {item.precipitation_mm}%</span>
              <span>precipitation probability : {item.precipitation_probability}%</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

WeatherList.propTypes = {
  list: PropTypes.array.isRequired
};

export default WeatherList;
