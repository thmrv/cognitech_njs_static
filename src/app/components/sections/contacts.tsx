"use client"

import { useSearchParams } from "next/navigation"

export default function Contacts({ standalone, h }: any) {
    return (!standalone ? <div className="contacts flex flex-row pt-16 pb-16 w-full flex flex-col w-full flex flex-col bg-white m-auto max-w-screen-2xl">
        <div className="map-inner"><iframe src={`https://yandex.ru/map-widget/v1/?ll=37.416788%2C55.820273&&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2ODU0NxJD0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JjRgdCw0LrQvtCy0YHQutC-0LPQviwgNNC6MiIKDXaXFUIVeEVfQg%2C%2C&z=12.17&theme=dark&draggable=false&lang=${useSearchParams().get('lang')}`} width="100%" height={h ?? '400'} frameBorder="0" style={{ position: 'relative' }}></iframe></div>
    </div> :
        <iframe style={{ flexGrow:1, overflow: 'hidden', width: '100%', position: 'relative' }} src={`https://yandex.ru/map-widget/v1/?ll=37.416788%2C55.820273&&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1Njc2ODU0NxJD0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINGD0LvQuNGG0LAg0JjRgdCw0LrQvtCy0YHQutC-0LPQviwgNNC6MiIKDXaXFUIVeEVfQg%2C%2C&z=12.17&theme=light&draggable=false&lang=${useSearchParams().get('lang')}`} width="100%" frameBorder="0"></iframe>
    )
}