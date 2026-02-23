import React from 'react'
import { projectIdeas } from '../../assets/JS-assets/Projects'
import ProjectCard from '../../components/ProjectCard'

const Projects = () => {
  return (
    <section className='pt-30 px-10'>
      <h1 className='font-bold text-4xl text-center'>All Projects</h1>
      <div className='md:px-10  '>
        {projectIdeas.map((projects)=>{
          return(
            <ProjectCard key={projects.id} projects={projects} />
          )
        })}
      </div>
    </section>
  )
}

export default Projects