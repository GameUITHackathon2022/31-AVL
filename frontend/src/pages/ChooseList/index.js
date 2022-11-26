import React, { useState } from 'react'
import Time from './Time'

import TaskList from './TaskList'
import SignInLayout from '../../components/Layout/SignInLayout'


const ChooseList = () => {
    // const handleSubmit = () => {

    // }
    const [ chooseTime, setChooseTime ] = useState(false)
    const [ taskList, setTaskList ] = useState([])
    console.log('====================================');
    console.log(taskList);
    console.log('====================================');
  return (
    <SignInLayout>
        {chooseTime ? <TaskList setChooseTime={setChooseTime} setTaskList={setTaskList}/> : <Time setChooseTime={setChooseTime} setTaskList={setTaskList}/>}
    </SignInLayout>
  )
}
export default ChooseList