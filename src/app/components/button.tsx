import Image from 'next/image'
import { MouseEvent, Suspense } from 'react'
import Loading from '../loading'
import { TButtonProps } from '../lib/structs/types/buttonprops'

export default function Button({ url, className = '', text, icon, plaque, fillcolor, hoverAnimation = true, disabled, downSizing = false, onClick = () => {}}: TButtonProps) {
    let disabledClass = disabled ? 'disabled' : '';
    return (!downSizing ?
        <Suspense fallback={<Loading />}>
            <a onClick={onClick} href={url} style={{ background: fillcolor ?? "var(--red)" }} className={`button ${className} ${disabledClass} items-center justify-center w-max flex flex-row gap-x-4 p-4 px-8 text-normal white ${!hoverAnimation && 'no-hover'}`} suppressHydrationWarning>
                <span className='flex items-center gap-2 justify-center'>{text}
                    {typeof icon != 'undefined' && <Image
                        src={icon}
                        width={15}
                        height={15}
                        alt="icon"
                    />}
                </span>
                {typeof plaque != 'undefined' && plaque.enabled && <span className={`plaque flex justify-center px-2 py-1 rounded-full text-sm font-normal items-center ${plaque.fillcolor}`}>{plaque.text}</span>}
            </a>
        </Suspense> :
        <Suspense fallback={<Loading />}>
            <a onClick={onClick} href={url} style={{ background: fillcolor ?? "var(--red)" }} className={`button ${className} ${disabledClass} items-center justify-center w-max flex flex-row gap-x-2 p-2 px-4 text-normal white ${!hoverAnimation && 'no-hover'}`} suppressHydrationWarning>
                <span className='flex text-sm items-center gap-1 justify-center'>{text}
                    {typeof icon != 'undefined' && <Image
                        src={icon}
                        width={7}
                        height={7}
                        alt="icon"
                    />}
                </span>
            </a>
        </Suspense>)
}