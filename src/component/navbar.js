'use client'
import { useState } from 'react';
import logo from '../assets/logo.svg';
import menu from '../assets/menu.png'
import Link from 'next/link';
import Image from 'next/image';
Image
import './layout.css'

export default function Navbar(){
    const [isOpen, setOpen ]= useState(false)
    const isLogged = false

    function handleMenu (){
        setOpen(
          !isOpen
        )
    }
    function menuOnClick(){
      setOpen(false)
    }
    
    
    return(<>
       <nav  className={`navbar bg-[#d8efda] pb-6 mb-16`}>
           <div >
             <Image src={logo || null} alt="" className='w-10 h-10 m-auto logo'/>
             <h1 className='heading  text-sm text-center logotext '>Vedic Info</h1>
           </div>
           <button className='menu-toggle' onClick={handleMenu}><Image src={menu} alt="" /></button>
           <div className='flex justify-between px-7'>
            <div className='flex justify-between'>
              <ul onClick={menuOnClick} className={` ${isOpen ? 'open' :''} nav-links flex  text-lg lg:mx-60 sm:text-base`}>
              <Link href={'/'}><li className='-'>Home</li> </Link>
                <Link href={'/info'}><li className=''>Vedic facts</li></Link>
                <Link href={'/latestnews'}><li className=''>Latest news</li></Link>
                <Link href={'/latestnews'}>
                <li className=''>Top news</li></Link>
                <Link href={'/latestnews'}>
                <li className=''>International news</li></Link>
                <ul className='flex'>
                {isLogged && <Link href={'/createPost'}> <li className='lg:ml-40'>Create Post</li></Link>} 
               {!isLogged && <Link href={'/'}> <li> Login</li></Link>}
               {isLogged &&  <button className='log ml-4 sm:ml-6 lg:ml-44' > Logout</button>}
                </ul>
              </ul>
            </div>
            
              
               
              
              
           </div>
        </nav>
    </>)
}