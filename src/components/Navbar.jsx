import React from 'react'
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

export const Navbar = (props) => {
  return (
    <nav className='mx-auto container py-6'>
    <div className='flex items-center justify-between'>
        <div className="p-2">
            <img src="Group.png" alt="logo" />
        </div>
        <div className='hidden md:flex space-x-6'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/placeToStay">Place to stay</NavLink>
            <NavLink>NFTs</NavLink>
            <NavLink>Community</NavLink>
        </div>
        <button className="hidden md:block px-6 py-3 bg-wallet-gradient text-white rounded-[10px]" onClick={(e)=> {
          props.changeVal()
          e.preventDefault()}}>Connect Wallet</button>
        <GiHamburgerMenu className='md:hidden'/>
    </div>
    </nav>
  )
}
