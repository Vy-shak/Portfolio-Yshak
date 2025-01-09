"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import radio from '../../public/Images/Footer/Radio.png'
import { Play, Pause } from 'lucide-react';


function Footer() {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    const playAudio = () => {
        console.log('hello')
        if (audio) {
            if (!audio.paused) {
                audio.pause();
                audio.currentTime = 0;
                setAudio(null)
            } else {
                audio.play();
            }
        } else {
            const newAudio = new Audio('/music/Play1.mp3');
            setAudio(newAudio);
            newAudio.play();
        }
    };


    return (
        <section className='w-full -mt-2 h-28 flex-col space-y-3  flexCenter'>
            <div className='w-full'>
                <h2 className='text-[14px]  font-semibold text-center'><span className='whitespace-nowrap'>The people who are crazy enough to think </span><br /><span>they can change the world </span><br /><span>are the ones who do</span></h2>
                <div className='w-full flex justify-end items-center text-white'>
                    <span className='text-[10px] whitespace-nowrap'>-apple's "Think diffrent" commercial, 1997</span>
                </div>
            </div>
            <div className='w-full flexCenter space-x-2'>
                <span className='whitespace-nowrap text-[12px]'>Scrolled too much?Listen something good</span>
                <div className='flexCenter'>
                    <Image className='w-6' alt='radio' src={radio} />
                    <div onClick={playAudio} className='w-fit h-fit'>
                        {audio ? <Pause /> : <Play />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
