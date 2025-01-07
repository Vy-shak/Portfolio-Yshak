import React from 'react'
import { BgText } from '@/components'
import { Myprofile, Button } from '@/components'
function Hero() {
    return (
        <section className='w-full flexCenter '>
            <BgText key={1} align={'left-0'} text=' Developer turned Designer Developer turned Designer ' from={'`0'} to='-100vh' />
            <BgText key={2} align={'right-0'} text='designer turned Developer designer turned Developer designer turned Developer ' from={'0'} to='100vh' />
            <div className='w-full flex justify-center items-center flex-col mt-16'>
                <div className='w-full h-fit flexcolCenter'>
                    <span className=' w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>DEVELOPER</span>
                    <span className=' w-fit text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold italic'>Who crafts</span>
                </div>
                <div className='flex w-full px-6 sm:px-8 md:px-10 lg:px-16'>
                    <div className='w-full z-10 h-96 py-4 '>
                        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)" }} className='w-full px-6 py-4 bg-neutral-900 flexcolCenter rounded-tl-md rounded-bl-md h-full'>
                            <Myprofile />
                        </div>
                    </div>
                    <div style={{
                        clipPath: "inset(0px 0px 12.5% 0px round 0 0 2% 0)"
                    }} className='w-full z-10 h-96  py-4'>
                        <div className='w-full flex space-y-8 flex-col items-start justify-start pt-4  rounded-tr-lg  h-full bg-neutral-900'>
                            <h2 className='italic font-semibold lg:text-3xl text-2xl'>                            Hello, I ‘am Yshak
                                Yes. i Innovate in figma and
                                Executes in code</h2>
                            <Button variant='primary' size='sm' text='see my projects' ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero
