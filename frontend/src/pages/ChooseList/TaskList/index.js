import React from 'react'
const TaskList = ({ setChooseTime, setTaskList }) => {
    var array = []
    const handleChange = (e) => {
        if(e.target.value) {
            array.push(e.target.value)
        }
    }

    const handleSubmit = () => {
        console.log("array", array)
        setTaskList((prev) => [...prev, array])
        window.location.href = '/editor/schedule'
    }
  return (
    <div className=' flex justify-between rounded-3xl overflow-hidden border-4 border-blue-100'>
        <div className='left flex-1 bg-slate-50 xl:py-16 xl:px-20 lg:py-12 lg:px-16 md:px-4 md:py-8'>
            <h1 className='font-bold text-5xl'>Chọn công việc</h1>
            <p className='text-2xl text-slate-500'>Vui lòng chọn các công việc trong thời gian bạn chọn</p>
            
            <div className='py-3 px-7 my-2 rounded-2xl border border-slate-800 flex justify-between items-center hover:bg-slate-500'>
                <label>Đổ rác</label>
                <input type={'checkbox'} value="Đổ rác" onChange={handleChange}/>
            </div>
            
            <div className='my-2'>
                <input className='border border-slate-600 rounded-2xl' /> / ngày
            </div>

     
            <div className='py-3 px-7 rounded-2xl border border-slate-800 flex justify-between items-center hover:bg-slate-500'>
                <label>Đổ rác1</label>
                <input type={'checkbox'} value="Đổ rác1" onChange={handleChange}/>
            </div>
            <div className='my-3 flex justify-end'>
                <button className='bg-primary rounded-full h-12 w-12 items-center text-white justify-center'>+</button>
            </div>
            <div className='flex justify-between my-3'>
                <button className='bg-primary rounded-2xl py-2 px-4 text-white text-xl'
                    onClick={() => setChooseTime(false)}
                >Trở lại</button>
                <button className='bg-primary rounded-2xl py-2 px-4 text-white text-xl'
                    onClick={handleSubmit}
                >Tạo</button>
            </div>
        </div>
    </div>
  )
}

export default TaskList