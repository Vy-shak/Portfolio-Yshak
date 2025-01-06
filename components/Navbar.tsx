import React from 'react'

const Navmenu = [{
    id: 'services',
    text: 'Projects'
}, {
    id: 'team',
    text: 'About'
}, {
    id: 'Resume',
    text: 'Resume'
}]

function Navbar() {
    return (
        <section className='fixed px-4 py-2 z-50 items-center justify-center border-neutral-500 border-b-2 top-0 w-full h-12 bg-neutral-900'>
            <div className='flex justify-between items-center px-8  w-full h-full bg-white rounded-sm'>
                {Navmenu.map((item) => (
                    <span key={item.id} className='text-neutral-900 hover:p-1 hover:bg-neutral-700 hover:text-white w-fit'>{item.id}</span>
                ))}
            </div>
        </section>
    )
}

export default Navbar
