// src/components/CodeEditor.jsx
import React, { useState } from 'react';

const CodeEditor = ({ missionId }) => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleRun = () => {
    // Evaluar el código (usando una función de sandboxing por seguridad)
    console.log('Code to run:', code);
    // Mostrar resultado o errores
  };

  return (
    <div>
      <textarea value={code} onChange={handleChange} rows="10" cols="50" />
      <button onClick={handleRun}>Ejecutar</button>
      <div id="output"></div>
    </div>
  );
};

export default CodeEditor;
