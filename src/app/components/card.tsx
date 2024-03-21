"use client"

import Image from 'next/image'
import { TCardProps } from '../lib/structs/types/cardprops'

export default function Card({ text = '{...}', title = 'Title', className, icon }: TCardProps) {
    return (<div className={`card flex flex-grow-1 flex-col gap-4 p-0 ${className}`} suppressHydrationWarning>
        <div className='image-wrapper card-icon'>
            <Image
                src={icon ?? 'svg/placeholder.svg'}
                width={300}
                height={300}
                alt="icon"
            />
        </div>
        <p className='card-title text-lg ibm-sans text-semibold black'>{title}</p>
        <p className='card-content text-md ibm-sans text-normal black'>{text}</p>
    </div>)
}