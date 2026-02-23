import { CircleCheck, MoveRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Section3 = () => {
  const navigate=useNavigate();
  return (
    <section className='p-10 min-h-screen text-left'>
      <div className='flex flex-col md:flex-row min-h-[50vh] w-full p-5 border border-gray-200 rounded-[15px] justify-evenly items-center bg-[#3C096C]'>
        {/* divition 1  */}
        <div className='md:flex-1/2 h-full '>
          <img src="/project.png" alt="project" className='h-full rounded-full md:pl-25 pb-8' />
        </div>

        {/* division 2  */}
        <div className='md:flex-1/2 h-full'>
          <h1 className='font-bold text-6xl'>Join Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda autem, maiores perferendis porro doloribus nisi vel? In amet quod impedit a obcaecati officiis optio. Rerum debitis quidem blanditiis dolore in.
          </p>
          <div className='flex flex-wrap gap-5 mb-8'>
            <div>
              <h4 className='flex gap-3 my-5'><CircleCheck /><span>Competive salaries</span></h4>
              <h4 className='flex gap-3 mb-5'><CircleCheck /><span>Gowth Have No starting point</span></h4>
              <h4 className='flex gap-3 mb-5'><CircleCheck /><span>Great projects</span></h4>
            </div>
            <div>
              <h4 className='flex gap-3 my-5'><CircleCheck /><span>Benifits are waiting for you</span></h4>
              <h4 className='flex gap-3 mb-5'><CircleCheck /><span>Best Environment</span></h4>
              <h4 className='flex gap-3 mb-5'><CircleCheck /><span>Great projects</span></h4>
            </div>
          </div>
          <div>
            <button onClick={()=>navigate("/projects")} className='flex cursor-pointer font-bold gap-5 hover:scale-105 tranistion duration-300'
            
            >
              <span>Explore Projects </span><MoveRight />
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Section3