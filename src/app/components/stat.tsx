"use client"

import Image from 'next/image'

export default function Stat({ number, unit, caption }: any) {
    return (<div className={`stat flex flex-grow-1 flex-col p-0`} suppressHydrationWarning>
        <p className='stat-title text-2xl text-super unbounded font-black red'>{'>'}</p>
        <div className='stat-unit flex flex-nowrap h-max item-center'>
            <p className='stat-title text-2xl text-super unbounded font-black black'>{number}</p>
            <p className='stat-title text-2xl ibm-sans font-black black'>{unit}</p>
        </div>
        <p className='stat-content text-sm ibm-sans text-semibold black mt-4'>{caption}</p>
    </div>)
}