"use client"

import React, { useState } from 'react'
import QnaIcon from './UI/QnaIcon'
import Image from 'next/image'
import myImage from "../public/Images/Profile.png"


interface questionT {
    id: number
    question: string,
    answer: string,
    open: any,
    setOpen: any
};

function QuestionBlock({ question, answer, id, open, setOpen }: questionT) {
    console.log(open)
    return (
        <div >
            <div className='w-fit flexCenter'>
                <span className='text-white leading-tight text-normal  text-xs w-fit'>{question}</span>
                <div onClick={() => setOpen((prev: number) => prev === id ? 10 : id)} className='w-fit h-fit'>
                    <QnaIcon />
                </div>
            </div>
            <div className='w-full bg-greenPrimary-800 h-1'>

            </div>
            {open === id && (<div className='w-full space-x-2 rounded-b-md px-2 pt-3 pb-6 flex justify-start items-start bg-neutral-900'>
                <Image className='w-6 h-6 object-cover border-2 border-dashed border-greenPrimary-700 rounded-full' alt='persona' src={myImage} />
                <p className='text-xs font-normal text-neutral-300'>{answer}</p>
            </div>)}
        </div>
    )
}

export default QuestionBlock
