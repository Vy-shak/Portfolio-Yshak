import React from 'react'
import menu from '../public/Icons/Navmenu.svg'
import Image from 'next/image'
const Navmenu = [{
    id: 'projects',
    text: 'Projects'
}, {
    id: 'team',
    text: 'About'
}, {
    id: 'Resume',
    text: 'Resume'
}, {
    id: 'Journey',
    text: 'Journey'
}, {
    id: 'Social',
    text: 'Social'
},
{
    id: 'Tech-stack',
    text: 'Tech-stack'
},
]

function Navbar() {
    return (
        <section className='fixed px-2 py-1  md:py-2 z-50 items-center justify-center  top-0 w-full h-12 '>
            <div className='flex max-md:justify-center md:justify-between items-center px-8 w-full h-full bg-neutral-900 rounded-md'>
                {Navmenu.map((item) => (
                    <span key={item.id} className='text-white max-md:hidden md:visible   whitespace-nowrap border-2 border-transparent transition-colors duration-100 hover:border-greenPrimary-400  hover:bg-neutral-600 text-xs px-3 py-1 rounded-md  w-fit'>{item.text}</span>
                ))}
                <Image className='max-md:visible w-6 md:hidden w-fit h-fit' src={menu} alt='menuIcon' />
            </div>
        </section>
    )
}

export default Navbar
