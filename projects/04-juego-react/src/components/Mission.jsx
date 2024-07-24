// src/components/Mission.jsx
import React from 'react';

const Mission = ({ title, description, challenge }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <pre>{challenge}</pre>
  </div>
);

export default Mission;
