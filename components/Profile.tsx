import React from 'react'
import Image from 'next/image'
import Myprofile from "../public/Images/Profile.png"


function Profile() {
    return (
        <div className='w-full h-full flexcolCenter border-2 border-greenPrimary-900 rounded-md'>
            <Image className='w-16 md:w-24 lg:w-36' alt='yshak' src={Myprofile} />
            <span className='font-semibold text-xs sm:text-xs md:text-sm  lg:text-md text-white whitespace-nowrap'>Yshak Neerepurath</span>
            <span className='font-regular text-[12px] sm:text-[12px] md:text-[14px] lg:text-xs whitespace-nowrap text-white  uppercase'>Full stack developer &</span>
            <span className='font-regular text-[12px] sm:text-[12px] md:text-[14px]  lg:text-xs text-white whitespace-nowrap uppercase'>UI-UX Designer</span>
        </div>
    )
}

export default Profile
