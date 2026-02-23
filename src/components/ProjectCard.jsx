import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({projects}) => {
  const navigate = useNavigate();
  return (
    <div className='min-h-20 bg-[#240046]/80 rounded-[15px] border border-gray-200 w-full my-5 p-8 shadow backdrop-blur-lg 
    flex justify-between items-center transition duration-300 hover:scale-105
    '>
      <div>
        <h2 className='font-bold text-2xl'>{projects.title} / {projects.difficulty}</h2>
        <p className='text-gray-600 text-[15px]'>{projects.description}</p>
        
      </div>
      <div>
        <button
        onClick={()=>navigate(`/projects/${projects.title}`)}
        className=' pinkbtn bg-red-800'>Explore</button>
      </div>
    </div>
  )
}

export default ProjectCard