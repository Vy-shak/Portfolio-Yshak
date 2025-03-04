'use client'

import { Dispatch, SetStateAction } from 'react'
import React from 'react'
import menu from '../public/Icons/Navmenu.svg'
import closeMenu from '../public/Icons/CloseNavmenu.svg'
import Image from 'next/image'
import Link from 'next/link'


export const Navmenu = [{
    id: 'projects',
    text: 'Projects',
    href: '#projects'
}, {
    id: 'team',
    text: 'About'
}, {
    id: 'Resume',
    text: 'Resume'
}, {
    id: 'Social',
    text: 'Social'
},
{
    id: 'Tech-stack',
    text: 'Tech-stack'
},
]

interface Navbar {
    SetSnavbar: Dispatch<SetStateAction<boolean>>
    Snavbar: boolean
}

function Navbar({ SetSnavbar, Snavbar }: Navbar) {
    return (
        <section className='absolute px-2 sm:px-4 md:px-8 lg:px-16 py-1  md:py-2 z-50 items-center justify-center  top-0 w-full h-12 '>
            <div className='flex max-md:justify-center md:justify-between items-center px-8 w-full h-full bg-neutral-900 rounded-md'>
                {Navmenu.map((item) => (
                    <Link key={item.id} href={`${item.href ? item.href : "#"}`}>
                        <span key={item.id} className='text-white max-md:hidden md:visible   whitespace-nowrap border-2 border-transparent transition-colors duration-100 hover:border-greenPrimary-400  hover:bg-neutral-600 text-xs px-3 py-1 rounded-md  w-fit'>{item.text}</span>
                    </Link>
                ))}
                <div onClick={() => SetSnavbar((prev) => !prev)} className='w-fit h-fit'>
                    {Snavbar ? <Image className='max-md:visible w-6 md:hidden  h-fit' src={closeMenu} alt='menuIcon' /> : <Image className='max-md:visible w-6 md:hidden  h-fit' src={menu} alt='menuIcon' />}
                </div>
            </div>
        </section>
    )
}

export default Navbar
