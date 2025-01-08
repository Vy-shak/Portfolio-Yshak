"use client"

import { motion } from 'motion/react';
import React from 'react';


interface bgtext {
    text: string,
    align: string,
    from: string,
    to: string
}


function BgText({ text, align, from, to }: bgtext) {
    return (
        <motion.div animate={{ translateY: [`${from}`, `${to}`] }} transition={{ translateY: { duration: 50, repeatType: 'mirror', repeat: Infinity } }} style={{ writingMode: 'vertical-rl' }} className={`absolute ${align} top-0 uppercase font-semibold   w-fit h-fit`}>
            <span className={`w-fit h-fit -z-10  whitespace-nowrap leading-none opacity-10 text-transparent bg-clip-text bg-gradient-to-l from-white to-gradient-base text-2xl sm:text-4xl md:text-5xl lg:text-7xl`}>{text}</span>
        </motion.div>
    )
}

export default BgText
