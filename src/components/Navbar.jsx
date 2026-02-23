import { Link } from 'react-router-dom';
import { navLinks } from '../assets/JS-assets/Navbar';
import { useRef } from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

const Navbar = () => {
  const navRef = useRef();

  useGSAP(()=>{
    const tl =gsap.timeline();
    tl.from(navRef.current,{
      y:-100,
      opacity:0,
      duration:1.5,
      ease:"power4.out"
    })
    tl.from(".nav-link",{
    y:-20,
    opacity:0,
    stagger:{
      each:0.15,
      from:"start"
    },
    duration:0.6,
    ease:"power3.out"
    },"-=0.4")
  },{scope:navRef});

  return (
    <header>
      {/* Desktop Navbar */}
      <nav ref={navRef} className={`flex top-0 left-0 fixed w-full h-18 z-50 justify-between items-center px-10 py-3 bg-[#38105e] backdrop-blur-md shadow-md shadow-white border-b border-[#5A189A]`}>
        {/* logo */}
        <div className='text-xl font-bold text-center'>
          <a href='/' className='text-[20px]'>Code With <span className='text-red-500'>Anjali</span></a>
        </div>
        {/* links section */}
        <div className={`hidden md:flex space-x-20 `}>
          {
            navLinks.map((link) => {
              return (
                <Link key={link.name} to={link.path} className='nav-link hover:underline font-bold text-[18px] text-white hover:text-red-500' >{link.name}</Link>
              )
            })
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar