import Image from 'next/image'
import GameOfLife from './components/game-of-life/game-of-life'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='absolute top-0 left-0'>
        <GameOfLife></GameOfLife>
      </div>
    </main>
  )
}
