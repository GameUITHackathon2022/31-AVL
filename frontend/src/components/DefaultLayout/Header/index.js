import React, { memo, useContext, useState } from 'react'


import UserHeader from './UserHeader'
import NotifyHeader from './NotifyHeader'
import { UserContext } from '../../GlobalStates/UserContext'


const Header = () => {
  // const [ darkmode, setDarkmode ] = useLocalStorage('darkMode', false)
  const { user } = useContext(UserContext)
	
  return (
    <div className='w-full bg-white shadow-navbar flex justify-end py-2'>
      <div className='flex justify-end py-2 px-24'>
        <div className='flex items-center'>
          <NotifyHeader user={user} />
          <UserHeader user={user}/>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)