import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancer = compose(middlewareEnhancer, reduxDevTools);
const store = createStore(
  rootReducer,
  composedEnhancer,
);

export default store;
