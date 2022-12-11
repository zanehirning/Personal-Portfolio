import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-[#ccd6f6]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-blue-500'>Zane Hirning</h1>
            <h2 className='text-4xl sm:7xl font-bold text-blue-500'>I'm a Software Developer</h2>
            <p className='text-[#ccd6f6] py-4 max-w-[700px]'>I'm a software developer that is currently pursuing a Bachelors of Science Computer Science Degree. I am interested in different aspects of building software, including A.I/Machine Learning, Data Science, Web Developement, and more!</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>
                <Link to="work" smooth={true} duration={500}>
                  My Work
                </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home