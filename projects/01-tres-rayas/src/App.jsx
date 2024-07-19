import {useState} from "react"
import confetti from "canvas-confetti"
import {Square} from './components/Square.jsx'
import {Turns, winnerCombos} from './constants/constants.js'
import { checkWinnerFrom } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
//Construimos el tablero
//Inicializamos un tablero vacío de 9 posiciones dentro de un estado
//En vez de tener una variable, tenemos un array de dos posiciones: el board y una forma de actualizar board
const [board, setBoard] = useState(Array(9).fill(null))

//Necesitamos estado para saber de quién es el turno
const [turn, setTurn] = useState(Turns.X)

//¿Cuándo tenemos un ganador? Estado
//null => No hay ganador ; false => Empate
const [winner, setWinner] = useState(null)

//Resetear el juego al pulsar "Empezar de nuevo"
//Seteamos los estados a sus valores iniciales
const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(Turns.X)
  setWinner(null)
}

//Comprobamos si hay empate al finalizar el juego
const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}

//Función updateBoard para actualizar el tablero
const updateBoard = (index) => {

  //¿Cómo evitar que se sobreescriban los turnos?
  //Evitamos sobrescripción en una misma casilla o paramos juego si hay ganador
  if(board[index] || winner) return

  //Actualizar el tablero
  const newBoard = [... board]
  //sprear y rest operator: IMPORTANTE
  newBoard[index] = turn
  setBoard(newBoard)

  //¿Quien tiene el turno?
  const newTurn = turn === Turns.X ? Turns.O : Turns.X
  setTurn(newTurn)

  //Revisamos si hay ganador (newBoard, que refleja el último movimiento)
  //Si no pasamos parámetro newBoard, permitiría una jugada más (a pesar de haber terminado el juego)
  //debido a que está tomando el estado anterior al actual
  const newWinner = checkWinnerFrom(newBoard)
  if (newWinner) {
    confetti()
    setWinner(newWinner)
  } else if(checkEndGame(newBoard)) {
    setWinner(false)
  }
}

  return (
    <main className='board'>
    <h1>Tres en raya</h1>
    <button onClick={resetGame}>Resetear juego</button>
    <section className='game'>
      {
        board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
    </section>

    <section className='turn'>
      <Square isSelected={turn === Turns.X}>
        {Turns.X}
      </Square>
      <Square isSelected={turn === Turns.O}>
        {Turns.O}
      </Square>
    </section>

    <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
