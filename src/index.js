import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// here we're going to import the component that we get from the react-redux that will give our application access to the store and to the reducer that we're going to write.

//This component is the provider and we're going to wrap all our application with this provider because we want everything inside to have access the store object that we get from redux that we're going to put all the states inside it.

import {Provider} from 'react-redux';

// we immport the store to pass it to the provider component so we can have access to our reducers and store
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
