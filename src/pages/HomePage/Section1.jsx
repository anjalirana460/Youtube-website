import React from 'react'
import { useNavigate } from 'react-router-dom'

const Section1 = () => {
  const navigate=useNavigate();
  return (
    <div className='h-screen w-full flex justify-center items-center md:text-center p-5'>
      <div>
        <h1 className='font-bold font-serif text-[40px] md:text-6xl lg:text-9xl mb-5'>
          <span className='hoverpink'>C</span><span className='hoverpink'>O</span><span className='hoverpink'>D</span><span className='hoverpink'>E </span>
          <span className='hoverpink'> W</span><span className='hoverpink'>I</span><span className='hoverpink'>T</span><span className='hoverpink'>H </span>
          <span className='hoverpink'> A</span><span className='hoverpink'>N</span><span className='hoverpink'>J</span><span className='hoverpink'>A</span><span className='hoverpink'>L</span><span className='hoverpink'>I</span></h1>
        <h2 className='text-[20px] md:text-2xl text-gray-500 font-bold mb-5 '>Hight quality lectures, project ideas and notes to help you master developmet step by step.</h2>
        <div className='justify-center flex gap-5'>
          <button onClick={()=>navigate("/lectures")}
            className='pinkbtn'
            >Watch Lectures</button>
          <button onClick={()=>navigate("/projects")}
            className='pinkbtn'
            >Explore Projects</button>
        </div>
      </div>
    </div>
  )
}

export default Section1