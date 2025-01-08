import React from 'react'
import Image from 'next/image'
import Button from './UI/Button'

interface projectcard {
    projectCover: any,
    projectName: string,
    about: string,
    liveLink: string,
    github: string
}

function ProjectCard({ projectCover, projectName, about, liveLink, github }: projectcard) {
    return (
        <div className='w-full flexcolCenter bg-neutral-900 border-2 border-greenPrimary-800 rounded-md'>
            <span className='w-fit h-fit leading-tight italic'>{projectName}</span>
            <Image alt='cover image' src={projectCover} />
            <p>{about}</p>
            <div>
                <Button variant='primary' text='livelink' size='sm' />
                <Button variant='secondary' text='github' size='sm' />
            </div>
        </div>
    )
}

export default ProjectCard
