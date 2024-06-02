import GameOfLife from './components/game-of-life/game-of-life'
import PrensentationWidget from './components/presentation-widget/presentation-widget'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div className='canvas-container sticky top-0 left-0'>
        <GameOfLife></GameOfLife>
      </div>
      <div className='h-screen'></div>
      <main className="z-10 flex flex-col min-h-screen justify-between p-12">
        <PrensentationWidget></PrensentationWidget>
      </main>
    </div>
  )
}
