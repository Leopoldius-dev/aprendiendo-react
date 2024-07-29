import React from 'react';

const Modal = () => (
  <div style={styles.overlay}>
    <div style={styles.modal}>
      <h1 style={styles.text}>Felicidades</h1>
    </div>
  </div>
);

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  text: {
    color: '#16161D',
  },
};

export default Modal;
