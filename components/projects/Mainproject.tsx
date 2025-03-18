import React from 'react'
import ProjectCard from '../ProjectCard'
import { StaticImageData } from 'next/image'
import Button from '../UI/Button'
import { Globe, Github } from 'lucide-react'

interface Projectdetails {
    ProfileImg: StaticImageData,
    projectName: string,
    subHeading: string,
    about: string,
    gitLink: string,
    liveLink: string
}

function Mainproject({ ProfileImg,
    projectName,
    subHeading,
    about,
    gitLink,
    liveLink }: Projectdetails) {
    return (
        <div className='w-full flex flex-col md:flex-row gap-4 justify-between items-start'>

            <div className='w-full md:w-2/5 lg:w-1/3'>
                <ProjectCard projectName={projectName} projectCover={ProfileImg} />
            </div>


            <div className='w-full md:w-3/5 lg:w-2/3 flex justify-start items-start gap-4 flex-col'>
                <span className='font-bold text-2xl sm:text-3xl'>{projectName}</span>

                <div className='w-full gap-2 flex justify-start items-start flex-col'>
                    <span className='w-fit text-lg sm:text-xl text-neutral-100 font-semibold leading-tight italic'>{subHeading}</span>
                    <div className='w-full'>
                        <span className='text-sm sm:text-md text-neutral-50 font-normal leading-tight'>{about}</span>
                    </div>
                </div>

                <div className='w-full flex justify-start items-start gap-x-4'>
                    <a href={liveLink} target="_blank" className='w-fit'>
                        <Button
                            variant='primary'
                            startIcon={<Globe />}
                            text='Livelink'
                            size='default'
                        />
                    </a>
                    <a href={gitLink} target="_blank" className='w-fit'>
                        <Button
                            variant='secondary'
                            startIcon={<Github />}
                            text='Github'
                            size='default'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mainproject
