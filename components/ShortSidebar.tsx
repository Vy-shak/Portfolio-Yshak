'use client'
import React from 'react'
import SnavMenu from './UI/SnavMenu'
import { Navmenu } from './Navbar'


function ShortSidebar() {
    return (
        <div className='w-screen  absolute top-0 left-0 right-0 z-40 h-full px-4 py-12 '>
            <div className='w-full space-y-4 flex-col px-4 pt-6 h-full border-2 flex border-greenPrimary-1100 bg-neutral-900 rounded'>
                {Navmenu.map((item) => <SnavMenu key={item.id} text={item.text} />)}
            </div>
        </div>
    )
}

export default ShortSidebar
