import React ,{useState} from 'react'
import { Link } from 'react-scroll'
import { logo } from '../assets'
import { navLinks } from '../constants'
import {FaEquals,FaTimes} from "react-icons/fa"


const Navbar = () => {
  const [slide,setToggle] = useState(true);

  return (
    <nav className="w-full flex xs:h-[90px] md:h-[100px]">
      <img src={logo} alt="solulanka" className="xs:mt-[20px] md:mt-auto xs:py-0 md:pt-[33px] xs:ml-[20px] ss:ml-[50px] xs:h-[50px] md:h-auto" />
      <div className="w-full">
        <ul className={`z-[99] slide md:w-full md:h-[67px] md:mt-[33px] flex items-center md:relative xs:fixed md:bg-primary xs:bg-darkPrimary md:flex-row md:justify-end xs:flex-col xs:justify-center xs:w-[70%] xs:h-[100%] md:right-auto xs:bg-opacity-70 xs:backdrop-blur-sm ${slide?'xs:right-[-70%]':'xs:right-[0%]'}`}>
          {navLinks.map((nav,index)=>(
            <li className="list-none z-[9] text-secondary" key={nav.id}>
              <Link  activeClass="active" to={nav.url} spy={true} smooth={true} offset={index == 0 ? -100 : 0} duration={500} delay={0} className={`xs:mt-[30%] md:mt-auto cursor-pointer block w-[100px] py-[6px] text-center font-bold ${index === navLinks.length -1 ? 'md:mr-[50px] text-black bg-secondary rounded-[8px]' : 'md:mr-[90px] text-secondary'}`} onClick={()=>setToggle((prev)=>!prev)}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="fixed xs:right-0 md:hidden z-[99] text-white p-5 text-3xl xs:mr-[10px] ss:mr-[30px]" onClick={()=>setToggle(prev=>!prev)}>{slide?<FaEquals/>:<FaTimes/>}</button> 
    </nav>
  )
}
export default Navbar

// md:mr-[620px] 
