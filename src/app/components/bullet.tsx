"use client"

import { usePathname } from 'next/navigation'
import { EBulletType } from '../lib/structs/enums/bullettype';
import { TBulletProps } from '../lib/structs/types/bulletprops';

export default function Bullet({ title = "placeholder", url = "#", active, type = EBulletType.primary }: TBulletProps, router: any) {
    const pathname = usePathname()
    const defineActive = pathname == url ? true : false;
    console.log(pathname, url)
    return (
        <a href={url ?? "#"} className={`bullet ibm-plex block no-underline ${active ?? defineActive ? "active" : ""} ${type} ${type != EBulletType.primary ? "text-sm xfsize font-normal secondary" : "text-sm font-normal primary pt-3"}`} suppressHydrationWarning>
            {title}
        </a>
    )
}
