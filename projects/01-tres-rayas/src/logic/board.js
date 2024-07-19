import { winnerCombos } from "../constants/constants.js"

//Revisamos todas las combinaciones ganadoras para saber quién ganó
export const checkWinnerFrom = (boardCheck) => {
    for (const combo of winnerCombos) {
      const [a,b,c] = combo
      if (boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c])
      {
          return boardCheck[a]
      }
    }
    //Si no hay ganador
    return null
  }