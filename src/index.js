import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes/app-route';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </Provider>

);


