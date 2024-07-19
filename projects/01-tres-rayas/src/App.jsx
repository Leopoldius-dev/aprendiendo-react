import {useState} from "react"

//Creamos constante con los turnos
const Turns = {
  X: 'x',
  O: 'o'
}

//Inicializamos el cuadrado del tablero
//Tenemos un componente separado de la app que podremos reutilizar
const Square = ({children, isSelected, updateBoard, index}) =>{
  //Renderizado para saber a quién le toca el turno
  const className = `square ${isSelected ? 'is-selected' : ''}`

  //Cuando el usuario haga al click, se ejecuta el handleClick que llama al update
  const handleClick = () => {
    //Pasamos el índice para saber en qué casilla ha hecho click
    updateBoard(index)
  }

  //La función updateBoard solo se ejecuta cuando hacemos click en el div del square
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

//Combinaciones ganadoras
const winnerCombos = [
  //Horizontales
  [0,1,2],
  [3,4,5],
  [6,7,8],
  //Verticales
  [0,3,6],
  [1,4,7],
  [2,5,8],
  //Diagonales
  [0,4,8],
  [2,4,6]
]

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

//Revisamos todas las combinaciones ganadoras para saber quién ganó
const checkWiner = (boardCheck) => {
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
  const newWinner = checkWiner(newBoard)
  if (newWinner) {
    setWinner(newWinner)
    alert(`El ganador es ${newWinner}`)
  }
}

  return (
    <main className='board'>
    <h1>Tres en raya</h1>
    <section className='game'>
      {
        board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
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
    </main>
  )
}

export default App
