"use client"

import Image from 'next/image'
import Input from './input'
import Button from './button'

export default function Auth({buttonText, password, username}:any) {
    return (<div className={`auth flex flex-grow-1 flex-col p-8 w-full max-w-xl m-auto gap-8`} suppressHydrationWarning>
            <Input placeholder={username} type='email' className='newsletter-input black max-w-xl w-full' icon=''/>
            <Input placeholder={password} type='password' className='newsletter-input black max-w-xl w-full' icon=''/>
            <Button text={buttonText} className="auth-button masthead-home max-w-xl w-full" icon="svg/icon_open.svg"/>
    </div>)
}