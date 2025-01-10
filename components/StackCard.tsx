import React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface card {
    Img: StaticImageData,
    text: string
}
function StackCard({ Img, text }: card) {
    return (
        <div className='flexCenter  border-2 border-neutral-500 p-1 space-x-1 bg-neutral-600 grow-0 flex-shrink-0  w-fit rounded-sm'>
            <Image className='w-2' src={Img} alt='logo' />
            <span className='text-[14px] w-fit h-fit italic font-bold'>{text}</span>
        </div>
    )
}

export default StackCard
