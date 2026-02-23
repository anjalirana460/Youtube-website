import React from 'react'
import { socialMedia } from '../assets/JS-assets/SocialMedia'

const Footer = () => {
  return (
    <>
      <div className=' min-h-[40vh] flex md:justify-evenly md:items-center flex-col border-t-2 shadow backdrop-blur-md border-gray-200 gap-5 p-5 bg-[#10002B]'>
        <div className='flex flex-col text-left md:text-center md:flex-row gap-10 text-white font-bold text-[18px]'>
          <a href="/about">About</a>
          <a href="/lectures">Lectures</a>
          <a href="/projects">Project</a>
        </div>
        <div className='flex gap-5 md:gap-10 bg-white px-2 py-1 rounded-full'>
          {
            socialMedia.map((media)=>{
              const Icon=media.icon;
              return (
                <a href={media.url} target='_blank' key={media.name}><Icon className='socialMedia' size={35}/></a>
              )
            })  
          }
        </div>
        <div>
          @ 2026 Code With Anjali. All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer