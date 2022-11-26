import React from 'react'
import Header from './Header'

const DefaultLayout = ({ children }) => {  
  return (
    
      <div className='flex flex-col relative w-full dark:bg-darkmode  h-screen'>
            <Header />
            <div className="w-full h-screen">
                { children }
            </div>
        </div>
  )
}

export default DefaultLayout