"use client"

import Header from '../components/sections/header'
import Masthead from '../components/sections/masthead'
import Footer from '../components/sections/footer'
import Contacts from '../components/sections/contacts'
 
export default function Page() {
  return (
    <div className='page flex p-0 w-screen h-max flex-col'>
        <Header/>
        <Contacts standalone={true} fullscreen={true}/>
        <Footer fullscreen={true}/>
    </div>
  )
}