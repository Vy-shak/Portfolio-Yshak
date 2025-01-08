import React from 'react'
import ProjectCard from '@/components/ProjectCard'
import EasyplotL from '../../public/Images/Projects/Easyplot Landing.png'
export default function Projects() {
    return (
        <section className='w-full space-y-4 flexcolCenter h-full'>
            <span className='w-fit leading-none font-bold text-sm sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap'>Selected Projects</span>
            <div className='w-full lg:flex-row flex flex-col gap-2'>
                <div className='w-full flex-col space-y-2'>
                    <ProjectCard liveLink='link' github='link' about='An social platfroms to meet, get mentors, find real mentors and quick sheet merging platform build for archietcts' projectName='Easyplot' projectCover={EasyplotL} />
                    <ProjectCard liveLink='link' github='link' about='An social platfroms to meet, get mentors, find real mentors and quick sheet merging platform build for archietcts' projectName='Easyplot' projectCover={EasyplotL} />

                </div>
                <div className='w-full flex-col space-y-2'>
                    <ProjectCard liveLink='link' github='link' about='An social platfroms to meet, get mentors, find real mentors and quick sheet merging platform build for archietcts' projectName='Easyplot' projectCover={EasyplotL} />
                    <ProjectCard liveLink='link' github='link' about='An social platfroms to meet, get mentors, find real mentors and quick sheet merging platform build for archietcts' projectName='Easyplot' projectCover={EasyplotL} />
                </div>
            </div>
        </section>
    )
}
