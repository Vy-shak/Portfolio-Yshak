import React from 'react'
import Image from 'next/image'
import Myprofile from "../public/Images/Profile.png"


function Profile() {
    return (
        <div className='w-full h-full flexcolCenter border-2 border-greenPrimary-900 rounded-md'>
            <Image className='w-36' alt='yshak' src={Myprofile} />
            <span className='font-semibold font-sm text-white'>Yshak Neerepurath</span>
            <span className='font-regular font-xs text-white uppercase'>Full stack developer &</span>
            <span className='font-regular font-xs text-white uppercase'>UI-UX</span>
        </div>
    )
}

export default Profile
