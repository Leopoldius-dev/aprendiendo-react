//Inicializamos el cuadrado del tablero
//Tenemos un componente separado de la app que podremos reutilizar
export const Square = ({children, isSelected, updateBoard, index}) =>{
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