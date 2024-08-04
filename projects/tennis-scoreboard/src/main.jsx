import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Scoreboard from './components/Scoreboard';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Scoreboard />
    </Provider>
  </React.StrictMode>
);