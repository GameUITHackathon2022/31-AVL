import React, { memo, useState, useEffect } from 'react'


const Calendar = () => {
    // const { favouriteSubject, setFavouriteSubject } = useContext(UserContext)

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
    
  return (
    <div className='text-xl px-10 py-20 h-full w-full flex'>  
        <table className="table-auto w-[100%] h-[500px] border-collapse dark:bg-darkmode bg-white rounded-2xl overflow-hidden shadow-2xl" id="myTableWeek">
            <thead>
                <tr className='border-b border-gray-400 bg-blue-400 dark:bg-blue-600 py-2'>
                <th className='border-l border-gray-400 py-2'>MON</th>
                <th className='border-l border-gray-400 py-2'>TUE</th>
                <th className='border-l border-gray-400 py-2'>WED</th>
                <th className='border-l border-gray-400 py-2'>THU</th>
                <th className='border-l border-gray-400 py-2'>FRI</th>
                <th className='border-l border-gray-400 py-2'>SAT</th>
                <th className='border-l border-gray-400 py-2'>SUN</th>
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
  )
}

export default memo(Calendar)