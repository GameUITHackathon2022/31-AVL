import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { formatDate, formatDateRev } from "../../../algorithm/formatDate"
import { UserContext } from '../../../components/GlobalStates/UserContext'
import { toast } from 'react-toastify';
const Sidebar = ({ date, setDate, taskTemp,setTaskTemp }) => {
  const { user } = useContext(UserContext)
  const [ score, setScore ] = useState(0)
  const handleChange = (e) => {
    if(e.target.checked) {
      setScore(pre => pre += 10)
    } else {
      setScore(pre => pre -= 10)
    }
  }
  const handleSubmit = () => {
  //   const config = {
  //     method: 'PUT',
  //     url: 'users/scores',
  //     params: { email: user.email },
  //     data: JSON.parse(score),
  //     headers: {
  //         'Content-Type': 'application/json; charset=utf-8',
  //         // Authorization: `Bearer ${cookies.token}`,
  //   }
    
  // }
  //   const { data } = await axios(config) 
  
    toast.success(`Bạn dã hoàn thành nhiệm vụ. Bạn nhận ${score} điểm/ngày`)
  }

  useEffect(() => {
    const getActivity = async () => {
      const config = {
        method: 'GET',
        url: 'users/tasks',
        params: { email:  user.email },
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          // Authorization: `Bearer ${cookies.token}`,
        }
      }
      const { data } = await axios(config)
      // setTaskArray(data)
      setTaskTemp(data)
      // console.log(data, 'hdajhdkahdja');
    } 
    getActivity()
  }, [])
  // console.log("ss", taskTemp[1].date == formatDate(date,"-"))
  
  return (
    <div className='absolute top-0 w-xl h-screen bg-primary1 px-4 py-6'>
        <h1 className='text-5xl font-bold text-white mb-6 mt-4'>TodoList</h1>
        <div>
        <div className='flex justify-between my-6'>
          <label><b>Ngày</b></label>
          <input type="date" value={formatDateRev(date, "-")} className="rounded-lg" onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className='my-2'><b>Công việc</b></div>
        <div className='rounded-2xl bg-green-200 p-4'>
          {taskTemp && taskTemp[0]?.map((value) => (
            value.Date == formatDate(date,"/") && 
            (
              <div>
                {value.ListTask.map((val) => (
                  <div className='flex justify-between items-center'>
                    <div className='my-2'>
                      {val.name}
                      </div>
                      <input type="checkbox" onChange={handleChange}/>
                  </div>
                ))  
                }
              </div>
            )
          ))}
        </div>
        <div className='my-4'>
            <b>Score/ngày:</b> {score}
        </div>
        <div className=''>
            <button className='bg-green-200 px-4 py-2 rounded-2xl'
                onClick={handleSubmit}
            >Hoàn thành</button>
        </div>
        </div>

    </div>
  )
}

export default Sidebar