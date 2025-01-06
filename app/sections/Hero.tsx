import { Section } from 'lucide-react'
import React from 'react'
import { BgText } from '@/components'

function Hero() {
    return (
        <section className='w-full h-full bg-neutral-900'>
            <BgText key={1} align={'left-10'} text='Developer turned Designer' from={'`0'} to='-100vh' />
            <BgText key={2} align={'right-10'} text='designer turned Developer' from={'`0'} to='100vh' />
        </section>
    )
}

export default Hero
