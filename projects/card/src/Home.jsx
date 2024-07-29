import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transition');
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>🎉</div>
      <button style={styles.button} onClick={handleClick}>Pulsa aquí</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#16161D',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '20px',
    color: 'white',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Home;
