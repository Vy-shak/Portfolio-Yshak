import React from 'react'
import Image from 'next/image'
import { card } from './StackCard'


function SkillCard({ Img, text }: card) {
    return (
        <div className='w-fit h-fit overflow-hidden flexCenter flex-col '>
            <Image className='w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 border-greenPrimary-1100 border-2     rounded' alt='logo' src={Img} />
            <span className='w-fit text-[12px] font-medium h-fit whitespace-nowrap text-white '>{text}</span>
        </div>
    )
}

export default SkillCard
