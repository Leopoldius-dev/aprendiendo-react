import React, { useState } from 'react';
import Set from './Set';
import Point from './Point';

const Scoreboard = () => {
  const [sets, setSets] = useState([{ games: [0, 0] }, { games: [0, 0] }, { games: [0, 0] }]);
  const [currentSet, setCurrentSet] = useState(0);
  const [currentGame, setCurrentGame] = useState([0, 0]);

  const handlePoint = (player) => {
    const newGame = [...currentGame];
    newGame[player]++;
    if (newGame[player] > 3 && (newGame[player] - newGame[1 - player] >= 1)) {
      const newSets = [...sets];
      newSets[currentSet].games[player]++;
      setSets(newSets);
      setCurrentGame([0, 0]);
      if (newSets[currentSet].games[player] >= 6 && newSets[currentSet].games[player] - newSets[currentSet].games[1 - player] >= 2) {
        setCurrentSet(currentSet + 1);
      }
    } else {
      setCurrentGame(newGame);
    }
  };

  return (
    <div className="scoreboard">
      {sets.map((set, index) => (
        <Set key={index} games={set.games} />
      ))}
      <div className="current-game">
        <div onClick={() => handlePoint(0)}>
          <Point points={currentGame[0]} />
        </div>
        <div onClick={() => handlePoint(1)}>
          <Point points={currentGame[1]} />
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
