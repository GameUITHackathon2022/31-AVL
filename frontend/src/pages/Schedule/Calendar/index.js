import React, { memo, useState, useEffect } from 'react'
import { formatDate } from '../../../algorithm/formatDate'
import { handleCalendar } from '../../../algorithm/handleCalendar'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"

const Calendar = ({ date, taskTemp, setDate }) => {
    // const { favouriteSubject, setFavouriteSubject } = useContext(UserContext)
    useEffect(() => {
        if(taskTemp) {
            for(let i = 0; i < taskTemp[0].length; i++) {
                if(taskTemp[0][i].Date == formatDate(date,"/")) {
                    handleCalendar(taskTemp[0][i].ListTask, date)
                }
            }
        }
    }, [taskTemp, date])
    // const [check, setCheck ] = useState(false)
    const tableElement = document.getElementById("myTableWeek")
    const dayArr =  ['0', '1', '2', '3', '4', '5', '6', '7']
    if(tableElement) {
        for (let i in tableElement.rows) {
            let row = tableElement.rows[i]
            let arr = ['0','1']
            //iterate through rows
            //rows would be accessed using the "row" variable assigned in the for loop
            for (let j in row.cells) {
                let col
                if(j !== 'length' && j !== 'item' && j !== 'namedItem' ) {

                    col = row.cells[j]
                    if(i !== '0' && j !=='0') {

                        col.setAttribute('rowspan', 1)
                        col.innerHTML = ""
                            
                    }
                    if(col.id) {
                      arr.push(col.id[col.id.length - 1])
                    }
                }
            }
            if(arr.length > 2) {
                var k = 0
                var checkDay = []
                // var c = ""
                for(let v = 0; v < dayArr.length; v++)
                {
                    if(dayArr[v] == arr[k])
                    {
                        checkDay.push(false);
                        k++;
                    }
                    else
                    checkDay.push(true);
                }
                
                for(let v = 0; v < checkDay.length; v++) {
                    if(checkDay[v]) {
                        const roww = tableElement.rows[i]
                        roww.insertCell(v-1).setAttribute('class', 'border-l p-2 border-gray-400')
                        const cell = roww.cells[v-1]
                        if(cell) {
                            cell.setAttribute('id', `${i}-${v}`)
                            
                        }
                    }
                }
            }
            
         }
    }
    // useEffect(() => {
    const newDate = new Date(date)
    const dateArr = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const dateChoose = dateArr[newDate.getDay()]
    // }, [date])
    const handleNext = () => {
        const newDate = new Date(date)
        var increasedDate = new Date(newDate.getTime() + (1 *86400000));

        setDate(increasedDate)
    }
    const handleBack = () => {
        const newDate = new Date(date)
        var increasedDate = new Date(newDate.getTime() - (1 *86400000));

        setDate(increasedDate)
    }
  return (
    <div className=' px-10 py-20'>
        <div>
            <button onClick={handleBack}><GrFormPreviousLink size={23} /></button>
            <button onClick={handleNext}><GrFormNextLink size={23} /></button>
        </div>
        <div className='text-xlh-full w-full flex flex-col'>  
        <table className="table-auto w-[100%] h-[500px] border-collapse dark:bg-darkmode bg-white rounded-2xl overflow-hidden shadow-2xl" id="myTableWeek">
            <thead>
                <tr className='border-b border-gray-400 py-2'>
                    <th className='border-l border-gray-400 py-2  w-[180px] bg-primary1 opacity-60' style={{ opacity: `${dateChoose == 'mon' ? '1' : '0.6'}`}}>MON</th>
                    <th className='border-l border-gray-400 py-2  w-[180px] bg-primary1 opacity-60' style={{ opacity: `${dateChoose == 'tue' ? '1' : '0.6'}`}}>TUE</th>
                    <th className='border-l border-gray-400 py-2  w-[180px] bg-primary1 opacity-60' style={{ opacity: `${dateChoose == 'wed' ? '1' : '0.6'}`}}>WED</th>
                    <th className='border-l border-gray-400 py-2  w-[180px] bg-primary1 opacity-60' style={{ opacity: `${dateChoose == 'thu' ? '1' : '0.6'}` }}>THU</th>
                    <th className='border-l border-gray-400 py-2  w-[180px] bg-primary1 opacity-60' style={{ opacity: `${dateChoose == 'fri' ? '1' : '0.6'}` }}>FRI</th>
                    <th className='border-l border-gray-400 py-2  w-[180px] bg-primary1 opacity-60' style={{ opacity: `${dateChoose == 'sat' ? '1' : '0.6'}` }}>SAT</th>
                    <th className='border-l border-gray-400 py-2  w-[180px] bg-primary1 opacity-60' style={{ opacity: `${dateChoose == 'sun' ? '1' : '0.6'}` }}>SUN</th>
                </tr>
            </thead>
            <tbody>
                <tr className='row border-b border-gray-400 h-72 text-center'>
                    <td className='border-l p-2 border-gray-400' id="am-2"></td>
                    <td className='border-l p-2 border-gray-400' id="am-3"></td>
                    <td className='border-l p-2 border-gray-400' id="am-4"></td>
                    <td className='border-l p-2 border-gray-400' id="am-5"></td>
                    <td className='border-l p-2 border-gray-400' id="am-6"></td>
                    <td className='border-l p-2 border-gray-400' id="am-7"></td>
                    <td className='border-l p-2 border-gray-400' id="am-8"></td>
                </tr>
                
            </tbody>
        </table>   
        </div>
    </div>
  )
}

export default memo(Calendar)