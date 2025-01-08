import React from 'react'

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
        <section className='absolute  py-2 z-50 items-center justify-center  top-0 w-full h-12 '>
            <div className='flex justify-between items-center px-8 w-full h-full bg-neutral-900 rounded-md'>
                {Navmenu.map((item) => (
                    <span key={item.id} className='text-white hidden md:visible whitespace-nowrap border-2 border-transparent transition-colors duration-100 hover:border-greenPrimary-400  hover:bg-neutral-600 text-xs px-3 py-1 rounded-md  w-fit'>{item.text}</span>
                ))}
            </div>
        </section>
    )
}

export default Navbar
