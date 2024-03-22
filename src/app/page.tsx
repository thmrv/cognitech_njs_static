"use client"

import Header from './components/sections/header'
import Masthead from './components/sections/masthead'
import Footer from './components/sections/footer'
import { useEffect, useState } from 'react'
import {
  useTranslation,
  LanguageSwitcher,
  LinkWithLocale
} from "next-export-i18n";
import About from './components/sections/about'
import Points from './components/sections/points'
import Subscribe from './components/sections/subscribe'
import Contacts from './components/sections/contacts'
import Features from './components/sections/features'

export default function Page() {
  const { t } = useTranslation();
  return (
    <div className='page flex p-0 w-screen h-max flex-col animate__animated animate__fadeIn'>
      <Header />
      <Masthead suptitle={t('masthead.suptitle')} title={t('masthead.title')} buttonText={t('masthead.button_text')} />
      <About />
      <Points />
      <Features plaqueText={t('content.features.coming_soon')} buttonText={t('content.features.button_text')} name={t('content.features.title.name')} points={{A:t('content.features.points.A'),B:t('content.features.points.B'),C:t('content.features.points.C'),D:t('content.features.points.D')}} title={t('content.features.title.content')} suptitle={t('content.features.suptitle')}/>
      <Contacts />
      <Subscribe />
      <Footer />
    </div>
  )
}