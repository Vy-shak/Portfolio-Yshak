import React from 'react'
import EasyplotL from '../../public/Images/Projects/Easyplot Landing.png'
import Mainproject from '@/components/projects/Mainproject'

export default function Projects() {
    const projectDetails = [
        {
            id: 'project1',
            projectName: "Biddify",
            subHeading: "A live auction app for selling vintage vehicles",
            about: "Biddify is a live auction platform where users can auction their vintage vehicles and place bids without any transactions involved. It’s a community-driven space for classic car enthusiasts to showcase, discover, and bid on timeless automobiles. Connect with like-minded collectors and find your next vintage ride!",
            profileImg: EasyplotL,
            gitLink: "https://github.com/Vy-shak/liveAuction-app",
            liveLink: "https://live-auction-app.vercel.app",
        },
        {
            id: 'project2',
            projectName: "ChalkSync",
            subHeading: "A collaborative whiteboard for real-time brainstorming",
            about: "ChalkSync is an interactive whiteboard that enables real-time collaboration for teams, students, and creatives. With features like freehand drawing, sticky notes, and multi-user access, it’s perfect for remote brainstorming, teaching, and planning. Share your ideas visually and work together seamlessly from anywhere!",
            profileImg: EasyplotL,
            gitLink: "https://github.com/Vy-shak/chalksync",
            liveLink: "https://chalksync.vercel.app",
        }
    ];
    return (
        <section className='w-full space-y-4 pt-16 flexcolCenter h-full'>
            <div className='flex justify-start items-center border-y-2 border-greenPrimary-1100 w-full h-fit'>
                <span className='w-fit leading-none font-bold text-lg sm:text-lg md:text-xl lg:text-3xl whitespace-nowrap'>Selected Projects</span>
            </div>
            <div className='w-full lg:flex-row flex flex-col '>
                <div className='w-full flex justify-start items-center flex-col gap-y-6 '>
                    {projectDetails.map((item)=>(
                        <Mainproject ProfileImg={item.profileImg} liveLink={item.liveLink} gitLink={item.gitLink} about={item.about} subHeading={item.subHeading} projectName={item.projectName} key={item.id}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
