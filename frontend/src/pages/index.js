import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScheduleWeek from './ScheduleWeek'
import Schedule from './Schedule'
import ChooseList from './ChooseList'


const Pages = () => {
    // <Route path='manage' element={<Manage />} />
    // <Route path='storage' element={<Storage />} />
    
  return (
    <>
      <Routes>
        <Route index element={<ChooseList />} />
        <Route path='schedule' element={<Schedule />} />
      </Routes>
    </>
  )
}

export default Pages