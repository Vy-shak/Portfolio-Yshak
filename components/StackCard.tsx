import React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface card {
    Img: StaticImageData,
    text: string
}
function StackCard({ Img, text }: card) {
    return (
        <div className='flexCenter  border-2 border-neutral-500 md:pl-1 lg:pl-2 md:pr-2 lg:pr-4 p-1 md:space-x-2 lg:space-x-3 space-x-1 bg-neutral-600 grow-0 flex-shrink-0 md:w-32 lg:w-44  w-fit rounded-sm'>
            <Image className='w-2 md:w-4 lg:w-6 ' src={Img} alt='logo' />
            <span className='text-[14px] sm:text-xs md:text-sm w-fit h-fit italic font-bold'>{text}</span>
        </div>
    )
}

export default StackCard
