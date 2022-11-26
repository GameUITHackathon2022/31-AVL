import React from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import Calendar from './Calendar'
import Sidebar from './Sidebar'

const Schedule = () => {
  return (
    <DefaultLayout>
    <div className='flex h-full'>
      <div className='w-xl bg-slate-300'>
        <Sidebar />
      </div>
      <div className='flex-1 w-[500px]'>
        <Calendar />
      </div>
    </div>

    </DefaultLayout>
  )
}

export default Schedule