import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Set from './Set';
import Point from './Point';
import { setPoint, setName, resetGame } from '../scoreboardSlice';
import Modal from './Modal';

const Scoreboard = () => {
  const sets = useSelector((state) => state.scoreboard.sets);
  const currentGame = useSelector((state) => state.scoreboard.currentGame);
  const playerNames = useSelector((state) => state.scoreboard.playerNames);
  const gameOver = useSelector((state) => state.scoreboard.gameOver);
  const dispatch = useDispatch();

  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (gameOver) {
      const player1SetsWon = sets.filter(set => set.games[0] >= 6 && set.games[0] - set.games[1] >= 2).length;
      const player2SetsWon = sets.filter(set => set.games[1] >= 6 && set.games[1] - set.games[0] >= 2).length;

      if (player1SetsWon > player2SetsWon) {
        setWinner(playerNames[0]);
      } else {
        setWinner(playerNames[1]);
      }
    }
  }, [gameOver, sets, playerNames]);

  const handlePoint = (player) => {
    dispatch(setPoint({ player }));
  };

  const handleNameChange = (index, event) => {
    dispatch(setName({ index, name: event.target.value }));
  };

  const handleCloseModal = () => {
    setWinner('');
    dispatch(resetGame());
  };

  return (
    <div className="scoreboard">
      {winner && <Modal winner={winner} onClose={handleCloseModal} />}
      <div className="player-row">
        <input type="text" value={playerNames[0]} onChange={(e) => handleNameChange(0, e)} />
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
