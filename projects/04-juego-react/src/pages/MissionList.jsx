// src/pages/MissionList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { missions } from '../missions';

const MissionList = () => (
  <div>
    <h1>Misiones</h1>
    <ul>
      {missions.map(mission => (
        <li key={mission.id}>
          <Link to={`/missions/${mission.id}`}>{mission.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MissionList;
