"use client";
import { useState } from 'react';
import Image from 'next/image'
import radio from '../../public/Images/Footer/Radio.png'
import { Play, Pause } from 'lucide-react';


function Footer() {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    const playAudio = () => {
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
            newAudio.play()
        }
    };


    return (
        <section className='w-full justify-between pt-3 sm:pt-4 md:pt-6  h-28 sm:h-32 md:h-36 lg:h-40 flex-col flex py-2 md:py-4 lg:py-6 items-center'>
            <div className='w-full max-w-md'>
                <h2 className='text-[14px] sm:text-xs md:text-sm lg:text-md font-semibold text-center'><span className='whitespace-nowrap'>" The people who are crazy enough to think "</span><br /><span >they can change the world </span><br /><span className='underline decoration-greenPrimary-500'>are the ones who do "</span></h2>
                <div className='w-full flex justify-end items-center text-white'>
                    <span className='text-[10px]  whitespace-nowrap'>-apple's "Think diffrent" commercial, 1997</span>
                </div>
            </div>
            <div className='w-full flexCenter space-x-2'>
                <span className='whitespace-nowrap sm:text-xs md:text-sm  text-[12px]'>Scrolled too much? Listen something good =</span>
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
