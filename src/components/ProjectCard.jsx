import React from 'react'

const ProjectCard = ({projects}) => {
  return (
    <div className='min-h-20 bg-white/50 rounded border border-gray-200 w-full my-5 p-8 
    flex justify-between items-center transition duration-300 hover:scale-105
    '>
      <div>
        <h2 className='font-bold'>{projects.title} / {projects.difficulty}</h2>
        <p className='text-gray-600 text-[15px]'>{projects.description}</p>
        
      </div>
      <div>
        <button className=' pinkbtn'>Preview</button>
      </div>
    </div>
  )
}

export default ProjectCard