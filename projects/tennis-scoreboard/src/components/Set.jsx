import React from 'react';

const Set = ({ games }) => {
  return (
    <div className="set">
      <div>{games[0]}</div>
      <div>{games[1]}</div>
    </div>
  );
};

export default Set;
