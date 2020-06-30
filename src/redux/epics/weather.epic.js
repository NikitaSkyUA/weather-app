import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from "rxjs/operators";
import { GET_WEATHER_DATA } from '../actionTypes';
import { setWeatherData } from '../actions/weather.actions';

const weatherEpic = action$ => action$.pipe(
  ofType(GET_WEATHER_DATA),
  mergeMap(() =>
    ajax.getJSON(`http://localhost:8080/data.json`).pipe(
      map(response => setWeatherData(response))
    )
  )
);
export default weatherEpic
