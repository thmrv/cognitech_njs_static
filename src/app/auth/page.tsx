"use client"

import Header from '../components/sections/header'
import Masthead from '../components/sections/masthead'
import Footer from '../components/sections/footer'
import { useEffect, useState } from 'react'
import {
  useTranslation,
  LanguageSwitcher,
  LinkWithLocale
} from "next-export-i18n";
import About from '../components/sections/about'
import Points from '../components/sections/points'
import Subscribe from '../components/sections/subscribe'
import Auth from '../components/auth'
 
export default function Page() {
  const { t } = useTranslation();
  return (
    <div className='page flex p-0 w-screen h-max flex-col'>
        <Header/>
        <Auth username={t('pages.auth.username')} password={t('pages.auth.password')} buttonText={t('pages.auth.button_text')}/>
        <Footer classNames='footer-opaque' fullscreen={true}/>
    </div>
  )
}