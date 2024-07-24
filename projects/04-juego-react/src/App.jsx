// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MissionList from './pages/MissionList';
import MissionDetail from './pages/MissionDetail';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/missions" element={<MissionList />} />
      <Route path="/missions/:id" element={<MissionDetail />} />
    </Routes>
  </Router>
);

export default App;
