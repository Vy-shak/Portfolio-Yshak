import { Section } from 'lucide-react'
import React from 'react'
import { BgText } from '@/components'
import { clipPath } from 'motion/react-client'

function Hero() {
    return (
        <section className='w-full flexCenter '>
            <BgText key={1} align={'left-10'} text=' Developer turned Designer Developer turned Designer ' from={'`0'} to='-100vh' />
            <BgText key={2} align={'right-10'} text='designer turned Developer designer turned Developer designer turned Developer ' from={'0'} to='100vh' />
            <div className='flex w-full p-2'>
                <div className='w-full z-10 h-screen py-4 pl-4'>
                    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 4rem), calc(100% - 4rem) 100%, 0 100%)" }} className='w-full rounded-md h-full bg-blue-500'>
                        hey
                    </div>
                </div>
                <div className='w-full z-10 h-screen py-4'>
                    <div style={{
                        clipPath: "inset(0px 0px 10% 0px round 2%)"
                    }} className='w-full -ml-6 rounded-md h-full bg-blue-500'>
                        hello
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Hero
