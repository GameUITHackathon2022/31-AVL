import React, { useState } from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Calendar from './Calendar'
import Sidebar from './Sidebar'

const Schedule = () => {
  const [ date, setDate ] = useState(new Date())
  const [ taskTemp, setTaskTemp ] = useState(null)
  return (
    <DefaultLayout>
    <div className='flex h-full'>
      <div className='w-xl bg-slate-300'>
        <Sidebar date={date} setDate={setDate} taskTemp={taskTemp} setTaskTemp={setTaskTemp}/>
      </div>
      <div className='flex-1 w-[500px]'>
        <Calendar date={date} setDate={setDate} taskTemp={taskTemp} setTaskTemp={setTaskTemp}/>
      </div>
    </div>

    </DefaultLayout>
  )
}

export default Schedule