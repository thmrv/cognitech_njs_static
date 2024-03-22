import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '../loading'

export default function Button({ text, className, icon, url }: any) {
    return (<Suspense fallback={<Loading />}>
        <a href={url} className={`button ${className} w-max flex flex-row gap-x-4 p-4 px-8 text-normal animate__animated animate__fadeIn`} suppressHydrationWarning>
            {text}
            <Image
                src={icon}
                width={15}
                height={15}
                alt="icon"
            />
        </a>
    </Suspense>)
}