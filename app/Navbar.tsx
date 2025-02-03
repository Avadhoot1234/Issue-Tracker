"use client"
import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const Navbar = () => {
    const links=[
        {label:'Dashboard',href:'/'},
        {label:'Issues',href:'/issues'}
    ]
    //Another way of styling active link
    // ${link.href===currentPath ? 'text-zinc-900':'text-zinc-500'} hover:text-zinc-800 transition-colors`
    const currentPath=usePathname();

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug/></Link>
        <ul className='flex space-x-6'>
            {links.map(link=><Link key={link.href} className={
              classNames({
                'text-zinc-900':link.href===currentPath,
                'text-zinc-500':link.href!==currentPath,
                'hover:text-zinc-900':true
              })
            } href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}

export default Navbar
