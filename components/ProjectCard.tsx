import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Button from './UI/Button'
import { Github, Globe } from "lucide-react"

interface projectcard {
    projectCover: StaticImageData,
    projectName: string,
    about: string,
    liveLink: string,
    github: string
}

function ProjectCard({ projectCover, projectName, about, liveLink, github }: projectcard) {
    return (
        <div className='w-full px-4 pt-2 space-y-4 pb-3 flexcolCenter bg-neutral-900 border-2 border-greenPrimary-800 rounded-md'>
            <div className='w-full space-y-2'>
                <div className='w-full flex justify-start items-center'>
                    <span className='w-fit h-fit font-bold leading-tight italic'>{projectName}</span>
                </div>
                <div className='w-full overflow-hidden rounded   '>
                    <Image className='rounded hover:scale-105    transition-all duration-1000 ease-out' alt='cover image' src={projectCover} />
                </div>
                <p className='font-normal text-sm text-neutral-300'>{about}</p>
            </div>
            <div className='w-fit lg:space-x-8 space-x-4 flexCenter'>
                <Button variant='primary' startIcon={<Globe />} text='Livelink' size='default' />
                <Button variant='secondary' startIcon={<Github />} text='Github' size='default' />
            </div>
        </div>
    )
}

export default ProjectCard
