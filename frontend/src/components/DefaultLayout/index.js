import React from 'react'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
const DefaultLayout = ({ children }) => {  
  return (
    
      <div className='flex flex-col relative w-full dark:bg-darkmode  h-screen'>
            <Header />
            <div className="w-full h-screen">
                { children }
            </div>
            <ToastContainer position="bottom-right" autoClose={1500} newestOnTop/>
        </div>
  )
}

export default DefaultLayout