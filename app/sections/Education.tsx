
import React from 'react'

function Education() {
    return (
        <section className='w-full flexCenter flex-col h-fit'>
            <div className='flexCenter border-y-2 border-greenPrimary-1100 w-full h-fit'>
                <span className='w-fit leading-none font-bold text-lg sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap'>Education & Experience</span>
            </div>
            <div className='flex lg:flex-row flex-col w-full px-2 sm:px-4 md:px-10 lg:px-16'>
                <div style={{
                    clipPath: "inset(0px 0px 12.5% 0px round 0 0 2% 0)"
                }} className='w-full z-10 h-fit pb-6 md:h-96 py-0   lg:py-4'>
                    <div className='w-full pt-4 px-2 sm:px-2 md:px-4 lg:p-0 flex space-y-3 md:space-y-2 lg:space-y-4 flex-col items-start justify-start  lg:pt-4  rounded-tr-lg h-fit pb-4   lg:h-full bg-neutral-900'>
                    </div>
                </div>
                <div className='w-full z-10 h-60 sm:h-64 lg:h-96 md:h-72 px-0  lg:px-0 sm:px-10 md:px-12 py-2 lg:py-4 '>
                    <div style={{
                        clipPath: "polygon(100% 0, 0 0, 0 calc(100% - 2rem), 2rem 100%, 100% 100%)"
                    }} className='w-full px-6 py-4 bg-neutral-900 flexcolCenter rounded-tl-md rounded-bl-md h-full'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
