import React from 'react';

const App = () => (
  <div style={styles.container}>
    <h1 style={styles.text}>Welcome to Roberto's Card</h1>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#16161D',
  },
  text: {
    color: 'white',
    textShadow: '0 0 10px silver',
  },
};

export default App;
