//Importamos los estilos de App.jsx
import './App.css'

//Importamos la función TwitterFollowCard para usarla en el mapeo
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

//Inicializamos un array de usuarios
//username (string), name (string), isFollowing (bool)
const users = [
  {
    userName: 'rsd',
    name: 'Roberto S.',
    isFollowing: true
  },
  {
    userName: 'shg',
    name: 'Sandra H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco H.',
    isFollowing: true
  }
]

//Creamos la función App y la exportamos para usarla en main.jsx
export function App () {
  return (
    <section className='App'>
      {
        //Mapeamos el array, usando el componente TwitterFollowCard para el HTML
        //Le pasamos los parámetros del array users rellenar los props dinámicamente
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
