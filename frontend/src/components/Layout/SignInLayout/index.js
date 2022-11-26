import React from 'react'


const SignInLayout = ({ children }) => {
  
  return (
    <div className='bg-homepage flex fixed top-0 bottom-0 left-0 right-0 -z-10'>
      <div className='m-auto'> 
        {children}
      </div>      
    </div>
  )
}

export default SignInLayout