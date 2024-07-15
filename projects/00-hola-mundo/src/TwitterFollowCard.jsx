//Importamos la función de React para comprobar el estado del botón
import { useState } from 'react'

//Exportamos la función para usarla en App.jsx como componente
export function TwitterFollowCard ({ key, userName, initialIsFollowing }) {
  
  //Comprobamos ele stado del botón
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  console.log('[TwitterFollowCard] render with userName: ', userName)

  //Seteamos el texto del botón en función de si es true/false
  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  //Seteamos el className en función de si es true/false
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  //Definimos el cambio de estado del botón al hacer click
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  //HTML final del Follow Card UI
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{key}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
