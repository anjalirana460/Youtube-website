import { useRef } from 'react'
import { gsap }from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);


const Section3 = () => {

const sectionRef = useRef(null);
const textRef = useRef(null);

useGSAP(()=>{

  gsap.to((textRef.current),{
    x:-5000,
    ease:"none",
    scrollTrigger:{
      trigger:sectionRef.current,
      start:"top top",
      end:"+=5000",
      scrub:2,
      pin:true,
      anticipatePin:1,
      invalidateOnRefresh:true
    }
  });
},[]);

  return (
    // Horizontal scrolling Section 
    <section ref={sectionRef}
     className='hidden overflow-x-hidden relative lg:flex items-center h-screen'>
      <h1 ref={textRef} className='text-[30vw] font-bold whitespace-nowrap '>
        CODE WITH ANJALI
      </h1>
    </section>
  )
}

export default Section3