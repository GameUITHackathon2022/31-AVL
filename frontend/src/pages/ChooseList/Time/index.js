import React, { useState } from 'react'
import { formatDate } from "../../../algorithm/formatDate"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Time = ({ setChooseTime, setTaskList }) => {
  const [ rangeDay, setRangeDay ] = useState([
  {
    endDate: new Date(),
    startDate: new Date(),
    key: 'selection'
  }
  ]);
  
  const handleNext = () => {
    setChooseTime(true)
    setTaskList(rangeDay)
  }
  return (
    <div className=' flex justify-between rounded-3xl  border-4 border-blue-100 z-0 mb-16'>
        <div className='left flex-1 bg-slate-50 xl:py-16 xl:px-20 lg:py-12 lg:px-16 md:px-4 md:py-8 z-0'>
            <h1 className='font-bold text-5xl'>Chọn thời gian</h1>
            <p className='text-2xl text-slate-500'>Thời gian bạn sẽ làm các công việc bên dưới trong vòng khoảng</p>
            
            <div className='group flex text-center relative text-xl my-4 justify-center border border-black dark:border-white rounded-lg px-4 py-2 mx-2 '
            >
              {formatDate(rangeDay[0].startDate,'/')} - {formatDate(rangeDay[0].endDate, '/')}
              <div className='group-hover:flex hidden absolute top-10 z-40 justify-center'>
                  <DateRange
                  className='daterange__container scale-up-tr absolute right-30 top-2 z-40 flex justify-center'
                  editableDateInputs={true}
                  onChange={item => setRangeDay([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={rangeDay}
                  />
              </div>
            </div>
            <div className='flex justify-end'>
              <button 
                className='bg-primary rounded-2xl py-2 px-4 text-white text-xl'
                onClick={handleNext}
              >Tiếp theo</button>
            </div>
            <div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Time