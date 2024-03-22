"use client"

import Header from '../components/sections/header'
import Masthead from '../components/sections/masthead'
import Footer from '../components/sections/footer'
 
export default function Page() {
  return (
    <div className='flex h-full p-0 container antialiased w-full h-full m-auto flex-col'>
        <Header/>
        <Footer/>
    </div>
  )
}