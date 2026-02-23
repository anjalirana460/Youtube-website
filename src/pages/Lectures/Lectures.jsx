import React from 'react'
import { lecturesData } from '../../assets/JS-assets/Lectures'
import LectureCard from '../../components/LectureCard'

const Lectures = () => {
  return (
    <section className='min-h-screen md:pt-30 p-5'>
      <h1 className='font-bold text-5xl text-center mb-15'>Lectures</h1>
      <div className='flex flex-wrap gap-6 justify-evenly '>
        {lecturesData.map((lecture)=>{
          return(
            <LectureCard key={lecture.id} lecture={lecture}/>
          )
        })}
      </div>
    </section>
  )
}

export default Lectures