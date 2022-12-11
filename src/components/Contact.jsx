import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/510d2276-9f55-4cc6-bb09-d4a373279678" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or email me - zanehirning41@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="10"></textarea>
            <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center'>Contact Me!</button>
        </form>
    </div>
  )
}

export default Contact