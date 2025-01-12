import React from 'react'
import logo from '../assets/logo.svg'
import './footer.css'
import facebookImg from '../assets/facebook.png'
import instgramImg from '../assets/instagram.png'
import twitterImg from '../assets/twitter.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    return(
        <>
           <div className='bg-[#163a65]  py-4 flex justify-around text-gray-300 mt-10'>
               <div>
                 <Image src={logo || null} alt="" className='w-14 ml-3' />
                 <h1 className=' '>Vedic Info</h1>
                 <p className='mt-10'> © Copyright 2024 
               </p>
               </div>
               <div className='flex lg:gap-32 gap-8'>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=Ww1lcGqgduif&format=png&color=000000" alt="" 
                    width={10}
                    height={10}
                    className='w-10 m-auto img'/>
                    <p>email</p>
                </div>
                <ul className=''>
                    <Image src={facebookImg || null} alt=""  className='img'/>
                    <Image src={instgramImg || null} alt="" className='my-4 img' />
                    <Image src={twitterImg || null} alt="" className='img' />
                    
                </ul>
                <ul className='text-center '>
                   <Link href={'/'}><li>Home</li></Link> 
                    <Link href={'/info'}><li>Vedic Fact</li></Link>
                    <Link href={'/latestnews'}><li>Latest News</li></Link>
                  
                    
                </ul>
               </div>
           </div>
        </>
    )
}

