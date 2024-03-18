import React from 'react'
import profilePhoto from "../../images/personal-photo.jpeg"
import DownloadPDFButton from './Resume/Resume';

function Hero() {
  return (
    <div className='md:flex items-center px-3 md:px-0 mt-2 md:mt-10 gap-x-5 mb-16'>
        <img className='border-4 border-neutral-200 size-28 md:size-32 rounded-full mx-auto md:m-0 mb-2 md:mb-0' src={profilePhoto} alt="XD" />
        <div className='text-center'>
            <h1 className='text-yellow-500 font-bold text-3xl md:flex md:text-5xl md:pb-2'>Javier González</h1>
            <h2 className='text-black dark:text-neutral-200 font-semibold text-md pt-1 pb-2'>Analista de sistemas y full stack developer de <span className='text-blue-400'>Argentina</span>.</h2>
            <div className='md:flex'>
              <DownloadPDFButton/>
            </div>
        </div>
    </div>
  )
}

export default Hero