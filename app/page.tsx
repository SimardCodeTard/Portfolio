import Image from 'next/image'
import GameOfLife from './components/game-of-life/game-of-life'

export default function Home() {
  return (
    <>
      <div className='canvas-container absolute top-0 left-0'>
        <GameOfLife></GameOfLife>
      </div>
      <main className="z-10 flex flex-col items-center justify-between p-12">
        <div className='text-4xl backdrop-blur-lg rounded p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </main>
    </>
  )
}
