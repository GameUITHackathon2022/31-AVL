import React from 'react'
let colors = ["#95e4cf", "#84d9ba", "#3d7363", "#b8d9d0"]
const Activity = ({ value }) => {
let random = Math.floor(Math.random() * 4)
  let color = colors[random]
  return (
    <div 
    //   key={value._id}
    //   id={value._id}
    //   onClick={() => handleDeleteSubject(value, groupSubjects)}
      className={`text-black relative py-3 px-1 my-1 w-full h-20 overflow-hidden rounded-xl text-center`}
      style={{ backgroundColor: `${color}`}} 
    >

      <div className='flex flex-col justify-between'>
        <div className="mb-5">
          {value.icon &&
            <img src={value.icon} className='w-8 h-8 mr-4' />
            }
          <h3 className={"text-xl font-semibold"}>{value?.name}</h3>
       </div>
      </div>
      
    </div>
  )
}

export default Activity