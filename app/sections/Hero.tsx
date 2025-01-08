import React from 'react'
import { BgText } from '@/components'
import { Myprofile, Button } from '@/components'
import Bubble1 from "../../public/Images/Hero/Bubble1.png"
import Image from 'next/image'
function Hero() {
    return (
        <section className='w-full flexCenter overflow-y-hidden '>
            <Image alt='decoration' className='absolute w-28 md:w-36 lg:w-72 z-20 top-0 right-0' src={Bubble1} />
            <BgText key={1} align={'left-0'} text=' Developer turned Designer Developer turned Designer ' from={'`0'} to='-100vh' />
            <BgText key={2} align={'right-0'} text='designer turned Developer designer turned Developer designer turned Developer ' from={'0'} to='100vh' />
            <div className='w-full z-10 flex justify-center items-center flex-col mt-12  md:mt-12 lg:mt-16'>
                <div className='w-full h-fit flexcolCenter'>
                    <span className=' w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>DEVELOPER</span>
                    <span className=' w-fit text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold italic'>Who crafts</span>
                </div>
                <div className='flex lg:flex-row flex-col w-full px-2 sm:px-4 md:px-10 lg:px-16'>
                    <div className='w-full z-10 h-60 sm:h-64 lg:h-96 md:h-72 px-0  lg:px-0 sm:px-10 md:px-12 py-2 lg:py-4 '>
                        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)" }} className='w-full px-6 py-4 bg-neutral-900 flexcolCenter rounded-tl-md rounded-bl-md h-full'>
                            <Myprofile />
                        </div>
                    </div>
                    <div style={{
                        clipPath: "inset(0px 0px 12.5% 0px round 0 0 2% 0)"
                    }} className='w-full z-10 h-fit pb-6 md:h-96 py-0   lg:py-4'>
                        <div className='w-full pt-4 px-2 sm:px-2 md:px-4 lg:p-0 flex space-y-3 md:space-y-2 lg:space-y-4 flex-col items-start justify-start  lg:pt-4  rounded-tr-lg h-fit pb-4   lg:h-full bg-neutral-900'>
                            <h2 className='italic font-semibold lg:text-2xl md:text-2xl sm:text-xl text-sm'>Hello, I’m <span className='text-greenPrimary-600'>Yshak.</span><br />
                                Designing with intent, coding with purpose.</h2>
                            <p className='w-fit text-neutral-300 lg:text-xs md:text-sm sm:text-xs text-[14px]  font-normal'>I started my journey designing interfaces, but I soon realized my passion couldn’t be confined to design alone.
                                This realization led me to dive into coding, exploring the <span className='underline decoration-greenPrimary-700'>full spectrum of creation.</span>
                                Today, I’m a  <span className='underline decoration-greenPrimary-700'>full-stack developer,</span> seamlessly blending design and development to craft impactful solution</p>
                            <Button variant='primary' size='default' text='Exolore projects' ></Button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero
