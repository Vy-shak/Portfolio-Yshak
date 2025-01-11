import React from 'react'
import { StackCard } from '@/components'
import Typescript from '../../public/Images/Skills/main/Typescript.png'
import SkillCard from '@/components/SkillCard';
import { div } from 'motion/react-client';
const Mainstack1 = [
    {
        id: 1,
        Img: Typescript,
        text: 'Typescript'
    },
    {
        id: 2,
        Img: Typescript,
        text: 'React'
    },
    {
        id: 3,
        Img: Typescript,
        text: 'Next.js'
    }];

const Mainstack2 = [{
    id: 4,
    Img: Typescript,
    text: 'Node.js'
},
{
    id: 5,
    Img: Typescript,
    text: 'MongoDB'
},
{
    id: 6,
    Img: Typescript,
    text: 'PostgreSQL'
}
]

const Frontend = [
    {
        id: 1,
        Img: Typescript,
        text: 'React'
    },
    {
        id: 2,
        Img: Typescript,
        text: 'HTML5'
    },
    {
        id: 3,
        Img: Typescript,
        text: 'CSS'
    },
    {
        id: 4,
        Img: Typescript,
        text: 'Tailwind CSS'
    },
    {
        id: 5,
        Img: Typescript,
        text: 'Redux'
    },
    {
        id: 6,
        Img: Typescript,
        text: 'Zustand'
    },
    {
        id: 7,
        Img: Typescript,
        text: 'Recoil'
    },
    {
        id: 8,
        Img: Typescript,
        text: 'Shadcn'
    },
    {
        id: 9,
        Img: Typescript,
        text: 'Accernity UI'
    }
];

const Backend = [
    {
        id: 1,
        Img: Typescript,
        text: 'Express'
    },
    {
        id: 2,
        Img: Typescript,
        text: 'MongoDB'
    },
    {
        id: 3,
        Img: Typescript,
        text: 'PostgreSQL'
    },
    {
        id: 4,
        Img: Typescript,
        text: 'WebSockets'
    },
    {
        id: 5,
        Img: Typescript,
        text: 'Prisma'
    }
];




function Skills() {
    return (
        <div className='w-full mt-4 sm:mt-5 md:mt-6 lg:mt-8'>
            <div className='flexCenter border-y-2 border-greenPrimary-1100 w-full h-fit'>
                <span className='w-fit leading-none font-bold text-lg sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap'>Skills</span>
            </div>
            <div className='w-full mt-3 space-y-6 rounded-md pt-3 pb-2 bg-neutral-900'>
                <div className='flexCenter mt-3 space-y-3    flex-col'>
                    <span className='font-bold sm:text-sm md:text-lg text-xs'>TechStack</span>
                    <div className='flex-col space-y-2 flexCenter'>
                        <div className='flexCenter md:flex md:justify-start space-x-2 w-full'>
                            {Mainstack1.map((item) => (
                                <StackCard key={item.id} Img={item.Img} text={item.text} />
                            ))}
                        </div>
                        <div className='flexCenter flexCenter md:flex md:justify-start space-x-2 '>
                            {Mainstack2.map((item) => (
                                <StackCard key={item.id} Img={item.Img} text={item.text} />
                            ))}
                        </div>
                    </div>
                    <div className='w-full flexCenter flex-col space-y-4'>
                        <div className='w-full pt-2 sm:pt-3 md:pt-4 lg:pt-6 border-t-2  border-greenPrimary-1100  flexCenter flex-col gap-y-4'>
                            <span className='font-bold sm:text-sm md:text-lg  text-xs'>Front end</span>
                            <div className='flex justify-center gap-2 items-center flex-wrap space-x-2 '>
                                {Frontend.map((item) => (
                                    <SkillCard key={item.id} Img={item.Img} text={item.text} />
                                ))}
                            </div>
                        </div>
                        <div className='w-full pt-2 sm:pt-3 md:pt-4 lg:pt-6 border-t-2 border-greenPrimary-1100 flexCenter flex-col gap-y-4'>
                            <span className='font-bold sm:text-sm md:text-lg  text-xs'>Backend</span>
                            <div className='flex justify-center gap-2 items-center flex-wrap space-x-2 '>
                                {Backend.map((item) => (
                                    <SkillCard key={item.id} Img={item.Img} text={item.text} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
