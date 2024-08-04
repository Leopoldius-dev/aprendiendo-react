import React from 'react';

const Point = ({ points }) => {
  const pointMapping = [0, 15, 30, 40];
  return (
    <div className="point">
      {points < 4 ? pointMapping[points] : 'Game'}
    </div>
  );
};

export default Point;
