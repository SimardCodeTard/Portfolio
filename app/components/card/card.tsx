"use client"
import cardStyles from './card.module.css'
import Tilt from 'react-parallax-tilt';

export default function Card({children, className}: {children: React.ReactNode, className?: string}) {
    return (
        <Tilt perspective={2000} className={'flex flex-col p-5 rounded-md w-1/3 ' + className + ' ' + cardStyles.card}>
            {children}
        </Tilt>
    )
}