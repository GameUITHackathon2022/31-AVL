import React, { useContext, useState } from 'react'
import Modal from 'react-modal';
import { UserContext } from '../../../../components/GlobalStates/UserContext';

import axios from 'axios';
import { constants } from '../../../../constants';

const Modals = ({ modal, setModal, setTaskList, setTask }) => {
  const { user } = useContext(UserContext)
  const [ activities, setAcitivities ] = useState({
    name: '',
    goal: ''

  })
  const handleChange = (e) => {
    setAcitivities((prev) =>({...prev, [e.target.id] : e.target.value}))
  }
  const handleSubmit = async () => {
    
    const config  = {
      method: 'PUT',
      url: 'tasks',
      data: activities,
      params: { email:  user.email },
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // Authorization: `Bearer ${cookies.token}`,
      }
    }
    const { data } = await axios(config)
    setTaskList((prev) => [...prev, activities])
    setTask((prev) => [...prev, { name: activities.name, goal: activities.goal}])
    setModal(false)
  }
  return (
    <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={constants.customStyles}
        // contentLabel="Example Modal"
      >
      <div className='mx-2'>
        <h1 className='text-3xl font-bold'>Add task</h1>
        <input id="name" onChange={handleChange} className="border rounded-3xl px-3 border-slate-800 my-3" />
        <input id="goal" onChange={handleChange} className="border border-slate-800 rounded-3xl px-3"/> / ngày
      </div>
      <div className='flex justify-center my-2'>
        <button onClick={handleSubmit} className="bg-primary rounded-2xl py-2 px-8 text-white text-xl">Add</button>
      </div>
      </Modal>
  )
}

export default Modals