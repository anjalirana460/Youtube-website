import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'

const Section1 = () => {

  const navigate = useNavigate();
  const heroRef = useRef();

  useGSAP(()=>{
    gsap.from("#hero-title span",{
      x:-120,
      opacity:0,
      stagger:0.05,
      duration:5,
      ease:"power4.out"
    });
  },{scope:heroRef});

  return (
    <section ref={heroRef} className='min-h-screen w-full flex justify-center items-center text-center p-5 pt-30'>
      <main>
        <h1 id='hero-title' className=' font-bold whitespace-nowrap font-serif text-[30px] md:text-6xl lg:text-[150px] mb-5'>
          {"CODE WITH ANJALI".split("").map((char,i)=>(
            <span key={i} className='inline-block'>
            {char ===" " ? "\u00A0" : char}
            </span>
          ))}
        </h1>


        <h2 className='text-[20px] md:text-3xl text-[#E0AAFF]/90 font-bold mb-5 text-left md:text-center'>Hight quality lectures, project ideas and notes to help you master <span className='text-red-600'>REAL DREAM</span> step by step.</h2>


        <div className='justify-center flex gap-5'>
          <button onClick={() => navigate("/lectures")}
            className='px-4 py-2 rounded-3xl md:pinkbtn bg-red-800'
          >Watch Lectures</button>
          <button onClick={() => navigate("/projects")}
            className= 'px-2 py-2 border rounded-3xl md:pinkbtn'
          >Explore Projects</button>
        </div>


        <div className=' flex flex-wrap gap-10 lg:gap-25 justify-center mt-25 font-bold bounce'>
          <div
            className='border border-gray-200 bg-[#240046] h-35 w-60 text-2xl rounded-[15px] flex flex-col justify-center items-center cursor-pointer hover:bg-[#9D4EDD] hover:text-white transition duration-300'>
            9+ <br />Categories
          </div>

          <div
            className='border border-gray-200 bg-[#240046] h-35 w-60 text-2xl  rounded-[15px] flex flex-col justify-center items-center cursor-pointer hover:bg-[#9D4EDD] hover:text-white transition duration-300'>
            50+ <br />Quizzes
          </div>

          <div
            className='border border-gray-200 bg-[#240046] h-35 w-60 text-2xl rounded-[15px] flex flex-col justify-center items-center cursor-pointer hover:bg-[#9D4EDD] hover:text-white transition duration-300'>
            5+ Courses
          </div>

          <div
            className='border border-gray-200 bg-[#240046] h-35 w-60 text-2xl rounded-[15px] flex flex-col justify-center items-center cursor-pointer hover:bg-[#9D4EDD] hover:text-white transition duration-300'>
            150+ <br /> Students

          </div>
        </div>
      </main>
    </section>
  )
}

export default Section1