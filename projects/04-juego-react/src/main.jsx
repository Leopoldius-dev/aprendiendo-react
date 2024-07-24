// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//Aquí se renderiza la root de nuestro árbol de React
const root = ReactDOM.createRoot(document.getElementById('root'))

//Renderizamos el componente App
//El componente App llama, a su vez, al componente TwitterFollowCard
root.render(
  <App />
)

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/