import Image from 'next/image'
import Bullet from '../bullet'
import { usePathname } from 'next/navigation'
import { withRouter } from 'next/router'
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import { EBulletType } from '../../lib/structs/enums/bullettype'
import { Suspense, useEffect, useState } from 'react'
import Loading from '@/app/loading'
import React from 'react';

export default function Header({ }: any) {
    const { t } = useTranslation();
    return (<Suspense fallback={<Loading />}>
        <div className="header w-full flex flex-col bg-white m-auto" suppressHydrationWarning>
            <a href="/" className='image-wrapper link py-2 m-auto hide-mobile'>
                <Image
                    src="png/logo_dark.png"
                    width={100}
                    height={50}
                    alt="logo"
                />
            </a>
            <div className='header-contacts w-full h-max flex-row m-auto justify-evenly flex flex-nowrap animate__animated animate__fadeInDown'>
                <a href={`tel:${t('footer.phone')}`} className='contacts phone text-sm ibm-sans'>{t('footer.phone')}</a>
                <a href={`mailto:${t('footer.email')}`} className='contacts email text-sm ibm-sans'>{t('footer.email')}</a>
                <a className='contacts address text-sm ibm-sans'>{t('footer.address')}</a>
            </div>
            <div className="header-primary w-full h-max flex-row m-auto animate__animated animate__fadeInDown">
                <div className='header-inner max-w-screen-2xl justify-between flex m-auto'>
                    <div className='header-left bullets container flex w-auto w-max items-center'>
                        <a href="/" className='image-wrapper link logo py-2'>
                            <Image
                                src="png/logo_dark.png"
                                width={100}
                                height={50}
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className='header-center container w-auto gap-x-12 flex flex w-auto w-full justify-start items-center'>
                        <Bullet title={t('header.home')} url='/' type={EBulletType.primary} />
                        <Bullet title={t('header.contacts')} url='/contacts' type={EBulletType.primary} />
                    </div>
                    <div className='header-right container w-auto gap-x-4 flex flex w-auto w-max items-center'>
                        <LanguageSwitcher lang="ru"><div className="ibm-plex flex items-center bullet py-2">ru</div></LanguageSwitcher>
                        <LanguageSwitcher lang="en"><div className="ibm-plex flex items-center bullet py-2">en</div></LanguageSwitcher>
                        <a href="/auth" className='image-wrapper link profile py-2'>
                            <Image
                                src="svg/icon_profile.svg"
                                width={25}
                                height={25}
                                alt="profile"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="header-secondary h-max w-full flex-row justify-between m-auto items-center animate__animated animate__fadeInDown">
                <div className='header-inner max-w-screen-2xl justify-between flex m-auto'>
                    <Bullet title={t('header.secondary.lowcode')} url='#analytics' type={EBulletType.secondary} />
                    <Bullet title={t('header.secondary.NLP')} url='#' type={EBulletType.secondary} />
                    <Bullet title={t('header.secondary.AI')} url='#' type={EBulletType.secondary} />
                    <Bullet title={t('header.secondary.ML')} url='#' type={EBulletType.secondary} />
                    <Bullet title={t('header.secondary.BI')} url='#' type={EBulletType.secondary} />
                </div>
            </div>
        </div >
    </Suspense>
    )
}
