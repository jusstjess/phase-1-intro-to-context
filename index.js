// timetstamp format "YYYY-MM-DD 1800"



function createEmployeeRecord(arr){
   const employeeRecord = {
   firstName: arr[0],
   familyName: arr[1],
   title: arr[2],
   payPerHour: arr[3],
   timeInEvents: [],
   timeOutEvents: []

   }
   return employeeRecord
}


function createEmployeeRecords(arrays){
        const myRecords = arrays.map(createEmployeeRecord)
        return myRecords
      }
      
    
function createTimeInEvent(employeeRecordObj, dateStamp){
    const updatedTimeIn =
    {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    }
    

     employeeRecordObj.timeInEvents.push(updatedTimeIn)
     return employeeRecordObj

}

function createTimeOutEvent(employeeRecordObj, dateStamp){
    const updatedTimeOut =
    {
        type: "TimeOut",
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    }
    

     employeeRecordObj.timeOutEvents.push(updatedTimeOut)
     return employeeRecordObj
}

    function hoursWorkedOnDate(employeeRecordObj, date){
        let hours = []
        employeeRecordObj.timeOutEvents.map( e => {
            if (e.date === date ){
                hours.push(e.hour)
            }
        })
        employeeRecordObj.timeInEvents.map( e => {
            if (e.date === date ){
                hours.push(e.hour)
            }
        })
        return ((hours[0]-hours[1]) * .01)
    }

function wagesEarnedOnDate(employeeRecordObj ,date){
   return (hoursWorkedOnDate(employeeRecordObj,date)) * employeeRecordObj.payPerHour

}

function allWagesFor(employeeRecordObj){
    const dates = []
    const wages = []
    employeeRecordObj.timeInEvents.map(e => dates.push(e.date))
    dates.map(date => wages.push(wagesEarnedOnDate(employeeRecordObj, date)))
    return wages.reduce((a, b) => a+b)
  }

function calculatePayroll(employeeRecordArr){
    const wages= []
   employeeRecordArr.map(record => wages.push(allWagesFor(record)))
    return wages.reduce((a, b) => a+b)
  

  }





