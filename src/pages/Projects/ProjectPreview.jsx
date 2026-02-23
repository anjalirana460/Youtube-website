import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectPreview = () => {
  const {projectId} = useParams();
  return (
    <section className='min-h-screen  bg-white/70 p-30'>
      <div className='p-5 border-5 rounded-2xl h-[80vh] w-full border-purple-900 flex flex-col items-center'>
        <h1 className='text-6xl font-bold text-black'>
        {projectId}
      </h1>
      <div>
        
      </div>
      </div>
    </section>
  )
}

export default ProjectPreview