import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { getWeatherData, searchWeatherData } from "../../redux/actions/weather.actions";

// Components
import GoogleMapReact from 'google-map-react';
import CityCard from '../../components/CityCard/CityCard';
import WeatherList from '../../components/WeatherList/WeatherList';
import SearchInput from '../../components/SearchInput/SearchInput';

// Styles
import styles from './WeatherPage.module';

class WeatherPage extends Component {

  componentDidMount(){
    this.props.getWeatherData();
  };

  onSearch = (e) => {
    this.props.searchWeatherData(e.target.value);
  };

  render() {
    let {zoom, center, weatherData} = this.props.weather;
    return (
      <div className={styles.weatherPage}>
        <h1>Nederlands Weather App =)</h1>
        <SearchInput onChange={this.onSearch} />
        <div className={styles.flexWrapper}>
          <div className={styles.listContainer}>
          <WeatherList list={weatherData} />
          </div>
          <div className={styles.mapContainer}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBfr8fRfiRNG-lSOyXlY06bCoPh2yLKJs0'}}
            defaultCenter={center}
            defaultZoom={zoom}
            hoverDistance={5}
          >
          {this.props.weather.weatherData.map( item =>
            <CityCard
              key={item.place_name}
              lat={item.latitude}
              lng={item.longitude}
              city={item}
            />
          )}
          </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    weather: state.weather,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getWeatherData: () => dispatch(getWeatherData()),
    searchWeatherData: query => dispatch(searchWeatherData(query))
  }
};

WeatherPage.propTypes = {
  weather: PropTypes.object.isRequired,
  getWeatherData: PropTypes.func.isRequired,
  searchWeatherData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);
