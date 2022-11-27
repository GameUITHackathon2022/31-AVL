import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import Modals from './Modal'
import BgSignIn from "../../../assets/BgSignIn.png"
import { handleSort } from '../../../algorithm/handleSort'
import { formatDate } from '../../../algorithm/formatDate'
import { UserContext } from '../../../components/GlobalStates/UserContext'
const TaskList = ({ rangeDay, setChooseTime, setTaskList, taskList }) => {
    const [ taskArray, sertTaskArray ] = useState([])
    const [ modal, setModal ] = useState(false)
    const [ task, setTask ] = useState([])
    const [ check, setCheck ] = useState([])
    const { user } = useContext(UserContext)
    // const check = []
    var array = []
    const handleChange = (e) => {
        if(e.target.checked) {
            array.push(e.target.value)
            setCheck((prev) => [...prev, { status: true, id: e.target.value}])
        } else {
            setCheck((prev) => [...prev, { status: false, id: ""}])
        }
    }
    const handleChangeGoal = (e) => {
        setTask((prev) => [...prev, { name: e.target.id, goal: e.target.value}])
    }
    const handleSubmit = async () => {
        setTaskList((prev) => [...prev, array])
        const dataTask = handleSort(formatDate(rangeDay[0].startDate, "/"), formatDate(rangeDay[0].endDate, "/"), task)
        const config  = {
            method: 'PUT',
            url: 'users/tasks',
            data: dataTask,
            params: { email:  user.email },
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              // Authorization: `Bearer ${cookies.token}`,
            }
        }
        const { data } = await axios(config)
        window.location.href = '/editor/schedule'
    }
    const addTask = () => {
        setModal(true)
    }    
    useEffect(() => {
        const getActivity = async () => {
          const config = {
            method: 'GET',
            url: 'tasks',
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              // Authorization: `Bearer ${cookies.token}`,
            }
      
          }
          const { data } = await axios(config)
          sertTaskArray(data)
        } 
        getActivity()
      }, [taskList])
  return (
    <div className=' flex justify-between rounded-3xl overflow-hidden border-4 border-blue-100'>
        <div className='left flex-1 bg-slate-50 xl:py-10 xl:px-20 lg:py-12 lg:px-16 md:px-4 md:py-8'>
            <h1 className='font-bold text-5xl'>Chọn công việc</h1>
            <p className='text-2xl text-slate-500'>Vui lòng chọn các công việc trong thời gian bạn chọn</p>
            
            <div className='h-[400px] my-3 overflow-scroll'>
                {taskArray.map((value) => (
                    <div className='flex flex-col' key={value._id}>
                            <label htmlFor={value.name} className='py-3 px-7 my-1 rounded-2xl border border-slate-800 flex justify-between items-center hover:bg-green-200'>
                                <span className='flex items-center'>
                                    {value.icon &&
                                    <img src={value.icon} className='w-8 h-8 mr-4' />
                                    }
                                    {value.name}
                                </span>
                            <input type={'checkbox'} value={value.name} id={value.name} onChange={handleChange}/>
                            </label>
                        {check.map((val) => 
                            val.status == true && val.id == value.name ? (<div><input className='border my-2 rounded-2xl mr-2 px-3 border-slate-800' id={value.name} onChange={handleChangeGoal} />/ ngày</div>) :
                            ''
                        )}
                    </div>
                ))}
            </div>
            <div className='mb-3 flex justify-end'>
                <button className='bg-primary rounded-full px-6 py-1 flex items-center text-white justify-center'
                        onClick={addTask}
                ><b className='mr-1'>+</b> Add</button>
                {modal && <Modals modal={modal} setModal={setModal} setTaskList={setTaskList} setTask={setTask} />}
            </div>
            <div className='flex justify-between my-3'>
                <button className='bg-primary rounded-2xl py-2 px-6 text-white text-2xl'
                    onClick={() => setChooseTime(false)}
                >Trở lại</button>
                <button className='bg-primary rounded-2xl py-2 px-4 text-white text-2xl'
                    onClick={handleSubmit}
                >Tạo</button>
            </div>
        </div>
        <div className='right bg-primary-color lg:object-cover lg:block hidden'>
                <img src={BgSignIn} />
            </div>
    </div>
  )
}

export default TaskList