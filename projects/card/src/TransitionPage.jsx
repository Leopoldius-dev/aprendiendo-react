import React, { useState } from 'react';
import Modal from './Modal';

const TransitionPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer} onClick={handleClick}>
        <div style={styles.icon}>✨</div>
      </div>
      {showModal && <Modal />}
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
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    animation: 'grow 2s forwards',
  },
  icon: {
    fontSize: '50px',
  },
};

export default TransitionPage;
