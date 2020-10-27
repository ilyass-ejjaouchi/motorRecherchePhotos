import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {Provider} from 'react-redux'; 
import {searchPictures,RequestPictures} from './Searchform/Searchform.reducer'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const rootReducer = combineReducers({RequestPictures,searchPictures})
const logger = createLogger();  
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
     <App/>
  </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
