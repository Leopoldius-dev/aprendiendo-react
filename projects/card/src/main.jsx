import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home';
import TransitionPage from './TransitionPage';

const Root = () => (
  <Router>
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/transition" element={<TransitionPage />} />
    </Route>
  </Router>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Home />);

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/