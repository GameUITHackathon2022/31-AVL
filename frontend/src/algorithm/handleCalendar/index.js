import ReactDOMServer from "react-dom/server";
import Activity from "../../pages/Schedule/Calendar/Activity";
export const handleCalendar = (activity, date) => {

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
    

    if(activity?.length > 0) {
        activity?.map((value) => {  
           
            const newDate = new Date(date)
            const dateArr = ['8', '2', '3', '4', '5', '6', '7']
            const dateChoose = dateArr[newDate.getDay()]
            let subjectElement = document.getElementById(`am-${dateChoose}`)
            

            if(subjectElement) {
                subjectElement.innerHTML += ReactDOMServer.renderToString(<Activity value={value} />)
            }
        })
    }
}