import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Resume from '../assets/resume/Zane_Hirning_Resume.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <Link className='cursor-pointer' to="home" smooth={true} duration={500}>
            <img src={Logo} alt="logo" style={{width: '60px'}}/> 
                </Link>
            
        </div>

        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li className='hover:text-blue-500'>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
                </li>
                <li className='hover:text-blue-500'><Link to="about" smooth={true} duration={500}>
                  About
                </Link></li>
                <li className='hover:text-blue-500'><Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link></li>
                <li className='hover:text-blue-500'><Link to="work" smooth={true} duration={500}>
                  Work
                </Link></li>
                <li className='hover:text-blue-500'><Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link></li>
            </ul>
        </div>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                  Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                  About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                  Work
                </Link></li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
            </li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a href="https://www.linkedin.com/in/zane-hirning-a5730b232" className='flex justify-between items-center w-full text-gray-300'>LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a href="https://github.com/zanehirning" className='flex justify-between items-center w-full text-gray-300'>GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a href="mailto:zanehirning41@gmail.com" className='flex justify-between items-center w-full text-gray-300'>Email Me<HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a href="https://drive.google.com/file/d/19BMtqT9eaDJbd9H8Qr_Qb5uKDKyUX8wh/view" className='flex justify-between items-center w-full text-gray-300'>Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar