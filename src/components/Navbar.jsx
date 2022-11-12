import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='mx-auto container py-6'>
    <div className='flex items-center justify-between'>
        <div className="p-2">
            <img src="Group.png" alt="logo" />
        </div>
        <div className='hidden md:flex space-x-6'>
            <NavLink>Home</NavLink>
            <NavLink>Place to stay</NavLink>
            <NavLink>NFTs</NavLink>
            <NavLink>Community</NavLink>
        </div>
        <a href="" className="hidden md:block px-6 py-3 bg-wallet-gradient text-white rounded-[10px]">Connect Wallet</a>
        <p className='md:hidden'>kfjkgr</p>
    </div>
    </nav>
  )
}
