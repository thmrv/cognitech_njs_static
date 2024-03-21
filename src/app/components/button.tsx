"use client"

import Image from 'next/image'

export default function Button({text, className, icon, url}:any) {
    return (<a href={url} className={`button ${className} w-max flex flex-row gap-x-4 p-4 px-8 text-normal`} suppressHydrationWarning>
        {text}
        <Image
            src={icon}
            width={15}
            height={15}
            alt="icon"
        />
    </a>)
}