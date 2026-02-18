import React from 'react'
import { socialMedia } from '../assets/JS-assets/SocialMedia'

const Footer = () => {
  return (
    <>
      <div className=' min-h-[40vh] flex md:justify-evenly md:items-center flex-col border shadow backdrop-blur-md border-gray-200 gap-5 p-5'>
        <div className='flex flex-col text-left md:text-center md:flex-row gap-10 text-black'>
          <a href="/about">About</a>
          <a href="/lectures">Lectures</a>
          <a href="/projects">Project</a>
          <a href="#">DEMO 1</a>
          <a href="#">DEMO 2</a>
          <a href="#">DEMO 3</a>
        </div>
        <div className='flex gap-5 md:gap-10'>
          {
            socialMedia.map((media)=>{
              const Icon=media.icon;
              return (
                <a href="#" key={media.name}><Icon className='socialMedia' size={35}/></a>
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