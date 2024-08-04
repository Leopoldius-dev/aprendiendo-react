import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sets: [{ games: [0, 0] }, { games: [0, 0] }, { games: [0, 0] }],
  currentSet: 0,
  currentGame: [0, 0],
  playerNames: ['Player 1', 'Player 2'],
  gameOver: false,
};

const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    setPoint: (state, action) => {
      const { player } = action.payload;
      if (state.gameOver) return;

      const newGame = [...state.currentGame];
      newGame[player]++;
      if (newGame[player] > 3 && (newGame[player] - newGame[1 - player] >= 1)) {
        state.sets[state.currentSet].games[player]++;
        state.currentGame = [0, 0];
        if (state.sets[state.currentSet].games[player] >= 6 && state.sets[state.currentSet].games[player] - state.sets[state.currentSet].games[1 - player] >= 2) {
          if (state.sets.filter(set => set.games[player] >= 6).length >= 2) {
            state.gameOver = true;
          } else {
            state.currentSet++;
          }
        }
      } else {
        state.currentGame = newGame;
      }
    },
    setName: (state, action) => {
      const { index, name } = action.payload;
      state.playerNames[index] = name;
    },
  },
});

export const { setPoint, setName } = scoreboardSlice.actions;
export default scoreboardSlice.reducer;
