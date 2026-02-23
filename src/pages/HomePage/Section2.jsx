import React from 'react'
import { lecturesData } from '../../assets/JS-assets/Lectures'
import { useNavigate } from 'react-router-dom'
import LectureCard from '../../components/LectureCard';

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <section className='relative min-h-screen w-full p-10'>
      <div className='min-h-[90%] w-full p-2 text-center shadow backdrop-blur-md border border-gray-200 bg-black/50 rounded-xl'>
        <div className='font-bold text-5xl mb-8 mt-8'>
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
          className='pinkbtn bg-red-800'
          >Watch Lectures</button>
        </div>
      </div>
    </section>
  )
}

export default Section2