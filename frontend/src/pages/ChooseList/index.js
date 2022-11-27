import React, { useState } from 'react'
import Time from './Time'

import TaskList from './TaskList'
import SignInLayout from '../../components/Layout/SignInLayout'


const ChooseList = () => {
    // const handleSubmit = () => {

    // }
    const [ rangeDay, setRangeDay ] = useState([
      {
        endDate: new Date(),
        startDate: new Date(),
        key: 'selection'
      }
      ]);
    const [ chooseTime, setChooseTime ] = useState(false)
    const [ taskList, setTaskList ] = useState([])
 
  return (
    <SignInLayout>
        {chooseTime ? <TaskList setChooseTime={setChooseTime} taskList={taskList} setTaskList={setTaskList} rangeDay={rangeDay} setRangeDay={setRangeDay}/> : <Time setChooseTime={setChooseTime} setTaskList={setTaskList} rangeDay={rangeDay} setRangeDay={setRangeDay}/>}
    </SignInLayout>
  )
}
export default ChooseList