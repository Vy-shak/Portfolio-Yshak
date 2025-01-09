'use client'

import React, { useState } from 'react'
import QuestionBlock from '@/components/QuestionBlock'
const qna = [
    {
        id: 1,
        question: 'What are plugins that you use to make your development workflow faster',
        answer: 'An social platforms to meet, get mentors, find real mentors and quick sheet merging platform build for architects'
    },
    {
        id: 2,
        question: 'How do you manage state in your React projects?',
        answer: 'I use Recoil for state management to handle global state more effectively and avoid prop drilling.'
    },
    {
        id: 3,
        question: 'What tools do you use for front-end development?',
        answer: 'I primarily use VSCode, Tailwind CSS for styling, and Vite for bundling. Additionally, I use React for UI components.'
    },
    {
        id: 4,
        question: 'What are some important features to include in a project management tool?',
        answer: 'Task assignment, progress tracking, file sharing, and collaboration are key features. Integrating with third-party tools is also crucial.'
    }
];

function QnaZone() {
    const [open, setOpen] = useState(1)
    return (
        <section className='w-full justify-center items-center flex-col lg:mt-12 md:mt-8 mt-6 space-y-6'>
            <div className='flexCenter border-y-2 border-greenPrimary-1100 w-full h-fit'>
                <span className='w-fit leading-none font-bold text-lg sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap'>Qna Zone</span>
            </div>
            <div className='w-full flex justify-center flex-col items-center'>
                <div className='space-y-8 max-w-xl w-full transition-all duration-500'>
                    {qna.map((item) => (
                        <QuestionBlock key={item.id} id={item.id} setOpen={setOpen} open={open} answer={item.answer} question={item.question} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default QnaZone
