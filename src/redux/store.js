import { createStore, applyMiddleware } from 'redux';
import { rootReducer,rootEpic } from './root';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);
export default store;
