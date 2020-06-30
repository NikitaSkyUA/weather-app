import { GET_WEATHER_DATA , SET_WEATHER_DATA, SEARCH_WEATHER_DATA } from '../actionTypes';

const INITIAL_STATE = {
  center: {
    lat: 52.370216,
    lng: 4.895168
  },
  zoom: 8,
  memoData: [],
  weatherData: []
};

const setWeatherData = (state , action) => {
  //removing duplicated items
  const filteredArr = action.payload.reduce((acc, current) => {
    const x = acc.find(item => item.place_name === current.place_name);
    return x ? acc : acc.concat([current])
  }, []);

  return {...state, weatherData: filteredArr, memoData: filteredArr }
};

const searchWeatherData = (state, action) => {
  if(action.query.length){
    let searchResult = state.memoData.filter(el => {
      return el.place_name.toLowerCase().includes(action.query) || el.datetime.includes(action.query);
    });
    return {...state, weatherData: searchResult}
  } else {
    return {...state, weatherData: state.memoData}
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return setWeatherData(state, action);
    case SEARCH_WEATHER_DATA:
      return searchWeatherData(state, action);
    default: return state;
  }
};

export default reducer;
