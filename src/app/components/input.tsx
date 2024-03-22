import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '../loading'

export default function Input({ value, placeholder, type, className, icon }: any) {
    return (<Suspense fallback={<Loading/>}>
        <div className={`input-outer ${className} input-outer newsletter-input black justify-between max-w-xl w-full flex flex-row gap-x-2 p-2 px-4 min-w-6 text-normal items-center animate__animated animate__fadeIn`} suppressHydrationWarning>
            <input type={type} className={`input input-inner ${type} ibm-mono`} placeholder={placeholder} value={value}></input>
            <div className='input-submit'>
                {icon != '' && <Image src={icon} width={15} height={15} alt="icon" />}
            </div>
        </div>
    </Suspense>)
}