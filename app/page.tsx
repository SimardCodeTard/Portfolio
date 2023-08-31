import homeStyles from './home.module.css'
import Card from './components/card/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={"flex h-screen w-screen items-center font-mono " + homeStyles.main} >
        <div className='flex w-screen h-90 min-h-fit justify-center space-x-10 p-5'>
          <Card className='h-full'>
            <h1 className={'font-bold text-4xl text-center w-full my-10 ' + homeStyles.gradient_title + ' ' + homeStyles.scrolling_background}>Compétences</h1>
            <h2 className='font-medium text-2xl text-white/75 w-full text-center my-3'>Technologies</h2>  
            <p className='text-xl text-white/50 w-full text-center font-sans'>React, Next JS, Angular, Spring Boot</p>
            <div className="text-right text-white/70 justify-end mt-auto font-sans">
              <Link href="/pages/skills">→ Dites m'en plus</Link>
            </div>
          </Card>

          <Card>
            <h1 className={'font-bold text-4xl text-center w-full my-10 ' + homeStyles.gradient_title + ' ' + homeStyles.scrolling_background}>Simon Ménard</h1>
            <h2 className='font-medium text-2xl text-white/75 w-full text-center my-3'>Curieux universel</h2>
            <p className='text-xl text-white/50 text-center font-sans'>Grand passioné de sciences, d'histoire et d'informatique</p>
            <div className="mt-auto text-right text-white/70 font-sans">
              <Link href="/pages/about">→ Mais encore</Link>
            </div>
          </Card>

          <Card>
            <h1 className={'font-bold text-4xl text-center w-full my-10 ' + homeStyles.gradient_title + ' ' + homeStyles.scrolling_background}>Formation</h1>
            <h2 className='font-medium text-2xl text-white/75 w-full text-center my-3'>Etudiant en informatique</h2>
            <p className='text-xl text-white/50 text-center font-sans'>Développement, bases de données, mathématiques...</p>
            <div className="mt-auto text-right text-white/70 font-sans">
              <Link href="/pages/formation">→ Allons-y</Link>
            </div>
          </Card>
        </div>
      </div>
  )
}
