// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/missions">Misiones</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
