import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface projectcard {
    projectCover: StaticImageData,
    projectName: string,
}

function ProjectCard({ projectCover, projectName}: projectcard) {
    return (
        <div className='w-full px-4  space-y-4 pb-3 flexcolCenter bg-neutral-900 border-2 border-greenPrimary-800 rounded-md'>
            <div className='w-full space-y-2'>
                <div className='w-full flex justify-start items-center'>
                    <span className='w-fit h-fit font-bold leading-tight italic'>{projectName}</span>
                </div>
                <div className='w-full overflow-hidden rounded   '>
                    <Image className='rounded hover:scale-105    transition-all duration-1000 ease-out' alt='cover image' src={projectCover} />
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
