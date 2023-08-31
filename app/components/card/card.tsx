import cardStyles from './card.module.css'

export default function Card({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={'flex flex-col p-5 rounded-md w-1/3 ' + className + ' ' + cardStyles.card}>
            {children}
        </div>
    )
}