"use client"

import Image from 'next/image'

export default function Input({ value, placeholder, type, className, icon }: any) {
    return (<div className={`input-outer ${className} input-outer newsletter-input black justify-between max-w-xl w-full flex flex-row gap-x-2 p-2 px-4 min-w-6 text-normal items-center`} suppressHydrationWarning>
        <input type={type} className={`input input-inner ${type} ibm-mono`} placeholder={placeholder} value={value}></input>
        <div className='input-submit'>
        {icon != '' && <Image src={icon} width={15} height={15} alt="icon" /> }
        </div>
    </div>)
}