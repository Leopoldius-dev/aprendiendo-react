import React, { useState } from 'react';
import Set from './Set';
import Point from './Point';

const Scoreboard = () => {
  const [sets, setSets] = useState([{ games: [0, 0] }, { games: [0, 0] }, { games: [0, 0] }]);
  const [currentSet, setCurrentSet] = useState(0);
  const [currentGame, setCurrentGame] = useState([0, 0]);
  const [playerNames, setPlayerNames] = useState(['Player 1', 'Player 2']);
  const [gameOver, setGameOver] = useState(false);

  const handlePoint = (player) => {
    if (gameOver) return;

    const newGame = [...currentGame];
    newGame[player]++;
    if (newGame[player] > 3 && (newGame[player] - newGame[1 - player] >= 1)) {
      const newSets = [...sets];
      newSets[currentSet].games[player]++;
      setSets(newSets);
      setCurrentGame([0, 0]);
      if (newSets[currentSet].games[player] >= 6 && newSets[currentSet].games[player] - newSets[currentSet].games[1 - player] >= 2) {
        if (newSets.filter(set => set.games[player] >= 6).length >= 2) {
          setGameOver(true);
        } else {
          setCurrentSet(currentSet + 1);
        }
      }
    } else {
      setCurrentGame(newGame);
    }
  };

  const handleNameChange = (index, event) => {
    const newNames = [...playerNames];
    newNames[index] = event.target.value;
    setPlayerNames(newNames);
  };

  return (
    <div className="scoreboard">
      <div className="player-row">
        <input className="names" type="text" value={playerNames[0]} onChange={(e) => handleNameChange(0, e)} />
        {sets.map((set, index) => (
          <Set key={index} games={set.games[0]} />
        ))}
        <div className="current-game" onClick={() => handlePoint(0)}>
          <Point points={currentGame[0]} />
        </div>
      </div>
      <div className="player-row">
        <input type="text" value={playerNames[1]} onChange={(e) => handleNameChange(1, e)} />
        {sets.map((set, index) => (
          <Set key={index} games={set.games[1]} />
        ))}
        <div className="current-game" onClick={() => handlePoint(1)}>
          <Point points={currentGame[1]} />
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
