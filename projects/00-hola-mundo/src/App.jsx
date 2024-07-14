import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

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

export function App () {
  return (
    <section className='App'>
      {
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
