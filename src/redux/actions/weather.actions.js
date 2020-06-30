import { SET_WEATHER_DATA, GET_WEATHER_DATA, SEARCH_WEATHER_DATA } from '../actionTypes';
export const setWeatherData = payload => {
  return {
    type: SET_WEATHER_DATA,
    payload: payload
  }
}
export const getWeatherData = () => {
  return {
    type: GET_WEATHER_DATA,
  }
}

export const searchWeatherData = query => {
  return {
    type: SEARCH_WEATHER_DATA,
    query: query
  }
}
