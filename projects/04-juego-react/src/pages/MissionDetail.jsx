// src/pages/MissionDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { missions } from '../missions';
import Mission from '../components/Mission';
import CodeEditor from '../components/CodeEditor';

const MissionDetail = () => {
  const { id } = useParams();
  const mission = missions.find(m => m.id === parseInt(id));

  return (
    <div>
      {mission ? (
        <>
          <Mission title={mission.title} description={mission.description} challenge={mission.challenge} />
          <CodeEditor missionId={id} />
        </>
      ) : (
        <p>Misión no encontrada.</p>
      )}
    </div>
  );
};

export default MissionDetail;
