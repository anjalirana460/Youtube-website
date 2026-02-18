import React from 'react'
import { lecturesData } from '../../assets/JS-assets/Lectures'
import LectureCard from '../../components/LectureCard'

const Lectures = () => {
  return (
    <div className='min-h-screen md:pt-30 p-5'>
      <h1 className='font-bold text-4xl text-center m-3'>Lecutres</h1>
      <div className='flex flex-wrap gap-5 '>
        {lecturesData.map((lecture)=>{
          return(
            <LectureCard key={lecture.id} lecture={lecture}/>
          )
        })}
      </div>
    </div>
  )
}

export default Lectures