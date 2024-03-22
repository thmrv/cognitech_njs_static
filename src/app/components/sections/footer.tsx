"use client"

import { EBulletType } from "@/app/lib/structs/enums/bullettype";
import Bullet from "../bullet";
import { useTranslation } from "next-export-i18n";

export default function Footer({classNames}:any) {
    const { t } = useTranslation();
    return (
        <div className={`footer w-full flex max-w-screen-2xl flex-col w-full bg-white m-auto pt-16 pb-4 ${classNames ?? ''}`} suppressHydrationWarning>
            <div className="footer-primary flex flex-wrap justify-between w-full pb-8 m-auto">
                <div className='footer-inner w-full justify-between flex m-auto items-end'>
                    <a href={`tel:${t('footer.phone')}`} className="text-3xl w-max footer-bullet-large unbounded black">{t('footer.phone')}</a>
                    <a href={`mailto:${t('footer.email')}`} className="text-sm w-max footer-bullet unbounded black">{t('footer.email')}</a>
                    <a className="text-sm max-w-sm w-max footer-bullet unbounded black">{t('footer.address')}</a>
                </div>
            </div>
            <div className="footer-secondary flex flex-wrap justify-between">
                <div className='footer-inner w-full justify-between flex m-auto w-full'>
                    <a href="/" className=" text-sm footer-bullet ibm-mono black">{t('footer.secondary.copyright') + new Date().getFullYear()}</a>
                    <a href="/policy" className="text-sm footer-bullet ibm-mono black">{t('footer.secondary.policy')}</a>
                </div>
            </div>
        </div>
    )
}
