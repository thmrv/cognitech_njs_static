"use client"

import Header from './components/sections/header'
import Masthead from './components/sections/masthead'
import Footer from './components/sections/footer'
import { Suspense, useEffect, useState } from 'react'
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
import Cookies from './components/modals/cookies'
import Loading from './loading'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

export default function Page() {
  const { t } = useTranslation();
  let [loading] = useState(false);

  useEffect(() => {
    switch (document.readyState) {
      case "loading":
        loading
        break;
      case "interactive": {
        resolveLocaleMismatch();
        loading;
        break;
      }
      case "complete":
        !loading;
        break;
    }
  })

  /*if (error) return <Suspense fallback={<Loading failed={true}/>}></Suspense>*/

  const DAbout = dynamic(() => import('./components/sections/about'), {
    loading: () => <Loading />,
  })

  const DPoints = dynamic(() => import('./components/sections/points'), {
    loading: () => <Loading />,
  })

  const DSubscribe = dynamic(() => import('./components/sections/subscribe'), {
    loading: () => <Loading />,
  })

  const DMasthead = dynamic(() => import('./components/sections/masthead'), {
    loading: () => <Loading />,
  })

  const DHeader = dynamic(() => import('./components/sections/header'), {
    loading: () => <Loading />,
  })

  const DFooter = dynamic(() => import('./components/sections/footer'), {
    loading: () => <Loading />,
  })
  
  const DContacts = dynamic(() => import('./components/sections/contacts'), {
    loading: () => <Loading />,
  })

  const DFeatures = dynamic(() => import('./components/sections/features'), {
    loading: () => <Loading />,
  })

  const DCookies = dynamic(() => import('./components/modals/cookies'), {
    loading: () => <Loading />,
  })


  if (loading) return <Loading />
  else return (
    <div className={`page ${getLocale()} flex p-0 w-screen h-max flex-col animate__animated animate__fadeIn`}>
      <DCookies content={t('cookies.content')} buttonText={t('cookies.button_text')} buttonTextCancel={t('cookies.button_text_cancel')} />
      <DHeader />
      <DMasthead suptitle={t('masthead.suptitle')} title={t('masthead.title')} buttonText={t('masthead.button_text')} />
      <DAbout />
      <DPoints />
      <DFeatures plaqueText={t('content.features.coming_soon')} buttonText={t('content.features.button_text')} name={t('content.features.title.name')} points={{ A: t('content.features.points.A'), B: t('content.features.points.B'), C: t('content.features.points.C'), D: t('content.features.points.D') }} title={t('content.features.title.content')} suptitle={t('content.features.suptitle')} />
      <DContacts />
      <DSubscribe />
      <DFooter />
    </div>
  )
}

function getLocale() {
  return localStorage?.getItem('next-export-i18n-lang') || useSearchParams()?.get('lang');
}

function resolveLocaleMismatch(){
  return localStorage?.getItem('next-export-i18n-lang') !== useSearchParams()?.get('lang') ? localStorage.setItem('next-export-i18n-lang', (useSearchParams()?.get('lang') as string)) : console.warn('Possible locale mismatch.')
}