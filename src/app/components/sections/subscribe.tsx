import { useState, useEffect, Suspense } from "react";
import Image from 'next/image'
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import Input from "../input";
import Loading from "@/app/loading";

export default function Subscribe() {
    const { t } = useTranslation();
    return (<Suspense fallback={<Loading/>}>
        <div className="subscribe flex flex-row pt-16 pb-16 w-full flex flex-col header w-full flex flex-col bg-white m-auto max-w-screen-2xl" suppressHydrationWarning>
            <div className="subscribe-inner text-xl flex flex-row justify-between">
                <p className="font-medium max-w-xl black flex gap-2 flex-nowrap items-start">
                    <div className='image-wrapper icon mt-2'>
                        <Image
                            src={'svg/icon_label.svg'}
                            width={25}
                            height={25}
                            alt="icon"
                        />
                    </div>{t('footer.newsletter.caption')}
                </p>
                <Input placeholder='email' type='email' className='newsletter-input black max-w-2xl w-full' icon='svg/icon_arrow_left.svg' />
            </div>
        </div>
    </Suspense>)
}