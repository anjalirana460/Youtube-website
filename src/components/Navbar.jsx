import { Link } from 'react-router-dom'
import { navLinks } from '../assets/JS-assets/Navbar'
// import { useState } from 'react'
import { ToggleLeftIcon, ToggleRightIcon } from 'lucide-react'

const Navbar = () => {
  // const [toggle, setToggle] = useState('LIGHT')
  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`flex top-0 left-0 fixed w-full z-50 justify-between items-center px-10 py-3  backdrop-blur-md border-b shadow bg-white/60 border-gray-200"
      `}>
        {/* logo */}
        <div className='text-xl font-bold text-center'>
          <a href="/">CWA</a>
          <h4 className='text-[15px] text-red-500'>Code With Anjali</h4>
        </div>
        {/* links section */}
        <div className={`hidden md:flex space-x-20 `}>
          {
            navLinks.map((link) => {
              return (
                <Link key={link.name} to={link.path} className='hover:underline' >{link.name}</Link>
              )
            })
          }
        </div>
        {/* theme mode section */}
        {/* <div>
          <button onClick={() => { toggle === "DARK" ? setToggle("LIGHT") : setToggle("DARK") }}
            className=''>
            {toggle === "LIGHT" ?
              <ToggleRightIcon className='text-black' size={30} />
              :
              <ToggleLeftIcon className='text-white' size={30} />
            }
          </button>
        </div> */}
      </nav>
    </>
  )
}

export default Navbar