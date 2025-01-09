import React from 'react'

interface SnavMenu {
    text: string
}
function SnavMenu({ text }: SnavMenu) {
    return (
        <div className='flex flex-col justify-start items-start'>
            <div className='flex justify-start items-start w-full h-fit'>
                <span className='text-md  font-semibold  uppercase font-white'>{text}</span>
            </div>
            <div className='w-full h-1 bg-greenPrimary-900'>

            </div>
        </div>
    )
}

export default SnavMenu
