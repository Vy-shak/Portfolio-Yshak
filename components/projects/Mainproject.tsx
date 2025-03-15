import React from 'react'
import ProjectCard from '../ProjectCard'
import { StaticImageData } from 'next/image'

interface Projectdetails {
    ProfileImg:StaticImageData,
    projectName: string,
    subHeading: string,
    about: string,
    gitLink: string,
    liveLink: string
}

function Mainproject({ ProfileImg: StaticImageData,
    projectName,
    subHeading,
    about,
    gitLink,
    liveLink }: Projectdetails) {
    return (
        <div className='w-full flex justify-between items-center'>
            <ProjectCard />
            <div className='w-full flexStart flex-col'>
            </div>
        </div>
    )
}

export default Mainproject
