export const handleSort = (start, end, task) => {
    const START = "15/11/2022"
const END = '29/11/2022'
const table = []

/*----------------------------------------*/
/*-generate global var---------------------------*/
var minIndex = 9999
var maxIndex = 0
var minStartDate = ''
var maxEndDate = ''
/*----------------------------------------*/

/*----------------------------------------*/
function changeFormat(s) {
    // yyyy-dd-mm
    // 02/11/2022
    s = s.split('/')
    let a = s[0]
    s[0] = s[2]
    s[2] = a
    s = s.toString()
    return s
}


function incrementDate(dateInput,increment) {
    var dateFormatTotime = new Date(dateInput);
    var increasedDate = new Date(dateFormatTotime.getTime() +(increment *86400000));
    return increasedDate;
}

function format(a,b,c) {
    return [a,b,c].join('/')
}


function duration(start1, end1) {
    let list = []
    let obj = {}
    obj['ListTask'] = []
    start1 = changeFormat(start1)
    end1 = changeFormat(end1)
    start1 = new Date(start1.replace(',', '-').replace(',', '-'));
    end1 = new Date(end1.replace(',', '-').replace(',', '-'));
    start1 = incrementDate(start1, -1)
    while (start1 < end1) {
        start1 = incrementDate(start1, 1)
        let temp = start1.toString()
        let m = 0
        switch (temp.split(' ')[1]) {
            case 'Jan':
                m = 1
                break
            case 'Feb':
                m = 2
                break
            case 'Mar':
                m = 3
                break
            case 'Apr':
                m = 4
                break
            case 'May':
                m = 5
                break
            case 'Jun':
                m = 6
                break
            case 'Jul':
                m = 7
                break
            case 'Aug':
                m = 8
                break
            case 'Sep':
                m = 9
                break
            case 'Oct':
                m = 10
                break
            case 'Nov':
                m = 11
                break
            case 'Dec':
                m = 12
                break
        }

        let d = parseInt(temp.split(' ')[2])
        let y = parseInt(temp.split(' ')[3])
        temp = format(d,m,y)
        obj['Date'] = temp
        let obj2 = JSON.stringify(obj)
        obj2 = JSON.parse(obj2)
        list.push(obj2)
    }
    return list
}

/*----------------------------------------*/

function getNumdayFromYear(year)
{
    return (year - 2020) * 365 + parseInt((year - 2020) / 4)
}

function getNumdayFromMonth(month)
{
    let numDay = 0
    for(let i = 1; i < month; i++)
    {
        switch(i)
        {
            case 1:
                numDay += 31
                break
            case 3:
                numDay += 31
                break
            case 5:
                numDay += 31
                break
            case 7:
                numDay += 31
                break
            case 8:
                numDay += 31
                break
            case 10:
                numDay += 31
                break
            case 12:
                numDay += 31
                break
            case 4:
                numDay += 30
                break
            case 6:
                numDay += 30
                break
            case 9:
                numDay += 30
                break
            case 11:
                numDay += 30
                break
            case 2:
                numDay += 28
                break
        }
    }

    return numDay
}

function getNumday(day)
{
    return day
}

function ConvertDateIndex(date)
{
    // console.log(typeof date)
    let time = date.split('/')
    let day = parseInt(time[0])
    let month = parseInt(time[1])
    let year = parseInt(time[2])
    //console.log(day, month, year)
    let leap = (year % 4 == 0) ? 1 : 0
    return  getNumday(day) + getNumdayFromMonth(month) + getNumdayFromYear(year) + leap
}

function generateAttribute(sample)
{
    for(let i=0;i<sample.length;++i)
    {
        sample[i]['start'] = start
        sample[i]['end'] = end
        sample[i]['startIndex'] = ConvertDateIndex(sample[i]['start'])        
        sample[i]['endIndex'] = ConvertDateIndex(sample[i]['end'])
        sample[i]['numDate'] = sample[i]['endIndex'] - sample[i]['startIndex']
        sample[i]['dateOnTask'] = sample[i]['goal']/sample[i]['numDate']

        if(sample[i]['startIndex'] < minIndex)
        {
            minIndex = sample[i]['startIndex']
            minStartDate = sample[i]['start']
        }
        if(sample[i]['endIndex'] > maxIndex)
        {
            maxIndex = sample[i]['endIndex']
            maxEndDate = sample[i]['end']
        }
    }
}

/*----------------------------------------*/
/*----------------------------------------*/
const mergeSort = arr => {
    // *** Chúng ta sẽ không chia arr ra thành các mảng con nữa nếu arr chỉ có 1 phần tử
    if(arr.length <= 1) return arr;
    
    // *** vì splice sẽ thay đổi giá trị của arr nên mình copy arr để giữ nguyên giá trị ban đầu của nó
    const right = [...arr];
    
    // *** chia đôi mảng ra thành 2 mảng con
    const middlePoint = arr.length / 2;
    const left = right.splice(0, middlePoint);

    // *** tiếp tục chia các mảng con ra thành các mảng con
    return mergeUnsortedArrs(mergeSort(left), mergeSort(right));
}

const mergeUnsortedArrs = (left, right) => {
    // *** các phần tử cần được sắp xếp lại sẽ được chứa ở đây
    const sortedItems = [];
    
    /*
       *** Chúng ta sẽ dùng method shift của Array để loại bỏ các phần tử của 2 mảng left và right
           trong từng vòng lặp. Nên, nếu 1 trong 2 mảng left và right là mảng trống => ta khg thể
           và cũng khg cần phải so sánh thêm nữa,
    */
    while(left.length && right.length) {
        if(left[0]['dateOnTask'] <= right[0]){
            sortedItems.push(left.shift())
        } else {
            sortedItems.push(right.shift())
        }
    }
    
    // *** kết hợp (merge) các cặp mảng con đã được sắp xếp lại với nhau thành một mảng mới,
    return [...sortedItems, ...left, ...right];
}
/*----------------------------------------*/
/*----------------------------------------*/

function AVG(table, task)
{
    let tempStartIndex = task['startIndex'] - minIndex
    let tempEndIndex = task['endIndex'] - minIndex
    let sum = 0
    for(let i = tempStartIndex; i <= tempEndIndex; i++)
    {
        sum += table[i]['ListTask'].length
    }

    return parseInt(sum / task['numDate'])
}

function minTaskDateIndex(table, task)
{
    let tempStartIndex = task['startIndex'] - minIndex
    let tempEndIndex = task['endIndex'] - minIndex
    let min = table[tempStartIndex]['ListTask'].length

    for(let i = tempStartIndex + 1; i <= tempEndIndex; i++)
    {
        if(min > table[i]['ListTask'].length)
            min = table[i]['ListTask'].length
    }

    return min
}

function addTask(table, sample)
{
    for(let i = 0; i < sample.length; i++)
    {
        let tempStartIndex = sample[i]['startIndex'] - minIndex
        let tempEndIndex = sample[i]['endIndex'] - minIndex
        let count = 0
        let countMax = sample[i]['goal']
        let avg = AVG(table, sample[i])
        let step = parseInt(sample[i]['dateOnTask'])
        if(step == 0)
            step += 1
        let minSingleIndex = minTaskDateIndex(table, sample[i])

        for(let j = minSingleIndex; count != countMax; j+= step)
        {
            if(table[j]['ListTask'].length < avg)
            {
                table[j]['ListTask'].push(sample[i])
                count += 1
            }
            if(j == tempEndIndex)
            {
                if(step <= 1)
                {
                    step = parseInt(sample[i]['dateOnTask'])
                    if(step == 0)
                        step += 1
                    avg += 1
                }
                else
                    step -= 1
                j = tempStartIndex
            }
                
        }
    }
}

function implement(rootData, table)
{
    generateAttribute(rootData)
    rootData = mergeSort(rootData)
    table = duration(minStartDate, maxEndDate)
    addTask(table, rootData)
    return table
}


    return implement(task, [])
}
