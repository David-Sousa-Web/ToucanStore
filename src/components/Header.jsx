import { ShoppingCart, SignIn } from 'phosphor-react'
import React from 'react'

export function Header() {
  return (
    <header className='flex h-24 w-full items-center justify-around sticky bg-amber-700 shadow-md'>
      <div className=''>
        <img className='h-16' src='./LogoTucano.png' alt=''/>
      </div>
      <nav className='flex gap-10 items-center'>
        <a>home</a>
        <a>produtos</a>
        <a>contato</a>
        <a>ajuda</a>
        <a><ShoppingCart size={24}/></a>
        <a className='flex items-center gap-2'><SignIn size={24}/> Login</a>
      </nav>
    </header>
  )
}
