import React from 'react'
import {Link } from 'react-router-dom'
import bg from "../../assets/bg.jpg"
const Homepage = () => {
  return (
    <div className='flex items-center xl:pl-40 lg:20 md:10 w-full h-screen bg-primary'>
        <div className='top-5 right-5 absolute z-10'>
          <Link to="/login" className='mx-4 text-white font-medium'>Log in</Link>
          <Link to="/signup" className='bg-gradient-to-t from-orange-500 to-orange-200 py-2 px-8 rounded-2xl text-white text-xl font-medium'>Register</Link>
        </div>
        <div className='z-10 mb-72'>
          <div className='mb-5'>
            <h1 className='scale-up-ver-bottom text-8xl text-shadow text-white font-black tracking-wider'>HABITAT WITH HABITS</h1>
            <p className='text-white mt-2 mb-10'>Boost environmental protection habits</p>
          </div>
            <Link to="/editor/" className='hover:shadow-buttonBoxShadow bg-gradient-to-t from-orange-500 to-orange-200 py-3 px-10 rounded-3xl text-white text-3xl font-semibold'>
            Get start</Link>
        </div> 
        <div className='h-screen absolute top-0 right-0 bottom-0 left-0 z-0'>
          <img className='h-full w-full' src={bg} />
        </div>
    </div>
  )
}

export default Homepage