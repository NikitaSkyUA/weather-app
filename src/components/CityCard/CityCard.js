import React from 'react';
import PropTypes from 'prop-types';

//Styles
import styles from './CityCard.module';

const CityCard = ({city, $hover}) => {
  return (
    <div className={styles.cityCardContainer}>
      <div className={styles.cityCard}></div>
      <div className={$hover ? styles.cityCardHintHover : styles.cityCardHint}>
        <h4 className={styles.cityName}>{city.place_name}</h4>
        <p>temperature : {city.temperature_min}-{city.temperature_max}</p>
        <p>precipitation : {city.precipitation_mm}%</p>
        <p>precipitation probability : {city.precipitation_probability}%</p>
      </div>
    </div>
  );
}

CityCard.propTypes = {
  city: PropTypes.object.isRequired,
  $hover: PropTypes.bool
}

export default CityCard;
