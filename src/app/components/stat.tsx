import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '../loading'

export default function Stat({ number, unit, caption }: any) {
    return (<Suspense fallback={<Loading/>}>
        <div className={`stat flex flex-grow-1 flex-col p-0 animate__animated animate__fadeIn`} suppressHydrationWarning>
            <p className='stat-title text-2xl text-super unbounded font-black red'>{'>'}</p>
            <div className='stat-unit flex flex-nowrap h-max item-center'>
                <p className='stat-title text-2xl text-super unbounded font-black black'>{number}</p>
                <p className='stat-title text-2xl ibm-sans font-black black'>{unit}</p>
            </div>
            <p className='stat-content text-sm ibm-sans text-semibold black mt-4'>{caption}</p>
        </div>
    </Suspense>)
}