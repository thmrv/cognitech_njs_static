import { useState, useEffect } from "react";
import Image from 'next/image'
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
  } from "next-export-i18n";

export default function About() {
    const { t } = useTranslation();
    return (<div id="services" className="about flex flex-row pt-16 pb-16 w-full flex flex-col header w-full flex flex-col bg-white m-auto max-w-screen-2xl" suppressHydrationWarning>
        <div className="about-inner text-xl flex flex-row max-w-2xl">
            <p className="font-medium text-md"><span className="italic font-medium">{t('company.name')} - </span>{t('content.about.paragraph')}</p>
        </div>
    </div>)
}