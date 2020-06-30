import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import weatherReducer from './reducers/weather.reducer';
import weatherEpic from './epics/weather.epic';

export const rootEpic = combineEpics(
    weatherEpic
);

export const rootReducer = combineReducers({
  weather: weatherReducer,
});
