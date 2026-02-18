import React from 'react'
import { lecturesData } from '../../assets/JS-assets/Lectures'
import { useNavigate } from 'react-router-dom'
import LectureCard from '../../components/LectureCard';

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <div className='relative min-h-screen w-full px-10'>
      <div className='absolute top-0 left-0 w-full h-10 bg-white/90 blur-2xl pointer-events-none' />
      <div className='min-h-[90%] w-full p-2 text-center shadow backdrop-blur-md border border-gray-200 bg-white/20 rounded-xl'>
        <div className='font-bold text-4xl mb-8 mt-8'>
          <h1>Recent Lectures</h1>
        </div>
        <div className='flex flex-wrap gap-5 justify-evenly p-5'>
          {lecturesData.slice(0, 3).map((lecture) => {
            return (
              <LectureCard key={lecture.id} lecture={lecture} />
            )
          })}
        </div>
        <div className=''>
          <button onClick={() => navigate("/lectures")}  
          className='pinkbtn'
          >Watch Lectures</button>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-10 bg-white/90 blur-2xl pointer-events-none' />
    </div>
  )
}

export default Section2