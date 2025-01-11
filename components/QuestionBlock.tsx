"use client";
import QnaIcon from './UI/QnaIcon'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react';

import myImage from "../public/Images/Profile.png"

interface questionT {
    id: number
    question: string,
    answer: string,
    open: number,
    setOpen: Dispatch<SetStateAction<number>>
}

function QuestionBlock({ question, answer, id, open, setOpen }: questionT) {
    console.log(open)
    return (
        <div className='w-full' >
            <div className='w-full  flex justify-between items-center'>
                <span className='text-white leading-tight text-normal sm:text-sm md:text-md lg:text-lg  text-xs w-fit'>{question}</span>
                <div onClick={() => setOpen((prev: number) => prev === id ? 10 : id)} className={`w-fit ${open === id ? 'rotate-45' : 'rotate-0'} transition duration-300 h-fit`}>
                    <QnaIcon />
                </div>
            </div>
            <div className='w-full mt-2 bg-greenPrimary-900 h-1'>

            </div>
            <div className={` ${open === id ? 'max-h-fit pb-6 pt-3  ' : 'max-h-0  '}  transition-all duration-300 flex space-x-2 rounded-b-md px-2 justify-start items-start w-full bg-neutral-900`}>
                <Image className={`${open === id ? 'visible' : 'hidden'}  w-6 h-6  object-cover border-2 border-dashed border-greenPrimary-700 rounded-full`} alt='persona' src={myImage} />
                <p className={`${open === id ? 'visible' : 'hidden'} md:text-sm text-xs font-normal text-neutral-300`}>{answer}</p>
            </div>
        </div>
    )
}

export default QuestionBlock
