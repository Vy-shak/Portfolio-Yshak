import { Section } from 'lucide-react'
import React from 'react'
import { BgText } from '@/components'
import { clipPath } from 'motion/react-client'

function Hero() {
    return (
        <section className='w-full flexCenter bg-neutral-600'>
            <BgText key={1} align={'left-10'} text=' Developer turned Designer Developer turned Designer ' from={'`0'} to='-100vh' />
            <BgText key={2} align={'right-10'} text='designer turned Developer designer turned Developer designer turned Developer ' from={'0'} to='100vh' />
            <div className='w-full flex justify-center items-center flex-col mt-16'>
                <div className='w-full h-fit flexcolCenter'>
                    <span className=' w-fit text-7xl font-semibold'>DEVELOPER</span>
                    <span className=' w-fit text-4xl font-semibold italic'>Who crafts</span>
                </div>
                <div className='flex w-full p-2'>
                    <div className='w-full z-10 h-screen py-4 pl-4'>
                        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 4rem), calc(100% - 4rem) 100%, 0 100%)" }} className='w-full bg-neutral-900 rounded-md h-full'>
                            hey
                        </div>
                    </div>
                    <div className='w-full z-10 h-screen py-4'>
                        <div style={{
                            clipPath: "inset(0px 0px 10% 0px round 2%)"
                        }} className='w-full -ml-6 rounded-md h-full bg-neutral-900'>
                            hello
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero
